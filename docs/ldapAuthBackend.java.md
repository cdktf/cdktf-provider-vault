# `vault_ldap_auth_backend`

Refer to the Terraform Registory for docs: [`vault_ldap_auth_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend).

# `ldapAuthBackend` Submodule <a name="`ldapAuthBackend` Submodule" id="@cdktf/provider-vault.ldapAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapAuthBackend <a name="LdapAuthBackend" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend vault_ldap_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_auth_backend.LdapAuthBackend;

LdapAuthBackend.Builder.create(Construct scope, java.lang.String id)
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
    .url(java.lang.String)
//  .binddn(java.lang.String)
//  .bindpass(java.lang.String)
//  .caseSensitiveNames(java.lang.Boolean)
//  .caseSensitiveNames(IResolvable)
//  .certificate(java.lang.String)
//  .clientTlsCert(java.lang.String)
//  .clientTlsKey(java.lang.String)
//  .denyNullBind(java.lang.Boolean)
//  .denyNullBind(IResolvable)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .discoverdn(java.lang.Boolean)
//  .discoverdn(IResolvable)
//  .groupattr(java.lang.String)
//  .groupdn(java.lang.String)
//  .groupfilter(java.lang.String)
//  .id(java.lang.String)
//  .insecureTls(java.lang.Boolean)
//  .insecureTls(IResolvable)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .starttls(java.lang.Boolean)
//  .starttls(IResolvable)
//  .tlsMaxVersion(java.lang.String)
//  .tlsMinVersion(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean)
//  .tokenNoDefaultPolicy(IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
//  .upndomain(java.lang.String)
//  .userattr(java.lang.String)
//  .userdn(java.lang.String)
//  .userfilter(java.lang.String)
//  .usernameAsAlias(java.lang.Boolean)
//  .usernameAsAlias(IResolvable)
//  .useTokenGroups(java.lang.Boolean)
//  .useTokenGroups(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.binddn">binddn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.bindpass">bindpass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.clientTlsCert">clientTlsCert</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.clientTlsKey">clientTlsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.denyNullBind">denyNullBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.discoverdn">discoverdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.groupattr">groupattr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.groupdn">groupdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.groupfilter">groupfilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.starttls">starttls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.upndomain">upndomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.userattr">userattr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.userdn">userdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.userfilter">userfilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.usernameAsAlias">usernameAsAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Force the auth method to use the username passed by the user as the alias name. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.url"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}.

---

##### `binddn`<sup>Optional</sup> <a name="binddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.binddn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}.

---

##### `bindpass`<sup>Optional</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.bindpass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}.

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.caseSensitiveNames"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}.

---

##### `clientTlsCert`<sup>Optional</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.clientTlsCert"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}.

---

##### `clientTlsKey`<sup>Optional</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.clientTlsKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}.

---

##### `denyNullBind`<sup>Optional</sup> <a name="denyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.denyNullBind"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}.

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#disable_remount LdapAuthBackend#disable_remount}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.discoverdn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}.

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.groupattr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}.

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.groupdn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}.

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.groupfilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.insecureTls"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#local LdapAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#namespace LdapAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}.

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.starttls"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}.

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tlsMaxVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}.

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tlsMinVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}.

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_bound_cidrs LdapAuthBackend#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_explicit_max_ttl LdapAuthBackend#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_max_ttl LdapAuthBackend#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_no_default_policy LdapAuthBackend#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_num_uses LdapAuthBackend#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_period LdapAuthBackend#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_policies LdapAuthBackend#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_ttl LdapAuthBackend#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.upndomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}.

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.userattr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}.

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.userdn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}.

---

##### `userfilter`<sup>Optional</sup> <a name="userfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.userfilter"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}.

---

##### `usernameAsAlias`<sup>Optional</sup> <a name="usernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.usernameAsAlias"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Force the auth method to use the username passed by the user as the alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#username_as_alias LdapAuthBackend#username_as_alias}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.useTokenGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBinddn">resetBinddn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpass">resetBindpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCaseSensitiveNames">resetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsCert">resetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsKey">resetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDenyNullBind">resetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDiscoverdn">resetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupattr">resetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupdn">resetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupfilter">resetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetStarttls">resetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMaxVersion">resetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUpndomain">resetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserattr">resetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserdn">resetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserfilter">resetUserfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUsernameAsAlias">resetUsernameAsAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUseTokenGroups">resetUseTokenGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBinddn` <a name="resetBinddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBinddn"></a>

```java
public void resetBinddn()
```

##### `resetBindpass` <a name="resetBindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpass"></a>

```java
public void resetBindpass()
```

##### `resetCaseSensitiveNames` <a name="resetCaseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCaseSensitiveNames"></a>

```java
public void resetCaseSensitiveNames()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetClientTlsCert` <a name="resetClientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsCert"></a>

```java
public void resetClientTlsCert()
```

##### `resetClientTlsKey` <a name="resetClientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsKey"></a>

```java
public void resetClientTlsKey()
```

##### `resetDenyNullBind` <a name="resetDenyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDenyNullBind"></a>

```java
public void resetDenyNullBind()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetDiscoverdn` <a name="resetDiscoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDiscoverdn"></a>

```java
public void resetDiscoverdn()
```

##### `resetGroupattr` <a name="resetGroupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupattr"></a>

```java
public void resetGroupattr()
```

##### `resetGroupdn` <a name="resetGroupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupdn"></a>

```java
public void resetGroupdn()
```

##### `resetGroupfilter` <a name="resetGroupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupfilter"></a>

```java
public void resetGroupfilter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetId"></a>

```java
public void resetId()
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetInsecureTls"></a>

```java
public void resetInsecureTls()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetPath"></a>

```java
public void resetPath()
```

##### `resetStarttls` <a name="resetStarttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetStarttls"></a>

```java
public void resetStarttls()
```

##### `resetTlsMaxVersion` <a name="resetTlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMaxVersion"></a>

```java
public void resetTlsMaxVersion()
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMinVersion"></a>

```java
public void resetTlsMinVersion()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenType"></a>

```java
public void resetTokenType()
```

##### `resetUpndomain` <a name="resetUpndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUpndomain"></a>

```java
public void resetUpndomain()
```

##### `resetUserattr` <a name="resetUserattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserattr"></a>

```java
public void resetUserattr()
```

##### `resetUserdn` <a name="resetUserdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserdn"></a>

```java
public void resetUserdn()
```

##### `resetUserfilter` <a name="resetUserfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserfilter"></a>

```java
public void resetUserfilter()
```

##### `resetUsernameAsAlias` <a name="resetUsernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUsernameAsAlias"></a>

```java
public void resetUsernameAsAlias()
```

##### `resetUseTokenGroups` <a name="resetUseTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUseTokenGroups"></a>

```java
public void resetUseTokenGroups()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_auth_backend.LdapAuthBackend;

LdapAuthBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_auth_backend.LdapAuthBackend;

LdapAuthBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_auth_backend.LdapAuthBackend;

LdapAuthBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddnInput">binddnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassInput">bindpassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNamesInput">caseSensitiveNamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCertInput">clientTlsCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKeyInput">clientTlsKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBindInput">denyNullBindInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdnInput">discoverdnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattrInput">groupattrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdnInput">groupdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilterInput">groupfilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTlsInput">insecureTlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.localInput">localInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttlsInput">starttlsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersionInput">tlsMaxVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomainInput">upndomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattrInput">userattrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdnInput">userdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilterInput">userfilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAliasInput">usernameAsAliasInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroupsInput">useTokenGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddn">binddn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpass">bindpass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCert">clientTlsCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKey">clientTlsKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBind">denyNullBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdn">discoverdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattr">groupattr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdn">groupdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilter">groupfilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttls">starttls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomain">upndomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattr">userattr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdn">userdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilter">userfilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAlias">usernameAsAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `binddnInput`<sup>Optional</sup> <a name="binddnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddnInput"></a>

```java
public java.lang.String getBinddnInput();
```

- *Type:* java.lang.String

---

##### `bindpassInput`<sup>Optional</sup> <a name="bindpassInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassInput"></a>

```java
public java.lang.String getBindpassInput();
```

- *Type:* java.lang.String

---

##### `caseSensitiveNamesInput`<sup>Optional</sup> <a name="caseSensitiveNamesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNamesInput"></a>

```java
public java.lang.Object getCaseSensitiveNamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientTlsCertInput`<sup>Optional</sup> <a name="clientTlsCertInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCertInput"></a>

```java
public java.lang.String getClientTlsCertInput();
```

- *Type:* java.lang.String

---

##### `clientTlsKeyInput`<sup>Optional</sup> <a name="clientTlsKeyInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKeyInput"></a>

```java
public java.lang.String getClientTlsKeyInput();
```

- *Type:* java.lang.String

---

##### `denyNullBindInput`<sup>Optional</sup> <a name="denyNullBindInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBindInput"></a>

```java
public java.lang.Object getDenyNullBindInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemountInput"></a>

```java
public java.lang.Object getDisableRemountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discoverdnInput`<sup>Optional</sup> <a name="discoverdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdnInput"></a>

```java
public java.lang.Object getDiscoverdnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupattrInput`<sup>Optional</sup> <a name="groupattrInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattrInput"></a>

```java
public java.lang.String getGroupattrInput();
```

- *Type:* java.lang.String

---

##### `groupdnInput`<sup>Optional</sup> <a name="groupdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdnInput"></a>

```java
public java.lang.String getGroupdnInput();
```

- *Type:* java.lang.String

---

##### `groupfilterInput`<sup>Optional</sup> <a name="groupfilterInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilterInput"></a>

```java
public java.lang.String getGroupfilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTlsInput"></a>

```java
public java.lang.Object getInsecureTlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.localInput"></a>

```java
public java.lang.Object getLocalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `starttlsInput`<sup>Optional</sup> <a name="starttlsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttlsInput"></a>

```java
public java.lang.Object getStarttlsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsMaxVersionInput`<sup>Optional</sup> <a name="tlsMaxVersionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersionInput"></a>

```java
public java.lang.String getTlsMaxVersionInput();
```

- *Type:* java.lang.String

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersionInput"></a>

```java
public java.lang.String getTlsMinVersionInput();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Object getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `upndomainInput`<sup>Optional</sup> <a name="upndomainInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomainInput"></a>

```java
public java.lang.String getUpndomainInput();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `userattrInput`<sup>Optional</sup> <a name="userattrInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattrInput"></a>

```java
public java.lang.String getUserattrInput();
```

- *Type:* java.lang.String

---

##### `userdnInput`<sup>Optional</sup> <a name="userdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdnInput"></a>

```java
public java.lang.String getUserdnInput();
```

- *Type:* java.lang.String

---

##### `userfilterInput`<sup>Optional</sup> <a name="userfilterInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilterInput"></a>

```java
public java.lang.String getUserfilterInput();
```

- *Type:* java.lang.String

---

##### `usernameAsAliasInput`<sup>Optional</sup> <a name="usernameAsAliasInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAliasInput"></a>

```java
public java.lang.Object getUsernameAsAliasInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useTokenGroupsInput`<sup>Optional</sup> <a name="useTokenGroupsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroupsInput"></a>

```java
public java.lang.Object getUseTokenGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddn"></a>

```java
public java.lang.String getBinddn();
```

- *Type:* java.lang.String

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpass"></a>

```java
public java.lang.String getBindpass();
```

- *Type:* java.lang.String

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="caseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNames"></a>

```java
public java.lang.Object getCaseSensitiveNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `clientTlsCert`<sup>Required</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCert"></a>

```java
public java.lang.String getClientTlsCert();
```

- *Type:* java.lang.String

---

##### `clientTlsKey`<sup>Required</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKey"></a>

```java
public java.lang.String getClientTlsKey();
```

- *Type:* java.lang.String

---

##### `denyNullBind`<sup>Required</sup> <a name="denyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBind"></a>

```java
public java.lang.Object getDenyNullBind();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `discoverdn`<sup>Required</sup> <a name="discoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdn"></a>

```java
public java.lang.Object getDiscoverdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupattr`<sup>Required</sup> <a name="groupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattr"></a>

```java
public java.lang.String getGroupattr();
```

- *Type:* java.lang.String

---

##### `groupdn`<sup>Required</sup> <a name="groupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdn"></a>

```java
public java.lang.String getGroupdn();
```

- *Type:* java.lang.String

---

##### `groupfilter`<sup>Required</sup> <a name="groupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilter"></a>

```java
public java.lang.String getGroupfilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttls"></a>

```java
public java.lang.Object getStarttls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tlsMaxVersion`<sup>Required</sup> <a name="tlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersion"></a>

```java
public java.lang.String getTlsMaxVersion();
```

- *Type:* java.lang.String

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomain"></a>

```java
public java.lang.String getUpndomain();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattr"></a>

```java
public java.lang.String getUserattr();
```

- *Type:* java.lang.String

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdn"></a>

```java
public java.lang.String getUserdn();
```

- *Type:* java.lang.String

---

##### `userfilter`<sup>Required</sup> <a name="userfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilter"></a>

```java
public java.lang.String getUserfilter();
```

- *Type:* java.lang.String

---

##### `usernameAsAlias`<sup>Required</sup> <a name="usernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAlias"></a>

```java
public java.lang.Object getUsernameAsAlias();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useTokenGroups`<sup>Required</sup> <a name="useTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroups"></a>

```java
public java.lang.Object getUseTokenGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LdapAuthBackendConfig <a name="LdapAuthBackendConfig" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ldap_auth_backend.LdapAuthBackendConfig;

LdapAuthBackendConfig.builder()
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
    .url(java.lang.String)
//  .binddn(java.lang.String)
//  .bindpass(java.lang.String)
//  .caseSensitiveNames(java.lang.Boolean)
//  .caseSensitiveNames(IResolvable)
//  .certificate(java.lang.String)
//  .clientTlsCert(java.lang.String)
//  .clientTlsKey(java.lang.String)
//  .denyNullBind(java.lang.Boolean)
//  .denyNullBind(IResolvable)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .discoverdn(java.lang.Boolean)
//  .discoverdn(IResolvable)
//  .groupattr(java.lang.String)
//  .groupdn(java.lang.String)
//  .groupfilter(java.lang.String)
//  .id(java.lang.String)
//  .insecureTls(java.lang.Boolean)
//  .insecureTls(IResolvable)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .starttls(java.lang.Boolean)
//  .starttls(IResolvable)
//  .tlsMaxVersion(java.lang.String)
//  .tlsMinVersion(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean)
//  .tokenNoDefaultPolicy(IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
//  .upndomain(java.lang.String)
//  .userattr(java.lang.String)
//  .userdn(java.lang.String)
//  .userfilter(java.lang.String)
//  .usernameAsAlias(java.lang.Boolean)
//  .usernameAsAlias(IResolvable)
//  .useTokenGroups(java.lang.Boolean)
//  .useTokenGroups(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.binddn">binddn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpass">bindpass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsCert">clientTlsCert</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsKey">clientTlsKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.denyNullBind">denyNullBind</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.discoverdn">discoverdn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupattr">groupattr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupdn">groupdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupfilter">groupfilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.insecureTls">insecureTls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.starttls">starttls</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.upndomain">upndomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userattr">userattr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userdn">userdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userfilter">userfilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.usernameAsAlias">usernameAsAlias</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Force the auth method to use the username passed by the user as the alias name. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}.

---

##### `binddn`<sup>Optional</sup> <a name="binddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.binddn"></a>

```java
public java.lang.String getBinddn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}.

---

##### `bindpass`<sup>Optional</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpass"></a>

```java
public java.lang.String getBindpass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}.

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.caseSensitiveNames"></a>

