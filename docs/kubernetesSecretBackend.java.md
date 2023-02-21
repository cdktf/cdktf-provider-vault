# `kubernetesSecretBackend` Submodule <a name="`kubernetesSecretBackend` Submodule" id="@cdktf/provider-vault.kubernetesSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesSecretBackend <a name="KubernetesSecretBackend" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend vault_kubernetes_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend.KubernetesSecretBackend;

KubernetesSecretBackend.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .path(java.lang.String)
//  .allowedManagedKeys(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .description(java.lang.String)
//  .disableLocalCaJwt(java.lang.Boolean)
//  .disableLocalCaJwt(IResolvable)
//  .externalEntropyAccess(java.lang.Boolean)
//  .externalEntropyAccess(IResolvable)
//  .id(java.lang.String)
//  .kubernetesCaCert(java.lang.String)
//  .kubernetesHost(java.lang.String)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .sealWrap(java.lang.Boolean)
//  .sealWrap(IResolvable)
//  .serviceAccountJwt(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#id KubernetesSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | The Kubernetes API URL to connect to. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.serviceAccountJwt">serviceAccountJwt</a></code> | <code>java.lang.String</code> | The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#path KubernetesSecretBackend#path}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.allowedManagedKeys"></a>

- *Type:* java.util.List<java.lang.String>

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#allowed_managed_keys KubernetesSecretBackend#allowed_managed_keys}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.auditNonHmacRequestKeys"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#audit_non_hmac_request_keys KubernetesSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.auditNonHmacResponseKeys"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#audit_non_hmac_response_keys KubernetesSecretBackend#audit_non_hmac_response_keys}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#default_lease_ttl_seconds KubernetesSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#description KubernetesSecretBackend#description}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.disableLocalCaJwt"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#disable_local_ca_jwt KubernetesSecretBackend#disable_local_ca_jwt}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.externalEntropyAccess"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#external_entropy_access KubernetesSecretBackend#external_entropy_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#id KubernetesSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.kubernetesCaCert"></a>

- *Type:* java.lang.String

A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate.

Defaults to the local pod’s CA if found, or otherwise the host's root CA set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#kubernetes_ca_cert KubernetesSecretBackend#kubernetes_ca_cert}

---

##### `kubernetesHost`<sup>Optional</sup> <a name="kubernetesHost" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.kubernetesHost"></a>

- *Type:* java.lang.String

The Kubernetes API URL to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#kubernetes_host KubernetesSecretBackend#kubernetes_host}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.local"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#local KubernetesSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#max_lease_ttl_seconds KubernetesSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#namespace KubernetesSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.options"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#options KubernetesSecretBackend#options}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.sealWrap"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#seal_wrap KubernetesSecretBackend#seal_wrap}

---

##### `serviceAccountJwt`<sup>Optional</sup> <a name="serviceAccountJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.Initializer.parameter.serviceAccountJwt"></a>

- *Type:* java.lang.String

The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

Defaults to the local pod’s JWT if found.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#service_account_jwt KubernetesSecretBackend#service_account_jwt}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedManagedKeys">resetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDisableLocalCaJwt">resetDisableLocalCaJwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetExternalEntropyAccess">resetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesCaCert">resetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesHost">resetKubernetesHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetSealWrap">resetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwt">resetServiceAccountJwt</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowedManagedKeys` <a name="resetAllowedManagedKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAllowedManagedKeys"></a>

```java
public void resetAllowedManagedKeys()
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacRequestKeys"></a>

```java
public void resetAuditNonHmacRequestKeys()
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetAuditNonHmacResponseKeys"></a>

```java
public void resetAuditNonHmacResponseKeys()
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```java
public void resetDefaultLeaseTtlSeconds()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableLocalCaJwt` <a name="resetDisableLocalCaJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetDisableLocalCaJwt"></a>

```java
public void resetDisableLocalCaJwt()
```

##### `resetExternalEntropyAccess` <a name="resetExternalEntropyAccess" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetExternalEntropyAccess"></a>

```java
public void resetExternalEntropyAccess()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetId"></a>

