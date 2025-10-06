# `pkiSecretBackendConfigAutoTidy` Submodule <a name="`pkiSecretBackendConfigAutoTidy` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigAutoTidy <a name="PkiSecretBackendConfigAutoTidy" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy vault_pki_secret_backend_config_auto_tidy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_auto_tidy

pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  enabled: bool | IResolvable,
  acme_account_safety_buffer: str = None,
  id: str = None,
  interval_duration: str = None,
  issuer_safety_buffer: str = None,
  maintain_stored_certificate_counts: bool | IResolvable = None,
  max_startup_backoff_duration: str = None,
  min_startup_backoff_duration: str = None,
  namespace: str = None,
  pause_duration: str = None,
  publish_stored_certificate_count_metrics: bool | IResolvable = None,
  revocation_queue_safety_buffer: str = None,
  safety_buffer: str = None,
  tidy_acme: bool | IResolvable = None,
  tidy_cert_metadata: bool | IResolvable = None,
  tidy_cert_store: bool | IResolvable = None,
  tidy_cmpv2_nonce_store: bool | IResolvable = None,
  tidy_cross_cluster_revoked_certs: bool | IResolvable = None,
  tidy_expired_issuers: bool | IResolvable = None,
  tidy_move_legacy_ca_bundle: bool | IResolvable = None,
  tidy_revocation_queue: bool | IResolvable = None,
  tidy_revoked_cert_issuer_associations: bool | IResolvable = None,
  tidy_revoked_certs: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether automatic tidy is enabled or not. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.acmeAccountSafetyBuffer">acme_account_safety_buffer</a></code> | <code>str</code> | The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.intervalDuration">interval_duration</a></code> | <code>str</code> | Interval at which to run an auto-tidy operation. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.issuerSafetyBuffer">issuer_safety_buffer</a></code> | <code>str</code> | The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.maintainStoredCertificateCounts">maintain_stored_certificate_counts</a></code> | <code>bool \| cdktf.IResolvable</code> | This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.maxStartupBackoffDuration">max_startup_backoff_duration</a></code> | <code>str</code> | The maximum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.minStartupBackoffDuration">min_startup_backoff_duration</a></code> | <code>str</code> | The minimum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.pauseDuration">pause_duration</a></code> | <code>str</code> | The amount of time to wait between processing certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.publishStoredCertificateCountMetrics">publish_stored_certificate_count_metrics</a></code> | <code>bool \| cdktf.IResolvable</code> | This configures whether the stored certificate count is published to the metrics consumer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.revocationQueueSafetyBuffer">revocation_queue_safety_buffer</a></code> | <code>str</code> | The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.safetyBuffer">safety_buffer</a></code> | <code>str</code> | The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyAcme">tidy_acme</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to enable tidying ACME accounts, orders and authorizations. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCertMetadata">tidy_cert_metadata</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to enable tidying up certificate metadata. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCertStore">tidy_cert_store</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to enable tidying up the certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCmpv2NonceStore">tidy_cmpv2_nonce_store</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to enable tidying up the CMPv2 nonce store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCrossClusterRevokedCerts">tidy_cross_cluster_revoked_certs</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to enable tidying up the cross-cluster revoked certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyExpiredIssuers">tidy_expired_issuers</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to automatically remove expired issuers past the issuer_safety_buffer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyMoveLegacyCaBundle">tidy_move_legacy_ca_bundle</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevocationQueue">tidy_revocation_queue</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevokedCertIssuerAssociations">tidy_revoked_cert_issuer_associations</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to validate issuer associations on revocation entries. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevokedCerts">tidy_revoked_certs</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to remove all invalid and expired certificates from storage. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.backend"></a>

- *Type:* str

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#backend PkiSecretBackendConfigAutoTidy#backend}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Specifies whether automatic tidy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#enabled PkiSecretBackendConfigAutoTidy#enabled}

---

##### `acme_account_safety_buffer`<sup>Optional</sup> <a name="acme_account_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.acmeAccountSafetyBuffer"></a>

- *Type:* str

The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#acme_account_safety_buffer PkiSecretBackendConfigAutoTidy#acme_account_safety_buffer}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval_duration`<sup>Optional</sup> <a name="interval_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.intervalDuration"></a>

- *Type:* str

