# `certAuthBackendRole` Submodule <a name="`certAuthBackendRole` Submodule" id="@cdktf/provider-vault.certAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertAuthBackendRole <a name="CertAuthBackendRole" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role vault_cert_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.cert_auth_backend_role.CertAuthBackendRole;

CertAuthBackendRole.Builder.create(Construct scope, java.lang.String id)
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
    .certificate(java.lang.String)
    .name(java.lang.String)
//  .allowedCommonNames(java.util.List<java.lang.String>)
//  .allowedDnsSans(java.util.List<java.lang.String>)
//  .allowedEmailSans(java.util.List<java.lang.String>)
//  .allowedNames(java.util.List<java.lang.String>)
//  .allowedOrganizationalUnits(java.util.List<java.lang.String>)
//  .allowedUriSans(java.util.List<java.lang.String>)
//  .backend(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .ocspCaCertificates(java.lang.String)
//  .ocspEnabled(java.lang.Boolean)
//  .ocspEnabled(IResolvable)
//  .ocspFailOpen(java.lang.Boolean)
//  .ocspFailOpen(IResolvable)
//  .ocspQueryAllServers(java.lang.Boolean)
//  .ocspQueryAllServers(IResolvable)
//  .ocspServersOverride(java.util.List<java.lang.String>)
//  .requiredExtensions(java.util.List<java.lang.String>)
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
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedCommonNames">allowedCommonNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedDnsSans">allowedDnsSans</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedEmailSans">allowedEmailSans</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedNames">allowedNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedOrganizationalUnits">allowedOrganizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedUriSans">allowedUriSans</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.ocspCaCertificates">ocspCaCertificates</a></code> | <code>java.lang.String</code> | Any additional CA certificates needed to verify OCSP responses. Provided as base64 encoded PEM data. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.ocspEnabled">ocspEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled, validate certificates' revocation status using OCSP. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.ocspFailOpen">ocspFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true and an OCSP response cannot be fetched or is of an unknown status, the login will proceed as if the certificate has not been revoked. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.ocspQueryAllServers">ocspQueryAllServers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, rather than accepting the first successful OCSP response, query all servers and consider the certificate valid only if all servers agree. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.ocspServersOverride">ocspServersOverride</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list of OCSP server addresses. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.requiredExtensions">requiredExtensions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}.

---

##### `allowedCommonNames`<sup>Optional</sup> <a name="allowedCommonNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedCommonNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}.

---

##### `allowedDnsSans`<sup>Optional</sup> <a name="allowedDnsSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedDnsSans"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}.

---

##### `allowedEmailSans`<sup>Optional</sup> <a name="allowedEmailSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedEmailSans"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}.

---

##### `allowedNames`<sup>Optional</sup> <a name="allowedNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedNames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}.

---

##### `allowedOrganizationalUnits`<sup>Optional</sup> <a name="allowedOrganizationalUnits" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedOrganizationalUnits"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}.

---

##### `allowedUriSans`<sup>Optional</sup> <a name="allowedUriSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.allowedUriSans"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#namespace CertAuthBackendRole#namespace}

---

##### `ocspCaCertificates`<sup>Optional</sup> <a name="ocspCaCertificates" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.ocspCaCertificates"></a>

- *Type:* java.lang.String

Any additional CA certificates needed to verify OCSP responses. Provided as base64 encoded PEM data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#ocsp_ca_certificates CertAuthBackendRole#ocsp_ca_certificates}

---

##### `ocspEnabled`<sup>Optional</sup> <a name="ocspEnabled" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.ocspEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled, validate certificates' revocation status using OCSP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#ocsp_enabled CertAuthBackendRole#ocsp_enabled}

---

##### `ocspFailOpen`<sup>Optional</sup> <a name="ocspFailOpen" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.ocspFailOpen"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true and an OCSP response cannot be fetched or is of an unknown status, the login will proceed as if the certificate has not been revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#ocsp_fail_open CertAuthBackendRole#ocsp_fail_open}

---

##### `ocspQueryAllServers`<sup>Optional</sup> <a name="ocspQueryAllServers" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.ocspQueryAllServers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, rather than accepting the first successful OCSP response, query all servers and consider the certificate valid only if all servers agree.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#ocsp_query_all_servers CertAuthBackendRole#ocsp_query_all_servers}

---

##### `ocspServersOverride`<sup>Optional</sup> <a name="ocspServersOverride" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.ocspServersOverride"></a>

- *Type:* java.util.List<java.lang.String>

A comma-separated list of OCSP server addresses.

