# `vault_ssh_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_ssh_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role).

# `sshSecretBackendRole` Submodule <a name="`sshSecretBackendRole` Submodule" id="@cdktf/provider-vault.sshSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SshSecretBackendRole <a name="SshSecretBackendRole" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role vault_ssh_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ssh_secret_backend_role.SshSecretBackendRole;

SshSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
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
    .backend(java.lang.String)
    .keyType(java.lang.String)
    .name(java.lang.String)
//  .algorithmSigner(java.lang.String)
//  .allowBareDomains(java.lang.Boolean)
//  .allowBareDomains(IResolvable)
//  .allowedCriticalOptions(java.lang.String)
//  .allowedDomains(java.lang.String)
//  .allowedExtensions(java.lang.String)
//  .allowedUserKeyConfig(IResolvable)
//  .allowedUserKeyConfig(java.util.List<SshSecretBackendRoleAllowedUserKeyConfig>)
//  .allowedUserKeyLengths(java.util.Map<java.lang.String, java.lang.Number>)
//  .allowedUsers(java.lang.String)
//  .allowedUsersTemplate(java.lang.Boolean)
//  .allowedUsersTemplate(IResolvable)
//  .allowHostCertificates(java.lang.Boolean)
//  .allowHostCertificates(IResolvable)
//  .allowSubdomains(java.lang.Boolean)
//  .allowSubdomains(IResolvable)
//  .allowUserCertificates(java.lang.Boolean)
//  .allowUserCertificates(IResolvable)
//  .allowUserKeyIds(java.lang.Boolean)
//  .allowUserKeyIds(IResolvable)
//  .cidrList(java.lang.String)
//  .defaultCriticalOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultExtensions(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultUser(java.lang.String)
//  .defaultUserTemplate(java.lang.Boolean)
//  .defaultUserTemplate(IResolvable)
//  .id(java.lang.String)
//  .keyIdFormat(java.lang.String)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.algorithmSigner">algorithmSigner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowBareDomains">allowBareDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedCriticalOptions">allowedCriticalOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedDomains">allowedDomains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedExtensions">allowedExtensions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUserKeyConfig">allowedUserKeyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>></code> | allowed_user_key_config block. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUserKeyLengths">allowedUserKeyLengths</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUsers">allowedUsers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUsersTemplate">allowedUsersTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowHostCertificates">allowHostCertificates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowSubdomains">allowSubdomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowUserCertificates">allowUserCertificates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowUserKeyIds">allowUserKeyIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.cidrList">cidrList</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultCriticalOptions">defaultCriticalOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultExtensions">defaultExtensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultUser">defaultUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultUserTemplate">defaultUserTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.keyIdFormat">keyIdFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}.

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#name SshSecretBackendRole#name}

---

##### `algorithmSigner`<sup>Optional</sup> <a name="algorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.algorithmSigner"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}.

---

##### `allowBareDomains`<sup>Optional</sup> <a name="allowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowBareDomains"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}.

---

##### `allowedCriticalOptions`<sup>Optional</sup> <a name="allowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedCriticalOptions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}.

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedDomains"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}.

---

##### `allowedExtensions`<sup>Optional</sup> <a name="allowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedExtensions"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}.

---

##### `allowedUserKeyConfig`<sup>Optional</sup> <a name="allowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUserKeyConfig"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>>

allowed_user_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_user_key_config SshSecretBackendRole#allowed_user_key_config}

---

##### `allowedUserKeyLengths`<sup>Optional</sup> <a name="allowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUserKeyLengths"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}.

---

##### `allowedUsers`<sup>Optional</sup> <a name="allowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUsers"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}.

---

##### `allowedUsersTemplate`<sup>Optional</sup> <a name="allowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowedUsersTemplate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}.

---

##### `allowHostCertificates`<sup>Optional</sup> <a name="allowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowHostCertificates"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}.

---

##### `allowSubdomains`<sup>Optional</sup> <a name="allowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowSubdomains"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}.

---

##### `allowUserCertificates`<sup>Optional</sup> <a name="allowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowUserCertificates"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}.

---

##### `allowUserKeyIds`<sup>Optional</sup> <a name="allowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.allowUserKeyIds"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}.

