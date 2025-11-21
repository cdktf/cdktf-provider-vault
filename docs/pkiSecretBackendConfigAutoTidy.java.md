# `pkiSecretBackendConfigAutoTidy` Submodule <a name="`pkiSecretBackendConfigAutoTidy` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigAutoTidy <a name="PkiSecretBackendConfigAutoTidy" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy vault_pki_secret_backend_config_auto_tidy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_auto_tidy.PkiSecretBackendConfigAutoTidy;

PkiSecretBackendConfigAutoTidy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
//  .acmeAccountSafetyBuffer(java.lang.String)
//  .id(java.lang.String)
//  .intervalDuration(java.lang.String)
//  .issuerSafetyBuffer(java.lang.String)
//  .maintainStoredCertificateCounts(java.lang.Boolean|IResolvable)
//  .maxStartupBackoffDuration(java.lang.String)
//  .minStartupBackoffDuration(java.lang.String)
//  .namespace(java.lang.String)
//  .pauseDuration(java.lang.String)
//  .publishStoredCertificateCountMetrics(java.lang.Boolean|IResolvable)
//  .revocationQueueSafetyBuffer(java.lang.String)
//  .safetyBuffer(java.lang.String)
//  .tidyAcme(java.lang.Boolean|IResolvable)
//  .tidyCertMetadata(java.lang.Boolean|IResolvable)
//  .tidyCertStore(java.lang.Boolean|IResolvable)
//  .tidyCmpv2NonceStore(java.lang.Boolean|IResolvable)
//  .tidyCrossClusterRevokedCerts(java.lang.Boolean|IResolvable)
//  .tidyExpiredIssuers(java.lang.Boolean|IResolvable)
//  .tidyMoveLegacyCaBundle(java.lang.Boolean|IResolvable)
//  .tidyRevocationQueue(java.lang.Boolean|IResolvable)
//  .tidyRevokedCertIssuerAssociations(java.lang.Boolean|IResolvable)
//  .tidyRevokedCerts(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether automatic tidy is enabled or not. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.acmeAccountSafetyBuffer">acmeAccountSafetyBuffer</a></code> | <code>java.lang.String</code> | The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.intervalDuration">intervalDuration</a></code> | <code>java.lang.String</code> | Interval at which to run an auto-tidy operation. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.issuerSafetyBuffer">issuerSafetyBuffer</a></code> | <code>java.lang.String</code> | The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.maintainStoredCertificateCounts">maintainStoredCertificateCounts</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.maxStartupBackoffDuration">maxStartupBackoffDuration</a></code> | <code>java.lang.String</code> | The maximum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.minStartupBackoffDuration">minStartupBackoffDuration</a></code> | <code>java.lang.String</code> | The minimum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.pauseDuration">pauseDuration</a></code> | <code>java.lang.String</code> | The amount of time to wait between processing certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.publishStoredCertificateCountMetrics">publishStoredCertificateCountMetrics</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | This configures whether the stored certificate count is published to the metrics consumer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.revocationQueueSafetyBuffer">revocationQueueSafetyBuffer</a></code> | <code>java.lang.String</code> | The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.safetyBuffer">safetyBuffer</a></code> | <code>java.lang.String</code> | The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyAcme">tidyAcme</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to enable tidying ACME accounts, orders and authorizations. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCertMetadata">tidyCertMetadata</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to enable tidying up certificate metadata. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCertStore">tidyCertStore</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to enable tidying up the certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCmpv2NonceStore">tidyCmpv2NonceStore</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to enable tidying up the CMPv2 nonce store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCrossClusterRevokedCerts">tidyCrossClusterRevokedCerts</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to enable tidying up the cross-cluster revoked certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyExpiredIssuers">tidyExpiredIssuers</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to automatically remove expired issuers past the issuer_safety_buffer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyMoveLegacyCaBundle">tidyMoveLegacyCaBundle</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevocationQueue">tidyRevocationQueue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevokedCertIssuerAssociations">tidyRevokedCertIssuerAssociations</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to validate issuer associations on revocation entries. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevokedCerts">tidyRevokedCerts</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to remove all invalid and expired certificates from storage. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#backend PkiSecretBackendConfigAutoTidy#backend}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether automatic tidy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#enabled PkiSecretBackendConfigAutoTidy#enabled}

---

##### `acmeAccountSafetyBuffer`<sup>Optional</sup> <a name="acmeAccountSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.acmeAccountSafetyBuffer"></a>

- *Type:* java.lang.String

The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#acme_account_safety_buffer PkiSecretBackendConfigAutoTidy#acme_account_safety_buffer}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `intervalDuration`<sup>Optional</sup> <a name="intervalDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.intervalDuration"></a>

