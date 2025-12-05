/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendCrlConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enables or disables periodic rebuilding of the CRL upon expiry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#auto_rebuild PkiSecretBackendCrlConfig#auto_rebuild}
  */
  readonly autoRebuild?: boolean | cdktf.IResolvable;
  /**
  * Grace period before CRL expiry to attempt rebuild of CRL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#auto_rebuild_grace_period PkiSecretBackendCrlConfig#auto_rebuild_grace_period}
  */
  readonly autoRebuildGracePeriod?: string;
  /**
  * The path of the PKI secret backend the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#backend PkiSecretBackendCrlConfig#backend}
  */
  readonly backend: string;
  /**
  * Enable cross-cluster revocation request queues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#cross_cluster_revocation PkiSecretBackendCrlConfig#cross_cluster_revocation}
  */
  readonly crossClusterRevocation?: boolean | cdktf.IResolvable;
  /**
  * Interval to check for new revocations on, to regenerate the delta CRL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#delta_rebuild_interval PkiSecretBackendCrlConfig#delta_rebuild_interval}
  */
  readonly deltaRebuildInterval?: string;
  /**
  * Disables or enables CRL building
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#disable PkiSecretBackendCrlConfig#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#enable_delta PkiSecretBackendCrlConfig#enable_delta}
  */
  readonly enableDelta?: boolean | cdktf.IResolvable;
  /**
  * Specifies the time until expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#expiry PkiSecretBackendCrlConfig#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of entries a CRL can contain. This option exists to prevent accidental runaway issuance/revocation from overloading Vault. If set to -1, the limit is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#max_crl_entries PkiSecretBackendCrlConfig#max_crl_entries}
  */
  readonly maxCrlEntries?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#namespace PkiSecretBackendCrlConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Disables or enables the OCSP responder in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#ocsp_disable PkiSecretBackendCrlConfig#ocsp_disable}
  */
  readonly ocspDisable?: boolean | cdktf.IResolvable;
  /**
  * The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#ocsp_expiry PkiSecretBackendCrlConfig#ocsp_expiry}
  */
  readonly ocspExpiry?: string;
  /**
  * Enables unified CRL and OCSP building.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#unified_crl PkiSecretBackendCrlConfig#unified_crl}
  */
  readonly unifiedCrl?: boolean | cdktf.IResolvable;
  /**
  * Enables serving the unified CRL and OCSP on the existing, previously cluster-local paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#unified_crl_on_existing_paths PkiSecretBackendCrlConfig#unified_crl_on_existing_paths}
  */
  readonly unifiedCrlOnExistingPaths?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config vault_pki_secret_backend_crl_config}
