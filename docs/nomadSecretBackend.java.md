# `nomadSecretBackend` Submodule <a name="`nomadSecretBackend` Submodule" id="@cdktf/provider-vault.nomadSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NomadSecretBackend <a name="NomadSecretBackend" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend vault_nomad_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.nomad_secret_backend.NomadSecretBackend;

NomadSecretBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .address(java.lang.String)
//  .allowedManagedKeys(java.util.List<java.lang.String>)
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .backend(java.lang.String)
//  .caCert(java.lang.String)
//  .clientCert(java.lang.String)
//  .clientKey(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .delegatedAuthAccessors(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean|IResolvable)
//  .externalEntropyAccess(java.lang.Boolean|IResolvable)
//  .forceNoCache(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .listingVisibility(java.lang.String)
//  .local(java.lang.Boolean|IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .maxTokenNameLength(java.lang.Number)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .pluginVersion(java.lang.String)
//  .sealWrap(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | Specifies the address of the Nomad instance, provided as "protocol://host:port" like "http://127.0.0.1:4646". |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The mount path for the Nomad backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.caCert">caCert</a></code> | <code>java.lang.String</code> | CA certificate to use when verifying Nomad server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.clientCert">clientCert</a></code> | <code>java.lang.String</code> | Client certificate used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.clientKey">clientKey</a></code> | <code>java.lang.String</code> | Client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#id NomadSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxTokenNameLength">maxTokenNameLength</a></code> | <code>java.lang.Number</code> | Specifies the maximum length to use for the name of the Nomad token generated with Generate Credential. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Specifies the Nomad Management token to use. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.address"></a>

- *Type:* java.lang.String

Specifies the address of the Nomad instance, provided as "protocol://host:port" like "http://127.0.0.1:4646".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#address NomadSecretBackend#address}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* java.util.List<java.lang.String>

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#allowed_managed_keys NomadSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.allowedResponseHeaders"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#allowed_response_headers NomadSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#audit_non_hmac_request_keys NomadSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#audit_non_hmac_response_keys NomadSecretBackend#audit_non_hmac_response_keys}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The mount path for the Nomad backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#backend NomadSecretBackend#backend}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.caCert"></a>

- *Type:* java.lang.String

CA certificate to use when verifying Nomad server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#ca_cert NomadSecretBackend#ca_cert}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.clientCert"></a>

- *Type:* java.lang.String

Client certificate used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#client_cert NomadSecretBackend#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.clientKey"></a>

- *Type:* java.lang.String

Client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#client_key NomadSecretBackend#client_key}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#default_lease_ttl_seconds NomadSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.delegatedAuthAccessors"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#delegated_auth_accessors NomadSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#description NomadSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#disable_remount NomadSecretBackend#disable_remount}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#external_entropy_access NomadSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.forceNoCache"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#force_no_cache NomadSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#id NomadSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.identityTokenKey"></a>

- *Type:* java.lang.String

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#identity_token_key NomadSecretBackend#identity_token_key}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.listingVisibility"></a>

- *Type:* java.lang.String

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#listing_visibility NomadSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication. Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#local NomadSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#max_lease_ttl_seconds NomadSecretBackend#max_lease_ttl_seconds}

---

##### `maxTokenNameLength`<sup>Optional</sup> <a name="maxTokenNameLength" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxTokenNameLength"></a>

- *Type:* java.lang.Number

Specifies the maximum length to use for the name of the Nomad token generated with Generate Credential.

If omitted, 0 is used and ignored, defaulting to the max value allowed by the Nomad version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#max_token_name_length NomadSecretBackend#max_token_name_length}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#max_ttl NomadSecretBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#namespace NomadSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.options"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#options NomadSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.passthroughRequestHeaders"></a>

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#passthrough_request_headers NomadSecretBackend#passthrough_request_headers}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.pluginVersion"></a>

- *Type:* java.lang.String

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#plugin_version NomadSecretBackend#plugin_version}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.sealWrap"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#seal_wrap NomadSecretBackend#seal_wrap}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Specifies the Nomad Management token to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#token NomadSecretBackend#token}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#ttl NomadSecretBackend#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAllowedManagedKeys">resetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetCaCert">resetCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientCert">resetClientCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDelegatedAuthAccessors">resetDelegatedAuthAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetExternalEntropyAccess">resetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetForceNoCache">resetForceNoCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetIdentityTokenKey">resetIdentityTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTokenNameLength">resetMaxTokenNameLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetPluginVersion">resetPluginVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetSealWrap">resetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetAllowedManagedKeys` <a name="resetAllowedManagedKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAllowedManagedKeys"></a>

