# `ldapSecretBackend` Submodule <a name="`ldapSecretBackend` Submodule" id="@cdktf/provider-vault.ldapSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackend <a name="LdapSecretBackend" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend vault_ldap_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend.LdapSecretBackend;

LdapSecretBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .binddn(java.lang.String)
    .bindpass(java.lang.String)
//  .allowedManagedKeys(java.util.List<java.lang.String>)
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .certificate(java.lang.String)
//  .clientTlsCert(java.lang.String)
//  .clientTlsKey(java.lang.String)
//  .connectionTimeout(java.lang.Number)
//  .credentialType(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .delegatedAuthAccessors(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .disableAutomatedRotation(java.lang.Boolean|IResolvable)
//  .disableRemount(java.lang.Boolean|IResolvable)
//  .externalEntropyAccess(java.lang.Boolean|IResolvable)
//  .forceNoCache(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .insecureTls(java.lang.Boolean|IResolvable)
//  .listingVisibility(java.lang.String)
//  .local(java.lang.Boolean|IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .passwordPolicy(java.lang.String)
//  .path(java.lang.String)
//  .pluginVersion(java.lang.String)
//  .requestTimeout(java.lang.Number)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationWindow(java.lang.Number)
//  .schema(java.lang.String)
//  .sealWrap(java.lang.Boolean|IResolvable)
//  .skipStaticRoleImportRotation(java.lang.Boolean|IResolvable)
//  .starttls(java.lang.Boolean|IResolvable)
//  .upndomain(java.lang.String)
//  .url(java.lang.String)
//  .userattr(java.lang.String)
//  .userdn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.binddn">binddn</a></code> | <code>java.lang.String</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.bindpass">bindpass</a></code> | <code>java.lang.String</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.clientTlsCert">clientTlsCert</a></code> | <code>java.lang.String</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.clientTlsKey">clientTlsKey</a></code> | <code>java.lang.String</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.credentialType">credentialType</a></code> | <code>java.lang.String</code> | The type of credential to manage. Options include: 'password', 'phrase'. Defaults to 'password'. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.skipStaticRoleImportRotation">skipStaticRoleImportRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Skip rotation of static role secrets on import. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.starttls">starttls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.upndomain">upndomain</a></code> | <code>java.lang.String</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.userattr">userattr</a></code> | <code>java.lang.String</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.userdn">userdn</a></code> | <code>java.lang.String</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.binddn"></a>

- *Type:* java.lang.String

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#binddn LdapSecretBackend#binddn}

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.bindpass"></a>

- *Type:* java.lang.String

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#bindpass LdapSecretBackend#bindpass}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* java.util.List<java.lang.String>

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#allowed_managed_keys LdapSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.allowedResponseHeaders"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#allowed_response_headers LdapSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#audit_non_hmac_request_keys LdapSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#audit_non_hmac_response_keys LdapSecretBackend#audit_non_hmac_response_keys}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#certificate LdapSecretBackend#certificate}

---

##### `clientTlsCert`<sup>Optional</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.clientTlsCert"></a>

- *Type:* java.lang.String

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#client_tls_cert LdapSecretBackend#client_tls_cert}

---

##### `clientTlsKey`<sup>Optional</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.clientTlsKey"></a>

- *Type:* java.lang.String

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#client_tls_key LdapSecretBackend#client_tls_key}

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.connectionTimeout"></a>

- *Type:* java.lang.Number

Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#connection_timeout LdapSecretBackend#connection_timeout}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.credentialType"></a>

- *Type:* java.lang.String

The type of credential to manage. Options include: 'password', 'phrase'. Defaults to 'password'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#credential_type LdapSecretBackend#credential_type}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#default_lease_ttl_seconds LdapSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.delegatedAuthAccessors"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#delegated_auth_accessors LdapSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#description LdapSecretBackend#description}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.disableAutomatedRotation"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#disable_automated_rotation LdapSecretBackend#disable_automated_rotation}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#disable_remount LdapSecretBackend#disable_remount}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#external_entropy_access LdapSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.forceNoCache"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#force_no_cache LdapSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* java.lang.String

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#identity_token_key LdapSecretBackend#identity_token_key}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.insecureTls"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#insecure_tls LdapSecretBackend#insecure_tls}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.listingVisibility"></a>