- *Type:* java.lang.String

Interval at which to run an auto-tidy operation.

This is the time between tidy invocations (after one finishes to the start of the next).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#interval_duration PkiSecretBackendConfigAutoTidy#interval_duration}

---

##### `issuerSafetyBuffer`<sup>Optional</sup> <a name="issuerSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.issuerSafetyBuffer"></a>

- *Type:* java.lang.String

The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#issuer_safety_buffer PkiSecretBackendConfigAutoTidy#issuer_safety_buffer}

---

##### `maintainStoredCertificateCounts`<sup>Optional</sup> <a name="maintainStoredCertificateCounts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.maintainStoredCertificateCounts"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#maintain_stored_certificate_counts PkiSecretBackendConfigAutoTidy#maintain_stored_certificate_counts}

---

##### `maxStartupBackoffDuration`<sup>Optional</sup> <a name="maxStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.maxStartupBackoffDuration"></a>

- *Type:* java.lang.String

The maximum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#max_startup_backoff_duration PkiSecretBackendConfigAutoTidy#max_startup_backoff_duration}

---

##### `minStartupBackoffDuration`<sup>Optional</sup> <a name="minStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.minStartupBackoffDuration"></a>

- *Type:* java.lang.String

The minimum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#min_startup_backoff_duration PkiSecretBackendConfigAutoTidy#min_startup_backoff_duration}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#namespace PkiSecretBackendConfigAutoTidy#namespace}

---

##### `pauseDuration`<sup>Optional</sup> <a name="pauseDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.pauseDuration"></a>

- *Type:* java.lang.String

The amount of time to wait between processing certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#pause_duration PkiSecretBackendConfigAutoTidy#pause_duration}

---

##### `publishStoredCertificateCountMetrics`<sup>Optional</sup> <a name="publishStoredCertificateCountMetrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.publishStoredCertificateCountMetrics"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

This configures whether the stored certificate count is published to the metrics consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#publish_stored_certificate_count_metrics PkiSecretBackendConfigAutoTidy#publish_stored_certificate_count_metrics}

---

##### `revocationQueueSafetyBuffer`<sup>Optional</sup> <a name="revocationQueueSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.revocationQueueSafetyBuffer"></a>

- *Type:* java.lang.String

The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#revocation_queue_safety_buffer PkiSecretBackendConfigAutoTidy#revocation_queue_safety_buffer}

---

##### `safetyBuffer`<sup>Optional</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.safetyBuffer"></a>

- *Type:* java.lang.String

The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#safety_buffer PkiSecretBackendConfigAutoTidy#safety_buffer}

---

##### `tidyAcme`<sup>Optional</sup> <a name="tidyAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyAcme"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to enable tidying ACME accounts, orders and authorizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_acme PkiSecretBackendConfigAutoTidy#tidy_acme}

---

##### `tidyCertMetadata`<sup>Optional</sup> <a name="tidyCertMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCertMetadata"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to enable tidying up certificate metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_metadata PkiSecretBackendConfigAutoTidy#tidy_cert_metadata}

---

##### `tidyCertStore`<sup>Optional</sup> <a name="tidyCertStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCertStore"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to enable tidying up the certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_store PkiSecretBackendConfigAutoTidy#tidy_cert_store}

---

##### `tidyCmpv2NonceStore`<sup>Optional</sup> <a name="tidyCmpv2NonceStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCmpv2NonceStore"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to enable tidying up the CMPv2 nonce store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cmpv2_nonce_store PkiSecretBackendConfigAutoTidy#tidy_cmpv2_nonce_store}

---

##### `tidyCrossClusterRevokedCerts`<sup>Optional</sup> <a name="tidyCrossClusterRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCrossClusterRevokedCerts"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to enable tidying up the cross-cluster revoked certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cross_cluster_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_cross_cluster_revoked_certs}

---

##### `tidyExpiredIssuers`<sup>Optional</sup> <a name="tidyExpiredIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyExpiredIssuers"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to automatically remove expired issuers past the issuer_safety_buffer.

No keys will be removed as part of this operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_expired_issuers PkiSecretBackendConfigAutoTidy#tidy_expired_issuers}

---

##### `tidyMoveLegacyCaBundle`<sup>Optional</sup> <a name="tidyMoveLegacyCaBundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyMoveLegacyCaBundle"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_move_legacy_ca_bundle PkiSecretBackendConfigAutoTidy#tidy_move_legacy_ca_bundle}

---