```java
public java.lang.Object getCaseSensitiveNames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}.

---

##### `clientTlsCert`<sup>Optional</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsCert"></a>

```java
public java.lang.String getClientTlsCert();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}.

---

##### `clientTlsKey`<sup>Optional</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsKey"></a>

```java
public java.lang.String getClientTlsKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}.

---

##### `denyNullBind`<sup>Optional</sup> <a name="denyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.denyNullBind"></a>

```java
public java.lang.Object getDenyNullBind();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}.

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#disable_remount LdapAuthBackend#disable_remount}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.discoverdn"></a>

```java
public java.lang.Object getDiscoverdn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}.

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupattr"></a>

```java
public java.lang.String getGroupattr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}.

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupdn"></a>

```java
public java.lang.String getGroupdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}.

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupfilter"></a>

```java
public java.lang.String getGroupfilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.insecureTls"></a>

```java
public java.lang.Object getInsecureTls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#local LdapAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#namespace LdapAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}.

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.starttls"></a>

```java
public java.lang.Object getStarttls();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}.

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMaxVersion"></a>

```java
public java.lang.String getTlsMaxVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}.

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMinVersion"></a>

```java
public java.lang.String getTlsMinVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}.

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_bound_cidrs LdapAuthBackend#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_explicit_max_ttl LdapAuthBackend#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_max_ttl LdapAuthBackend#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_no_default_policy LdapAuthBackend#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_num_uses LdapAuthBackend#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_period LdapAuthBackend#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_policies LdapAuthBackend#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_ttl LdapAuthBackend#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.upndomain"></a>

```java
public java.lang.String getUpndomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}.

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userattr"></a>

```java
public java.lang.String getUserattr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}.

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userdn"></a>

```java
public java.lang.String getUserdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}.

---

##### `userfilter`<sup>Optional</sup> <a name="userfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userfilter"></a>

```java
public java.lang.String getUserfilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}.

---

##### `usernameAsAlias`<sup>Optional</sup> <a name="usernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.usernameAsAlias"></a>

```java
public java.lang.Object getUsernameAsAlias();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Force the auth method to use the username passed by the user as the alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#username_as_alias LdapAuthBackend#username_as_alias}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.useTokenGroups"></a>

```java
public java.lang.Object getUseTokenGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}.

---