- *Type:* java.lang.String

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#listing_visibility LdapSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#local LdapSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#max_lease_ttl_seconds LdapSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#namespace LdapSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.options"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#options LdapSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.passthroughRequestHeaders"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#passthrough_request_headers LdapSecretBackend#passthrough_request_headers}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.passwordPolicy"></a>

- *Type:* java.lang.String

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#password_policy LdapSecretBackend#password_policy}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#path LdapSecretBackend#path}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.pluginVersion"></a>

- *Type:* java.lang.String

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#plugin_version LdapSecretBackend#plugin_version}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.requestTimeout"></a>

- *Type:* java.lang.Number

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#request_timeout LdapSecretBackend#request_timeout}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.rotationPeriod"></a>

- *Type:* java.lang.Number

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#rotation_period LdapSecretBackend#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.rotationSchedule"></a>

- *Type:* java.lang.String

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#rotation_schedule LdapSecretBackend#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.rotationWindow"></a>

- *Type:* java.lang.Number

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#rotation_window LdapSecretBackend#rotation_window}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#schema LdapSecretBackend#schema}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.sealWrap"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#seal_wrap LdapSecretBackend#seal_wrap}

---

##### `skipStaticRoleImportRotation`<sup>Optional</sup> <a name="skipStaticRoleImportRotation" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.skipStaticRoleImportRotation"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Skip rotation of static role secrets on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#skip_static_role_import_rotation LdapSecretBackend#skip_static_role_import_rotation}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.starttls"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#starttls LdapSecretBackend#starttls}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.upndomain"></a>

- *Type:* java.lang.String

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#upndomain LdapSecretBackend#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.url"></a>

- *Type:* java.lang.String

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#url LdapSecretBackend#url}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.userattr"></a>

- *Type:* java.lang.String

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#userattr LdapSecretBackend#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.userdn"></a>

- *Type:* java.lang.String

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#userdn LdapSecretBackend#userdn}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedManagedKeys">resetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsCert">resetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsKey">resetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetConnectionTimeout">resetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDelegatedAuthAccessors">resetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableAutomatedRotation">resetDisableAutomatedRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetExternalEntropyAccess">resetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetForceNoCache">resetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetIdentityTokenKey">resetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPluginVersion">resetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationSchedule">resetRotationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationWindow">resetRotationWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSealWrap">resetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSkipStaticRoleImportRotation">resetSkipStaticRoleImportRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetStarttls">resetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUpndomain">resetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserattr">resetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserdn">resetUserdn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedManagedKeys` <a name="resetAllowedManagedKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedManagedKeys"></a>

```java
public void resetAllowedManagedKeys()
```

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedResponseHeaders"></a>

```java
public void resetAllowedResponseHeaders()
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacRequestKeys"></a>

```java
public void resetAuditNonHmacRequestKeys()
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacResponseKeys"></a>

```java
public void resetAuditNonHmacResponseKeys()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetClientTlsCert` <a name="resetClientTlsCert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsCert"></a>

```java
public void resetClientTlsCert()
```

##### `resetClientTlsKey` <a name="resetClientTlsKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsKey"></a>

```java
public void resetClientTlsKey()
```

##### `resetConnectionTimeout` <a name="resetConnectionTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetConnectionTimeout"></a>

```java
public void resetConnectionTimeout()
```

##### `resetCredentialType` <a name="resetCredentialType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCredentialType"></a>

```java
public void resetCredentialType()
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```java
public void resetDefaultLeaseTtlSeconds()
```

##### `resetDelegatedAuthAccessors` <a name="resetDelegatedAuthAccessors" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDelegatedAuthAccessors"></a>

```java
public void resetDelegatedAuthAccessors()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableAutomatedRotation` <a name="resetDisableAutomatedRotation" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableAutomatedRotation"></a>

```java
public void resetDisableAutomatedRotation()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetExternalEntropyAccess` <a name="resetExternalEntropyAccess" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetExternalEntropyAccess"></a>

```java
public void resetExternalEntropyAccess()
```

##### `resetForceNoCache` <a name="resetForceNoCache" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetForceNoCache"></a>

```java
public void resetForceNoCache()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityTokenKey` <a name="resetIdentityTokenKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetIdentityTokenKey"></a>

```java
public void resetIdentityTokenKey()
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetInsecureTls"></a>

```java
public void resetInsecureTls()
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetListingVisibility"></a>

```java
public void resetListingVisibility()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetMaxLeaseTtlSeconds"></a>

```java
public void resetMaxLeaseTtlSeconds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPassthroughRequestHeaders"></a>

```java
public void resetPassthroughRequestHeaders()
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPasswordPolicy"></a>

```java
public void resetPasswordPolicy()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPath"></a>

```java
public void resetPath()
```

##### `resetPluginVersion` <a name="resetPluginVersion" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPluginVersion"></a>

```java
public void resetPluginVersion()
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRequestTimeout"></a>

```java
public void resetRequestTimeout()
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationPeriod"></a>

```java
public void resetRotationPeriod()
```

##### `resetRotationSchedule` <a name="resetRotationSchedule" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationSchedule"></a>

```java
public void resetRotationSchedule()
```

##### `resetRotationWindow` <a name="resetRotationWindow" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRotationWindow"></a>

```java
public void resetRotationWindow()
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetSealWrap` <a name="resetSealWrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSealWrap"></a>

```java
public void resetSealWrap()
```

##### `resetSkipStaticRoleImportRotation` <a name="resetSkipStaticRoleImportRotation" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSkipStaticRoleImportRotation"></a>

```java
public void resetSkipStaticRoleImportRotation()
```

##### `resetStarttls` <a name="resetStarttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetStarttls"></a>

```java
public void resetStarttls()
```

##### `resetUpndomain` <a name="resetUpndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUpndomain"></a>

```java
public void resetUpndomain()
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUrl"></a>

```java
public void resetUrl()
```

##### `resetUserattr` <a name="resetUserattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserattr"></a>

```java
public void resetUserattr()
```

##### `resetUserdn` <a name="resetUserdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserdn"></a>

```java
public void resetUserdn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LdapSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend.LdapSecretBackend;

LdapSecretBackend.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend.LdapSecretBackend;

LdapSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend.LdapSecretBackend;

LdapSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend.LdapSecretBackend;

LdapSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LdapSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LdapSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LdapSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LdapSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LdapSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeysInput">allowedManagedKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddnInput">binddnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassInput">bindpassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCertInput">clientTlsCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKeyInput">clientTlsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeoutInput">connectionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.delegatedAuthAccessorsInput">delegatedAuthAccessorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableAutomatedRotationInput">disableAutomatedRotationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccessInput">externalEntropyAccessInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forceNoCacheInput">forceNoCacheInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.identityTokenKeyInput">identityTokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTlsInput">insecureTlsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.localInput">localInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pluginVersionInput">pluginVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationScheduleInput">rotationScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationWindowInput">rotationWindowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrapInput">sealWrapInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.skipStaticRoleImportRotationInput">skipStaticRoleImportRotationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttlsInput">starttlsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomainInput">upndomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattrInput">userattrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdnInput">userdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddn">binddn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpass">bindpass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCert">clientTlsCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKey">clientTlsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.local">local</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.skipStaticRoleImportRotation">skipStaticRoleImportRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttls">starttls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomain">upndomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattr">userattr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdn">userdn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `allowedManagedKeysInput`<sup>Optional</sup> <a name="allowedManagedKeysInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeysInput"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedResponseHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `binddnInput`<sup>Optional</sup> <a name="binddnInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddnInput"></a>

```java
public java.lang.String getBinddnInput();
```

- *Type:* java.lang.String

---

##### `bindpassInput`<sup>Optional</sup> <a name="bindpassInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassInput"></a>

```java
public java.lang.String getBindpassInput();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientTlsCertInput`<sup>Optional</sup> <a name="clientTlsCertInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCertInput"></a>

```java
public java.lang.String getClientTlsCertInput();
```

- *Type:* java.lang.String

---

##### `clientTlsKeyInput`<sup>Optional</sup> <a name="clientTlsKeyInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKeyInput"></a>

```java
public java.lang.String getClientTlsKeyInput();
```

- *Type:* java.lang.String

---

##### `connectionTimeoutInput`<sup>Optional</sup> <a name="connectionTimeoutInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeoutInput"></a>

```java
public java.lang.Number getConnectionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getDefaultLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `delegatedAuthAccessorsInput`<sup>Optional</sup> <a name="delegatedAuthAccessorsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.delegatedAuthAccessorsInput"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableAutomatedRotationInput`<sup>Optional</sup> <a name="disableAutomatedRotationInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableAutomatedRotationInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemountInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemountInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `externalEntropyAccessInput`<sup>Optional</sup> <a name="externalEntropyAccessInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccessInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `forceNoCacheInput`<sup>Optional</sup> <a name="forceNoCacheInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forceNoCacheInput"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCacheInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `identityTokenKeyInput`<sup>Optional</sup> <a name="identityTokenKeyInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.identityTokenKeyInput"></a>

```java
public java.lang.String getIdentityTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTlsInput"></a>