##### `tidyRevocationQueue`<sup>Optional</sup> <a name="tidyRevocationQueue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevocationQueue"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revocation_queue PkiSecretBackendConfigAutoTidy#tidy_revocation_queue}

---

##### `tidyRevokedCertIssuerAssociations`<sup>Optional</sup> <a name="tidyRevokedCertIssuerAssociations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevokedCertIssuerAssociations"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to validate issuer associations on revocation entries.

This helps increase the performance of CRL building and OCSP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_cert_issuer_associations PkiSecretBackendConfigAutoTidy#tidy_revoked_cert_issuer_associations}

---

##### `tidyRevokedCerts`<sup>Optional</sup> <a name="tidyRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevokedCerts"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to remove all invalid and expired certificates from storage.

A revoked storage entry is considered invalid if the entry is empty, or the value within the entry is empty. If a certificate is removed due to expiry, the entry will also be removed from the CRL, and the CRL will be rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_revoked_certs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetAcmeAccountSafetyBuffer">resetAcmeAccountSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIntervalDuration">resetIntervalDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIssuerSafetyBuffer">resetIssuerSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaintainStoredCertificateCounts">resetMaintainStoredCertificateCounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaxStartupBackoffDuration">resetMaxStartupBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMinStartupBackoffDuration">resetMinStartupBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPauseDuration">resetPauseDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPublishStoredCertificateCountMetrics">resetPublishStoredCertificateCountMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetRevocationQueueSafetyBuffer">resetRevocationQueueSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetSafetyBuffer">resetSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyAcme">resetTidyAcme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertMetadata">resetTidyCertMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertStore">resetTidyCertStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCmpv2NonceStore">resetTidyCmpv2NonceStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCrossClusterRevokedCerts">resetTidyCrossClusterRevokedCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyExpiredIssuers">resetTidyExpiredIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyMoveLegacyCaBundle">resetTidyMoveLegacyCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevocationQueue">resetTidyRevocationQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCertIssuerAssociations">resetTidyRevokedCertIssuerAssociations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCerts">resetTidyRevokedCerts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcmeAccountSafetyBuffer` <a name="resetAcmeAccountSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetAcmeAccountSafetyBuffer"></a>

```java
public void resetAcmeAccountSafetyBuffer()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetId"></a>

```java
public void resetId()
```

##### `resetIntervalDuration` <a name="resetIntervalDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIntervalDuration"></a>

```java
public void resetIntervalDuration()
```

##### `resetIssuerSafetyBuffer` <a name="resetIssuerSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIssuerSafetyBuffer"></a>

```java
public void resetIssuerSafetyBuffer()
```

##### `resetMaintainStoredCertificateCounts` <a name="resetMaintainStoredCertificateCounts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaintainStoredCertificateCounts"></a>

```java
public void resetMaintainStoredCertificateCounts()
```

##### `resetMaxStartupBackoffDuration` <a name="resetMaxStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaxStartupBackoffDuration"></a>

```java
public void resetMaxStartupBackoffDuration()
```

##### `resetMinStartupBackoffDuration` <a name="resetMinStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMinStartupBackoffDuration"></a>

```java
public void resetMinStartupBackoffDuration()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPauseDuration` <a name="resetPauseDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPauseDuration"></a>

```java
public void resetPauseDuration()
```

##### `resetPublishStoredCertificateCountMetrics` <a name="resetPublishStoredCertificateCountMetrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPublishStoredCertificateCountMetrics"></a>

```java
public void resetPublishStoredCertificateCountMetrics()
```

##### `resetRevocationQueueSafetyBuffer` <a name="resetRevocationQueueSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetRevocationQueueSafetyBuffer"></a>

```java
public void resetRevocationQueueSafetyBuffer()
```

##### `resetSafetyBuffer` <a name="resetSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetSafetyBuffer"></a>

```java
public void resetSafetyBuffer()
```

##### `resetTidyAcme` <a name="resetTidyAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyAcme"></a>

```java
public void resetTidyAcme()
```

##### `resetTidyCertMetadata` <a name="resetTidyCertMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertMetadata"></a>

```java
public void resetTidyCertMetadata()
```

##### `resetTidyCertStore` <a name="resetTidyCertStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertStore"></a>

```java
public void resetTidyCertStore()
```

##### `resetTidyCmpv2NonceStore` <a name="resetTidyCmpv2NonceStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCmpv2NonceStore"></a>

```java
public void resetTidyCmpv2NonceStore()
```

##### `resetTidyCrossClusterRevokedCerts` <a name="resetTidyCrossClusterRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCrossClusterRevokedCerts"></a>

```java
public void resetTidyCrossClusterRevokedCerts()
```