Interval at which to run an auto-tidy operation.

This is the time between tidy invocations (after one finishes to the start of the next).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#interval_duration PkiSecretBackendConfigAutoTidy#interval_duration}

---

##### `issuer_safety_buffer`<sup>Optional</sup> <a name="issuer_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.issuerSafetyBuffer"></a>

- *Type:* str

The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#issuer_safety_buffer PkiSecretBackendConfigAutoTidy#issuer_safety_buffer}

---

##### `maintain_stored_certificate_counts`<sup>Optional</sup> <a name="maintain_stored_certificate_counts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.maintainStoredCertificateCounts"></a>

- *Type:* bool | cdktf.IResolvable

This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#maintain_stored_certificate_counts PkiSecretBackendConfigAutoTidy#maintain_stored_certificate_counts}

---

##### `max_startup_backoff_duration`<sup>Optional</sup> <a name="max_startup_backoff_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.maxStartupBackoffDuration"></a>

- *Type:* str

The maximum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#max_startup_backoff_duration PkiSecretBackendConfigAutoTidy#max_startup_backoff_duration}

---

##### `min_startup_backoff_duration`<sup>Optional</sup> <a name="min_startup_backoff_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.minStartupBackoffDuration"></a>

- *Type:* str

The minimum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#min_startup_backoff_duration PkiSecretBackendConfigAutoTidy#min_startup_backoff_duration}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#namespace PkiSecretBackendConfigAutoTidy#namespace}

---

##### `pause_duration`<sup>Optional</sup> <a name="pause_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.pauseDuration"></a>

- *Type:* str

The amount of time to wait between processing certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#pause_duration PkiSecretBackendConfigAutoTidy#pause_duration}

---

##### `publish_stored_certificate_count_metrics`<sup>Optional</sup> <a name="publish_stored_certificate_count_metrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.publishStoredCertificateCountMetrics"></a>

- *Type:* bool | cdktf.IResolvable

This configures whether the stored certificate count is published to the metrics consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#publish_stored_certificate_count_metrics PkiSecretBackendConfigAutoTidy#publish_stored_certificate_count_metrics}

---

##### `revocation_queue_safety_buffer`<sup>Optional</sup> <a name="revocation_queue_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.revocationQueueSafetyBuffer"></a>

- *Type:* str

The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#revocation_queue_safety_buffer PkiSecretBackendConfigAutoTidy#revocation_queue_safety_buffer}

---

##### `safety_buffer`<sup>Optional</sup> <a name="safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.safetyBuffer"></a>

- *Type:* str

The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#safety_buffer PkiSecretBackendConfigAutoTidy#safety_buffer}

---

##### `tidy_acme`<sup>Optional</sup> <a name="tidy_acme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyAcme"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to enable tidying ACME accounts, orders and authorizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_acme PkiSecretBackendConfigAutoTidy#tidy_acme}

---

##### `tidy_cert_metadata`<sup>Optional</sup> <a name="tidy_cert_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCertMetadata"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to enable tidying up certificate metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_metadata PkiSecretBackendConfigAutoTidy#tidy_cert_metadata}

---

##### `tidy_cert_store`<sup>Optional</sup> <a name="tidy_cert_store" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCertStore"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to enable tidying up the certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_store PkiSecretBackendConfigAutoTidy#tidy_cert_store}

---

##### `tidy_cmpv2_nonce_store`<sup>Optional</sup> <a name="tidy_cmpv2_nonce_store" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCmpv2NonceStore"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to enable tidying up the CMPv2 nonce store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cmpv2_nonce_store PkiSecretBackendConfigAutoTidy#tidy_cmpv2_nonce_store}

---

##### `tidy_cross_cluster_revoked_certs`<sup>Optional</sup> <a name="tidy_cross_cluster_revoked_certs" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyCrossClusterRevokedCerts"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to enable tidying up the cross-cluster revoked certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cross_cluster_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_cross_cluster_revoked_certs}

---

##### `tidy_expired_issuers`<sup>Optional</sup> <a name="tidy_expired_issuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyExpiredIssuers"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to automatically remove expired issuers past the issuer_safety_buffer.

No keys will be removed as part of this operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_expired_issuers PkiSecretBackendConfigAutoTidy#tidy_expired_issuers}