```java
public void resetId()
```

##### `resetKubernetesCaCert` <a name="resetKubernetesCaCert" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesCaCert"></a>

```java
public void resetKubernetesCaCert()
```

##### `resetKubernetesHost` <a name="resetKubernetesHost" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetKubernetesHost"></a>

```java
public void resetKubernetesHost()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetMaxLeaseTtlSeconds"></a>

```java
public void resetMaxLeaseTtlSeconds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetSealWrap` <a name="resetSealWrap" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetSealWrap"></a>

```java
public void resetSealWrap()
```

##### `resetServiceAccountJwt` <a name="resetServiceAccountJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.resetServiceAccountJwt"></a>

```java
public void resetServiceAccountJwt()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend.KubernetesSecretBackend;

KubernetesSecretBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend.KubernetesSecretBackend;

KubernetesSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend.KubernetesSecretBackend;

KubernetesSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeysInput">allowedManagedKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwtInput">disableLocalCaJwtInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccessInput">externalEntropyAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCertInput">kubernetesCaCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHostInput">kubernetesHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.localInput">localInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrapInput">sealWrapInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtInput">serviceAccountJwtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwt">serviceAccountJwt</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `allowedManagedKeysInput`<sup>Optional</sup> <a name="allowedManagedKeysInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeysInput"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getDefaultLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableLocalCaJwtInput`<sup>Optional</sup> <a name="disableLocalCaJwtInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwtInput"></a>

```java
public java.lang.Object getDisableLocalCaJwtInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEntropyAccessInput`<sup>Optional</sup> <a name="externalEntropyAccessInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccessInput"></a>

```java
public java.lang.Object getExternalEntropyAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubernetesCaCertInput`<sup>Optional</sup> <a name="kubernetesCaCertInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCertInput"></a>

```java
public java.lang.String getKubernetesCaCertInput();
```

- *Type:* java.lang.String

---

##### `kubernetesHostInput`<sup>Optional</sup> <a name="kubernetesHostInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHostInput"></a>

```java
public java.lang.String getKubernetesHostInput();
```

- *Type:* java.lang.String

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.localInput"></a>

```java
public java.lang.Object getLocalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getMaxLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `sealWrapInput`<sup>Optional</sup> <a name="sealWrapInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrapInput"></a>

```java
public java.lang.Object getSealWrapInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceAccountJwtInput`<sup>Optional</sup> <a name="serviceAccountJwtInput" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwtInput"></a>

```java
public java.lang.String getServiceAccountJwtInput();
```

- *Type:* java.lang.String

---

##### `allowedManagedKeys`<sup>Required</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.allowedManagedKeys"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableLocalCaJwt`<sup>Required</sup> <a name="disableLocalCaJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.disableLocalCaJwt"></a>

```java
public java.lang.Object getDisableLocalCaJwt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalEntropyAccess`<sup>Required</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.externalEntropyAccess"></a>

```java
public java.lang.Object getExternalEntropyAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesCaCert`<sup>Required</sup> <a name="kubernetesCaCert" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesCaCert"></a>

```java
public java.lang.String getKubernetesCaCert();
```

- *Type:* java.lang.String

---

##### `kubernetesHost`<sup>Required</sup> <a name="kubernetesHost" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.kubernetesHost"></a>

```java
public java.lang.String getKubernetesHost();
```

- *Type:* java.lang.String

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `sealWrap`<sup>Required</sup> <a name="sealWrap" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.sealWrap"></a>

```java
public java.lang.Object getSealWrap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serviceAccountJwt`<sup>Required</sup> <a name="serviceAccountJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.serviceAccountJwt"></a>

