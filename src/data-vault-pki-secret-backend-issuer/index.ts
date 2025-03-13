/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultPkiSecretBackendIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Full path where PKI backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#backend DataVaultPkiSecretBackendIssuer#backend}
  */
  readonly backend: string;
  /**
  * This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#disable_critical_extension_checks DataVaultPkiSecretBackendIssuer#disable_critical_extension_checks}
  */
  readonly disableCriticalExtensionChecks?: boolean | cdktf.IResolvable;
  /**
  * This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#disable_name_checks DataVaultPkiSecretBackendIssuer#disable_name_checks}
  */
  readonly disableNameChecks?: boolean | cdktf.IResolvable;
  /**
  * This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#disable_name_constraint_checks DataVaultPkiSecretBackendIssuer#disable_name_constraint_checks}
  */
  readonly disableNameConstraintChecks?: boolean | cdktf.IResolvable;
  /**
  * This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#disable_path_length_checks DataVaultPkiSecretBackendIssuer#disable_path_length_checks}
  */
  readonly disablePathLengthChecks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reference to an existing issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#issuer_ref DataVaultPkiSecretBackendIssuer#issuer_ref}
  */
  readonly issuerRef: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#namespace DataVaultPkiSecretBackendIssuer#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}
*/
export class DataVaultPkiSecretBackendIssuer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultPkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultPkiSecretBackendIssuer to import
  * @param importFromId The id of the existing DataVaultPkiSecretBackendIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultPkiSecretBackendIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_issuer vault_pki_secret_backend_issuer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultPkiSecretBackendIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultPkiSecretBackendIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_issuer',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.7.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backend = config.backend;
    this._disableCriticalExtensionChecks = config.disableCriticalExtensionChecks;
    this._disableNameChecks = config.disableNameChecks;
    this._disableNameConstraintChecks = config.disableNameConstraintChecks;
    this._disablePathLengthChecks = config.disablePathLengthChecks;
    this._id = config.id;
    this._issuerRef = config.issuerRef;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ca_chain - computed: true, optional: false, required: false
  public get caChain() {
    return this.getListAttribute('ca_chain');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // disable_critical_extension_checks - computed: false, optional: true, required: false
  private _disableCriticalExtensionChecks?: boolean | cdktf.IResolvable; 
  public get disableCriticalExtensionChecks() {
    return this.getBooleanAttribute('disable_critical_extension_checks');
  }
  public set disableCriticalExtensionChecks(value: boolean | cdktf.IResolvable) {
    this._disableCriticalExtensionChecks = value;
  }
  public resetDisableCriticalExtensionChecks() {
    this._disableCriticalExtensionChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCriticalExtensionChecksInput() {
    return this._disableCriticalExtensionChecks;
  }

  // disable_name_checks - computed: false, optional: true, required: false
  private _disableNameChecks?: boolean | cdktf.IResolvable; 
  public get disableNameChecks() {
    return this.getBooleanAttribute('disable_name_checks');
  }
  public set disableNameChecks(value: boolean | cdktf.IResolvable) {
    this._disableNameChecks = value;
  }
  public resetDisableNameChecks() {
    this._disableNameChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNameChecksInput() {
    return this._disableNameChecks;
  }

  // disable_name_constraint_checks - computed: false, optional: true, required: false
  private _disableNameConstraintChecks?: boolean | cdktf.IResolvable; 
  public get disableNameConstraintChecks() {
    return this.getBooleanAttribute('disable_name_constraint_checks');
  }
  public set disableNameConstraintChecks(value: boolean | cdktf.IResolvable) {
    this._disableNameConstraintChecks = value;
  }
  public resetDisableNameConstraintChecks() {
    this._disableNameConstraintChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNameConstraintChecksInput() {
    return this._disableNameConstraintChecks;
  }

  // disable_path_length_checks - computed: false, optional: true, required: false
  private _disablePathLengthChecks?: boolean | cdktf.IResolvable; 
  public get disablePathLengthChecks() {
    return this.getBooleanAttribute('disable_path_length_checks');
  }
  public set disablePathLengthChecks(value: boolean | cdktf.IResolvable) {
    this._disablePathLengthChecks = value;
  }
  public resetDisablePathLengthChecks() {
    this._disablePathLengthChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePathLengthChecksInput() {
    return this._disablePathLengthChecks;
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

  // issuer_id - computed: true, optional: false, required: false
  public get issuerId() {
    return this.getStringAttribute('issuer_id');
  }

  // issuer_name - computed: true, optional: false, required: false
  public get issuerName() {
    return this.getStringAttribute('issuer_name');
  }

  // issuer_ref - computed: false, optional: false, required: true
  private _issuerRef?: string; 
  public get issuerRef() {
    return this.getStringAttribute('issuer_ref');
  }
  public set issuerRef(value: string) {
    this._issuerRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerRefInput() {
    return this._issuerRef;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // leaf_not_after_behavior - computed: true, optional: false, required: false
  public get leafNotAfterBehavior() {
    return this.getStringAttribute('leaf_not_after_behavior');
  }

  // manual_chain - computed: true, optional: false, required: false
  public get manualChain() {
    return this.getListAttribute('manual_chain');
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

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      disable_critical_extension_checks: cdktf.booleanToTerraform(this._disableCriticalExtensionChecks),
      disable_name_checks: cdktf.booleanToTerraform(this._disableNameChecks),
      disable_name_constraint_checks: cdktf.booleanToTerraform(this._disableNameConstraintChecks),
      disable_path_length_checks: cdktf.booleanToTerraform(this._disablePathLengthChecks),
      id: cdktf.stringToTerraform(this._id),
      issuer_ref: cdktf.stringToTerraform(this._issuerRef),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_critical_extension_checks: {
        value: cdktf.booleanToHclTerraform(this._disableCriticalExtensionChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_name_checks: {
        value: cdktf.booleanToHclTerraform(this._disableNameChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_name_constraint_checks: {
        value: cdktf.booleanToHclTerraform(this._disableNameConstraintChecks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_path_length_checks: {
        value: cdktf.booleanToHclTerraform(this._disablePathLengthChecks),
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
      issuer_ref: {
        value: cdktf.stringToHclTerraform(this._issuerRef),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