If unset, the OCSP server is determined from the AuthorityInformationAccess extension on the certificate being inspected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#ocsp_servers_override CertAuthBackendRole#ocsp_servers_override}

---

##### `requiredExtensions`<sup>Optional</sup> <a name="requiredExtensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.requiredExtensions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}.

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_bound_cidrs CertAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_explicit_max_ttl CertAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_max_ttl CertAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_no_default_policy CertAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_num_uses CertAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_period CertAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_policies CertAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_ttl CertAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_type CertAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedCommonNames">resetAllowedCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedDnsSans">resetAllowedDnsSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedEmailSans">resetAllowedEmailSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedNames">resetAllowedNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedOrganizationalUnits">resetAllowedOrganizationalUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedUriSans">resetAllowedUriSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOcspCaCertificates">resetOcspCaCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOcspEnabled">resetOcspEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOcspFailOpen">resetOcspFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOcspQueryAllServers">resetOcspQueryAllServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOcspServersOverride">resetOcspServersOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetRequiredExtensions">resetRequiredExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedCommonNames` <a name="resetAllowedCommonNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedCommonNames"></a>

```java
public void resetAllowedCommonNames()
```

##### `resetAllowedDnsSans` <a name="resetAllowedDnsSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedDnsSans"></a>

```java
public void resetAllowedDnsSans()
```

##### `resetAllowedEmailSans` <a name="resetAllowedEmailSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedEmailSans"></a>

```java
public void resetAllowedEmailSans()
```

##### `resetAllowedNames` <a name="resetAllowedNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedNames"></a>

```java
public void resetAllowedNames()
```

##### `resetAllowedOrganizationalUnits` <a name="resetAllowedOrganizationalUnits" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedOrganizationalUnits"></a>

```java
public void resetAllowedOrganizationalUnits()
```

##### `resetAllowedUriSans` <a name="resetAllowedUriSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetAllowedUriSans"></a>

```java
public void resetAllowedUriSans()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOcspCaCertificates` <a name="resetOcspCaCertificates" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOcspCaCertificates"></a>

```java
public void resetOcspCaCertificates()
```

##### `resetOcspEnabled` <a name="resetOcspEnabled" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOcspEnabled"></a>

```java
public void resetOcspEnabled()
```

##### `resetOcspFailOpen` <a name="resetOcspFailOpen" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOcspFailOpen"></a>

```java
public void resetOcspFailOpen()
```

##### `resetOcspQueryAllServers` <a name="resetOcspQueryAllServers" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOcspQueryAllServers"></a>

```java
public void resetOcspQueryAllServers()
```

##### `resetOcspServersOverride` <a name="resetOcspServersOverride" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetOcspServersOverride"></a>

```java
public void resetOcspServersOverride()
```

##### `resetRequiredExtensions` <a name="resetRequiredExtensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetRequiredExtensions"></a>

```java
public void resetRequiredExtensions()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.resetTokenType"></a>

```java
public void resetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CertAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.cert_auth_backend_role.CertAuthBackendRole;

CertAuthBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.cert_auth_backend_role.CertAuthBackendRole;

CertAuthBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.cert_auth_backend_role.CertAuthBackendRole;

CertAuthBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.cert_auth_backend_role.CertAuthBackendRole;

CertAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CertAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CertAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CertAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CertAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CertAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNamesInput">allowedCommonNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSansInput">allowedDnsSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSansInput">allowedEmailSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNamesInput">allowedNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnitsInput">allowedOrganizationalUnitsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSansInput">allowedUriSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspCaCertificatesInput">ocspCaCertificatesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspEnabledInput">ocspEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspFailOpenInput">ocspFailOpenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspQueryAllServersInput">ocspQueryAllServersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspServersOverrideInput">ocspServersOverrideInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensionsInput">requiredExtensionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNames">allowedCommonNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSans">allowedDnsSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSans">allowedEmailSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNames">allowedNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnits">allowedOrganizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSans">allowedUriSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspCaCertificates">ocspCaCertificates</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspEnabled">ocspEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspFailOpen">ocspFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspQueryAllServers">ocspQueryAllServers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspServersOverride">ocspServersOverride</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensions">requiredExtensions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedCommonNamesInput`<sup>Optional</sup> <a name="allowedCommonNamesInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNamesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedCommonNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDnsSansInput`<sup>Optional</sup> <a name="allowedDnsSansInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSansInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDnsSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEmailSansInput`<sup>Optional</sup> <a name="allowedEmailSansInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSansInput"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedNamesInput`<sup>Optional</sup> <a name="allowedNamesInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNamesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrganizationalUnitsInput`<sup>Optional</sup> <a name="allowedOrganizationalUnitsInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnitsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOrganizationalUnitsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedUriSansInput`<sup>Optional</sup> <a name="allowedUriSansInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSansInput"></a>

```java
public java.util.List<java.lang.String> getAllowedUriSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `ocspCaCertificatesInput`<sup>Optional</sup> <a name="ocspCaCertificatesInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspCaCertificatesInput"></a>