---

##### `cidrList`<sup>Optional</sup> <a name="cidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.cidrList"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}.

---

##### `defaultCriticalOptions`<sup>Optional</sup> <a name="defaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultCriticalOptions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}.

---

##### `defaultExtensions`<sup>Optional</sup> <a name="defaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultExtensions"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}.

---

##### `defaultUser`<sup>Optional</sup> <a name="defaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultUser"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}.

---

##### `defaultUserTemplate`<sup>Optional</sup> <a name="defaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.defaultUserTemplate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyIdFormat`<sup>Optional</sup> <a name="keyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.keyIdFormat"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#namespace SshSecretBackendRole#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig">putAllowedUserKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAlgorithmSigner">resetAlgorithmSigner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowBareDomains">resetAllowBareDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedCriticalOptions">resetAllowedCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedExtensions">resetAllowedExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyConfig">resetAllowedUserKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyLengths">resetAllowedUserKeyLengths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsers">resetAllowedUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsersTemplate">resetAllowedUsersTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowHostCertificates">resetAllowHostCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowSubdomains">resetAllowSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserCertificates">resetAllowUserCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserKeyIds">resetAllowUserKeyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetCidrList">resetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultCriticalOptions">resetDefaultCriticalOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensions">resetDefaultExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUser">resetDefaultUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUserTemplate">resetDefaultUserTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetKeyIdFormat">resetKeyIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAllowedUserKeyConfig` <a name="putAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig"></a>

```java
public void putAllowedUserKeyConfig(IResolvable OR java.util.List<SshSecretBackendRoleAllowedUserKeyConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.putAllowedUserKeyConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>>

---

##### `resetAlgorithmSigner` <a name="resetAlgorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAlgorithmSigner"></a>

```java
public void resetAlgorithmSigner()
```

##### `resetAllowBareDomains` <a name="resetAllowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowBareDomains"></a>

```java
public void resetAllowBareDomains()
```

##### `resetAllowedCriticalOptions` <a name="resetAllowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedCriticalOptions"></a>

```java
public void resetAllowedCriticalOptions()
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedDomains"></a>

```java
public void resetAllowedDomains()
```

##### `resetAllowedExtensions` <a name="resetAllowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedExtensions"></a>

```java
public void resetAllowedExtensions()
```

##### `resetAllowedUserKeyConfig` <a name="resetAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyConfig"></a>

```java
public void resetAllowedUserKeyConfig()
```

##### `resetAllowedUserKeyLengths` <a name="resetAllowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUserKeyLengths"></a>

```java
public void resetAllowedUserKeyLengths()
```

##### `resetAllowedUsers` <a name="resetAllowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsers"></a>

```java
public void resetAllowedUsers()
```

##### `resetAllowedUsersTemplate` <a name="resetAllowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowedUsersTemplate"></a>

```java
public void resetAllowedUsersTemplate()
```

##### `resetAllowHostCertificates` <a name="resetAllowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowHostCertificates"></a>

```java
public void resetAllowHostCertificates()
```

##### `resetAllowSubdomains` <a name="resetAllowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowSubdomains"></a>

```java
public void resetAllowSubdomains()
```

##### `resetAllowUserCertificates` <a name="resetAllowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserCertificates"></a>

```java
public void resetAllowUserCertificates()
```

##### `resetAllowUserKeyIds` <a name="resetAllowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetAllowUserKeyIds"></a>

```java
public void resetAllowUserKeyIds()
```

##### `resetCidrList` <a name="resetCidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetCidrList"></a>

```java
public void resetCidrList()
```

##### `resetDefaultCriticalOptions` <a name="resetDefaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultCriticalOptions"></a>

```java
public void resetDefaultCriticalOptions()
```

##### `resetDefaultExtensions` <a name="resetDefaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultExtensions"></a>

```java
public void resetDefaultExtensions()
```

##### `resetDefaultUser` <a name="resetDefaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUser"></a>

```java
public void resetDefaultUser()
```

##### `resetDefaultUserTemplate` <a name="resetDefaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetDefaultUserTemplate"></a>