---

##### `tidy_move_legacy_ca_bundle`<sup>Optional</sup> <a name="tidy_move_legacy_ca_bundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyMoveLegacyCaBundle"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_move_legacy_ca_bundle PkiSecretBackendConfigAutoTidy#tidy_move_legacy_ca_bundle}

---

##### `tidy_revocation_queue`<sup>Optional</sup> <a name="tidy_revocation_queue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevocationQueue"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revocation_queue PkiSecretBackendConfigAutoTidy#tidy_revocation_queue}

---

##### `tidy_revoked_cert_issuer_associations`<sup>Optional</sup> <a name="tidy_revoked_cert_issuer_associations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevokedCertIssuerAssociations"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to validate issuer associations on revocation entries.

This helps increase the performance of CRL building and OCSP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_cert_issuer_associations PkiSecretBackendConfigAutoTidy#tidy_revoked_cert_issuer_associations}

---

##### `tidy_revoked_certs`<sup>Optional</sup> <a name="tidy_revoked_certs" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.tidyRevokedCerts"></a>

- *Type:* bool | cdktf.IResolvable

Set to true to remove all invalid and expired certificates from storage.

A revoked storage entry is considered invalid if the entry is empty, or the value within the entry is empty. If a certificate is removed due to expiry, the entry will also be removed from the CRL, and the CRL will be rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_revoked_certs}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetAcmeAccountSafetyBuffer">reset_acme_account_safety_buffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIntervalDuration">reset_interval_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIssuerSafetyBuffer">reset_issuer_safety_buffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaintainStoredCertificateCounts">reset_maintain_stored_certificate_counts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaxStartupBackoffDuration">reset_max_startup_backoff_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMinStartupBackoffDuration">reset_min_startup_backoff_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPauseDuration">reset_pause_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPublishStoredCertificateCountMetrics">reset_publish_stored_certificate_count_metrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetRevocationQueueSafetyBuffer">reset_revocation_queue_safety_buffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetSafetyBuffer">reset_safety_buffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyAcme">reset_tidy_acme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertMetadata">reset_tidy_cert_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertStore">reset_tidy_cert_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCmpv2NonceStore">reset_tidy_cmpv2_nonce_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCrossClusterRevokedCerts">reset_tidy_cross_cluster_revoked_certs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyExpiredIssuers">reset_tidy_expired_issuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyMoveLegacyCaBundle">reset_tidy_move_legacy_ca_bundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevocationQueue">reset_tidy_revocation_queue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCertIssuerAssociations">reset_tidy_revoked_cert_issuer_associations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCerts">reset_tidy_revoked_certs</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_acme_account_safety_buffer` <a name="reset_acme_account_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetAcmeAccountSafetyBuffer"></a>

```python
def reset_acme_account_safety_buffer() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interval_duration` <a name="reset_interval_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIntervalDuration"></a>

```python
def reset_interval_duration() -> None
```

##### `reset_issuer_safety_buffer` <a name="reset_issuer_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIssuerSafetyBuffer"></a>

```python
def reset_issuer_safety_buffer() -> None
```

##### `reset_maintain_stored_certificate_counts` <a name="reset_maintain_stored_certificate_counts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaintainStoredCertificateCounts"></a>

```python
def reset_maintain_stored_certificate_counts() -> None
```

##### `reset_max_startup_backoff_duration` <a name="reset_max_startup_backoff_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaxStartupBackoffDuration"></a>

```python
def reset_max_startup_backoff_duration() -> None
```

##### `reset_min_startup_backoff_duration` <a name="reset_min_startup_backoff_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMinStartupBackoffDuration"></a>

```python
def reset_min_startup_backoff_duration() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_pause_duration` <a name="reset_pause_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPauseDuration"></a>

```python
def reset_pause_duration() -> None
```

##### `reset_publish_stored_certificate_count_metrics` <a name="reset_publish_stored_certificate_count_metrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPublishStoredCertificateCountMetrics"></a>

```python
def reset_publish_stored_certificate_count_metrics() -> None
```

##### `reset_revocation_queue_safety_buffer` <a name="reset_revocation_queue_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetRevocationQueueSafetyBuffer"></a>

```python
def reset_revocation_queue_safety_buffer() -> None
```

##### `reset_safety_buffer` <a name="reset_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetSafetyBuffer"></a>

```python
def reset_safety_buffer() -> None
```

##### `reset_tidy_acme` <a name="reset_tidy_acme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyAcme"></a>

```python
def reset_tidy_acme() -> None
```

##### `reset_tidy_cert_metadata` <a name="reset_tidy_cert_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertMetadata"></a>

```python
def reset_tidy_cert_metadata() -> None
```

##### `reset_tidy_cert_store` <a name="reset_tidy_cert_store" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertStore"></a>

```python
def reset_tidy_cert_store() -> None
```

##### `reset_tidy_cmpv2_nonce_store` <a name="reset_tidy_cmpv2_nonce_store" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCmpv2NonceStore"></a>

```python
def reset_tidy_cmpv2_nonce_store() -> None
```

##### `reset_tidy_cross_cluster_revoked_certs` <a name="reset_tidy_cross_cluster_revoked_certs" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCrossClusterRevokedCerts"></a>

```python
def reset_tidy_cross_cluster_revoked_certs() -> None
```

##### `reset_tidy_expired_issuers` <a name="reset_tidy_expired_issuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyExpiredIssuers"></a>

```python
def reset_tidy_expired_issuers() -> None
```

##### `reset_tidy_move_legacy_ca_bundle` <a name="reset_tidy_move_legacy_ca_bundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyMoveLegacyCaBundle"></a>

```python
def reset_tidy_move_legacy_ca_bundle() -> None
```

##### `reset_tidy_revocation_queue` <a name="reset_tidy_revocation_queue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevocationQueue"></a>

```python
def reset_tidy_revocation_queue() -> None
```

##### `reset_tidy_revoked_cert_issuer_associations` <a name="reset_tidy_revoked_cert_issuer_associations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCertIssuerAssociations"></a>

```python
def reset_tidy_revoked_cert_issuer_associations() -> None
```

##### `reset_tidy_revoked_certs` <a name="reset_tidy_revoked_certs" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCerts"></a>

```python
def reset_tidy_revoked_certs() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigAutoTidy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_auto_tidy

pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_auto_tidy

pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_auto_tidy

pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_auto_tidy

pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendConfigAutoTidy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendConfigAutoTidy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendConfigAutoTidy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigAutoTidy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBufferInput">acme_account_safety_buffer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDurationInput">interval_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBufferInput">issuer_safety_buffer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCountsInput">maintain_stored_certificate_counts_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDurationInput">max_startup_backoff_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDurationInput">min_startup_backoff_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDurationInput">pause_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetricsInput">publish_stored_certificate_count_metrics_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBufferInput">revocation_queue_safety_buffer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBufferInput">safety_buffer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcmeInput">tidy_acme_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadataInput">tidy_cert_metadata_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStoreInput">tidy_cert_store_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStoreInput">tidy_cmpv2_nonce_store_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCertsInput">tidy_cross_cluster_revoked_certs_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuersInput">tidy_expired_issuers_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundleInput">tidy_move_legacy_ca_bundle_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueueInput">tidy_revocation_queue_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociationsInput">tidy_revoked_cert_issuer_associations_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertsInput">tidy_revoked_certs_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBuffer">acme_account_safety_buffer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDuration">interval_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBuffer">issuer_safety_buffer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCounts">maintain_stored_certificate_counts</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDuration">max_startup_backoff_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDuration">min_startup_backoff_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDuration">pause_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetrics">publish_stored_certificate_count_metrics</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBuffer">revocation_queue_safety_buffer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBuffer">safety_buffer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcme">tidy_acme</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadata">tidy_cert_metadata</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStore">tidy_cert_store</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStore">tidy_cmpv2_nonce_store</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCerts">tidy_cross_cluster_revoked_certs</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuers">tidy_expired_issuers</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundle">tidy_move_legacy_ca_bundle</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueue">tidy_revocation_queue</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociations">tidy_revoked_cert_issuer_associations</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCerts">tidy_revoked_certs</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `acme_account_safety_buffer_input`<sup>Optional</sup> <a name="acme_account_safety_buffer_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBufferInput"></a>

```python
acme_account_safety_buffer_input: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interval_duration_input`<sup>Optional</sup> <a name="interval_duration_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDurationInput"></a>