```java
public java.lang.String getOcspCaCertificatesInput();
```

- *Type:* java.lang.String

---

##### `ocspEnabledInput`<sup>Optional</sup> <a name="ocspEnabledInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspEnabledInput"></a>

```java
public java.lang.Object getOcspEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspFailOpenInput`<sup>Optional</sup> <a name="ocspFailOpenInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspFailOpenInput"></a>

```java
public java.lang.Object getOcspFailOpenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspQueryAllServersInput`<sup>Optional</sup> <a name="ocspQueryAllServersInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspQueryAllServersInput"></a>

```java
public java.lang.Object getOcspQueryAllServersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspServersOverrideInput`<sup>Optional</sup> <a name="ocspServersOverrideInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspServersOverrideInput"></a>

```java
public java.util.List<java.lang.String> getOcspServersOverrideInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredExtensionsInput`<sup>Optional</sup> <a name="requiredExtensionsInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensionsInput"></a>

```java
public java.util.List<java.lang.String> getRequiredExtensionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Object getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `allowedCommonNames`<sup>Required</sup> <a name="allowedCommonNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedCommonNames"></a>

```java
public java.util.List<java.lang.String> getAllowedCommonNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDnsSans`<sup>Required</sup> <a name="allowedDnsSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedDnsSans"></a>

```java
public java.util.List<java.lang.String> getAllowedDnsSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEmailSans`<sup>Required</sup> <a name="allowedEmailSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedEmailSans"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedNames`<sup>Required</sup> <a name="allowedNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedNames"></a>

```java
public java.util.List<java.lang.String> getAllowedNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrganizationalUnits`<sup>Required</sup> <a name="allowedOrganizationalUnits" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedOrganizationalUnits"></a>

```java
public java.util.List<java.lang.String> getAllowedOrganizationalUnits();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedUriSans`<sup>Required</sup> <a name="allowedUriSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.allowedUriSans"></a>

```java
public java.util.List<java.lang.String> getAllowedUriSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `ocspCaCertificates`<sup>Required</sup> <a name="ocspCaCertificates" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspCaCertificates"></a>

```java
public java.lang.String getOcspCaCertificates();
```

- *Type:* java.lang.String

---

##### `ocspEnabled`<sup>Required</sup> <a name="ocspEnabled" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspEnabled"></a>

```java
public java.lang.Object getOcspEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspFailOpen`<sup>Required</sup> <a name="ocspFailOpen" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspFailOpen"></a>

```java
public java.lang.Object getOcspFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspQueryAllServers`<sup>Required</sup> <a name="ocspQueryAllServers" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspQueryAllServers"></a>

```java
public java.lang.Object getOcspQueryAllServers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspServersOverride`<sup>Required</sup> <a name="ocspServersOverride" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.ocspServersOverride"></a>

```java
public java.util.List<java.lang.String> getOcspServersOverride();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requiredExtensions`<sup>Required</sup> <a name="requiredExtensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.requiredExtensions"></a>

```java
public java.util.List<java.lang.String> getRequiredExtensions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertAuthBackendRoleConfig <a name="CertAuthBackendRoleConfig" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.cert_auth_backend_role.CertAuthBackendRoleConfig;

CertAuthBackendRoleConfig.builder()
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
    .certificate(java.lang.String)
    .name(java.lang.String)
//  .allowedCommonNames(java.util.List<java.lang.String>)
//  .allowedDnsSans(java.util.List<java.lang.String>)
//  .allowedEmailSans(java.util.List<java.lang.String>)
//  .allowedNames(java.util.List<java.lang.String>)
//  .allowedOrganizationalUnits(java.util.List<java.lang.String>)
//  .allowedUriSans(java.util.List<java.lang.String>)
//  .backend(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .ocspCaCertificates(java.lang.String)
//  .ocspEnabled(java.lang.Boolean)
//  .ocspEnabled(IResolvable)
//  .ocspFailOpen(java.lang.Boolean)
//  .ocspFailOpen(IResolvable)
//  .ocspQueryAllServers(java.lang.Boolean)
//  .ocspQueryAllServers(IResolvable)
//  .ocspServersOverride(java.util.List<java.lang.String>)
//  .requiredExtensions(java.util.List<java.lang.String>)
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
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedCommonNames">allowedCommonNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedDnsSans">allowedDnsSans</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedEmailSans">allowedEmailSans</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedNames">allowedNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedOrganizationalUnits">allowedOrganizationalUnits</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedUriSans">allowedUriSans</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.ocspCaCertificates">ocspCaCertificates</a></code> | <code>java.lang.String</code> | Any additional CA certificates needed to verify OCSP responses. Provided as base64 encoded PEM data. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.ocspEnabled">ocspEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled, validate certificates' revocation status using OCSP. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.ocspFailOpen">ocspFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true and an OCSP response cannot be fetched or is of an unknown status, the login will proceed as if the certificate has not been revoked. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.ocspQueryAllServers">ocspQueryAllServers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, rather than accepting the first successful OCSP response, query all servers and consider the certificate valid only if all servers agree. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.ocspServersOverride">ocspServersOverride</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list of OCSP server addresses. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.requiredExtensions">requiredExtensions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}.

