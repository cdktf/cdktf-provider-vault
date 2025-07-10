/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendConfigAutoTidyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#acme_account_safety_buffer PkiSecretBackendConfigAutoTidy#acme_account_safety_buffer}
  */
  readonly acmeAccountSafetyBuffer?: string;
  /**
  * The path of the PKI secret backend the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#backend PkiSecretBackendConfigAutoTidy#backend}
  */
  readonly backend: string;
  /**
  * Specifies whether automatic tidy is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#enabled PkiSecretBackendConfigAutoTidy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interval at which to run an auto-tidy operation. This is the time between tidy invocations (after one finishes to the start of the next).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#interval_duration PkiSecretBackendConfigAutoTidy#interval_duration}
  */
  readonly intervalDuration?: string;
  /**
  * The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#issuer_safety_buffer PkiSecretBackendConfigAutoTidy#issuer_safety_buffer}
  */
  readonly issuerSafetyBuffer?: string;
  /**
  * This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#maintain_stored_certificate_counts PkiSecretBackendConfigAutoTidy#maintain_stored_certificate_counts}
  */
  readonly maintainStoredCertificateCounts?: boolean | cdktf.IResolvable;
  /**
  * The maximum amount of time auto-tidy will be delayed after startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#max_startup_backoff_duration PkiSecretBackendConfigAutoTidy#max_startup_backoff_duration}
  */
  readonly maxStartupBackoffDuration?: string;
  /**
  * The minimum amount of time auto-tidy will be delayed after startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#min_startup_backoff_duration PkiSecretBackendConfigAutoTidy#min_startup_backoff_duration}
  */
  readonly minStartupBackoffDuration?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#namespace PkiSecretBackendConfigAutoTidy#namespace}
  */
  readonly namespace?: string;
  /**
  * The amount of time to wait between processing certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#pause_duration PkiSecretBackendConfigAutoTidy#pause_duration}
  */
  readonly pauseDuration?: string;
  /**
  * This configures whether the stored certificate count is published to the metrics consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#publish_stored_certificate_count_metrics PkiSecretBackendConfigAutoTidy#publish_stored_certificate_count_metrics}
  */
  readonly publishStoredCertificateCountMetrics?: boolean | cdktf.IResolvable;
  /**
  * The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#revocation_queue_safety_buffer PkiSecretBackendConfigAutoTidy#revocation_queue_safety_buffer}
  */
  readonly revocationQueueSafetyBuffer?: string;
  /**
  * The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#safety_buffer PkiSecretBackendConfigAutoTidy#safety_buffer}
  */
  readonly safetyBuffer?: string;
  /**
  * Set to true to enable tidying ACME accounts, orders and authorizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_acme PkiSecretBackendConfigAutoTidy#tidy_acme}
  */
  readonly tidyAcme?: boolean | cdktf.IResolvable;
  /**
  * Set to true to enable tidying up certificate metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_metadata PkiSecretBackendConfigAutoTidy#tidy_cert_metadata}
  */
  readonly tidyCertMetadata?: boolean | cdktf.IResolvable;
  /**
  * Set to true to enable tidying up the certificate store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_store PkiSecretBackendConfigAutoTidy#tidy_cert_store}
  */
  readonly tidyCertStore?: boolean | cdktf.IResolvable;
  /**
  * Set to true to enable tidying up the CMPv2 nonce store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cmpv2_nonce_store PkiSecretBackendConfigAutoTidy#tidy_cmpv2_nonce_store}
  */
  readonly tidyCmpv2NonceStore?: boolean | cdktf.IResolvable;
  /**
  * Set to true to enable tidying up the cross-cluster revoked certificate store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cross_cluster_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_cross_cluster_revoked_certs}
  */
  readonly tidyCrossClusterRevokedCerts?: boolean | cdktf.IResolvable;
  /**
  * Set to true to automatically remove expired issuers past the issuer_safety_buffer. No keys will be removed as part of this operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_expired_issuers PkiSecretBackendConfigAutoTidy#tidy_expired_issuers}
  */
  readonly tidyExpiredIssuers?: boolean | cdktf.IResolvable;
  /**
  * Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_move_legacy_ca_bundle PkiSecretBackendConfigAutoTidy#tidy_move_legacy_ca_bundle}
  */
  readonly tidyMoveLegacyCaBundle?: boolean | cdktf.IResolvable;
  /**
  * Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revocation_queue PkiSecretBackendConfigAutoTidy#tidy_revocation_queue}
  */
  readonly tidyRevocationQueue?: boolean | cdktf.IResolvable;
  /**
  * Set to true to validate issuer associations on revocation entries. This helps increase the performance of CRL building and OCSP responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_cert_issuer_associations PkiSecretBackendConfigAutoTidy#tidy_revoked_cert_issuer_associations}
  */
  readonly tidyRevokedCertIssuerAssociations?: boolean | cdktf.IResolvable;
  /**
  * Set to true to remove all invalid and expired certificates from storage. A revoked storage entry is considered invalid if the entry is empty, or the value within the entry is empty. If a certificate is removed due to expiry, the entry will also be removed from the CRL, and the CRL will be rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_revoked_certs}
  */
  readonly tidyRevokedCerts?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy vault_pki_secret_backend_config_auto_tidy}
