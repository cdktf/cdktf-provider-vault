// https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendRootSignIntermediateConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of alternative names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#alt_names PkiSecretBackendRootSignIntermediate#alt_names}
  */
  readonly altNames?: string[];
  /**
  * The PKI secret backend the resource belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#backend PkiSecretBackendRootSignIntermediate#backend}
  */
  readonly backend: string;
  /**
  * CN of intermediate to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#common_name PkiSecretBackendRootSignIntermediate#common_name}
  */
  readonly commonName: string;
  /**
  * The country.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#country PkiSecretBackendRootSignIntermediate#country}
  */
  readonly country?: string;
  /**
  * The CSR.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#csr PkiSecretBackendRootSignIntermediate#csr}
  */
  readonly csr: string;
  /**
  * Flag to exclude CN from SANs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#exclude_cn_from_sans PkiSecretBackendRootSignIntermediate#exclude_cn_from_sans}
  */
  readonly excludeCnFromSans?: boolean | cdktf.IResolvable;
  /**
  * The format of data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#format PkiSecretBackendRootSignIntermediate#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#id PkiSecretBackendRootSignIntermediate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of alternative IPs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#ip_sans PkiSecretBackendRootSignIntermediate#ip_sans}
  */
  readonly ipSans?: string[];
  /**
  * The locality.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#locality PkiSecretBackendRootSignIntermediate#locality}
  */
  readonly locality?: string;
  /**
  * The maximum path length to encode in the generated certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#max_path_length PkiSecretBackendRootSignIntermediate#max_path_length}
  */
  readonly maxPathLength?: number;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#namespace PkiSecretBackendRootSignIntermediate#namespace}
  */
  readonly namespace?: string;
  /**
  * The organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#organization PkiSecretBackendRootSignIntermediate#organization}
  */
  readonly organization?: string;
  /**
  * List of other SANs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#other_sans PkiSecretBackendRootSignIntermediate#other_sans}
  */
  readonly otherSans?: string[];
  /**
  * The organization unit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#ou PkiSecretBackendRootSignIntermediate#ou}
  */
  readonly ou?: string;
  /**
  * List of domains for which certificates are allowed to be issued.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#permitted_dns_domains PkiSecretBackendRootSignIntermediate#permitted_dns_domains}
  */
  readonly permittedDnsDomains?: string[];
  /**
  * The postal code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#postal_code PkiSecretBackendRootSignIntermediate#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The province.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#province PkiSecretBackendRootSignIntermediate#province}
  */
  readonly province?: string;
  /**
  * Revoke the certificate upon resource destruction.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#revoke PkiSecretBackendRootSignIntermediate#revoke}
  */
  readonly revoke?: boolean | cdktf.IResolvable;
  /**
  * The street address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#street_address PkiSecretBackendRootSignIntermediate#street_address}
  */
  readonly streetAddress?: string;
  /**
  * Time to live.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#ttl PkiSecretBackendRootSignIntermediate#ttl}
  */
  readonly ttl?: string;
  /**
  * List of alternative URIs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#uri_sans PkiSecretBackendRootSignIntermediate#uri_sans}
  */
  readonly uriSans?: string[];
  /**
  * Preserve CSR values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate#use_csr_values PkiSecretBackendRootSignIntermediate#use_csr_values}
  */
  readonly useCsrValues?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate vault_pki_secret_backend_root_sign_intermediate}
*/
export class PkiSecretBackendRootSignIntermediate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_root_sign_intermediate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_root_sign_intermediate vault_pki_secret_backend_root_sign_intermediate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendRootSignIntermediateConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendRootSignIntermediateConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_root_sign_intermediate',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.8.0',
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
    this._backend = config.backend;
    this._commonName = config.commonName;
    this._country = config.country;
    this._csr = config.csr;
    this._excludeCnFromSans = config.excludeCnFromSans;
    this._format = config.format;
    this._id = config.id;
    this._ipSans = config.ipSans;
    this._locality = config.locality;
    this._maxPathLength = config.maxPathLength;
    this._namespace = config.namespace;
    this._organization = config.organization;
    this._otherSans = config.otherSans;
    this._ou = config.ou;
    this._permittedDnsDomains = config.permittedDnsDomains;
    this._postalCode = config.postalCode;
    this._province = config.province;
    this._revoke = config.revoke;
    this._streetAddress = config.streetAddress;
    this._ttl = config.ttl;
    this._uriSans = config.uriSans;
    this._useCsrValues = config.useCsrValues;
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

  // certificate_bundle - computed: true, optional: false, required: false
  public get certificateBundle() {
    return this.getStringAttribute('certificate_bundle');
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

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
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

  // issuing_ca - computed: true, optional: false, required: false
  public get issuingCa() {
    return this.getStringAttribute('issuing_ca');
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // max_path_length - computed: false, optional: true, required: false
  private _maxPathLength?: number; 
  public get maxPathLength() {
    return this.getNumberAttribute('max_path_length');
  }
  public set maxPathLength(value: number) {
    this._maxPathLength = value;
  }
  public resetMaxPathLength() {
    this._maxPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPathLengthInput() {
    return this._maxPathLength;
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

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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

  // ou - computed: false, optional: true, required: false
  private _ou?: string; 
  public get ou() {
    return this.getStringAttribute('ou');
  }
  public set ou(value: string) {
    this._ou = value;
  }
  public resetOu() {
    this._ou = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }

  // permitted_dns_domains - computed: false, optional: true, required: false
  private _permittedDnsDomains?: string[]; 
  public get permittedDnsDomains() {
    return this.getListAttribute('permitted_dns_domains');
  }
  public set permittedDnsDomains(value: string[]) {
    this._permittedDnsDomains = value;
  }
  public resetPermittedDnsDomains() {
    this._permittedDnsDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedDnsDomainsInput() {
    return this._permittedDnsDomains;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
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

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
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

  // use_csr_values - computed: false, optional: true, required: false
  private _useCsrValues?: boolean | cdktf.IResolvable; 
  public get useCsrValues() {
    return this.getBooleanAttribute('use_csr_values');
  }
  public set useCsrValues(value: boolean | cdktf.IResolvable) {
    this._useCsrValues = value;
  }
  public resetUseCsrValues() {
    this._useCsrValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCsrValuesInput() {
    return this._useCsrValues;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._altNames),
      backend: cdktf.stringToTerraform(this._backend),
      common_name: cdktf.stringToTerraform(this._commonName),
      country: cdktf.stringToTerraform(this._country),
      csr: cdktf.stringToTerraform(this._csr),
      exclude_cn_from_sans: cdktf.booleanToTerraform(this._excludeCnFromSans),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      ip_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSans),
      locality: cdktf.stringToTerraform(this._locality),
      max_path_length: cdktf.numberToTerraform(this._maxPathLength),
      namespace: cdktf.stringToTerraform(this._namespace),
      organization: cdktf.stringToTerraform(this._organization),
      other_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._otherSans),
      ou: cdktf.stringToTerraform(this._ou),
      permitted_dns_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permittedDnsDomains),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      province: cdktf.stringToTerraform(this._province),
      revoke: cdktf.booleanToTerraform(this._revoke),
      street_address: cdktf.stringToTerraform(this._streetAddress),
      ttl: cdktf.stringToTerraform(this._ttl),
      uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uriSans),
      use_csr_values: cdktf.booleanToTerraform(this._useCsrValues),
    };
  }
}