---

##### `allowedCommonNames`<sup>Optional</sup> <a name="allowedCommonNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedCommonNames"></a>

```java
public java.util.List<java.lang.String> getAllowedCommonNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}.

---

##### `allowedDnsSans`<sup>Optional</sup> <a name="allowedDnsSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedDnsSans"></a>

```java
public java.util.List<java.lang.String> getAllowedDnsSans();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}.

---

##### `allowedEmailSans`<sup>Optional</sup> <a name="allowedEmailSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedEmailSans"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailSans();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}.

---

##### `allowedNames`<sup>Optional</sup> <a name="allowedNames" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedNames"></a>

```java
public java.util.List<java.lang.String> getAllowedNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}.

---

##### `allowedOrganizationalUnits`<sup>Optional</sup> <a name="allowedOrganizationalUnits" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedOrganizationalUnits"></a>

```java
public java.util.List<java.lang.String> getAllowedOrganizationalUnits();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}.

---

##### `allowedUriSans`<sup>Optional</sup> <a name="allowedUriSans" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.allowedUriSans"></a>

```java
public java.util.List<java.lang.String> getAllowedUriSans();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#namespace CertAuthBackendRole#namespace}

---

##### `ocspCaCertificates`<sup>Optional</sup> <a name="ocspCaCertificates" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.ocspCaCertificates"></a>

```java
public java.lang.String getOcspCaCertificates();
```

- *Type:* java.lang.String

Any additional CA certificates needed to verify OCSP responses. Provided as base64 encoded PEM data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#ocsp_ca_certificates CertAuthBackendRole#ocsp_ca_certificates}

---

##### `ocspEnabled`<sup>Optional</sup> <a name="ocspEnabled" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.ocspEnabled"></a>

```java
public java.lang.Object getOcspEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled, validate certificates' revocation status using OCSP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#ocsp_enabled CertAuthBackendRole#ocsp_enabled}

---

##### `ocspFailOpen`<sup>Optional</sup> <a name="ocspFailOpen" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.ocspFailOpen"></a>

```java
public java.lang.Object getOcspFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true and an OCSP response cannot be fetched or is of an unknown status, the login will proceed as if the certificate has not been revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#ocsp_fail_open CertAuthBackendRole#ocsp_fail_open}

---

##### `ocspQueryAllServers`<sup>Optional</sup> <a name="ocspQueryAllServers" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.ocspQueryAllServers"></a>

```java
public java.lang.Object getOcspQueryAllServers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, rather than accepting the first successful OCSP response, query all servers and consider the certificate valid only if all servers agree.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#ocsp_query_all_servers CertAuthBackendRole#ocsp_query_all_servers}

---

##### `ocspServersOverride`<sup>Optional</sup> <a name="ocspServersOverride" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.ocspServersOverride"></a>

```java
public java.util.List<java.lang.String> getOcspServersOverride();
```

- *Type:* java.util.List<java.lang.String>

A comma-separated list of OCSP server addresses.

If unset, the OCSP server is determined from the AuthorityInformationAccess extension on the certificate being inspected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#ocsp_servers_override CertAuthBackendRole#ocsp_servers_override}

---

##### `requiredExtensions`<sup>Optional</sup> <a name="requiredExtensions" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.requiredExtensions"></a>

```java
public java.util.List<java.lang.String> getRequiredExtensions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}.

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_bound_cidrs CertAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_explicit_max_ttl CertAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_max_ttl CertAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_no_default_policy CertAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_num_uses CertAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_period CertAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_policies CertAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_ttl CertAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.certAuthBackendRole.CertAuthBackendRoleConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/cert_auth_backend_role#token_type CertAuthBackendRole#token_type}

---