##### `resetTidyExpiredIssuers` <a name="resetTidyExpiredIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyExpiredIssuers"></a>

```java
public void resetTidyExpiredIssuers()
```

##### `resetTidyMoveLegacyCaBundle` <a name="resetTidyMoveLegacyCaBundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyMoveLegacyCaBundle"></a>

```java
public void resetTidyMoveLegacyCaBundle()
```

##### `resetTidyRevocationQueue` <a name="resetTidyRevocationQueue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevocationQueue"></a>

```java
public void resetTidyRevocationQueue()
```

##### `resetTidyRevokedCertIssuerAssociations` <a name="resetTidyRevokedCertIssuerAssociations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCertIssuerAssociations"></a>

```java
public void resetTidyRevokedCertIssuerAssociations()
```

##### `resetTidyRevokedCerts` <a name="resetTidyRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCerts"></a>

```java
public void resetTidyRevokedCerts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigAutoTidy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_auto_tidy.PkiSecretBackendConfigAutoTidy;

PkiSecretBackendConfigAutoTidy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_auto_tidy.PkiSecretBackendConfigAutoTidy;

PkiSecretBackendConfigAutoTidy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_auto_tidy.PkiSecretBackendConfigAutoTidy;

PkiSecretBackendConfigAutoTidy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_auto_tidy.PkiSecretBackendConfigAutoTidy;

PkiSecretBackendConfigAutoTidy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiSecretBackendConfigAutoTidy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PkiSecretBackendConfigAutoTidy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiSecretBackendConfigAutoTidy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiSecretBackendConfigAutoTidy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigAutoTidy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBufferInput">acmeAccountSafetyBufferInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDurationInput">intervalDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBufferInput">issuerSafetyBufferInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCountsInput">maintainStoredCertificateCountsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDurationInput">maxStartupBackoffDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDurationInput">minStartupBackoffDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDurationInput">pauseDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetricsInput">publishStoredCertificateCountMetricsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBufferInput">revocationQueueSafetyBufferInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBufferInput">safetyBufferInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcmeInput">tidyAcmeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadataInput">tidyCertMetadataInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStoreInput">tidyCertStoreInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStoreInput">tidyCmpv2NonceStoreInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCertsInput">tidyCrossClusterRevokedCertsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuersInput">tidyExpiredIssuersInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundleInput">tidyMoveLegacyCaBundleInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueueInput">tidyRevocationQueueInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociationsInput">tidyRevokedCertIssuerAssociationsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertsInput">tidyRevokedCertsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBuffer">acmeAccountSafetyBuffer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDuration">intervalDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBuffer">issuerSafetyBuffer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCounts">maintainStoredCertificateCounts</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDuration">maxStartupBackoffDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDuration">minStartupBackoffDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDuration">pauseDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetrics">publishStoredCertificateCountMetrics</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBuffer">revocationQueueSafetyBuffer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBuffer">safetyBuffer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcme">tidyAcme</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadata">tidyCertMetadata</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStore">tidyCertStore</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStore">tidyCmpv2NonceStore</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCerts">tidyCrossClusterRevokedCerts</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuers">tidyExpiredIssuers</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundle">tidyMoveLegacyCaBundle</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueue">tidyRevocationQueue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociations">tidyRevokedCertIssuerAssociations</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCerts">tidyRevokedCerts</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `acmeAccountSafetyBufferInput`<sup>Optional</sup> <a name="acmeAccountSafetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBufferInput"></a>

```java
public java.lang.String getAcmeAccountSafetyBufferInput();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `intervalDurationInput`<sup>Optional</sup> <a name="intervalDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDurationInput"></a>

```java
public java.lang.String getIntervalDurationInput();
```

- *Type:* java.lang.String

---

##### `issuerSafetyBufferInput`<sup>Optional</sup> <a name="issuerSafetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBufferInput"></a>

```java
public java.lang.String getIssuerSafetyBufferInput();
```

- *Type:* java.lang.String

---

##### `maintainStoredCertificateCountsInput`<sup>Optional</sup> <a name="maintainStoredCertificateCountsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCountsInput"></a>