*/
export class PkiSecretBackendCrlConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_crl_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendCrlConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendCrlConfig to import
  * @param importFromId The id of the existing PkiSecretBackendCrlConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendCrlConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_crl_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_crl_config vault_pki_secret_backend_crl_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendCrlConfigConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendCrlConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_crl_config',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.6.0',
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
    this._autoRebuild = config.autoRebuild;
    this._autoRebuildGracePeriod = config.autoRebuildGracePeriod;
    this._backend = config.backend;
    this._crossClusterRevocation = config.crossClusterRevocation;
    this._deltaRebuildInterval = config.deltaRebuildInterval;
    this._disable = config.disable;
    this._enableDelta = config.enableDelta;
    this._expiry = config.expiry;
    this._id = config.id;
    this._maxCrlEntries = config.maxCrlEntries;
    this._namespace = config.namespace;
    this._ocspDisable = config.ocspDisable;
    this._ocspExpiry = config.ocspExpiry;
    this._unifiedCrl = config.unifiedCrl;
    this._unifiedCrlOnExistingPaths = config.unifiedCrlOnExistingPaths;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rebuild - computed: false, optional: true, required: false
  private _autoRebuild?: boolean | cdktf.IResolvable; 
  public get autoRebuild() {
    return this.getBooleanAttribute('auto_rebuild');
  }
  public set autoRebuild(value: boolean | cdktf.IResolvable) {
    this._autoRebuild = value;
  }
  public resetAutoRebuild() {
    this._autoRebuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRebuildInput() {
    return this._autoRebuild;
  }

  // auto_rebuild_grace_period - computed: true, optional: true, required: false
  private _autoRebuildGracePeriod?: string; 
  public get autoRebuildGracePeriod() {
    return this.getStringAttribute('auto_rebuild_grace_period');
  }
  public set autoRebuildGracePeriod(value: string) {
    this._autoRebuildGracePeriod = value;
  }
  public resetAutoRebuildGracePeriod() {
    this._autoRebuildGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRebuildGracePeriodInput() {
    return this._autoRebuildGracePeriod;
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

  // cross_cluster_revocation - computed: true, optional: true, required: false
  private _crossClusterRevocation?: boolean | cdktf.IResolvable; 
  public get crossClusterRevocation() {
    return this.getBooleanAttribute('cross_cluster_revocation');
  }
  public set crossClusterRevocation(value: boolean | cdktf.IResolvable) {
    this._crossClusterRevocation = value;
  }
  public resetCrossClusterRevocation() {
    this._crossClusterRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossClusterRevocationInput() {
    return this._crossClusterRevocation;
  }

  // delta_rebuild_interval - computed: true, optional: true, required: false
  private _deltaRebuildInterval?: string; 
  public get deltaRebuildInterval() {
    return this.getStringAttribute('delta_rebuild_interval');
  }
  public set deltaRebuildInterval(value: string) {
    this._deltaRebuildInterval = value;
  }
  public resetDeltaRebuildInterval() {
    this._deltaRebuildInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaRebuildIntervalInput() {
    return this._deltaRebuildInterval;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable_delta - computed: false, optional: true, required: false
  private _enableDelta?: boolean | cdktf.IResolvable; 
  public get enableDelta() {
    return this.getBooleanAttribute('enable_delta');
  }
  public set enableDelta(value: boolean | cdktf.IResolvable) {
    this._enableDelta = value;
  }
  public resetEnableDelta() {
    this._enableDelta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeltaInput() {
    return this._enableDelta;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
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

  // max_crl_entries - computed: true, optional: true, required: false
  private _maxCrlEntries?: number; 
  public get maxCrlEntries() {
    return this.getNumberAttribute('max_crl_entries');
  }
  public set maxCrlEntries(value: number) {
    this._maxCrlEntries = value;
  }
  public resetMaxCrlEntries() {
    this._maxCrlEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCrlEntriesInput() {
    return this._maxCrlEntries;
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

  // ocsp_disable - computed: false, optional: true, required: false
  private _ocspDisable?: boolean | cdktf.IResolvable; 
  public get ocspDisable() {
    return this.getBooleanAttribute('ocsp_disable');
  }
  public set ocspDisable(value: boolean | cdktf.IResolvable) {
    this._ocspDisable = value;
  }
  public resetOcspDisable() {
    this._ocspDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspDisableInput() {
    return this._ocspDisable;
  }

  // ocsp_expiry - computed: true, optional: true, required: false
  private _ocspExpiry?: string; 
  public get ocspExpiry() {
    return this.getStringAttribute('ocsp_expiry');
  }
  public set ocspExpiry(value: string) {
    this._ocspExpiry = value;
  }
  public resetOcspExpiry() {
    this._ocspExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspExpiryInput() {
    return this._ocspExpiry;
  }

  // unified_crl - computed: true, optional: true, required: false
  private _unifiedCrl?: boolean | cdktf.IResolvable; 
  public get unifiedCrl() {
    return this.getBooleanAttribute('unified_crl');
  }
  public set unifiedCrl(value: boolean | cdktf.IResolvable) {
    this._unifiedCrl = value;
  }
  public resetUnifiedCrl() {
    this._unifiedCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedCrlInput() {
    return this._unifiedCrl;
  }

  // unified_crl_on_existing_paths - computed: true, optional: true, required: false
  private _unifiedCrlOnExistingPaths?: boolean | cdktf.IResolvable; 
  public get unifiedCrlOnExistingPaths() {
    return this.getBooleanAttribute('unified_crl_on_existing_paths');
  }
  public set unifiedCrlOnExistingPaths(value: boolean | cdktf.IResolvable) {
    this._unifiedCrlOnExistingPaths = value;
  }
  public resetUnifiedCrlOnExistingPaths() {
    this._unifiedCrlOnExistingPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedCrlOnExistingPathsInput() {
    return this._unifiedCrlOnExistingPaths;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_rebuild: cdktf.booleanToTerraform(this._autoRebuild),
      auto_rebuild_grace_period: cdktf.stringToTerraform(this._autoRebuildGracePeriod),
      backend: cdktf.stringToTerraform(this._backend),
      cross_cluster_revocation: cdktf.booleanToTerraform(this._crossClusterRevocation),
      delta_rebuild_interval: cdktf.stringToTerraform(this._deltaRebuildInterval),
      disable: cdktf.booleanToTerraform(this._disable),
      enable_delta: cdktf.booleanToTerraform(this._enableDelta),
      expiry: cdktf.stringToTerraform(this._expiry),
      id: cdktf.stringToTerraform(this._id),
      max_crl_entries: cdktf.numberToTerraform(this._maxCrlEntries),
      namespace: cdktf.stringToTerraform(this._namespace),
      ocsp_disable: cdktf.booleanToTerraform(this._ocspDisable),
      ocsp_expiry: cdktf.stringToTerraform(this._ocspExpiry),
      unified_crl: cdktf.booleanToTerraform(this._unifiedCrl),
      unified_crl_on_existing_paths: cdktf.booleanToTerraform(this._unifiedCrlOnExistingPaths),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_rebuild: {
        value: cdktf.booleanToHclTerraform(this._autoRebuild),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_rebuild_grace_period: {
        value: cdktf.stringToHclTerraform(this._autoRebuildGracePeriod),
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
      cross_cluster_revocation: {
        value: cdktf.booleanToHclTerraform(this._crossClusterRevocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delta_rebuild_interval: {
        value: cdktf.stringToHclTerraform(this._deltaRebuildInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_delta: {
        value: cdktf.booleanToHclTerraform(this._enableDelta),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expiry: {
        value: cdktf.stringToHclTerraform(this._expiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_crl_entries: {
        value: cdktf.numberToHclTerraform(this._maxCrlEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_disable: {
        value: cdktf.booleanToHclTerraform(this._ocspDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ocsp_expiry: {
        value: cdktf.stringToHclTerraform(this._ocspExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unified_crl: {
        value: cdktf.booleanToHclTerraform(this._unifiedCrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unified_crl_on_existing_paths: {
        value: cdktf.booleanToHclTerraform(this._unifiedCrlOnExistingPaths),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
