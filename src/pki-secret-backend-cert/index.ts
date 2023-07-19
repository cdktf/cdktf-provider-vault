// https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of alternative names.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#alt_names PkiSecretBackendCert#alt_names}
  */
  readonly altNames?: string[];
  /**
  * If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#auto_renew PkiSecretBackendCert#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * The PKI secret backend the resource belongs to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#backend PkiSecretBackendCert#backend}
  */
  readonly backend: string;
  /**
  * CN of the certificate to create.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#common_name PkiSecretBackendCert#common_name}
  */
  readonly commonName: string;
  /**
  * Flag to exclude CN from SANs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#exclude_cn_from_sans PkiSecretBackendCert#exclude_cn_from_sans}
  */
  readonly excludeCnFromSans?: boolean | cdktf.IResolvable;
  /**
  * The format of data.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#format PkiSecretBackendCert#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of alternative IPs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#ip_sans PkiSecretBackendCert#ip_sans}
  */
  readonly ipSans?: string[];
  /**
  * Specifies the default issuer of this request.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#issuer_ref PkiSecretBackendCert#issuer_ref}
  */
  readonly issuerRef?: string;
  /**
  * Generate a new certificate when the expiration is within this number of seconds
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#min_seconds_remaining PkiSecretBackendCert#min_seconds_remaining}
  */
  readonly minSecondsRemaining?: number;
  /**
  * Name of the role to create the certificate against.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#name PkiSecretBackendCert#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#namespace PkiSecretBackendCert#namespace}
  */
  readonly namespace?: string;
  /**
  * List of other SANs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#other_sans PkiSecretBackendCert#other_sans}
  */
  readonly otherSans?: string[];
  /**
  * The private key format.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#private_key_format PkiSecretBackendCert#private_key_format}
  */
  readonly privateKeyFormat?: string;
  /**
  * Revoke the certificate upon resource destruction.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#revoke PkiSecretBackendCert#revoke}
  */
  readonly revoke?: boolean | cdktf.IResolvable;
  /**
  * Time to live.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#ttl PkiSecretBackendCert#ttl}
  */
  readonly ttl?: string;
  /**
  * List of alternative URIs.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert#uri_sans PkiSecretBackendCert#uri_sans}
  */
  readonly uriSans?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert vault_pki_secret_backend_cert}
*/
export class PkiSecretBackendCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_cert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_cert vault_pki_secret_backend_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendCertConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendCertConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_cert',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.18.0',
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
    this._excludeCnFromSans = config.excludeCnFromSans;
    this._format = config.format;
    this._id = config.id;
    this._ipSans = config.ipSans;
    this._issuerRef = config.issuerRef;
    this._minSecondsRemaining = config.minSecondsRemaining;
    this._name = config.name;
    this._namespace = config.namespace;
    this._otherSans = config.otherSans;
    this._privateKeyFormat = config.privateKeyFormat;
    this._revoke = config.revoke;
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
    return this.getStringAttribute('ca_chain');
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

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_format - computed: false, optional: true, required: false
  private _privateKeyFormat?: string; 
  public get privateKeyFormat() {
    return this.getStringAttribute('private_key_format');
  }
  public set privateKeyFormat(value: string) {
    this._privateKeyFormat = value;
  }
  public resetPrivateKeyFormat() {
    this._privateKeyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFormatInput() {
    return this._privateKeyFormat;
  }

  // private_key_type - computed: true, optional: false, required: false
  public get privateKeyType() {
    return this.getStringAttribute('private_key_type');
  }

  // renew_pending - computed: true, optional: false, required: false
  public get renewPending() {
    return this.getBooleanAttribute('renew_pending');
  }

  // revoke - computed: false, optional: true, required: false
  private _revoke?: boolean | cdktf.IResolvable; 
  public get revoke() {
    return this.getBooleanAttribute('revoke');
  }
  public set revoke(value: boolean | cdktf.IResolvable) {
    this._revoke = value;
  }
  public resetRevoke() {
    this._revoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeInput() {
    return this._revoke;
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
      exclude_cn_from_sans: cdktf.booleanToTerraform(this._excludeCnFromSans),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      ip_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSans),
      issuer_ref: cdktf.stringToTerraform(this._issuerRef),
      min_seconds_remaining: cdktf.numberToTerraform(this._minSecondsRemaining),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      other_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._otherSans),
      private_key_format: cdktf.stringToTerraform(this._privateKeyFormat),
      revoke: cdktf.booleanToTerraform(this._revoke),
      ttl: cdktf.stringToTerraform(this._ttl),
      uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uriSans),
    };
  }
}