```java
public java.lang.Boolean|IResolvable getInsecureTlsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.listingVisibilityInput"></a>

```java
public java.lang.String getListingVisibilityInput();
```

- *Type:* java.lang.String

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.localInput"></a>

```java
public java.lang.Boolean|IResolvable getLocalInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getMaxLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passthroughRequestHeadersInput"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicyInput"></a>

```java
public java.lang.String getPasswordPolicyInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `pluginVersionInput`<sup>Optional</sup> <a name="pluginVersionInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pluginVersionInput"></a>

```java
public java.lang.String getPluginVersionInput();
```

- *Type:* java.lang.String

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeoutInput"></a>

```java
public java.lang.Number getRequestTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationPeriodInput"></a>

```java
public java.lang.Number getRotationPeriodInput();
```

- *Type:* java.lang.Number

---

##### `rotationScheduleInput`<sup>Optional</sup> <a name="rotationScheduleInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationScheduleInput"></a>

```java
public java.lang.String getRotationScheduleInput();
```

- *Type:* java.lang.String

---

##### `rotationWindowInput`<sup>Optional</sup> <a name="rotationWindowInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationWindowInput"></a>

```java
public java.lang.Number getRotationWindowInput();
```

- *Type:* java.lang.Number

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `sealWrapInput`<sup>Optional</sup> <a name="sealWrapInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrapInput"></a>

```java
public java.lang.Boolean|IResolvable getSealWrapInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `skipStaticRoleImportRotationInput`<sup>Optional</sup> <a name="skipStaticRoleImportRotationInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.skipStaticRoleImportRotationInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipStaticRoleImportRotationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `starttlsInput`<sup>Optional</sup> <a name="starttlsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttlsInput"></a>

```java
public java.lang.Boolean|IResolvable getStarttlsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `upndomainInput`<sup>Optional</sup> <a name="upndomainInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomainInput"></a>

```java
public java.lang.String getUpndomainInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `userattrInput`<sup>Optional</sup> <a name="userattrInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattrInput"></a>

```java
public java.lang.String getUserattrInput();
```

- *Type:* java.lang.String

---

##### `userdnInput`<sup>Optional</sup> <a name="userdnInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdnInput"></a>

```java
public java.lang.String getUserdnInput();
```

- *Type:* java.lang.String

---

##### `allowedManagedKeys`<sup>Required</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeys"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddn"></a>

```java
public java.lang.String getBinddn();
```

- *Type:* java.lang.String

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpass"></a>

```java
public java.lang.String getBindpass();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `clientTlsCert`<sup>Required</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCert"></a>

```java
public java.lang.String getClientTlsCert();
```

- *Type:* java.lang.String

---

##### `clientTlsKey`<sup>Required</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKey"></a>

```java
public java.lang.String getClientTlsKey();
```

- *Type:* java.lang.String

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeout"></a>

```java
public java.lang.Number getConnectionTimeout();
```

- *Type:* java.lang.Number

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `delegatedAuthAccessors`<sup>Required</sup> <a name="delegatedAuthAccessors" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.delegatedAuthAccessors"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableAutomatedRotation`<sup>Required</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableAutomatedRotation"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemount"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemount();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `externalEntropyAccess`<sup>Required</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccess"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccess();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `forceNoCache`<sup>Required</sup> <a name="forceNoCache" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forceNoCache"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCache();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityTokenKey`<sup>Required</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTls"></a>