```java
public java.lang.Boolean|IResolvable getMaintainStoredCertificateCountsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `maxStartupBackoffDurationInput`<sup>Optional</sup> <a name="maxStartupBackoffDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDurationInput"></a>

```java
public java.lang.String getMaxStartupBackoffDurationInput();
```

- *Type:* java.lang.String

---

##### `minStartupBackoffDurationInput`<sup>Optional</sup> <a name="minStartupBackoffDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDurationInput"></a>

```java
public java.lang.String getMinStartupBackoffDurationInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pauseDurationInput`<sup>Optional</sup> <a name="pauseDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDurationInput"></a>

```java
public java.lang.String getPauseDurationInput();
```

- *Type:* java.lang.String

---

##### `publishStoredCertificateCountMetricsInput`<sup>Optional</sup> <a name="publishStoredCertificateCountMetricsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetricsInput"></a>

```java
public java.lang.Boolean|IResolvable getPublishStoredCertificateCountMetricsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `revocationQueueSafetyBufferInput`<sup>Optional</sup> <a name="revocationQueueSafetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBufferInput"></a>

```java
public java.lang.String getRevocationQueueSafetyBufferInput();
```

- *Type:* java.lang.String

---

##### `safetyBufferInput`<sup>Optional</sup> <a name="safetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBufferInput"></a>

```java
public java.lang.String getSafetyBufferInput();
```

- *Type:* java.lang.String

---

##### `tidyAcmeInput`<sup>Optional</sup> <a name="tidyAcmeInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcmeInput"></a>

```java
public java.lang.Boolean|IResolvable getTidyAcmeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyCertMetadataInput`<sup>Optional</sup> <a name="tidyCertMetadataInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadataInput"></a>

```java
public java.lang.Boolean|IResolvable getTidyCertMetadataInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyCertStoreInput`<sup>Optional</sup> <a name="tidyCertStoreInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStoreInput"></a>

```java
public java.lang.Boolean|IResolvable getTidyCertStoreInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyCmpv2NonceStoreInput`<sup>Optional</sup> <a name="tidyCmpv2NonceStoreInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStoreInput"></a>

```java
public java.lang.Boolean|IResolvable getTidyCmpv2NonceStoreInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyCrossClusterRevokedCertsInput`<sup>Optional</sup> <a name="tidyCrossClusterRevokedCertsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCertsInput"></a>

```java
public java.lang.Boolean|IResolvable getTidyCrossClusterRevokedCertsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyExpiredIssuersInput`<sup>Optional</sup> <a name="tidyExpiredIssuersInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuersInput"></a>

```java
public java.lang.Boolean|IResolvable getTidyExpiredIssuersInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyMoveLegacyCaBundleInput`<sup>Optional</sup> <a name="tidyMoveLegacyCaBundleInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundleInput"></a>

```java
public java.lang.Boolean|IResolvable getTidyMoveLegacyCaBundleInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyRevocationQueueInput`<sup>Optional</sup> <a name="tidyRevocationQueueInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueueInput"></a>

```java
public java.lang.Boolean|IResolvable getTidyRevocationQueueInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyRevokedCertIssuerAssociationsInput`<sup>Optional</sup> <a name="tidyRevokedCertIssuerAssociationsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociationsInput"></a>

```java
public java.lang.Boolean|IResolvable getTidyRevokedCertIssuerAssociationsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyRevokedCertsInput`<sup>Optional</sup> <a name="tidyRevokedCertsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertsInput"></a>

```java
public java.lang.Boolean|IResolvable getTidyRevokedCertsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `acmeAccountSafetyBuffer`<sup>Required</sup> <a name="acmeAccountSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBuffer"></a>

```java
public java.lang.String getAcmeAccountSafetyBuffer();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `intervalDuration`<sup>Required</sup> <a name="intervalDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDuration"></a>

```java
public java.lang.String getIntervalDuration();
```

- *Type:* java.lang.String

---

##### `issuerSafetyBuffer`<sup>Required</sup> <a name="issuerSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBuffer"></a>

```java
public java.lang.String getIssuerSafetyBuffer();
```

- *Type:* java.lang.String

---

##### `maintainStoredCertificateCounts`<sup>Required</sup> <a name="maintainStoredCertificateCounts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCounts"></a>

```java
public java.lang.Boolean|IResolvable getMaintainStoredCertificateCounts();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `maxStartupBackoffDuration`<sup>Required</sup> <a name="maxStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDuration"></a>

```java
public java.lang.String getMaxStartupBackoffDuration();
```

- *Type:* java.lang.String

---

##### `minStartupBackoffDuration`<sup>Required</sup> <a name="minStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDuration"></a>

```java
public java.lang.String getMinStartupBackoffDuration();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `pauseDuration`<sup>Required</sup> <a name="pauseDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDuration"></a>

```java
public java.lang.String getPauseDuration();
```

- *Type:* java.lang.String

---

##### `publishStoredCertificateCountMetrics`<sup>Required</sup> <a name="publishStoredCertificateCountMetrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetrics"></a>