```java
public void resetDefaultUserTemplate()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetKeyIdFormat` <a name="resetKeyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetKeyIdFormat"></a>

```java
public void resetKeyIdFormat()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.ssh_secret_backend_role.SshSecretBackendRole;

SshSecretBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.ssh_secret_backend_role.SshSecretBackendRole;

SshSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.ssh_secret_backend_role.SshSecretBackendRole;

SshSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfig">allowedUserKeyConfig</a></code> | <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList">SshSecretBackendRoleAllowedUserKeyConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSignerInput">algorithmSignerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomainsInput">allowBareDomainsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptionsInput">allowedCriticalOptionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensionsInput">allowedExtensionsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfigInput">allowedUserKeyConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengthsInput">allowedUserKeyLengthsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersInput">allowedUsersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplateInput">allowedUsersTemplateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificatesInput">allowHostCertificatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomainsInput">allowSubdomainsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificatesInput">allowUserCertificatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIdsInput">allowUserKeyIdsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrListInput">cidrListInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptionsInput">defaultCriticalOptionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsInput">defaultExtensionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserInput">defaultUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplateInput">defaultUserTemplateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormatInput">keyIdFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSigner">algorithmSigner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomains">allowBareDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptions">allowedCriticalOptions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomains">allowedDomains</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensions">allowedExtensions</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengths">allowedUserKeyLengths</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsers">allowedUsers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplate">allowedUsersTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificates">allowHostCertificates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomains">allowSubdomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificates">allowUserCertificates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIds">allowUserKeyIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrList">cidrList</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptions">defaultCriticalOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensions">defaultExtensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUser">defaultUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplate">defaultUserTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormat">keyIdFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedUserKeyConfig`<sup>Required</sup> <a name="allowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfig"></a>

```java
public SshSecretBackendRoleAllowedUserKeyConfigList getAllowedUserKeyConfig();
```

- *Type:* <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList">SshSecretBackendRoleAllowedUserKeyConfigList</a>

---

##### `algorithmSignerInput`<sup>Optional</sup> <a name="algorithmSignerInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSignerInput"></a>

```java
public java.lang.String getAlgorithmSignerInput();
```

- *Type:* java.lang.String

---

##### `allowBareDomainsInput`<sup>Optional</sup> <a name="allowBareDomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomainsInput"></a>

```java
public java.lang.Object getAllowBareDomainsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedCriticalOptionsInput`<sup>Optional</sup> <a name="allowedCriticalOptionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptionsInput"></a>

```java
public java.lang.String getAllowedCriticalOptionsInput();
```

- *Type:* java.lang.String

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomainsInput"></a>

```java
public java.lang.String getAllowedDomainsInput();
```

- *Type:* java.lang.String

---

##### `allowedExtensionsInput`<sup>Optional</sup> <a name="allowedExtensionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensionsInput"></a>

```java
public java.lang.String getAllowedExtensionsInput();
```

- *Type:* java.lang.String

---

##### `allowedUserKeyConfigInput`<sup>Optional</sup> <a name="allowedUserKeyConfigInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyConfigInput"></a>

```java
public java.lang.Object getAllowedUserKeyConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>>

---

##### `allowedUserKeyLengthsInput`<sup>Optional</sup> <a name="allowedUserKeyLengthsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengthsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getAllowedUserKeyLengthsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `allowedUsersInput`<sup>Optional</sup> <a name="allowedUsersInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersInput"></a>

```java
public java.lang.String getAllowedUsersInput();
```

- *Type:* java.lang.String

---

##### `allowedUsersTemplateInput`<sup>Optional</sup> <a name="allowedUsersTemplateInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplateInput"></a>

```java
public java.lang.Object getAllowedUsersTemplateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHostCertificatesInput`<sup>Optional</sup> <a name="allowHostCertificatesInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificatesInput"></a>

```java
public java.lang.Object getAllowHostCertificatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowSubdomainsInput`<sup>Optional</sup> <a name="allowSubdomainsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomainsInput"></a>

```java
public java.lang.Object getAllowSubdomainsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUserCertificatesInput`<sup>Optional</sup> <a name="allowUserCertificatesInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificatesInput"></a>

```java
public java.lang.Object getAllowUserCertificatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUserKeyIdsInput`<sup>Optional</sup> <a name="allowUserKeyIdsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIdsInput"></a>

```java
public java.lang.Object getAllowUserKeyIdsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `cidrListInput`<sup>Optional</sup> <a name="cidrListInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrListInput"></a>

