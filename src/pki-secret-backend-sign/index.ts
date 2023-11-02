/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendSignConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of alternative names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#alt_names PkiSecretBackendSign#alt_names}
  */
  readonly altNames?: string[];
  /**
  * If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#auto_renew PkiSecretBackendSign#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * The PKI secret backend the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#backend PkiSecretBackendSign#backend}
  */
  readonly backend: string;
  /**
  * CN of intermediate to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#common_name PkiSecretBackendSign#common_name}
  */
  readonly commonName: string;
  /**
  * The CSR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#csr PkiSecretBackendSign#csr}
  */
  readonly csr: string;
  /**
  * Flag to exclude CN from SANs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#exclude_cn_from_sans PkiSecretBackendSign#exclude_cn_from_sans}
  */
  readonly excludeCnFromSans?: boolean | cdktf.IResolvable;
  /**
  * The format of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#format PkiSecretBackendSign#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#id PkiSecretBackendSign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of alternative IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#ip_sans PkiSecretBackendSign#ip_sans}
  */
  readonly ipSans?: string[];
  /**
  * Specifies the default issuer of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#issuer_ref PkiSecretBackendSign#issuer_ref}
  */
  readonly issuerRef?: string;
  /**
  * Generate a new certificate when the expiration is within this number of seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#min_seconds_remaining PkiSecretBackendSign#min_seconds_remaining}
  */
  readonly minSecondsRemaining?: number;
  /**
  * Name of the role to create the certificate against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#name PkiSecretBackendSign#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#namespace PkiSecretBackendSign#namespace}
  */
  readonly namespace?: string;
  /**
  * List of other SANs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#other_sans PkiSecretBackendSign#other_sans}
  */
  readonly otherSans?: string[];
  /**
  * Time to live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#ttl PkiSecretBackendSign#ttl}
  */
  readonly ttl?: string;
  /**
  * List of alternative URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#uri_sans PkiSecretBackendSign#uri_sans}
  */
  readonly uriSans?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign vault_pki_secret_backend_sign}
*/
export class PkiSecretBackendSign extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_sign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendSign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendSign to import
  * @param importFromId The id of the existing PkiSecretBackendSign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendSign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_sign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/pki_secret_backend_sign vault_pki_secret_backend_sign} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendSignConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendSignConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_sign',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.22.0',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._altNames = config.altNames;
    this._autoRenew = config.autoRenew;
    this._backend = config.backend;
    this._commonName = config.commonName;
    this._csr = config.csr;
    this._excludeCnFromSans = config.excludeCnFromSans;
    this._format = config.format;
    this._id = config.id;
    this._ipSans = config.ipSans;
    this._issuerRef = config.issuerRef;
    this._minSecondsRemaining = config.minSecondsRemaining;
    this._name = config.name;
    this._namespace = config.namespace;
    this._otherSans = config.otherSans;
    this._ttl = config.ttl;
    this._uriSans = config.uriSans;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alt_names - computed: false, optional: true, required: false
  private _altNames?: string[]; 
  public get altNames() {
    return this.getListAttribute('alt_names');
  }
  public set altNames(value: string[]) {
    this._altNames = value;
  }
  public resetAltNames() {
    this._altNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNamesInput() {
    return this._altNames;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
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

  // ca_chain - computed: true, optional: false, required: false
  public get caChain() {
    return this.getListAttribute('ca_chain');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // csr - computed: false, optional: false, required: true
  private _csr?: string; 
  public get csr() {
    return this.getStringAttribute('csr');
  }
  public set csr(value: string) {
    this._csr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get csrInput() {
    return this._csr;
  }

  // exclude_cn_from_sans - computed: false, optional: true, required: false
  private _excludeCnFromSans?: boolean | cdktf.IResolvable; 
  public get excludeCnFromSans() {
    return this.getBooleanAttribute('exclude_cn_from_sans');
  }
  public set excludeCnFromSans(value: boolean | cdktf.IResolvable) {
    this._excludeCnFromSans = value;
  }
  public resetExcludeCnFromSans() {
    this._excludeCnFromSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCnFromSansInput() {
    return this._excludeCnFromSans;
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // ip_sans - computed: false, optional: true, required: false
  private _ipSans?: string[]; 
  public get ipSans() {
    return this.getListAttribute('ip_sans');
  }
  public set ipSans(value: string[]) {
    this._ipSans = value;
  }
  public resetIpSans() {
    this._ipSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSansInput() {
    return this._ipSans;
  }

  // issuer_ref - computed: false, optional: true, required: false
  private _issuerRef?: string; 
  public get issuerRef() {
    return this.getStringAttribute('issuer_ref');
  }
  public set issuerRef(value: string) {
    this._issuerRef = value;
  }
  public resetIssuerRef() {
    this._issuerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerRefInput() {
    return this._issuerRef;
  }

  // issuing_ca - computed: true, optional: false, required: false
  public get issuingCa() {
    return this.getStringAttribute('issuing_ca');
  }

  // min_seconds_remaining - computed: false, optional: true, required: false
  private _minSecondsRemaining?: number; 
  public get minSecondsRemaining() {
    return this.getNumberAttribute('min_seconds_remaining');
  }
  public set minSecondsRemaining(value: number) {
    this._minSecondsRemaining = value;
  }
  public resetMinSecondsRemaining() {
    this._minSecondsRemaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSecondsRemainingInput() {
    return this._minSecondsRemaining;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // other_sans - computed: false, optional: true, required: false
  private _otherSans?: string[]; 
  public get otherSans() {
    return this.getListAttribute('other_sans');
  }
  public set otherSans(value: string[]) {
    this._otherSans = value;
  }
  public resetOtherSans() {
    this._otherSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSansInput() {
    return this._otherSans;
  }

  // renew_pending - computed: true, optional: false, required: false
  public get renewPending() {
    return this.getBooleanAttribute('renew_pending');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // uri_sans - computed: false, optional: true, required: false
  private _uriSans?: string[]; 
  public get uriSans() {
    return this.getListAttribute('uri_sans');
  }
  public set uriSans(value: string[]) {
    this._uriSans = value;
  }
  public resetUriSans() {
    this._uriSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriSansInput() {
    return this._uriSans;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._altNames),
      auto_renew: cdktf.booleanToTerraform(this._autoRenew),
      backend: cdktf.stringToTerraform(this._backend),
      common_name: cdktf.stringToTerraform(this._commonName),
      csr: cdktf.stringToTerraform(this._csr),
      exclude_cn_from_sans: cdktf.booleanToTerraform(this._excludeCnFromSans),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      ip_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSans),
      issuer_ref: cdktf.stringToTerraform(this._issuerRef),
      min_seconds_remaining: cdktf.numberToTerraform(this._minSecondsRemaining),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      other_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._otherSans),
      ttl: cdktf.stringToTerraform(this._ttl),
      uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uriSans),
    };
  }
}