```java
public java.lang.Boolean|IResolvable getPublishStoredCertificateCountMetrics();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `revocationQueueSafetyBuffer`<sup>Required</sup> <a name="revocationQueueSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBuffer"></a>

```java
public java.lang.String getRevocationQueueSafetyBuffer();
```

- *Type:* java.lang.String

---

##### `safetyBuffer`<sup>Required</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBuffer"></a>

```java
public java.lang.String getSafetyBuffer();
```

- *Type:* java.lang.String

---

##### `tidyAcme`<sup>Required</sup> <a name="tidyAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcme"></a>

```java
public java.lang.Boolean|IResolvable getTidyAcme();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyCertMetadata`<sup>Required</sup> <a name="tidyCertMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadata"></a>

```java
public java.lang.Boolean|IResolvable getTidyCertMetadata();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyCertStore`<sup>Required</sup> <a name="tidyCertStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStore"></a>

```java
public java.lang.Boolean|IResolvable getTidyCertStore();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyCmpv2NonceStore`<sup>Required</sup> <a name="tidyCmpv2NonceStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStore"></a>

```java
public java.lang.Boolean|IResolvable getTidyCmpv2NonceStore();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyCrossClusterRevokedCerts`<sup>Required</sup> <a name="tidyCrossClusterRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCerts"></a>

```java
public java.lang.Boolean|IResolvable getTidyCrossClusterRevokedCerts();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyExpiredIssuers`<sup>Required</sup> <a name="tidyExpiredIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuers"></a>

```java
public java.lang.Boolean|IResolvable getTidyExpiredIssuers();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyMoveLegacyCaBundle`<sup>Required</sup> <a name="tidyMoveLegacyCaBundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundle"></a>

```java
public java.lang.Boolean|IResolvable getTidyMoveLegacyCaBundle();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyRevocationQueue`<sup>Required</sup> <a name="tidyRevocationQueue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueue"></a>

```java
public java.lang.Boolean|IResolvable getTidyRevocationQueue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyRevokedCertIssuerAssociations`<sup>Required</sup> <a name="tidyRevokedCertIssuerAssociations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociations"></a>

```java
public java.lang.Boolean|IResolvable getTidyRevokedCertIssuerAssociations();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tidyRevokedCerts`<sup>Required</sup> <a name="tidyRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCerts"></a>

```java
public java.lang.Boolean|IResolvable getTidyRevokedCerts();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigAutoTidyConfig <a name="PkiSecretBackendConfigAutoTidyConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_auto_tidy.PkiSecretBackendConfigAutoTidyConfig;

PkiSecretBackendConfigAutoTidyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
//  .acmeAccountSafetyBuffer(java.lang.String)
//  .id(java.lang.String)
//  .intervalDuration(java.lang.String)
//  .issuerSafetyBuffer(java.lang.String)
//  .maintainStoredCertificateCounts(java.lang.Boolean|IResolvable)
//  .maxStartupBackoffDuration(java.lang.String)
//  .minStartupBackoffDuration(java.lang.String)
//  .namespace(java.lang.String)
//  .pauseDuration(java.lang.String)
//  .publishStoredCertificateCountMetrics(java.lang.Boolean|IResolvable)
//  .revocationQueueSafetyBuffer(java.lang.String)
//  .safetyBuffer(java.lang.String)
//  .tidyAcme(java.lang.Boolean|IResolvable)
//  .tidyCertMetadata(java.lang.Boolean|IResolvable)
//  .tidyCertStore(java.lang.Boolean|IResolvable)
//  .tidyCmpv2NonceStore(java.lang.Boolean|IResolvable)
//  .tidyCrossClusterRevokedCerts(java.lang.Boolean|IResolvable)
//  .tidyExpiredIssuers(java.lang.Boolean|IResolvable)
//  .tidyMoveLegacyCaBundle(java.lang.Boolean|IResolvable)
//  .tidyRevocationQueue(java.lang.Boolean|IResolvable)
//  .tidyRevokedCertIssuerAssociations(java.lang.Boolean|IResolvable)
//  .tidyRevokedCerts(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether automatic tidy is enabled or not. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.acmeAccountSafetyBuffer">acmeAccountSafetyBuffer</a></code> | <code>java.lang.String</code> | The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.intervalDuration">intervalDuration</a></code> | <code>java.lang.String</code> | Interval at which to run an auto-tidy operation. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.issuerSafetyBuffer">issuerSafetyBuffer</a></code> | <code>java.lang.String</code> | The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maintainStoredCertificateCounts">maintainStoredCertificateCounts</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maxStartupBackoffDuration">maxStartupBackoffDuration</a></code> | <code>java.lang.String</code> | The maximum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.minStartupBackoffDuration">minStartupBackoffDuration</a></code> | <code>java.lang.String</code> | The minimum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.pauseDuration">pauseDuration</a></code> | <code>java.lang.String</code> | The amount of time to wait between processing certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.publishStoredCertificateCountMetrics">publishStoredCertificateCountMetrics</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | This configures whether the stored certificate count is published to the metrics consumer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.revocationQueueSafetyBuffer">revocationQueueSafetyBuffer</a></code> | <code>java.lang.String</code> | The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.safetyBuffer">safetyBuffer</a></code> | <code>java.lang.String</code> | The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyAcme">tidyAcme</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to enable tidying ACME accounts, orders and authorizations. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertMetadata">tidyCertMetadata</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to enable tidying up certificate metadata. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertStore">tidyCertStore</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to enable tidying up the certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCmpv2NonceStore">tidyCmpv2NonceStore</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to enable tidying up the CMPv2 nonce store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCrossClusterRevokedCerts">tidyCrossClusterRevokedCerts</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to enable tidying up the cross-cluster revoked certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyExpiredIssuers">tidyExpiredIssuers</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to automatically remove expired issuers past the issuer_safety_buffer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyMoveLegacyCaBundle">tidyMoveLegacyCaBundle</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevocationQueue">tidyRevocationQueue</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCertIssuerAssociations">tidyRevokedCertIssuerAssociations</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to validate issuer associations on revocation entries. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCerts">tidyRevokedCerts</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true to remove all invalid and expired certificates from storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#backend PkiSecretBackendConfigAutoTidy#backend}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether automatic tidy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#enabled PkiSecretBackendConfigAutoTidy#enabled}

