/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Full path where PKI backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#backend PkiSecretBackendIssuer#backend}
  */
  readonly backend: string;
  /**
  * Specifies the URL values for the CRL Distribution Points field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#crl_distribution_points PkiSecretBackendIssuer#crl_distribution_points}
  */
  readonly crlDistributionPoints?: string[];
  /**
  * This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#disable_critical_extension_checks PkiSecretBackendIssuer#disable_critical_extension_checks}
  */
  readonly disableCriticalExtensionChecks?: boolean | cdktf.IResolvable;
  /**
  * This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#disable_name_checks PkiSecretBackendIssuer#disable_name_checks}
  */
  readonly disableNameChecks?: boolean | cdktf.IResolvable;
  /**
  * This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#disable_name_constraint_checks PkiSecretBackendIssuer#disable_name_constraint_checks}
  */
  readonly disableNameConstraintChecks?: boolean | cdktf.IResolvable;
  /**
  * This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#disable_path_length_checks PkiSecretBackendIssuer#disable_path_length_checks}
  */
  readonly disablePathLengthChecks?: boolean | cdktf.IResolvable;
  /**
  * Specifies that the AIA URL values should be templated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#enable_aia_url_templating PkiSecretBackendIssuer#enable_aia_url_templating}
  */
  readonly enableAiaUrlTemplating?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reference to an existing issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#issuer_name PkiSecretBackendIssuer#issuer_name}
  */
  readonly issuerName?: string;
  /**
  * Reference to an existing issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#issuer_ref PkiSecretBackendIssuer#issuer_ref}
  */
  readonly issuerRef: string;
  /**
  * Specifies the URL values for the Issuing Certificate field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#issuing_certificates PkiSecretBackendIssuer#issuing_certificates}
  */
  readonly issuingCertificates?: string[];
  /**
  * Behavior of a leaf's 'NotAfter' field during issuance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#leaf_not_after_behavior PkiSecretBackendIssuer#leaf_not_after_behavior}
  */
  readonly leafNotAfterBehavior?: string;
  /**
  * Chain of issuer references to build this issuer's computed CAChain field from, when non-empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#manual_chain PkiSecretBackendIssuer#manual_chain}
  */
  readonly manualChain?: string[];
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#namespace PkiSecretBackendIssuer#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the URL values for the OCSP Servers field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#ocsp_servers PkiSecretBackendIssuer#ocsp_servers}
  */
  readonly ocspServers?: string[];
  /**
  * Which signature algorithm to use when building CRLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#revocation_signature_algorithm PkiSecretBackendIssuer#revocation_signature_algorithm}
  */
  readonly revocationSignatureAlgorithm?: string;
  /**
  * Comma-separated list of allowed usages for this issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#usage PkiSecretBackendIssuer#usage}
  */
  readonly usage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}