```python
interval_duration_input: str
```

- *Type:* str

---

##### `issuer_safety_buffer_input`<sup>Optional</sup> <a name="issuer_safety_buffer_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBufferInput"></a>

```python
issuer_safety_buffer_input: str
```

- *Type:* str

---

##### `maintain_stored_certificate_counts_input`<sup>Optional</sup> <a name="maintain_stored_certificate_counts_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCountsInput"></a>

```python
maintain_stored_certificate_counts_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_startup_backoff_duration_input`<sup>Optional</sup> <a name="max_startup_backoff_duration_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDurationInput"></a>

```python
max_startup_backoff_duration_input: str
```

- *Type:* str

---

##### `min_startup_backoff_duration_input`<sup>Optional</sup> <a name="min_startup_backoff_duration_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDurationInput"></a>

```python
min_startup_backoff_duration_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `pause_duration_input`<sup>Optional</sup> <a name="pause_duration_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDurationInput"></a>

```python
pause_duration_input: str
```

- *Type:* str

---

##### `publish_stored_certificate_count_metrics_input`<sup>Optional</sup> <a name="publish_stored_certificate_count_metrics_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetricsInput"></a>

```python
publish_stored_certificate_count_metrics_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `revocation_queue_safety_buffer_input`<sup>Optional</sup> <a name="revocation_queue_safety_buffer_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBufferInput"></a>

```python
revocation_queue_safety_buffer_input: str
```

- *Type:* str

---

##### `safety_buffer_input`<sup>Optional</sup> <a name="safety_buffer_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBufferInput"></a>

```python
safety_buffer_input: str
```

- *Type:* str

---

##### `tidy_acme_input`<sup>Optional</sup> <a name="tidy_acme_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcmeInput"></a>

```python
tidy_acme_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_cert_metadata_input`<sup>Optional</sup> <a name="tidy_cert_metadata_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadataInput"></a>

```python
tidy_cert_metadata_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_cert_store_input`<sup>Optional</sup> <a name="tidy_cert_store_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStoreInput"></a>

```python
tidy_cert_store_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_cmpv2_nonce_store_input`<sup>Optional</sup> <a name="tidy_cmpv2_nonce_store_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStoreInput"></a>

```python
tidy_cmpv2_nonce_store_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_cross_cluster_revoked_certs_input`<sup>Optional</sup> <a name="tidy_cross_cluster_revoked_certs_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCertsInput"></a>

```python
tidy_cross_cluster_revoked_certs_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_expired_issuers_input`<sup>Optional</sup> <a name="tidy_expired_issuers_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuersInput"></a>

```python
tidy_expired_issuers_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_move_legacy_ca_bundle_input`<sup>Optional</sup> <a name="tidy_move_legacy_ca_bundle_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundleInput"></a>

```python
tidy_move_legacy_ca_bundle_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_revocation_queue_input`<sup>Optional</sup> <a name="tidy_revocation_queue_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueueInput"></a>

```python
tidy_revocation_queue_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_revoked_cert_issuer_associations_input`<sup>Optional</sup> <a name="tidy_revoked_cert_issuer_associations_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociationsInput"></a>

```python
tidy_revoked_cert_issuer_associations_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_revoked_certs_input`<sup>Optional</sup> <a name="tidy_revoked_certs_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertsInput"></a>

```python
tidy_revoked_certs_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `acme_account_safety_buffer`<sup>Required</sup> <a name="acme_account_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBuffer"></a>

```python
acme_account_safety_buffer: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval_duration`<sup>Required</sup> <a name="interval_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDuration"></a>

```python
interval_duration: str
```

- *Type:* str

---

##### `issuer_safety_buffer`<sup>Required</sup> <a name="issuer_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBuffer"></a>

```python
issuer_safety_buffer: str
```

- *Type:* str

---

##### `maintain_stored_certificate_counts`<sup>Required</sup> <a name="maintain_stored_certificate_counts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCounts"></a>

```python
maintain_stored_certificate_counts: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_startup_backoff_duration`<sup>Required</sup> <a name="max_startup_backoff_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDuration"></a>

```python
max_startup_backoff_duration: str
```

- *Type:* str

---

##### `min_startup_backoff_duration`<sup>Required</sup> <a name="min_startup_backoff_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDuration"></a>

```python
min_startup_backoff_duration: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `pause_duration`<sup>Required</sup> <a name="pause_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDuration"></a>