```java
public void resetAllowedManagedKeys()
```

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAllowedResponseHeaders"></a>

```java
public void resetAllowedResponseHeaders()
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAuditNonHmacRequestKeys"></a>

```java
public void resetAuditNonHmacRequestKeys()
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetAuditNonHmacResponseKeys"></a>

```java
public void resetAuditNonHmacResponseKeys()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetCaCert` <a name="resetCaCert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetCaCert"></a>

```java
public void resetCaCert()
```

##### `resetClientCert` <a name="resetClientCert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientCert"></a>

```java
public void resetClientCert()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetClientKey"></a>

```java
public void resetClientKey()
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```java
public void resetDefaultLeaseTtlSeconds()
```

##### `resetDelegatedAuthAccessors` <a name="resetDelegatedAuthAccessors" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDelegatedAuthAccessors"></a>

```java
public void resetDelegatedAuthAccessors()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetExternalEntropyAccess` <a name="resetExternalEntropyAccess" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetExternalEntropyAccess"></a>

```java
public void resetExternalEntropyAccess()
```

##### `resetForceNoCache` <a name="resetForceNoCache" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetForceNoCache"></a>

```java
public void resetForceNoCache()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetId"></a>

```java
public void resetId()
```

##### `resetIdentityTokenKey` <a name="resetIdentityTokenKey" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetIdentityTokenKey"></a>

```java
public void resetIdentityTokenKey()
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetListingVisibility"></a>

```java
public void resetListingVisibility()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxLeaseTtlSeconds"></a>

```java
public void resetMaxLeaseTtlSeconds()
```

##### `resetMaxTokenNameLength` <a name="resetMaxTokenNameLength" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTokenNameLength"></a>

```java
public void resetMaxTokenNameLength()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetPassthroughRequestHeaders"></a>

```java
public void resetPassthroughRequestHeaders()
```

##### `resetPluginVersion` <a name="resetPluginVersion" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetPluginVersion"></a>

```java
public void resetPluginVersion()
```

##### `resetSealWrap` <a name="resetSealWrap" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetSealWrap"></a>

```java
public void resetSealWrap()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetToken"></a>

```java
public void resetToken()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NomadSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.nomad_secret_backend.NomadSecretBackend;

NomadSecretBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.nomad_secret_backend.NomadSecretBackend;

NomadSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.nomad_secret_backend.NomadSecretBackend;

NomadSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.nomad_secret_backend.NomadSecretBackend;

NomadSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NomadSecretBackend.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NomadSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NomadSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NomadSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NomadSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedManagedKeysInput">allowedManagedKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCertInput">caCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCertInput">clientCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.delegatedAuthAccessorsInput">delegatedAuthAccessorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.externalEntropyAccessInput">externalEntropyAccessInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forceNoCacheInput">forceNoCacheInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.identityTokenKeyInput">identityTokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.localInput">localInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLengthInput">maxTokenNameLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.pluginVersionInput">pluginVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.sealWrapInput">sealWrapInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCert">caCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCert">clientCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.local">local</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLength">maxTokenNameLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `allowedManagedKeysInput`<sup>Optional</sup> <a name="allowedManagedKeysInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedManagedKeysInput"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedResponseHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `caCertInput`<sup>Optional</sup> <a name="caCertInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCertInput"></a>

```java
public java.lang.String getCaCertInput();
```

- *Type:* java.lang.String

---

##### `clientCertInput`<sup>Optional</sup> <a name="clientCertInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCertInput"></a>

```java
public java.lang.String getClientCertInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getDefaultLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `delegatedAuthAccessorsInput`<sup>Optional</sup> <a name="delegatedAuthAccessorsInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.delegatedAuthAccessorsInput"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemountInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemountInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `externalEntropyAccessInput`<sup>Optional</sup> <a name="externalEntropyAccessInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.externalEntropyAccessInput"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccessInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `forceNoCacheInput`<sup>Optional</sup> <a name="forceNoCacheInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forceNoCacheInput"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCacheInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `identityTokenKeyInput`<sup>Optional</sup> <a name="identityTokenKeyInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.identityTokenKeyInput"></a>

```java
public java.lang.String getIdentityTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.listingVisibilityInput"></a>

```java
public java.lang.String getListingVisibilityInput();
```

- *Type:* java.lang.String

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.localInput"></a>