*/
export class PkiSecretBackendIssuer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_issuer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendIssuer to import
  * @param importFromId The id of the existing PkiSecretBackendIssuer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendIssuer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_issuer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/pki_secret_backend_issuer vault_pki_secret_backend_issuer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_issuer',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.4.0',
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
    this._backend = config.backend;
    this._crlDistributionPoints = config.crlDistributionPoints;
    this._disableCriticalExtensionChecks = config.disableCriticalExtensionChecks;
    this._disableNameChecks = config.disableNameChecks;
    this._disableNameConstraintChecks = config.disableNameConstraintChecks;
    this._disablePathLengthChecks = config.disablePathLengthChecks;
    this._enableAiaUrlTemplating = config.enableAiaUrlTemplating;
    this._id = config.id;
    this._issuerName = config.issuerName;
    this._issuerRef = config.issuerRef;
    this._issuingCertificates = config.issuingCertificates;
    this._leafNotAfterBehavior = config.leafNotAfterBehavior;
    this._manualChain = config.manualChain;
    this._namespace = config.namespace;
    this._ocspServers = config.ocspServers;
    this._revocationSignatureAlgorithm = config.revocationSignatureAlgorithm;
    this._usage = config.usage;
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

  // crl_distribution_points - computed: false, optional: true, required: false
  private _crlDistributionPoints?: string[]; 
  public get crlDistributionPoints() {
    return this.getListAttribute('crl_distribution_points');
  }
  public set crlDistributionPoints(value: string[]) {
    this._crlDistributionPoints = value;
  }
  public resetCrlDistributionPoints() {
    this._crlDistributionPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlDistributionPointsInput() {
    return this._crlDistributionPoints;
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

  // enable_aia_url_templating - computed: false, optional: true, required: false
  private _enableAiaUrlTemplating?: boolean | cdktf.IResolvable; 
  public get enableAiaUrlTemplating() {
    return this.getBooleanAttribute('enable_aia_url_templating');
  }
  public set enableAiaUrlTemplating(value: boolean | cdktf.IResolvable) {
    this._enableAiaUrlTemplating = value;
  }
  public resetEnableAiaUrlTemplating() {
    this._enableAiaUrlTemplating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAiaUrlTemplatingInput() {
    return this._enableAiaUrlTemplating;
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

  // issuer_name - computed: false, optional: true, required: false
  private _issuerName?: string; 
  public get issuerName() {
    return this.getStringAttribute('issuer_name');
  }
  public set issuerName(value: string) {
    this._issuerName = value;
  }
  public resetIssuerName() {
    this._issuerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerNameInput() {
    return this._issuerName;
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

  // issuing_certificates - computed: false, optional: true, required: false
  private _issuingCertificates?: string[]; 
  public get issuingCertificates() {
    return this.getListAttribute('issuing_certificates');
  }
  public set issuingCertificates(value: string[]) {
    this._issuingCertificates = value;
  }
  public resetIssuingCertificates() {
    this._issuingCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuingCertificatesInput() {
    return this._issuingCertificates;
  }

  // leaf_not_after_behavior - computed: true, optional: true, required: false
  private _leafNotAfterBehavior?: string; 
  public get leafNotAfterBehavior() {
    return this.getStringAttribute('leaf_not_after_behavior');
  }
  public set leafNotAfterBehavior(value: string) {
    this._leafNotAfterBehavior = value;
  }
  public resetLeafNotAfterBehavior() {
    this._leafNotAfterBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafNotAfterBehaviorInput() {
    return this._leafNotAfterBehavior;
  }

  // manual_chain - computed: false, optional: true, required: false
  private _manualChain?: string[]; 
  public get manualChain() {
    return this.getListAttribute('manual_chain');
  }
  public set manualChain(value: string[]) {
    this._manualChain = value;
  }
  public resetManualChain() {
    this._manualChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualChainInput() {
    return this._manualChain;
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

  // ocsp_servers - computed: false, optional: true, required: false
  private _ocspServers?: string[]; 
  public get ocspServers() {
    return this.getListAttribute('ocsp_servers');
  }
  public set ocspServers(value: string[]) {
    this._ocspServers = value;
  }
  public resetOcspServers() {
    this._ocspServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspServersInput() {
    return this._ocspServers;
  }

  // revocation_signature_algorithm - computed: true, optional: true, required: false
  private _revocationSignatureAlgorithm?: string; 
  public get revocationSignatureAlgorithm() {
    return this.getStringAttribute('revocation_signature_algorithm');
  }
  public set revocationSignatureAlgorithm(value: string) {
    this._revocationSignatureAlgorithm = value;
  }
  public resetRevocationSignatureAlgorithm() {
    this._revocationSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationSignatureAlgorithmInput() {
    return this._revocationSignatureAlgorithm;
  }

  // usage - computed: true, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      crl_distribution_points: cdktf.listMapper(cdktf.stringToTerraform, false)(this._crlDistributionPoints),
      disable_critical_extension_checks: cdktf.booleanToTerraform(this._disableCriticalExtensionChecks),
      disable_name_checks: cdktf.booleanToTerraform(this._disableNameChecks),
      disable_name_constraint_checks: cdktf.booleanToTerraform(this._disableNameConstraintChecks),
      disable_path_length_checks: cdktf.booleanToTerraform(this._disablePathLengthChecks),
      enable_aia_url_templating: cdktf.booleanToTerraform(this._enableAiaUrlTemplating),
      id: cdktf.stringToTerraform(this._id),
      issuer_name: cdktf.stringToTerraform(this._issuerName),
      issuer_ref: cdktf.stringToTerraform(this._issuerRef),
      issuing_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._issuingCertificates),
      leaf_not_after_behavior: cdktf.stringToTerraform(this._leafNotAfterBehavior),
      manual_chain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manualChain),
      namespace: cdktf.stringToTerraform(this._namespace),
      ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ocspServers),
      revocation_signature_algorithm: cdktf.stringToTerraform(this._revocationSignatureAlgorithm),
      usage: cdktf.stringToTerraform(this._usage),
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
      crl_distribution_points: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._crlDistributionPoints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      enable_aia_url_templating: {
        value: cdktf.booleanToHclTerraform(this._enableAiaUrlTemplating),
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
      issuer_name: {
        value: cdktf.stringToHclTerraform(this._issuerName),
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
      issuing_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._issuingCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      leaf_not_after_behavior: {
        value: cdktf.stringToHclTerraform(this._leafNotAfterBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manual_chain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._manualChain),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ocspServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      revocation_signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._revocationSignatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage: {
        value: cdktf.stringToHclTerraform(this._usage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
