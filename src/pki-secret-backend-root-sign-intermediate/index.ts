/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendRootSignIntermediateConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of alternative names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#alt_names PkiSecretBackendRootSignIntermediate#alt_names}
  */
  readonly altNames?: string[];
  /**
  * The PKI secret backend the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#backend PkiSecretBackendRootSignIntermediate#backend}
  */
  readonly backend: string;
  /**
  * CN of intermediate to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#common_name PkiSecretBackendRootSignIntermediate#common_name}
  */
  readonly commonName: string;
  /**
  * The country.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#country PkiSecretBackendRootSignIntermediate#country}
  */
  readonly country?: string;
  /**
  * The CSR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#csr PkiSecretBackendRootSignIntermediate#csr}
  */
  readonly csr: string;
  /**
  * Flag to exclude CN from SANs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#exclude_cn_from_sans PkiSecretBackendRootSignIntermediate#exclude_cn_from_sans}
  */
  readonly excludeCnFromSans?: boolean | cdktf.IResolvable;
  /**
  * List of domains for which certificates are not allowed to be issued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_dns_domains PkiSecretBackendRootSignIntermediate#excluded_dns_domains}
  */
  readonly excludedDnsDomains?: string[];
  /**
  * List of email addresses for which certificates are not allowed to be issued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_email_addresses PkiSecretBackendRootSignIntermediate#excluded_email_addresses}
  */
  readonly excludedEmailAddresses?: string[];
  /**
  * List of IP ranges for which certificates are NOT allowed to be issued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_ip_ranges PkiSecretBackendRootSignIntermediate#excluded_ip_ranges}
  */
  readonly excludedIpRanges?: string[];
  /**
  * List of URI domains for which certificates are not allowed to be issued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_uri_domains PkiSecretBackendRootSignIntermediate#excluded_uri_domains}
  */
  readonly excludedUriDomains?: string[];
  /**
  * The format of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#format PkiSecretBackendRootSignIntermediate#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#id PkiSecretBackendRootSignIntermediate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of alternative IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#ip_sans PkiSecretBackendRootSignIntermediate#ip_sans}
  */
  readonly ipSans?: string[];
  /**
  * Specifies the default issuer of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#issuer_ref PkiSecretBackendRootSignIntermediate#issuer_ref}
  */
  readonly issuerRef?: string;
  /**
  * Specify the key usages to be added to the existing set of key usages ("CRL", "CertSign") on the generated certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#key_usage PkiSecretBackendRootSignIntermediate#key_usage}
  */
  readonly keyUsage?: string[];
  /**
  * The locality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#locality PkiSecretBackendRootSignIntermediate#locality}
  */
  readonly locality?: string;
  /**
  * The maximum path length to encode in the generated certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#max_path_length PkiSecretBackendRootSignIntermediate#max_path_length}
  */
  readonly maxPathLength?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#namespace PkiSecretBackendRootSignIntermediate#namespace}
  */
  readonly namespace?: string;
  /**
  * Set the Not After field of the certificate with specified date value. The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#not_after PkiSecretBackendRootSignIntermediate#not_after}
  */
  readonly notAfter?: string;
  /**
  * Specifies the duration by which to backdate the NotBefore property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#not_before_duration PkiSecretBackendRootSignIntermediate#not_before_duration}
  */
  readonly notBeforeDuration?: string;
  /**
  * The organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#organization PkiSecretBackendRootSignIntermediate#organization}
  */
  readonly organization?: string;
  /**
  * List of other SANs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#other_sans PkiSecretBackendRootSignIntermediate#other_sans}
  */
  readonly otherSans?: string[];
  /**
  * The organization unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#ou PkiSecretBackendRootSignIntermediate#ou}
  */
  readonly ou?: string;
  /**
  * List of domains for which certificates are allowed to be issued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_dns_domains PkiSecretBackendRootSignIntermediate#permitted_dns_domains}
  */
  readonly permittedDnsDomains?: string[];
  /**
  * List of email addresses for which certificates are allowed to be issued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_email_addresses PkiSecretBackendRootSignIntermediate#permitted_email_addresses}
  */
  readonly permittedEmailAddresses?: string[];
  /**
  * List of IP ranges for which certificates are allowed to be issued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_ip_ranges PkiSecretBackendRootSignIntermediate#permitted_ip_ranges}
  */
  readonly permittedIpRanges?: string[];
  /**
  * List of URI domains for which certificates are allowed to be issued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_uri_domains PkiSecretBackendRootSignIntermediate#permitted_uri_domains}
  */
  readonly permittedUriDomains?: string[];
  /**
  * The postal code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#postal_code PkiSecretBackendRootSignIntermediate#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The province.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#province PkiSecretBackendRootSignIntermediate#province}
  */
  readonly province?: string;
  /**
  * Revoke the certificate upon resource destruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#revoke PkiSecretBackendRootSignIntermediate#revoke}
  */
  readonly revoke?: boolean | cdktf.IResolvable;
  /**
  * The number of bits to use in the signature algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#signature_bits PkiSecretBackendRootSignIntermediate#signature_bits}
  */
  readonly signatureBits?: number;
  /**
  * Value for the Subject Key Identifier field
  *   (RFC 5280 Section 4.2.1.2). Specified as a string in hex format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#skid PkiSecretBackendRootSignIntermediate#skid}
  */
  readonly skid?: string;
  /**
  * The street address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#street_address PkiSecretBackendRootSignIntermediate#street_address}
  */
  readonly streetAddress?: string;
  /**
  * Time to live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#ttl PkiSecretBackendRootSignIntermediate#ttl}
  */
  readonly ttl?: string;
  /**
  * List of alternative URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#uri_sans PkiSecretBackendRootSignIntermediate#uri_sans}
  */
  readonly uriSans?: string[];
  /**
  * Preserve CSR values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#use_csr_values PkiSecretBackendRootSignIntermediate#use_csr_values}
  */
  readonly useCsrValues?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether or not to use PSS signatures
  *   over PKCS#1v1.5 signatures when a RSA-type issuer is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#use_pss PkiSecretBackendRootSignIntermediate#use_pss}
  */
  readonly usePss?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate vault_pki_secret_backend_root_sign_intermediate}