```python
pause_duration: str
```

- *Type:* str

---

##### `publish_stored_certificate_count_metrics`<sup>Required</sup> <a name="publish_stored_certificate_count_metrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetrics"></a>

```python
publish_stored_certificate_count_metrics: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `revocation_queue_safety_buffer`<sup>Required</sup> <a name="revocation_queue_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBuffer"></a>

```python
revocation_queue_safety_buffer: str
```

- *Type:* str

---

##### `safety_buffer`<sup>Required</sup> <a name="safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBuffer"></a>

```python
safety_buffer: str
```

- *Type:* str

---

##### `tidy_acme`<sup>Required</sup> <a name="tidy_acme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcme"></a>

```python
tidy_acme: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_cert_metadata`<sup>Required</sup> <a name="tidy_cert_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadata"></a>

```python
tidy_cert_metadata: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_cert_store`<sup>Required</sup> <a name="tidy_cert_store" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStore"></a>

```python
tidy_cert_store: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_cmpv2_nonce_store`<sup>Required</sup> <a name="tidy_cmpv2_nonce_store" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStore"></a>

```python
tidy_cmpv2_nonce_store: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_cross_cluster_revoked_certs`<sup>Required</sup> <a name="tidy_cross_cluster_revoked_certs" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCerts"></a>

```python
tidy_cross_cluster_revoked_certs: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_expired_issuers`<sup>Required</sup> <a name="tidy_expired_issuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuers"></a>

```python
tidy_expired_issuers: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_move_legacy_ca_bundle`<sup>Required</sup> <a name="tidy_move_legacy_ca_bundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundle"></a>

```python
tidy_move_legacy_ca_bundle: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_revocation_queue`<sup>Required</sup> <a name="tidy_revocation_queue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueue"></a>

```python
tidy_revocation_queue: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_revoked_cert_issuer_associations`<sup>Required</sup> <a name="tidy_revoked_cert_issuer_associations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociations"></a>

```python
tidy_revoked_cert_issuer_associations: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `tidy_revoked_certs`<sup>Required</sup> <a name="tidy_revoked_certs" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCerts"></a>