```java
public java.lang.String getCidrListInput();
```

- *Type:* java.lang.String

---

##### `defaultCriticalOptionsInput`<sup>Optional</sup> <a name="defaultCriticalOptionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultCriticalOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultExtensionsInput`<sup>Optional</sup> <a name="defaultExtensionsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultExtensionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultUserInput`<sup>Optional</sup> <a name="defaultUserInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserInput"></a>

```java
public java.lang.String getDefaultUserInput();
```

- *Type:* java.lang.String

---

##### `defaultUserTemplateInput`<sup>Optional</sup> <a name="defaultUserTemplateInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplateInput"></a>

```java
public java.lang.Object getDefaultUserTemplateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyIdFormatInput`<sup>Optional</sup> <a name="keyIdFormatInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormatInput"></a>

```java
public java.lang.String getKeyIdFormatInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtlInput"></a>

```java
public java.lang.String getMaxTtlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `algorithmSigner`<sup>Required</sup> <a name="algorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.algorithmSigner"></a>

```java
public java.lang.String getAlgorithmSigner();
```

- *Type:* java.lang.String

---

##### `allowBareDomains`<sup>Required</sup> <a name="allowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowBareDomains"></a>

```java
public java.lang.Object getAllowBareDomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedCriticalOptions`<sup>Required</sup> <a name="allowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedCriticalOptions"></a>

```java
public java.lang.String getAllowedCriticalOptions();
```

- *Type:* java.lang.String

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedDomains"></a>

```java
public java.lang.String getAllowedDomains();
```

- *Type:* java.lang.String

---

##### `allowedExtensions`<sup>Required</sup> <a name="allowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedExtensions"></a>

```java
public java.lang.String getAllowedExtensions();
```

- *Type:* java.lang.String

---

##### `allowedUserKeyLengths`<sup>Required</sup> <a name="allowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUserKeyLengths"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getAllowedUserKeyLengths();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

---

##### `allowedUsers`<sup>Required</sup> <a name="allowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsers"></a>

```java
public java.lang.String getAllowedUsers();
```

- *Type:* java.lang.String

---

##### `allowedUsersTemplate`<sup>Required</sup> <a name="allowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowedUsersTemplate"></a>

```java
public java.lang.Object getAllowedUsersTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHostCertificates`<sup>Required</sup> <a name="allowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowHostCertificates"></a>

```java
public java.lang.Object getAllowHostCertificates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowSubdomains`<sup>Required</sup> <a name="allowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowSubdomains"></a>

```java
public java.lang.Object getAllowSubdomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUserCertificates`<sup>Required</sup> <a name="allowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserCertificates"></a>

```java
public java.lang.Object getAllowUserCertificates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowUserKeyIds`<sup>Required</sup> <a name="allowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.allowUserKeyIds"></a>

```java
public java.lang.Object getAllowUserKeyIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `cidrList`<sup>Required</sup> <a name="cidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.cidrList"></a>

```java
public java.lang.String getCidrList();
```

- *Type:* java.lang.String

---

##### `defaultCriticalOptions`<sup>Required</sup> <a name="defaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultCriticalOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultCriticalOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultExtensions`<sup>Required</sup> <a name="defaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultExtensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultExtensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `defaultUser`<sup>Required</sup> <a name="defaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUser"></a>

```java
public java.lang.String getDefaultUser();
```

- *Type:* java.lang.String

---

##### `defaultUserTemplate`<sup>Required</sup> <a name="defaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.defaultUserTemplate"></a>

```java
public java.lang.Object getDefaultUserTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyIdFormat`<sup>Required</sup> <a name="keyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyIdFormat"></a>