```java
public java.lang.String getServiceAccountJwt();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesSecretBackendConfig <a name="KubernetesSecretBackendConfig" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend.KubernetesSecretBackendConfig;

KubernetesSecretBackendConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .path(java.lang.String)
//  .allowedManagedKeys(java.util.List<java.lang.String>)
//  .auditNonHmacRequestKeys(java.util.List<java.lang.String>)
//  .auditNonHmacResponseKeys(java.util.List<java.lang.String>)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .description(java.lang.String)
//  .disableLocalCaJwt(java.lang.Boolean)
//  .disableLocalCaJwt(IResolvable)
//  .externalEntropyAccess(java.lang.Boolean)
//  .externalEntropyAccess(IResolvable)
//  .id(java.lang.String)
//  .kubernetesCaCert(java.lang.String)
//  .kubernetesHost(java.lang.String)
//  .local(java.lang.Boolean)
//  .local(IResolvable)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .sealWrap(java.lang.Boolean)
//  .sealWrap(IResolvable)
//  .serviceAccountJwt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | Where the secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>java.util.List<java.lang.String></code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.disableLocalCaJwt">disableLocalCaJwt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#id KubernetesSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesCaCert">kubernetesCaCert</a></code> | <code>java.lang.String</code> | A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesHost">kubernetesHost</a></code> | <code>java.lang.String</code> | The Kubernetes API URL to connect to. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.local">local</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.sealWrap">sealWrap</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwt">serviceAccountJwt</a></code> | <code>java.lang.String</code> | The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Where the secret backend will be mounted.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#path KubernetesSecretBackend#path}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.allowedManagedKeys"></a>

```java
public java.util.List<java.lang.String> getAllowedManagedKeys();
```

- *Type:* java.util.List<java.lang.String>

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#allowed_managed_keys KubernetesSecretBackend#allowed_managed_keys}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacRequestKeys();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#audit_non_hmac_request_keys KubernetesSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```java
public java.util.List<java.lang.String> getAuditNonHmacResponseKeys();
```

- *Type:* java.util.List<java.lang.String>

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#audit_non_hmac_response_keys KubernetesSecretBackend#audit_non_hmac_response_keys}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#default_lease_ttl_seconds KubernetesSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#description KubernetesSecretBackend#description}

---

##### `disableLocalCaJwt`<sup>Optional</sup> <a name="disableLocalCaJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.disableLocalCaJwt"></a>

```java
public java.lang.Object getDisableLocalCaJwt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#disable_local_ca_jwt KubernetesSecretBackend#disable_local_ca_jwt}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.externalEntropyAccess"></a>

```java
public java.lang.Object getExternalEntropyAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#external_entropy_access KubernetesSecretBackend#external_entropy_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#id KubernetesSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesCaCert`<sup>Optional</sup> <a name="kubernetesCaCert" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesCaCert"></a>

```java
public java.lang.String getKubernetesCaCert();
```

- *Type:* java.lang.String

A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate.

Defaults to the local pod’s CA if found, or otherwise the host's root CA set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#kubernetes_ca_cert KubernetesSecretBackend#kubernetes_ca_cert}

---

##### `kubernetesHost`<sup>Optional</sup> <a name="kubernetesHost" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.kubernetesHost"></a>

```java
public java.lang.String getKubernetesHost();
```

- *Type:* java.lang.String

The Kubernetes API URL to connect to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#kubernetes_host KubernetesSecretBackend#kubernetes_host}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.local"></a>

```java
public java.lang.Object getLocal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#local KubernetesSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#max_lease_ttl_seconds KubernetesSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#namespace KubernetesSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#options KubernetesSecretBackend#options}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.sealWrap"></a>

```java
public java.lang.Object getSealWrap();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#seal_wrap KubernetesSecretBackend#seal_wrap}

---

##### `serviceAccountJwt`<sup>Optional</sup> <a name="serviceAccountJwt" id="@cdktf/provider-vault.kubernetesSecretBackend.KubernetesSecretBackendConfig.property.serviceAccountJwt"></a>

```java
public java.lang.String getServiceAccountJwt();
```

- *Type:* java.lang.String

The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials.

Defaults to the local pod’s JWT if found.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kubernetes_secret_backend#service_account_jwt KubernetesSecretBackend#service_account_jwt}

---