```python
tidy_revoked_certs: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigAutoTidyConfig <a name="PkiSecretBackendConfigAutoTidyConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_auto_tidy

pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  enabled: bool | IResolvable,
  acme_account_safety_buffer: str = None,
  id: str = None,
  interval_duration: str = None,
  issuer_safety_buffer: str = None,
  maintain_stored_certificate_counts: bool | IResolvable = None,
  max_startup_backoff_duration: str = None,
  min_startup_backoff_duration: str = None,
  namespace: str = None,
  pause_duration: str = None,
  publish_stored_certificate_count_metrics: bool | IResolvable = None,
  revocation_queue_safety_buffer: str = None,
  safety_buffer: str = None,
  tidy_acme: bool | IResolvable = None,
  tidy_cert_metadata: bool | IResolvable = None,
  tidy_cert_store: bool | IResolvable = None,
  tidy_cmpv2_nonce_store: bool | IResolvable = None,
  tidy_cross_cluster_revoked_certs: bool | IResolvable = None,
  tidy_expired_issuers: bool | IResolvable = None,
  tidy_move_legacy_ca_bundle: bool | IResolvable = None,
  tidy_revocation_queue: bool | IResolvable = None,
  tidy_revoked_cert_issuer_associations: bool | IResolvable = None,
  tidy_revoked_certs: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.backend">backend</a></code> | <code>str</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether automatic tidy is enabled or not. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.acmeAccountSafetyBuffer">acme_account_safety_buffer</a></code> | <code>str</code> | The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.intervalDuration">interval_duration</a></code> | <code>str</code> | Interval at which to run an auto-tidy operation. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.issuerSafetyBuffer">issuer_safety_buffer</a></code> | <code>str</code> | The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maintainStoredCertificateCounts">maintain_stored_certificate_counts</a></code> | <code>bool \| cdktf.IResolvable</code> | This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maxStartupBackoffDuration">max_startup_backoff_duration</a></code> | <code>str</code> | The maximum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.minStartupBackoffDuration">min_startup_backoff_duration</a></code> | <code>str</code> | The minimum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.pauseDuration">pause_duration</a></code> | <code>str</code> | The amount of time to wait between processing certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.publishStoredCertificateCountMetrics">publish_stored_certificate_count_metrics</a></code> | <code>bool \| cdktf.IResolvable</code> | This configures whether the stored certificate count is published to the metrics consumer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.revocationQueueSafetyBuffer">revocation_queue_safety_buffer</a></code> | <code>str</code> | The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.safetyBuffer">safety_buffer</a></code> | <code>str</code> | The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyAcme">tidy_acme</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to enable tidying ACME accounts, orders and authorizations. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertMetadata">tidy_cert_metadata</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to enable tidying up certificate metadata. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertStore">tidy_cert_store</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to enable tidying up the certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCmpv2NonceStore">tidy_cmpv2_nonce_store</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to enable tidying up the CMPv2 nonce store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCrossClusterRevokedCerts">tidy_cross_cluster_revoked_certs</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to enable tidying up the cross-cluster revoked certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyExpiredIssuers">tidy_expired_issuers</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to automatically remove expired issuers past the issuer_safety_buffer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyMoveLegacyCaBundle">tidy_move_legacy_ca_bundle</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevocationQueue">tidy_revocation_queue</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCertIssuerAssociations">tidy_revoked_cert_issuer_associations</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to validate issuer associations on revocation entries. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCerts">tidy_revoked_certs</a></code> | <code>bool \| cdktf.IResolvable</code> | Set to true to remove all invalid and expired certificates from storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#backend PkiSecretBackendConfigAutoTidy#backend}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Specifies whether automatic tidy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#enabled PkiSecretBackendConfigAutoTidy#enabled}

---

##### `acme_account_safety_buffer`<sup>Optional</sup> <a name="acme_account_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.acmeAccountSafetyBuffer"></a>

```python
acme_account_safety_buffer: str
```

- *Type:* str

The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#acme_account_safety_buffer PkiSecretBackendConfigAutoTidy#acme_account_safety_buffer}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval_duration`<sup>Optional</sup> <a name="interval_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.intervalDuration"></a>

```python
interval_duration: str
```

- *Type:* str

Interval at which to run an auto-tidy operation.

This is the time between tidy invocations (after one finishes to the start of the next).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#interval_duration PkiSecretBackendConfigAutoTidy#interval_duration}

---

##### `issuer_safety_buffer`<sup>Optional</sup> <a name="issuer_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.issuerSafetyBuffer"></a>

```python
issuer_safety_buffer: str
```

- *Type:* str

The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#issuer_safety_buffer PkiSecretBackendConfigAutoTidy#issuer_safety_buffer}

---

##### `maintain_stored_certificate_counts`<sup>Optional</sup> <a name="maintain_stored_certificate_counts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maintainStoredCertificateCounts"></a>

```python
maintain_stored_certificate_counts: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#maintain_stored_certificate_counts PkiSecretBackendConfigAutoTidy#maintain_stored_certificate_counts}

---

##### `max_startup_backoff_duration`<sup>Optional</sup> <a name="max_startup_backoff_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maxStartupBackoffDuration"></a>

```python
max_startup_backoff_duration: str
```

- *Type:* str

The maximum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#max_startup_backoff_duration PkiSecretBackendConfigAutoTidy#max_startup_backoff_duration}

---

##### `min_startup_backoff_duration`<sup>Optional</sup> <a name="min_startup_backoff_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.minStartupBackoffDuration"></a>

```python
min_startup_backoff_duration: str
```

- *Type:* str

The minimum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#min_startup_backoff_duration PkiSecretBackendConfigAutoTidy#min_startup_backoff_duration}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#namespace PkiSecretBackendConfigAutoTidy#namespace}

---

##### `pause_duration`<sup>Optional</sup> <a name="pause_duration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.pauseDuration"></a>

```python
pause_duration: str
```

- *Type:* str

The amount of time to wait between processing certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#pause_duration PkiSecretBackendConfigAutoTidy#pause_duration}

---

##### `publish_stored_certificate_count_metrics`<sup>Optional</sup> <a name="publish_stored_certificate_count_metrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.publishStoredCertificateCountMetrics"></a>

```python
publish_stored_certificate_count_metrics: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