```java
public java.lang.Boolean|IResolvable getInsecureTls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `pluginVersion`<sup>Required</sup> <a name="pluginVersion" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pluginVersion"></a>

```java
public java.lang.String getPluginVersion();
```

- *Type:* java.lang.String

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeout"></a>

```java
public java.lang.Number getRequestTimeout();
```

- *Type:* java.lang.Number

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

---

##### `rotationSchedule`<sup>Required</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

---

##### `rotationWindow`<sup>Required</sup> <a name="rotationWindow" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `sealWrap`<sup>Required</sup> <a name="sealWrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrap"></a>

```java
public java.lang.Boolean|IResolvable getSealWrap();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `skipStaticRoleImportRotation`<sup>Required</sup> <a name="skipStaticRoleImportRotation" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.skipStaticRoleImportRotation"></a>

```java
public java.lang.Boolean|IResolvable getSkipStaticRoleImportRotation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttls"></a>

```java
public java.lang.Boolean|IResolvable getStarttls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomain"></a>

```java
public java.lang.String getUpndomain();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattr"></a>

```java
public java.lang.String getUserattr();
```

- *Type:* java.lang.String

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdn"></a>

```java
public java.lang.String getUserdn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendConfig <a name="LdapSecretBackendConfig" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_secret_backend.LdapSecretBackendConfig;

LdapSecretBackendConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .binddn(java.lang.String)
    .bindpass(java.lang.String)
//  .allowedManagedKeys(java.util.List<java.lang.String>)
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .certificate(java.lang.String)
//  .clientTlsCert(java.lang.String)
//  .clientTlsKey(java.lang.String)
//  .connectionTimeout(java.lang.Number)
//  .credentialType(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .delegatedAuthAccessors(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .disableAutomatedRotation(java.lang.Boolean|IResolvable)
//  .disableRemount(java.lang.Boolean|IResolvable)
//  .externalEntropyAccess(java.lang.Boolean|IResolvable)
//  .forceNoCache(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .insecureTls(java.lang.Boolean|IResolvable)
//  .listingVisibility(java.lang.String)
//  .local(java.lang.Boolean|IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .passwordPolicy(java.lang.String)
//  .path(java.lang.String)
//  .pluginVersion(java.lang.String)
//  .requestTimeout(java.lang.Number)
//  .rotationPeriod(java.lang.Number)
//  .rotationSchedule(java.lang.String)
//  .rotationWindow(java.lang.Number)
//  .schema(java.lang.String)
//  .sealWrap(java.lang.Boolean|IResolvable)
//  .skipStaticRoleImportRotation(java.lang.Boolean|IResolvable)
//  .starttls(java.lang.Boolean|IResolvable)
//  .upndomain(java.lang.String)
//  .url(java.lang.String)
//  .userattr(java.lang.String)
//  .userdn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.binddn">binddn</a></code> | <code>java.lang.String</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpass">bindpass</a></code> | <code>java.lang.String</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsCert">clientTlsCert</a></code> | <code>java.lang.String</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsKey">clientTlsKey</a></code> | <code>java.lang.String</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connectionTimeout">connectionTimeout</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | The type of credential to manage. Options include: 'password', 'phrase'. Defaults to 'password'. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableAutomatedRotation">disableAutomatedRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Stops rotation of the root credential until set to false. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.local">local</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.requestTimeout">requestTimeout</a></code> | <code>java.lang.Number</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.Number</code> | The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationSchedule">rotationSchedule</a></code> | <code>java.lang.String</code> | The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationWindow">rotationWindow</a></code> | <code>java.lang.Number</code> | The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.skipStaticRoleImportRotation">skipStaticRoleImportRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Skip rotation of static role secrets on import. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.starttls">starttls</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.upndomain">upndomain</a></code> | <code>java.lang.String</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.url">url</a></code> | <code>java.lang.String</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userattr">userattr</a></code> | <code>java.lang.String</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userdn">userdn</a></code> | <code>java.lang.String</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.binddn"></a>

```java
public java.lang.String getBinddn();
```

- *Type:* java.lang.String

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#binddn LdapSecretBackend#binddn}

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpass"></a>

```java
public java.lang.String getBindpass();
```