*/
export class PkiSecretBackendConfigAutoTidy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_config_auto_tidy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendConfigAutoTidy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendConfigAutoTidy to import
  * @param importFromId The id of the existing PkiSecretBackendConfigAutoTidy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendConfigAutoTidy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_config_auto_tidy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_config_auto_tidy vault_pki_secret_backend_config_auto_tidy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendConfigAutoTidyConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendConfigAutoTidyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_config_auto_tidy',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.1.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acmeAccountSafetyBuffer = config.acmeAccountSafetyBuffer;
    this._backend = config.backend;
    this._enabled = config.enabled;
    this._id = config.id;
    this._intervalDuration = config.intervalDuration;
    this._issuerSafetyBuffer = config.issuerSafetyBuffer;
    this._maintainStoredCertificateCounts = config.maintainStoredCertificateCounts;
    this._maxStartupBackoffDuration = config.maxStartupBackoffDuration;
    this._minStartupBackoffDuration = config.minStartupBackoffDuration;
    this._namespace = config.namespace;
    this._pauseDuration = config.pauseDuration;
    this._publishStoredCertificateCountMetrics = config.publishStoredCertificateCountMetrics;
    this._revocationQueueSafetyBuffer = config.revocationQueueSafetyBuffer;
    this._safetyBuffer = config.safetyBuffer;
    this._tidyAcme = config.tidyAcme;
    this._tidyCertMetadata = config.tidyCertMetadata;
    this._tidyCertStore = config.tidyCertStore;
    this._tidyCmpv2NonceStore = config.tidyCmpv2NonceStore;
    this._tidyCrossClusterRevokedCerts = config.tidyCrossClusterRevokedCerts;
    this._tidyExpiredIssuers = config.tidyExpiredIssuers;
    this._tidyMoveLegacyCaBundle = config.tidyMoveLegacyCaBundle;
    this._tidyRevocationQueue = config.tidyRevocationQueue;
    this._tidyRevokedCertIssuerAssociations = config.tidyRevokedCertIssuerAssociations;
    this._tidyRevokedCerts = config.tidyRevokedCerts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acme_account_safety_buffer - computed: true, optional: true, required: false
  private _acmeAccountSafetyBuffer?: string; 
  public get acmeAccountSafetyBuffer() {
    return this.getStringAttribute('acme_account_safety_buffer');
  }
  public set acmeAccountSafetyBuffer(value: string) {
    this._acmeAccountSafetyBuffer = value;
  }
  public resetAcmeAccountSafetyBuffer() {
    this._acmeAccountSafetyBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmeAccountSafetyBufferInput() {
    return this._acmeAccountSafetyBuffer;
  }

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interval_duration - computed: true, optional: true, required: false
  private _intervalDuration?: string; 
  public get intervalDuration() {
    return this.getStringAttribute('interval_duration');
  }
  public set intervalDuration(value: string) {
    this._intervalDuration = value;
  }
  public resetIntervalDuration() {
    this._intervalDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalDurationInput() {
    return this._intervalDuration;
  }

  // issuer_safety_buffer - computed: true, optional: true, required: false
  private _issuerSafetyBuffer?: string; 
  public get issuerSafetyBuffer() {
    return this.getStringAttribute('issuer_safety_buffer');
  }
  public set issuerSafetyBuffer(value: string) {
    this._issuerSafetyBuffer = value;
  }
  public resetIssuerSafetyBuffer() {
    this._issuerSafetyBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerSafetyBufferInput() {
    return this._issuerSafetyBuffer;
  }

  // maintain_stored_certificate_counts - computed: false, optional: true, required: false
  private _maintainStoredCertificateCounts?: boolean | cdktf.IResolvable; 
  public get maintainStoredCertificateCounts() {
    return this.getBooleanAttribute('maintain_stored_certificate_counts');
  }
  public set maintainStoredCertificateCounts(value: boolean | cdktf.IResolvable) {
    this._maintainStoredCertificateCounts = value;
  }
  public resetMaintainStoredCertificateCounts() {
    this._maintainStoredCertificateCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainStoredCertificateCountsInput() {
    return this._maintainStoredCertificateCounts;
  }

  // max_startup_backoff_duration - computed: true, optional: true, required: false
  private _maxStartupBackoffDuration?: string; 
  public get maxStartupBackoffDuration() {
    return this.getStringAttribute('max_startup_backoff_duration');
  }
  public set maxStartupBackoffDuration(value: string) {
    this._maxStartupBackoffDuration = value;
  }
  public resetMaxStartupBackoffDuration() {
    this._maxStartupBackoffDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStartupBackoffDurationInput() {
    return this._maxStartupBackoffDuration;
  }

  // min_startup_backoff_duration - computed: true, optional: true, required: false
  private _minStartupBackoffDuration?: string; 
  public get minStartupBackoffDuration() {
    return this.getStringAttribute('min_startup_backoff_duration');
  }
  public set minStartupBackoffDuration(value: string) {
    this._minStartupBackoffDuration = value;
  }
  public resetMinStartupBackoffDuration() {
    this._minStartupBackoffDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minStartupBackoffDurationInput() {
    return this._minStartupBackoffDuration;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // pause_duration - computed: true, optional: true, required: false
  private _pauseDuration?: string; 
  public get pauseDuration() {
    return this.getStringAttribute('pause_duration');
  }
  public set pauseDuration(value: string) {
    this._pauseDuration = value;
  }
  public resetPauseDuration() {
    this._pauseDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseDurationInput() {
    return this._pauseDuration;
  }

  // publish_stored_certificate_count_metrics - computed: false, optional: true, required: false
  private _publishStoredCertificateCountMetrics?: boolean | cdktf.IResolvable; 
  public get publishStoredCertificateCountMetrics() {
    return this.getBooleanAttribute('publish_stored_certificate_count_metrics');
  }
  public set publishStoredCertificateCountMetrics(value: boolean | cdktf.IResolvable) {
    this._publishStoredCertificateCountMetrics = value;
  }
  public resetPublishStoredCertificateCountMetrics() {
    this._publishStoredCertificateCountMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishStoredCertificateCountMetricsInput() {
    return this._publishStoredCertificateCountMetrics;
  }

  // revocation_queue_safety_buffer - computed: true, optional: true, required: false
  private _revocationQueueSafetyBuffer?: string; 
  public get revocationQueueSafetyBuffer() {
    return this.getStringAttribute('revocation_queue_safety_buffer');
  }
  public set revocationQueueSafetyBuffer(value: string) {
    this._revocationQueueSafetyBuffer = value;
  }
  public resetRevocationQueueSafetyBuffer() {
    this._revocationQueueSafetyBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationQueueSafetyBufferInput() {
    return this._revocationQueueSafetyBuffer;
  }

  // safety_buffer - computed: true, optional: true, required: false
  private _safetyBuffer?: string; 
  public get safetyBuffer() {
    return this.getStringAttribute('safety_buffer');
  }
  public set safetyBuffer(value: string) {
    this._safetyBuffer = value;
  }
  public resetSafetyBuffer() {
    this._safetyBuffer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safetyBufferInput() {
    return this._safetyBuffer;
  }

  // tidy_acme - computed: false, optional: true, required: false
  private _tidyAcme?: boolean | cdktf.IResolvable; 
  public get tidyAcme() {
    return this.getBooleanAttribute('tidy_acme');
  }
  public set tidyAcme(value: boolean | cdktf.IResolvable) {
    this._tidyAcme = value;
  }
  public resetTidyAcme() {
    this._tidyAcme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidyAcmeInput() {
    return this._tidyAcme;
  }

  // tidy_cert_metadata - computed: false, optional: true, required: false
  private _tidyCertMetadata?: boolean | cdktf.IResolvable; 
  public get tidyCertMetadata() {
    return this.getBooleanAttribute('tidy_cert_metadata');
  }
  public set tidyCertMetadata(value: boolean | cdktf.IResolvable) {
    this._tidyCertMetadata = value;
  }
  public resetTidyCertMetadata() {
    this._tidyCertMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidyCertMetadataInput() {
    return this._tidyCertMetadata;
  }

  // tidy_cert_store - computed: false, optional: true, required: false
  private _tidyCertStore?: boolean | cdktf.IResolvable; 
  public get tidyCertStore() {
    return this.getBooleanAttribute('tidy_cert_store');
  }
  public set tidyCertStore(value: boolean | cdktf.IResolvable) {
    this._tidyCertStore = value;
  }
  public resetTidyCertStore() {
    this._tidyCertStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidyCertStoreInput() {
    return this._tidyCertStore;
  }

  // tidy_cmpv2_nonce_store - computed: false, optional: true, required: false
  private _tidyCmpv2NonceStore?: boolean | cdktf.IResolvable; 
  public get tidyCmpv2NonceStore() {
    return this.getBooleanAttribute('tidy_cmpv2_nonce_store');
  }
  public set tidyCmpv2NonceStore(value: boolean | cdktf.IResolvable) {
    this._tidyCmpv2NonceStore = value;
  }
  public resetTidyCmpv2NonceStore() {
    this._tidyCmpv2NonceStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidyCmpv2NonceStoreInput() {
    return this._tidyCmpv2NonceStore;
  }

  // tidy_cross_cluster_revoked_certs - computed: false, optional: true, required: false
  private _tidyCrossClusterRevokedCerts?: boolean | cdktf.IResolvable; 
  public get tidyCrossClusterRevokedCerts() {
    return this.getBooleanAttribute('tidy_cross_cluster_revoked_certs');
  }
  public set tidyCrossClusterRevokedCerts(value: boolean | cdktf.IResolvable) {
    this._tidyCrossClusterRevokedCerts = value;
  }
  public resetTidyCrossClusterRevokedCerts() {
    this._tidyCrossClusterRevokedCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidyCrossClusterRevokedCertsInput() {
    return this._tidyCrossClusterRevokedCerts;
  }

  // tidy_expired_issuers - computed: false, optional: true, required: false
  private _tidyExpiredIssuers?: boolean | cdktf.IResolvable; 
  public get tidyExpiredIssuers() {
    return this.getBooleanAttribute('tidy_expired_issuers');
  }
  public set tidyExpiredIssuers(value: boolean | cdktf.IResolvable) {
    this._tidyExpiredIssuers = value;
  }
  public resetTidyExpiredIssuers() {
    this._tidyExpiredIssuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidyExpiredIssuersInput() {
    return this._tidyExpiredIssuers;
  }

  // tidy_move_legacy_ca_bundle - computed: false, optional: true, required: false
  private _tidyMoveLegacyCaBundle?: boolean | cdktf.IResolvable; 
  public get tidyMoveLegacyCaBundle() {
    return this.getBooleanAttribute('tidy_move_legacy_ca_bundle');
  }
  public set tidyMoveLegacyCaBundle(value: boolean | cdktf.IResolvable) {
    this._tidyMoveLegacyCaBundle = value;
  }
  public resetTidyMoveLegacyCaBundle() {
    this._tidyMoveLegacyCaBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidyMoveLegacyCaBundleInput() {
    return this._tidyMoveLegacyCaBundle;
  }

  // tidy_revocation_queue - computed: false, optional: true, required: false
  private _tidyRevocationQueue?: boolean | cdktf.IResolvable; 
  public get tidyRevocationQueue() {
    return this.getBooleanAttribute('tidy_revocation_queue');
  }
  public set tidyRevocationQueue(value: boolean | cdktf.IResolvable) {
    this._tidyRevocationQueue = value;
  }
  public resetTidyRevocationQueue() {
    this._tidyRevocationQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidyRevocationQueueInput() {
    return this._tidyRevocationQueue;
  }

  // tidy_revoked_cert_issuer_associations - computed: false, optional: true, required: false
  private _tidyRevokedCertIssuerAssociations?: boolean | cdktf.IResolvable; 
  public get tidyRevokedCertIssuerAssociations() {
    return this.getBooleanAttribute('tidy_revoked_cert_issuer_associations');
  }
  public set tidyRevokedCertIssuerAssociations(value: boolean | cdktf.IResolvable) {
    this._tidyRevokedCertIssuerAssociations = value;
  }
  public resetTidyRevokedCertIssuerAssociations() {
    this._tidyRevokedCertIssuerAssociations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidyRevokedCertIssuerAssociationsInput() {
    return this._tidyRevokedCertIssuerAssociations;
  }

  // tidy_revoked_certs - computed: false, optional: true, required: false
  private _tidyRevokedCerts?: boolean | cdktf.IResolvable; 
  public get tidyRevokedCerts() {
    return this.getBooleanAttribute('tidy_revoked_certs');
  }
  public set tidyRevokedCerts(value: boolean | cdktf.IResolvable) {
    this._tidyRevokedCerts = value;
  }
  public resetTidyRevokedCerts() {
    this._tidyRevokedCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidyRevokedCertsInput() {
    return this._tidyRevokedCerts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acme_account_safety_buffer: cdktf.stringToTerraform(this._acmeAccountSafetyBuffer),
      backend: cdktf.stringToTerraform(this._backend),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      interval_duration: cdktf.stringToTerraform(this._intervalDuration),
      issuer_safety_buffer: cdktf.stringToTerraform(this._issuerSafetyBuffer),
      maintain_stored_certificate_counts: cdktf.booleanToTerraform(this._maintainStoredCertificateCounts),
      max_startup_backoff_duration: cdktf.stringToTerraform(this._maxStartupBackoffDuration),
      min_startup_backoff_duration: cdktf.stringToTerraform(this._minStartupBackoffDuration),
      namespace: cdktf.stringToTerraform(this._namespace),
      pause_duration: cdktf.stringToTerraform(this._pauseDuration),
      publish_stored_certificate_count_metrics: cdktf.booleanToTerraform(this._publishStoredCertificateCountMetrics),
      revocation_queue_safety_buffer: cdktf.stringToTerraform(this._revocationQueueSafetyBuffer),
      safety_buffer: cdktf.stringToTerraform(this._safetyBuffer),
      tidy_acme: cdktf.booleanToTerraform(this._tidyAcme),
      tidy_cert_metadata: cdktf.booleanToTerraform(this._tidyCertMetadata),
      tidy_cert_store: cdktf.booleanToTerraform(this._tidyCertStore),
      tidy_cmpv2_nonce_store: cdktf.booleanToTerraform(this._tidyCmpv2NonceStore),
      tidy_cross_cluster_revoked_certs: cdktf.booleanToTerraform(this._tidyCrossClusterRevokedCerts),
      tidy_expired_issuers: cdktf.booleanToTerraform(this._tidyExpiredIssuers),
      tidy_move_legacy_ca_bundle: cdktf.booleanToTerraform(this._tidyMoveLegacyCaBundle),
      tidy_revocation_queue: cdktf.booleanToTerraform(this._tidyRevocationQueue),
      tidy_revoked_cert_issuer_associations: cdktf.booleanToTerraform(this._tidyRevokedCertIssuerAssociations),
      tidy_revoked_certs: cdktf.booleanToTerraform(this._tidyRevokedCerts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acme_account_safety_buffer: {
        value: cdktf.stringToHclTerraform(this._acmeAccountSafetyBuffer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval_duration: {
        value: cdktf.stringToHclTerraform(this._intervalDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer_safety_buffer: {
        value: cdktf.stringToHclTerraform(this._issuerSafetyBuffer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_stored_certificate_counts: {
        value: cdktf.booleanToHclTerraform(this._maintainStoredCertificateCounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_startup_backoff_duration: {
        value: cdktf.stringToHclTerraform(this._maxStartupBackoffDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_startup_backoff_duration: {
        value: cdktf.stringToHclTerraform(this._minStartupBackoffDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pause_duration: {
        value: cdktf.stringToHclTerraform(this._pauseDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_stored_certificate_count_metrics: {
        value: cdktf.booleanToHclTerraform(this._publishStoredCertificateCountMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      revocation_queue_safety_buffer: {
        value: cdktf.stringToHclTerraform(this._revocationQueueSafetyBuffer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      safety_buffer: {
        value: cdktf.stringToHclTerraform(this._safetyBuffer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tidy_acme: {
        value: cdktf.booleanToHclTerraform(this._tidyAcme),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tidy_cert_metadata: {
        value: cdktf.booleanToHclTerraform(this._tidyCertMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tidy_cert_store: {
        value: cdktf.booleanToHclTerraform(this._tidyCertStore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tidy_cmpv2_nonce_store: {
        value: cdktf.booleanToHclTerraform(this._tidyCmpv2NonceStore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tidy_cross_cluster_revoked_certs: {
        value: cdktf.booleanToHclTerraform(this._tidyCrossClusterRevokedCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tidy_expired_issuers: {
        value: cdktf.booleanToHclTerraform(this._tidyExpiredIssuers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tidy_move_legacy_ca_bundle: {
        value: cdktf.booleanToHclTerraform(this._tidyMoveLegacyCaBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tidy_revocation_queue: {
        value: cdktf.booleanToHclTerraform(this._tidyRevocationQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tidy_revoked_cert_issuer_associations: {
        value: cdktf.booleanToHclTerraform(this._tidyRevokedCertIssuerAssociations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tidy_revoked_certs: {
        value: cdktf.booleanToHclTerraform(this._tidyRevokedCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