```java
public java.lang.Boolean|IResolvable getLocalInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getMaxLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `maxTokenNameLengthInput`<sup>Optional</sup> <a name="maxTokenNameLengthInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLengthInput"></a>

```java
public java.lang.Number getMaxTokenNameLengthInput();
```

- *Type:* java.lang.Number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtlInput"></a>

```java
public java.lang.Number getMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.passthroughRequestHeadersInput"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pluginVersionInput`<sup>Optional</sup> <a name="pluginVersionInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.pluginVersionInput"></a>

```java
public java.lang.String getPluginVersionInput();
```

- *Type:* java.lang.String

---

##### `sealWrapInput`<sup>Optional</sup> <a name="sealWrapInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.sealWrapInput"></a>

```java
public java.lang.Boolean|IResolvable getSealWrapInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `allowedManagedKeys`<sup>Required</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedManagedKeys"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `caCert`<sup>Required</sup> <a name="caCert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.caCert"></a>

```java
public java.lang.String getCaCert();
```

- *Type:* java.lang.String

---

##### `clientCert`<sup>Required</sup> <a name="clientCert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientCert"></a>

```java
public java.lang.String getClientCert();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `delegatedAuthAccessors`<sup>Required</sup> <a name="delegatedAuthAccessors" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.delegatedAuthAccessors"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.disableRemount"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemount();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `externalEntropyAccess`<sup>Required</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.externalEntropyAccess"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccess();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `forceNoCache`<sup>Required</sup> <a name="forceNoCache" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.forceNoCache"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCache();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `identityTokenKey`<sup>Required</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `maxTokenNameLength`<sup>Required</sup> <a name="maxTokenNameLength" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTokenNameLength"></a>

```java
public java.lang.Number getMaxTokenNameLength();
```

- *Type:* java.lang.Number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pluginVersion`<sup>Required</sup> <a name="pluginVersion" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.pluginVersion"></a>

```java
public java.lang.String getPluginVersion();
```

- *Type:* java.lang.String

---

##### `sealWrap`<sup>Required</sup> <a name="sealWrap" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.sealWrap"></a>

```java
public java.lang.Boolean|IResolvable getSealWrap();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NomadSecretBackendConfig <a name="NomadSecretBackendConfig" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.nomad_secret_backend.NomadSecretBackendConfig;

NomadSecretBackendConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .address(java.lang.String)
//  .allowedManagedKeys(java.util.List<java.lang.String>)
//  .allowedResponseHeaders(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .backend(java.lang.String)
//  .caCert(java.lang.String)
//  .clientCert(java.lang.String)
//  .clientKey(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .delegatedAuthAccessors(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean|IResolvable)
//  .externalEntropyAccess(java.lang.Boolean|IResolvable)
//  .forceNoCache(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .identityTokenKey(java.lang.String)
//  .listingVisibility(java.lang.String)
//  .local(java.lang.Boolean|IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .maxTokenNameLength(java.lang.Number)
//  .maxTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .passthroughRequestHeaders(java.util.List<java.lang.String>)
//  .pluginVersion(java.lang.String)
//  .sealWrap(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.address">address</a></code> | <code>java.lang.String</code> | Specifies the address of the Nomad instance, provided as "protocol://host:port" like "http://127.0.0.1:4646". |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The mount path for the Nomad backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.caCert">caCert</a></code> | <code>java.lang.String</code> | CA certificate to use when verifying Nomad server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientCert">clientCert</a></code> | <code>java.lang.String</code> | Client certificate used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | Client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.delegatedAuthAccessors">delegatedAuthAccessors</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.forceNoCache">forceNoCache</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set to true, disables caching. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#id NomadSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.identityTokenKey">identityTokenKey</a></code> | <code>java.lang.String</code> | The key to use for signing plugin workload identity tokens. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.listingVisibility">listingVisibility</a></code> | <code>java.lang.String</code> | Specifies whether to show this mount in the UI-specific listing endpoint. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.local">local</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTokenNameLength">maxTokenNameLength</a></code> | <code>java.lang.Number</code> | Specifies the maximum length to use for the name of the Nomad token generated with Generate Credential. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of headers to allow and pass from the request to the plugin. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.pluginVersion">pluginVersion</a></code> | <code>java.lang.String</code> | Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.token">token</a></code> | <code>java.lang.String</code> | Specifies the Nomad Management token to use. |
| <code><a href="#@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Specifies the address of the Nomad instance, provided as "protocol://host:port" like "http://127.0.0.1:4646".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#address NomadSecretBackend#address}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.allowedManagedKeys"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeys();
```

- *Type:* java.util.List<java.lang.String>

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#allowed_managed_keys NomadSecretBackend#allowed_managed_keys}

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.allowedResponseHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedResponseHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#allowed_response_headers NomadSecretBackend#allowed_response_headers}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#audit_non_hmac_request_keys NomadSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#audit_non_hmac_response_keys NomadSecretBackend#audit_non_hmac_response_keys}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The mount path for the Nomad backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#backend NomadSecretBackend#backend}

---

##### `caCert`<sup>Optional</sup> <a name="caCert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.caCert"></a>

```java
public java.lang.String getCaCert();
```

- *Type:* java.lang.String

CA certificate to use when verifying Nomad server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#ca_cert NomadSecretBackend#ca_cert}

---

##### `clientCert`<sup>Optional</sup> <a name="clientCert" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientCert"></a>

```java
public java.lang.String getClientCert();
```

- *Type:* java.lang.String

Client certificate used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#client_cert NomadSecretBackend#client_cert}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

Client key used for Nomad's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#client_key NomadSecretBackend#client_key}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#default_lease_ttl_seconds NomadSecretBackend#default_lease_ttl_seconds}

---

##### `delegatedAuthAccessors`<sup>Optional</sup> <a name="delegatedAuthAccessors" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.delegatedAuthAccessors"></a>

```java
public java.util.List<java.lang.String> getDelegatedAuthAccessors();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#delegated_auth_accessors NomadSecretBackend#delegated_auth_accessors}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#description NomadSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.disableRemount"></a>