This configures whether the stored certificate count is published to the metrics consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#publish_stored_certificate_count_metrics PkiSecretBackendConfigAutoTidy#publish_stored_certificate_count_metrics}

---

##### `revocation_queue_safety_buffer`<sup>Optional</sup> <a name="revocation_queue_safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.revocationQueueSafetyBuffer"></a>

```python
revocation_queue_safety_buffer: str
```

- *Type:* str

The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#revocation_queue_safety_buffer PkiSecretBackendConfigAutoTidy#revocation_queue_safety_buffer}

---

##### `safety_buffer`<sup>Optional</sup> <a name="safety_buffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.safetyBuffer"></a>

```python
safety_buffer: str
```

- *Type:* str

The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#safety_buffer PkiSecretBackendConfigAutoTidy#safety_buffer}

---

##### `tidy_acme`<sup>Optional</sup> <a name="tidy_acme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyAcme"></a>

```python
tidy_acme: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to enable tidying ACME accounts, orders and authorizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_acme PkiSecretBackendConfigAutoTidy#tidy_acme}

---

##### `tidy_cert_metadata`<sup>Optional</sup> <a name="tidy_cert_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertMetadata"></a>

```python
tidy_cert_metadata: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to enable tidying up certificate metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_metadata PkiSecretBackendConfigAutoTidy#tidy_cert_metadata}

---

##### `tidy_cert_store`<sup>Optional</sup> <a name="tidy_cert_store" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertStore"></a>

```python
tidy_cert_store: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to enable tidying up the certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_store PkiSecretBackendConfigAutoTidy#tidy_cert_store}

---

##### `tidy_cmpv2_nonce_store`<sup>Optional</sup> <a name="tidy_cmpv2_nonce_store" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCmpv2NonceStore"></a>

```python
tidy_cmpv2_nonce_store: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to enable tidying up the CMPv2 nonce store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cmpv2_nonce_store PkiSecretBackendConfigAutoTidy#tidy_cmpv2_nonce_store}

---

##### `tidy_cross_cluster_revoked_certs`<sup>Optional</sup> <a name="tidy_cross_cluster_revoked_certs" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCrossClusterRevokedCerts"></a>

```python
tidy_cross_cluster_revoked_certs: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to enable tidying up the cross-cluster revoked certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cross_cluster_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_cross_cluster_revoked_certs}

---

##### `tidy_expired_issuers`<sup>Optional</sup> <a name="tidy_expired_issuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyExpiredIssuers"></a>

```python
tidy_expired_issuers: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to automatically remove expired issuers past the issuer_safety_buffer.

No keys will be removed as part of this operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_expired_issuers PkiSecretBackendConfigAutoTidy#tidy_expired_issuers}

---

##### `tidy_move_legacy_ca_bundle`<sup>Optional</sup> <a name="tidy_move_legacy_ca_bundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyMoveLegacyCaBundle"></a>

```python
tidy_move_legacy_ca_bundle: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_move_legacy_ca_bundle PkiSecretBackendConfigAutoTidy#tidy_move_legacy_ca_bundle}

---

##### `tidy_revocation_queue`<sup>Optional</sup> <a name="tidy_revocation_queue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevocationQueue"></a>

```python
tidy_revocation_queue: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revocation_queue PkiSecretBackendConfigAutoTidy#tidy_revocation_queue}

---

##### `tidy_revoked_cert_issuer_associations`<sup>Optional</sup> <a name="tidy_revoked_cert_issuer_associations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCertIssuerAssociations"></a>

```python
tidy_revoked_cert_issuer_associations: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to validate issuer associations on revocation entries.

This helps increase the performance of CRL building and OCSP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_cert_issuer_associations PkiSecretBackendConfigAutoTidy#tidy_revoked_cert_issuer_associations}

---

##### `tidy_revoked_certs`<sup>Optional</sup> <a name="tidy_revoked_certs" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCerts"></a>

```python
tidy_revoked_certs: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Set to true to remove all invalid and expired certificates from storage.

A revoked storage entry is considered invalid if the entry is empty, or the value within the entry is empty. If a certificate is removed due to expiry, the entry will also be removed from the CRL, and the CRL will be rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_revoked_certs}

---