```java
public java.lang.String getKeyIdFormat();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SshSecretBackendRoleAllowedUserKeyConfig <a name="SshSecretBackendRoleAllowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ssh_secret_backend_role.SshSecretBackendRoleAllowedUserKeyConfig;

SshSecretBackendRoleAllowedUserKeyConfig.builder()
    .lengths(java.util.List<java.lang.Number>)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.lengths">lengths</a></code> | <code>java.util.List<java.lang.Number></code> | List of allowed key lengths, vault-1.10 and above. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.type">type</a></code> | <code>java.lang.String</code> | Key type, choices: rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521. |

---

##### `lengths`<sup>Required</sup> <a name="lengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.lengths"></a>

```java
public java.util.List<java.lang.Number> getLengths();
```

- *Type:* java.util.List<java.lang.Number>

List of allowed key lengths, vault-1.10 and above.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#lengths SshSecretBackendRole#lengths}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Key type, choices: rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#type SshSecretBackendRole#type}

---

### SshSecretBackendRoleConfig <a name="SshSecretBackendRoleConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ssh_secret_backend_role.SshSecretBackendRoleConfig;

SshSecretBackendRoleConfig.builder()
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
    .backend(java.lang.String)
    .keyType(java.lang.String)
    .name(java.lang.String)
//  .algorithmSigner(java.lang.String)
//  .allowBareDomains(java.lang.Boolean)
//  .allowBareDomains(IResolvable)
//  .allowedCriticalOptions(java.lang.String)
//  .allowedDomains(java.lang.String)
//  .allowedExtensions(java.lang.String)
//  .allowedUserKeyConfig(IResolvable)
//  .allowedUserKeyConfig(java.util.List<SshSecretBackendRoleAllowedUserKeyConfig>)
//  .allowedUserKeyLengths(java.util.Map<java.lang.String, java.lang.Number>)
//  .allowedUsers(java.lang.String)
//  .allowedUsersTemplate(java.lang.Boolean)
//  .allowedUsersTemplate(IResolvable)
//  .allowHostCertificates(java.lang.Boolean)
//  .allowHostCertificates(IResolvable)
//  .allowSubdomains(java.lang.Boolean)
//  .allowSubdomains(IResolvable)
//  .allowUserCertificates(java.lang.Boolean)
//  .allowUserCertificates(IResolvable)
//  .allowUserKeyIds(java.lang.Boolean)
//  .allowUserKeyIds(IResolvable)
//  .cidrList(java.lang.String)
//  .defaultCriticalOptions(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultExtensions(java.util.Map<java.lang.String, java.lang.String>)
//  .defaultUser(java.lang.String)
//  .defaultUserTemplate(java.lang.Boolean)
//  .defaultUserTemplate(IResolvable)
//  .id(java.lang.String)
//  .keyIdFormat(java.lang.String)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.algorithmSigner">algorithmSigner</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowBareDomains">allowBareDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedCriticalOptions">allowedCriticalOptions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomains">allowedDomains</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedExtensions">allowedExtensions</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyConfig">allowedUserKeyConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>></code> | allowed_user_key_config block. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyLengths">allowedUserKeyLengths</a></code> | <code>java.util.Map<java.lang.String, java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsers">allowedUsers</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsersTemplate">allowedUsersTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowHostCertificates">allowHostCertificates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowSubdomains">allowSubdomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserCertificates">allowUserCertificates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserKeyIds">allowUserKeyIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.cidrList">cidrList</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultCriticalOptions">defaultCriticalOptions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensions">defaultExtensions</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUser">defaultUser</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUserTemplate">defaultUserTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyIdFormat">keyIdFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}.

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#name SshSecretBackendRole#name}

---

##### `algorithmSigner`<sup>Optional</sup> <a name="algorithmSigner" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.algorithmSigner"></a>

```java
public java.lang.String getAlgorithmSigner();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}.

---

##### `allowBareDomains`<sup>Optional</sup> <a name="allowBareDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowBareDomains"></a>

```java
public java.lang.Object getAllowBareDomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}.

---

##### `allowedCriticalOptions`<sup>Optional</sup> <a name="allowedCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedCriticalOptions"></a>

```java
public java.lang.String getAllowedCriticalOptions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}.

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedDomains"></a>