```java
public java.lang.Boolean|IResolvable getDisableRemount();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#disable_remount NomadSecretBackend#disable_remount}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.externalEntropyAccess"></a>

```java
public java.lang.Boolean|IResolvable getExternalEntropyAccess();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#external_entropy_access NomadSecretBackend#external_entropy_access}

---

##### `forceNoCache`<sup>Optional</sup> <a name="forceNoCache" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.forceNoCache"></a>

```java
public java.lang.Boolean|IResolvable getForceNoCache();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set to true, disables caching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#force_no_cache NomadSecretBackend#force_no_cache}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#id NomadSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityTokenKey`<sup>Optional</sup> <a name="identityTokenKey" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.identityTokenKey"></a>

```java
public java.lang.String getIdentityTokenKey();
```

- *Type:* java.lang.String

The key to use for signing plugin workload identity tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#identity_token_key NomadSecretBackend#identity_token_key}

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.listingVisibility"></a>

```java
public java.lang.String getListingVisibility();
```

- *Type:* java.lang.String

Specifies whether to show this mount in the UI-specific listing endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#listing_visibility NomadSecretBackend#listing_visibility}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.local"></a>

```java
public java.lang.Boolean|IResolvable getLocal();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication. Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#local NomadSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#max_lease_ttl_seconds NomadSecretBackend#max_lease_ttl_seconds}

---

##### `maxTokenNameLength`<sup>Optional</sup> <a name="maxTokenNameLength" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTokenNameLength"></a>

```java
public java.lang.Number getMaxTokenNameLength();
```

- *Type:* java.lang.Number

Specifies the maximum length to use for the name of the Nomad token generated with Generate Credential.

If omitted, 0 is used and ignored, defaulting to the max value allowed by the Nomad version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#max_token_name_length NomadSecretBackend#max_token_name_length}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#max_ttl NomadSecretBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#namespace NomadSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#options NomadSecretBackend#options}

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.passthroughRequestHeaders"></a>

```java
public java.util.List<java.lang.String> getPassthroughRequestHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of headers to allow and pass from the request to the plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#passthrough_request_headers NomadSecretBackend#passthrough_request_headers}

---

##### `pluginVersion`<sup>Optional</sup> <a name="pluginVersion" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.pluginVersion"></a>

```java
public java.lang.String getPluginVersion();
```

- *Type:* java.lang.String

Specifies the semantic version of the plugin to use, e.g. 'v1.0.0'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#plugin_version NomadSecretBackend#plugin_version}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.sealWrap"></a>

```java
public java.lang.Boolean|IResolvable getSealWrap();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#seal_wrap NomadSecretBackend#seal_wrap}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Specifies the Nomad Management token to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#token NomadSecretBackend#token}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.nomadSecretBackend.NomadSecretBackendConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/nomad_secret_backend#ttl NomadSecretBackend#ttl}

---