---

##### `acmeAccountSafetyBuffer`<sup>Optional</sup> <a name="acmeAccountSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.acmeAccountSafetyBuffer"></a>

```java
public java.lang.String getAcmeAccountSafetyBuffer();
```

- *Type:* java.lang.String

The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#acme_account_safety_buffer PkiSecretBackendConfigAutoTidy#acme_account_safety_buffer}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `intervalDuration`<sup>Optional</sup> <a name="intervalDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.intervalDuration"></a>

```java
public java.lang.String getIntervalDuration();
```

- *Type:* java.lang.String

Interval at which to run an auto-tidy operation.

This is the time between tidy invocations (after one finishes to the start of the next).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#interval_duration PkiSecretBackendConfigAutoTidy#interval_duration}

---

##### `issuerSafetyBuffer`<sup>Optional</sup> <a name="issuerSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.issuerSafetyBuffer"></a>

```java
public java.lang.String getIssuerSafetyBuffer();
```

- *Type:* java.lang.String

The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#issuer_safety_buffer PkiSecretBackendConfigAutoTidy#issuer_safety_buffer}

---

##### `maintainStoredCertificateCounts`<sup>Optional</sup> <a name="maintainStoredCertificateCounts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maintainStoredCertificateCounts"></a>

```java
public java.lang.Boolean|IResolvable getMaintainStoredCertificateCounts();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#maintain_stored_certificate_counts PkiSecretBackendConfigAutoTidy#maintain_stored_certificate_counts}

---

##### `maxStartupBackoffDuration`<sup>Optional</sup> <a name="maxStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maxStartupBackoffDuration"></a>

```java
public java.lang.String getMaxStartupBackoffDuration();
```

- *Type:* java.lang.String

The maximum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#max_startup_backoff_duration PkiSecretBackendConfigAutoTidy#max_startup_backoff_duration}

---

##### `minStartupBackoffDuration`<sup>Optional</sup> <a name="minStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.minStartupBackoffDuration"></a>

```java
public java.lang.String getMinStartupBackoffDuration();
```

- *Type:* java.lang.String

The minimum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#min_startup_backoff_duration PkiSecretBackendConfigAutoTidy#min_startup_backoff_duration}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#namespace PkiSecretBackendConfigAutoTidy#namespace}

---

##### `pauseDuration`<sup>Optional</sup> <a name="pauseDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.pauseDuration"></a>

```java
public java.lang.String getPauseDuration();
```

- *Type:* java.lang.String

The amount of time to wait between processing certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#pause_duration PkiSecretBackendConfigAutoTidy#pause_duration}

---

##### `publishStoredCertificateCountMetrics`<sup>Optional</sup> <a name="publishStoredCertificateCountMetrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.publishStoredCertificateCountMetrics"></a>

```java
public java.lang.Boolean|IResolvable getPublishStoredCertificateCountMetrics();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