```java
public java.lang.String getAllowedDomains();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}.

---

##### `allowedExtensions`<sup>Optional</sup> <a name="allowedExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedExtensions"></a>

```java
public java.lang.String getAllowedExtensions();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}.

---

##### `allowedUserKeyConfig`<sup>Optional</sup> <a name="allowedUserKeyConfig" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyConfig"></a>

```java
public java.lang.Object getAllowedUserKeyConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>>

allowed_user_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_user_key_config SshSecretBackendRole#allowed_user_key_config}

---

##### `allowedUserKeyLengths`<sup>Optional</sup> <a name="allowedUserKeyLengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUserKeyLengths"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getAllowedUserKeyLengths();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}.

---

##### `allowedUsers`<sup>Optional</sup> <a name="allowedUsers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsers"></a>

```java
public java.lang.String getAllowedUsers();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}.

---

##### `allowedUsersTemplate`<sup>Optional</sup> <a name="allowedUsersTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowedUsersTemplate"></a>

```java
public java.lang.Object getAllowedUsersTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}.

---

##### `allowHostCertificates`<sup>Optional</sup> <a name="allowHostCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowHostCertificates"></a>

```java
public java.lang.Object getAllowHostCertificates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}.

---

##### `allowSubdomains`<sup>Optional</sup> <a name="allowSubdomains" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowSubdomains"></a>

```java
public java.lang.Object getAllowSubdomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}.

---

##### `allowUserCertificates`<sup>Optional</sup> <a name="allowUserCertificates" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserCertificates"></a>

```java
public java.lang.Object getAllowUserCertificates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}.

---

##### `allowUserKeyIds`<sup>Optional</sup> <a name="allowUserKeyIds" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.allowUserKeyIds"></a>

```java
public java.lang.Object getAllowUserKeyIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}.

---

##### `cidrList`<sup>Optional</sup> <a name="cidrList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.cidrList"></a>

```java
public java.lang.String getCidrList();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}.

---

##### `defaultCriticalOptions`<sup>Optional</sup> <a name="defaultCriticalOptions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultCriticalOptions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultCriticalOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}.

---

##### `defaultExtensions`<sup>Optional</sup> <a name="defaultExtensions" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultExtensions"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefaultExtensions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}.

---

##### `defaultUser`<sup>Optional</sup> <a name="defaultUser" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUser"></a>

```java
public java.lang.String getDefaultUser();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}.

---

##### `defaultUserTemplate`<sup>Optional</sup> <a name="defaultUserTemplate" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.defaultUserTemplate"></a>

```java
public java.lang.Object getDefaultUserTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyIdFormat`<sup>Optional</sup> <a name="keyIdFormat" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.keyIdFormat"></a>

```java
public java.lang.String getKeyIdFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#namespace SshSecretBackendRole#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}.

---

## Classes <a name="Classes" id="Classes"></a>

### SshSecretBackendRoleAllowedUserKeyConfigList <a name="SshSecretBackendRoleAllowedUserKeyConfigList" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ssh_secret_backend_role.SshSecretBackendRoleAllowedUserKeyConfigList;

new SshSecretBackendRoleAllowedUserKeyConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get"></a>

```java
public SshSecretBackendRoleAllowedUserKeyConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a>>

---


### SshSecretBackendRoleAllowedUserKeyConfigOutputReference <a name="SshSecretBackendRoleAllowedUserKeyConfigOutputReference" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.ssh_secret_backend_role.SshSecretBackendRoleAllowedUserKeyConfigOutputReference;

new SshSecretBackendRoleAllowedUserKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengthsInput">lengthsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengths">lengths</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lengthsInput`<sup>Optional</sup> <a name="lengthsInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengthsInput"></a>

```java
public java.util.List<java.lang.Number> getLengthsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `lengths`<sup>Required</sup> <a name="lengths" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.lengths"></a>

```java
public java.util.List<java.lang.Number> getLengths();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.sshSecretBackendRole.SshSecretBackendRoleAllowedUserKeyConfig">SshSecretBackendRoleAllowedUserKeyConfig</a> OR com.hashicorp.cdktf.IResolvable

---