*/
export class PkiSecretBackendRootSignIntermediate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_root_sign_intermediate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendRootSignIntermediate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendRootSignIntermediate to import
  * @param importFromId The id of the existing PkiSecretBackendRootSignIntermediate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendRootSignIntermediate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_root_sign_intermediate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/resources/pki_secret_backend_root_sign_intermediate vault_pki_secret_backend_root_sign_intermediate} Resource
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
        providerVersion: '5.5.0',
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
    this._altNames = config.altNames;
    this._backend = config.backend;
    this._commonName = config.commonName;
    this._country = config.country;
    this._csr = config.csr;
    this._excludeCnFromSans = config.excludeCnFromSans;
    this._excludedDnsDomains = config.excludedDnsDomains;
    this._excludedEmailAddresses = config.excludedEmailAddresses;
    this._excludedIpRanges = config.excludedIpRanges;
    this._excludedUriDomains = config.excludedUriDomains;
    this._format = config.format;
    this._id = config.id;
    this._ipSans = config.ipSans;
    this._issuerRef = config.issuerRef;
    this._keyUsage = config.keyUsage;
    this._locality = config.locality;
    this._maxPathLength = config.maxPathLength;
    this._namespace = config.namespace;
    this._notAfter = config.notAfter;
    this._notBeforeDuration = config.notBeforeDuration;
    this._organization = config.organization;
    this._otherSans = config.otherSans;
    this._ou = config.ou;
    this._permittedDnsDomains = config.permittedDnsDomains;
    this._permittedEmailAddresses = config.permittedEmailAddresses;
    this._permittedIpRanges = config.permittedIpRanges;
    this._permittedUriDomains = config.permittedUriDomains;
    this._postalCode = config.postalCode;
    this._province = config.province;
    this._revoke = config.revoke;
    this._signatureBits = config.signatureBits;
    this._skid = config.skid;
    this._streetAddress = config.streetAddress;
    this._ttl = config.ttl;
    this._uriSans = config.uriSans;
    this._useCsrValues = config.useCsrValues;
    this._usePss = config.usePss;
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

  // excluded_dns_domains - computed: false, optional: true, required: false
  private _excludedDnsDomains?: string[]; 
  public get excludedDnsDomains() {
    return this.getListAttribute('excluded_dns_domains');
  }
  public set excludedDnsDomains(value: string[]) {
    this._excludedDnsDomains = value;
  }
  public resetExcludedDnsDomains() {
    this._excludedDnsDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedDnsDomainsInput() {
    return this._excludedDnsDomains;
  }

  // excluded_email_addresses - computed: false, optional: true, required: false
  private _excludedEmailAddresses?: string[]; 
  public get excludedEmailAddresses() {
    return this.getListAttribute('excluded_email_addresses');
  }
  public set excludedEmailAddresses(value: string[]) {
    this._excludedEmailAddresses = value;
  }
  public resetExcludedEmailAddresses() {
    this._excludedEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedEmailAddressesInput() {
    return this._excludedEmailAddresses;
  }

  // excluded_ip_ranges - computed: false, optional: true, required: false
  private _excludedIpRanges?: string[]; 
  public get excludedIpRanges() {
    return this.getListAttribute('excluded_ip_ranges');
  }
  public set excludedIpRanges(value: string[]) {
    this._excludedIpRanges = value;
  }
  public resetExcludedIpRanges() {
    this._excludedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedIpRangesInput() {
    return this._excludedIpRanges;
  }

  // excluded_uri_domains - computed: false, optional: true, required: false
  private _excludedUriDomains?: string[]; 
  public get excludedUriDomains() {
    return this.getListAttribute('excluded_uri_domains');
  }
  public set excludedUriDomains(value: string[]) {
    this._excludedUriDomains = value;
  }
  public resetExcludedUriDomains() {
    this._excludedUriDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedUriDomainsInput() {
    return this._excludedUriDomains;
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

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage?: string[]; 
  public get keyUsage() {
    return this.getListAttribute('key_usage');
  }
  public set keyUsage(value: string[]) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
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

  // not_after - computed: false, optional: true, required: false
  private _notAfter?: string; 
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }
  public set notAfter(value: string) {
    this._notAfter = value;
  }
  public resetNotAfter() {
    this._notAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notAfterInput() {
    return this._notAfter;
  }

  // not_before_duration - computed: false, optional: true, required: false
  private _notBeforeDuration?: string; 
  public get notBeforeDuration() {
    return this.getStringAttribute('not_before_duration');
  }
  public set notBeforeDuration(value: string) {
    this._notBeforeDuration = value;
  }
  public resetNotBeforeDuration() {
    this._notBeforeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notBeforeDurationInput() {
    return this._notBeforeDuration;
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

  // permitted_email_addresses - computed: false, optional: true, required: false
  private _permittedEmailAddresses?: string[]; 
  public get permittedEmailAddresses() {
    return this.getListAttribute('permitted_email_addresses');
  }
  public set permittedEmailAddresses(value: string[]) {
    this._permittedEmailAddresses = value;
  }
  public resetPermittedEmailAddresses() {
    this._permittedEmailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedEmailAddressesInput() {
    return this._permittedEmailAddresses;
  }

  // permitted_ip_ranges - computed: false, optional: true, required: false
  private _permittedIpRanges?: string[]; 
  public get permittedIpRanges() {
    return this.getListAttribute('permitted_ip_ranges');
  }
  public set permittedIpRanges(value: string[]) {
    this._permittedIpRanges = value;
  }
  public resetPermittedIpRanges() {
    this._permittedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedIpRangesInput() {
    return this._permittedIpRanges;
  }

  // permitted_uri_domains - computed: false, optional: true, required: false
  private _permittedUriDomains?: string[]; 
  public get permittedUriDomains() {
    return this.getListAttribute('permitted_uri_domains');
  }
  public set permittedUriDomains(value: string[]) {
    this._permittedUriDomains = value;
  }
  public resetPermittedUriDomains() {
    this._permittedUriDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedUriDomainsInput() {
    return this._permittedUriDomains;
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

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signature_bits - computed: false, optional: true, required: false
  private _signatureBits?: number; 
  public get signatureBits() {
    return this.getNumberAttribute('signature_bits');
  }
  public set signatureBits(value: number) {
    this._signatureBits = value;
  }
  public resetSignatureBits() {
    this._signatureBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureBitsInput() {
    return this._signatureBits;
  }

  // skid - computed: false, optional: true, required: false
  private _skid?: string; 
  public get skid() {
    return this.getStringAttribute('skid');
  }
  public set skid(value: string) {
    this._skid = value;
  }
  public resetSkid() {
    this._skid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skidInput() {
    return this._skid;
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

  // use_pss - computed: false, optional: true, required: false
  private _usePss?: boolean | cdktf.IResolvable; 
  public get usePss() {
    return this.getBooleanAttribute('use_pss');
  }
  public set usePss(value: boolean | cdktf.IResolvable) {
    this._usePss = value;
  }
  public resetUsePss() {
    this._usePss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePssInput() {
    return this._usePss;
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
      excluded_dns_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedDnsDomains),
      excluded_email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedEmailAddresses),
      excluded_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedIpRanges),
      excluded_uri_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedUriDomains),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      ip_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSans),
      issuer_ref: cdktf.stringToTerraform(this._issuerRef),
      key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyUsage),
      locality: cdktf.stringToTerraform(this._locality),
      max_path_length: cdktf.numberToTerraform(this._maxPathLength),
      namespace: cdktf.stringToTerraform(this._namespace),
      not_after: cdktf.stringToTerraform(this._notAfter),
      not_before_duration: cdktf.stringToTerraform(this._notBeforeDuration),
      organization: cdktf.stringToTerraform(this._organization),
      other_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._otherSans),
      ou: cdktf.stringToTerraform(this._ou),
      permitted_dns_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permittedDnsDomains),
      permitted_email_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permittedEmailAddresses),
      permitted_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permittedIpRanges),
      permitted_uri_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permittedUriDomains),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      province: cdktf.stringToTerraform(this._province),
      revoke: cdktf.booleanToTerraform(this._revoke),
      signature_bits: cdktf.numberToTerraform(this._signatureBits),
      skid: cdktf.stringToTerraform(this._skid),
      street_address: cdktf.stringToTerraform(this._streetAddress),
      ttl: cdktf.stringToTerraform(this._ttl),
      uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uriSans),
      use_csr_values: cdktf.booleanToTerraform(this._useCsrValues),
      use_pss: cdktf.booleanToTerraform(this._usePss),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alt_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._altNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      common_name: {
        value: cdktf.stringToHclTerraform(this._commonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csr: {
        value: cdktf.stringToHclTerraform(this._csr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_cn_from_sans: {
        value: cdktf.booleanToHclTerraform(this._excludeCnFromSans),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excluded_dns_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedDnsDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      excluded_email_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedEmailAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      excluded_ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      excluded_uri_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedUriDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      ip_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipSans),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      issuer_ref: {
        value: cdktf.stringToHclTerraform(this._issuerRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_usage: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyUsage),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      locality: {
        value: cdktf.stringToHclTerraform(this._locality),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_path_length: {
        value: cdktf.numberToHclTerraform(this._maxPathLength),
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
      not_after: {
        value: cdktf.stringToHclTerraform(this._notAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      not_before_duration: {
        value: cdktf.stringToHclTerraform(this._notBeforeDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      other_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._otherSans),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ou: {
        value: cdktf.stringToHclTerraform(this._ou),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permitted_dns_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permittedDnsDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      permitted_email_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permittedEmailAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      permitted_ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permittedIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      permitted_uri_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permittedUriDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      postal_code: {
        value: cdktf.stringToHclTerraform(this._postalCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      province: {
        value: cdktf.stringToHclTerraform(this._province),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoke: {
        value: cdktf.booleanToHclTerraform(this._revoke),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      signature_bits: {
        value: cdktf.numberToHclTerraform(this._signatureBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skid: {
        value: cdktf.stringToHclTerraform(this._skid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street_address: {
        value: cdktf.stringToHclTerraform(this._streetAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uriSans),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      use_csr_values: {
        value: cdktf.booleanToHclTerraform(this._useCsrValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_pss: {
        value: cdktf.booleanToHclTerraform(this._usePss),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