This configures whether the stored certificate count is published to the metrics consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#publish_stored_certificate_count_metrics PkiSecretBackendConfigAutoTidy#publish_stored_certificate_count_metrics}

---

##### `revocationQueueSafetyBuffer`<sup>Optional</sup> <a name="revocationQueueSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.revocationQueueSafetyBuffer"></a>

```java
public java.lang.String getRevocationQueueSafetyBuffer();
```

- *Type:* java.lang.String

The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#revocation_queue_safety_buffer PkiSecretBackendConfigAutoTidy#revocation_queue_safety_buffer}

---

##### `safetyBuffer`<sup>Optional</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.safetyBuffer"></a>

```java
public java.lang.String getSafetyBuffer();
```

- *Type:* java.lang.String

The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#safety_buffer PkiSecretBackendConfigAutoTidy#safety_buffer}

---

##### `tidyAcme`<sup>Optional</sup> <a name="tidyAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyAcme"></a>

```java
public java.lang.Boolean|IResolvable getTidyAcme();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to enable tidying ACME accounts, orders and authorizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_acme PkiSecretBackendConfigAutoTidy#tidy_acme}

---

##### `tidyCertMetadata`<sup>Optional</sup> <a name="tidyCertMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertMetadata"></a>

```java
public java.lang.Boolean|IResolvable getTidyCertMetadata();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to enable tidying up certificate metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_metadata PkiSecretBackendConfigAutoTidy#tidy_cert_metadata}

---

##### `tidyCertStore`<sup>Optional</sup> <a name="tidyCertStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertStore"></a>

```java
public java.lang.Boolean|IResolvable getTidyCertStore();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to enable tidying up the certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_store PkiSecretBackendConfigAutoTidy#tidy_cert_store}

---

##### `tidyCmpv2NonceStore`<sup>Optional</sup> <a name="tidyCmpv2NonceStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCmpv2NonceStore"></a>

```java
public java.lang.Boolean|IResolvable getTidyCmpv2NonceStore();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to enable tidying up the CMPv2 nonce store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cmpv2_nonce_store PkiSecretBackendConfigAutoTidy#tidy_cmpv2_nonce_store}

---

##### `tidyCrossClusterRevokedCerts`<sup>Optional</sup> <a name="tidyCrossClusterRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCrossClusterRevokedCerts"></a>

```java
public java.lang.Boolean|IResolvable getTidyCrossClusterRevokedCerts();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to enable tidying up the cross-cluster revoked certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cross_cluster_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_cross_cluster_revoked_certs}

---

##### `tidyExpiredIssuers`<sup>Optional</sup> <a name="tidyExpiredIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyExpiredIssuers"></a>

```java
public java.lang.Boolean|IResolvable getTidyExpiredIssuers();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to automatically remove expired issuers past the issuer_safety_buffer.

No keys will be removed as part of this operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_expired_issuers PkiSecretBackendConfigAutoTidy#tidy_expired_issuers}

---

##### `tidyMoveLegacyCaBundle`<sup>Optional</sup> <a name="tidyMoveLegacyCaBundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyMoveLegacyCaBundle"></a>

```java
public java.lang.Boolean|IResolvable getTidyMoveLegacyCaBundle();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_move_legacy_ca_bundle PkiSecretBackendConfigAutoTidy#tidy_move_legacy_ca_bundle}

---

##### `tidyRevocationQueue`<sup>Optional</sup> <a name="tidyRevocationQueue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevocationQueue"></a>

```java
public java.lang.Boolean|IResolvable getTidyRevocationQueue();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revocation_queue PkiSecretBackendConfigAutoTidy#tidy_revocation_queue}

---

##### `tidyRevokedCertIssuerAssociations`<sup>Optional</sup> <a name="tidyRevokedCertIssuerAssociations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCertIssuerAssociations"></a>

```java
public java.lang.Boolean|IResolvable getTidyRevokedCertIssuerAssociations();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to validate issuer associations on revocation entries.

This helps increase the performance of CRL building and OCSP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_cert_issuer_associations PkiSecretBackendConfigAutoTidy#tidy_revoked_cert_issuer_associations}

---

##### `tidyRevokedCerts`<sup>Optional</sup> <a name="tidyRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCerts"></a>

```java
public java.lang.Boolean|IResolvable getTidyRevokedCerts();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true to remove all invalid and expired certificates from storage.

A revoked storage entry is considered invalid if the entry is empty, or the value within the entry is empty. If a certificate is removed due to expiry, the entry will also be removed from the CRL, and the CRL will be rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_revoked_certs}

---