- *Type:* java.lang.String

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#bindpass LdapSecretBackend#bindpass}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedManagedKeys"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeys();
```

- *Type:* java.util.List<java.lang.String>

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#allowed_managed_keys LdapSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#allowed_response_headers LdapSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#audit_non_hmac_request_keys LdapSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#audit_non_hmac_response_keys LdapSecretBackend#audit_non_hmac_response_keys}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#certificate LdapSecretBackend#certificate}

---

##### `clientTlsCert`<sup>Optional</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsCert"></a>

```java
public java.lang.String getClientTlsCert();
```

- *Type:* java.lang.String

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#client_tls_cert LdapSecretBackend#client_tls_cert}

---

##### `clientTlsKey`<sup>Optional</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsKey"></a>

```java
public java.lang.String getClientTlsKey();
```

- *Type:* java.lang.String

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#client_tls_key LdapSecretBackend#client_tls_key}

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connectionTimeout"></a>

```java
public java.lang.Number getConnectionTimeout();
```

- *Type:* java.lang.Number

Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#connection_timeout LdapSecretBackend#connection_timeout}

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

The type of credential to manage. Options include: 'password', 'phrase'. Defaults to 'password'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#credential_type LdapSecretBackend#credential_type}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#default_lease_ttl_seconds LdapSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.delegatedAuthAccessors"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessors();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#delegated_auth_accessors LdapSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#description LdapSecretBackend#description}

---

##### `disableAutomatedRotation`<sup>Optional</sup> <a name="disableAutomatedRotation" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableAutomatedRotation"></a>

```java
public java.lang.Boolean|IResolvable getDisableAutomatedRotation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Stops rotation of the root credential until set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#disable_automated_rotation LdapSecretBackend#disable_automated_rotation}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableRemount"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemount();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#disable_remount LdapSecretBackend#disable_remount}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.externalEntropyAccess"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccess();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#external_entropy_access LdapSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forceNoCache"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCache();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#force_no_cache LdapSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#identity_token_key LdapSecretBackend#identity_token_key}

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.insecureTls"></a>

```java
public java.lang.Boolean|IResolvable getInsecureTls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#insecure_tls LdapSecretBackend#insecure_tls}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#listing_visibility LdapSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#local LdapSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#max_lease_ttl_seconds LdapSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#namespace LdapSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#options LdapSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#passthrough_request_headers LdapSecretBackend#passthrough_request_headers}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#password_policy LdapSecretBackend#password_policy}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#path LdapSecretBackend#path}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.pluginVersion"></a>

```java
public java.lang.String getPluginVersion();
```

- *Type:* java.lang.String

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#plugin_version LdapSecretBackend#plugin_version}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.requestTimeout"></a>

```java
public java.lang.Number getRequestTimeout();
```

- *Type:* java.lang.Number

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#request_timeout LdapSecretBackend#request_timeout}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationPeriod"></a>

```java
public java.lang.Number getRotationPeriod();
```

- *Type:* java.lang.Number

The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#rotation_period LdapSecretBackend#rotation_period}

---

##### `rotationSchedule`<sup>Optional</sup> <a name="rotationSchedule" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationSchedule"></a>

```java
public java.lang.String getRotationSchedule();
```

- *Type:* java.lang.String

The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#rotation_schedule LdapSecretBackend#rotation_schedule}

---

##### `rotationWindow`<sup>Optional</sup> <a name="rotationWindow" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.rotationWindow"></a>

```java
public java.lang.Number getRotationWindow();
```

- *Type:* java.lang.Number

The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered.

Can only be used with rotation_schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#rotation_window LdapSecretBackend#rotation_window}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#schema LdapSecretBackend#schema}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.sealWrap"></a>

```java
public java.lang.Boolean|IResolvable getSealWrap();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#seal_wrap LdapSecretBackend#seal_wrap}

---

##### `skipStaticRoleImportRotation`<sup>Optional</sup> <a name="skipStaticRoleImportRotation" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.skipStaticRoleImportRotation"></a>

```java
public java.lang.Boolean|IResolvable getSkipStaticRoleImportRotation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Skip rotation of static role secrets on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#skip_static_role_import_rotation LdapSecretBackend#skip_static_role_import_rotation}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.starttls"></a>

```java
public java.lang.Boolean|IResolvable getStarttls();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#starttls LdapSecretBackend#starttls}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.upndomain"></a>

```java
public java.lang.String getUpndomain();
```

- *Type:* java.lang.String

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#upndomain LdapSecretBackend#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#url LdapSecretBackend#url}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userattr"></a>

```java
public java.lang.String getUserattr();
```

- *Type:* java.lang.String

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#userattr LdapSecretBackend#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userdn"></a>

```java
public java.lang.String getUserdn();
```

- *Type:* java.lang.String

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/ldap_secret_backend#userdn LdapSecretBackend#userdn}

---



