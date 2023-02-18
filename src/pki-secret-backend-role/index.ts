// https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to allow any name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allow_any_name PkiSecretBackendRole#allow_any_name}
  */
  readonly allowAnyName?: boolean | cdktf.IResolvable;
  /**
  * Flag to allow certificates matching the actual domain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allow_bare_domains PkiSecretBackendRole#allow_bare_domains}
  */
  readonly allowBareDomains?: boolean | cdktf.IResolvable;
  /**
  * Flag to allow names containing glob patterns.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allow_glob_domains PkiSecretBackendRole#allow_glob_domains}
  */
  readonly allowGlobDomains?: boolean | cdktf.IResolvable;
  /**
  * Flag to allow IP SANs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allow_ip_sans PkiSecretBackendRole#allow_ip_sans}
  */
  readonly allowIpSans?: boolean | cdktf.IResolvable;
  /**
  * Flag to allow certificates for localhost.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allow_localhost PkiSecretBackendRole#allow_localhost}
  */
  readonly allowLocalhost?: boolean | cdktf.IResolvable;
  /**
  * Flag to allow certificates matching subdomains.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allow_subdomains PkiSecretBackendRole#allow_subdomains}
  */
  readonly allowSubdomains?: boolean | cdktf.IResolvable;
  /**
  * The domains of the role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allowed_domains PkiSecretBackendRole#allowed_domains}
  */
  readonly allowedDomains?: string[];
  /**
  * Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}})
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allowed_domains_template PkiSecretBackendRole#allowed_domains_template}
  */
  readonly allowedDomainsTemplate?: boolean | cdktf.IResolvable;
  /**
  * Defines allowed custom SANs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allowed_other_sans PkiSecretBackendRole#allowed_other_sans}
  */
  readonly allowedOtherSans?: string[];
  /**
  * Defines allowed Subject serial numbers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allowed_serial_numbers PkiSecretBackendRole#allowed_serial_numbers}
  */
  readonly allowedSerialNumbers?: string[];
  /**
  * Defines allowed URI SANs
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#allowed_uri_sans PkiSecretBackendRole#allowed_uri_sans}
  */
  readonly allowedUriSans?: string[];
  /**
  * The path of the PKI secret backend the resource belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#backend PkiSecretBackendRole#backend}
  */
  readonly backend: string;
  /**
  * Flag to mark basic constraints valid when issuing non-CA certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#basic_constraints_valid_for_non_ca PkiSecretBackendRole#basic_constraints_valid_for_non_ca}
  */
  readonly basicConstraintsValidForNonCa?: boolean | cdktf.IResolvable;
  /**
  * Flag to specify certificates for client use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#client_flag PkiSecretBackendRole#client_flag}
  */
  readonly clientFlag?: boolean | cdktf.IResolvable;
  /**
  * Flag to specify certificates for code signing use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#code_signing_flag PkiSecretBackendRole#code_signing_flag}
  */
  readonly codeSigningFlag?: boolean | cdktf.IResolvable;
  /**
  * The country of generated certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#country PkiSecretBackendRole#country}
  */
  readonly country?: string[];
  /**
  * Flag to specify certificates for email protection use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#email_protection_flag PkiSecretBackendRole#email_protection_flag}
  */
  readonly emailProtectionFlag?: boolean | cdktf.IResolvable;
  /**
  * Flag to allow only valid host names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#enforce_hostnames PkiSecretBackendRole#enforce_hostnames}
  */
  readonly enforceHostnames?: boolean | cdktf.IResolvable;
  /**
  * Specify the allowed extended key usage constraint on issued certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#ext_key_usage PkiSecretBackendRole#ext_key_usage}
  */
  readonly extKeyUsage?: string[];
  /**
  * Flag to generate leases with certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#generate_lease PkiSecretBackendRole#generate_lease}
  */
  readonly generateLease?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#id PkiSecretBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of bits of generated keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#key_bits PkiSecretBackendRole#key_bits}
  */
  readonly keyBits?: number;
  /**
  * The generated key type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#key_type PkiSecretBackendRole#key_type}
  */
  readonly keyType?: string;
  /**
  * Specify the allowed key usage constraint on issued certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#key_usage PkiSecretBackendRole#key_usage}
  */
  readonly keyUsage?: string[];
  /**
  * The locality of generated certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#locality PkiSecretBackendRole#locality}
  */
  readonly locality?: string[];
  /**
  * The maximum TTL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#max_ttl PkiSecretBackendRole#max_ttl}
  */
  readonly maxTtl?: string;
  /**
  * Unique name for the role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#name PkiSecretBackendRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#namespace PkiSecretBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Flag to not store certificates in the storage backend.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#no_store PkiSecretBackendRole#no_store}
  */
  readonly noStore?: boolean | cdktf.IResolvable;
  /**
  * Specifies the duration by which to backdate the NotBefore property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#not_before_duration PkiSecretBackendRole#not_before_duration}
  */
  readonly notBeforeDuration?: string;
  /**
  * The organization of generated certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#organization PkiSecretBackendRole#organization}
  */
  readonly organization?: string[];
  /**
  * The organization unit of generated certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#ou PkiSecretBackendRole#ou}
  */
  readonly ou?: string[];
  /**
  * Specify the list of allowed policies OIDs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#policy_identifiers PkiSecretBackendRole#policy_identifiers}
  */
  readonly policyIdentifiers?: string[];
  /**
  * The postal code of generated certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#postal_code PkiSecretBackendRole#postal_code}
  */
  readonly postalCode?: string[];
  /**
  * The province of generated certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#province PkiSecretBackendRole#province}
  */
  readonly province?: string[];
  /**
  * Flag to force CN usage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#require_cn PkiSecretBackendRole#require_cn}
  */
  readonly requireCn?: boolean | cdktf.IResolvable;
  /**
  * Flag to specify certificates for server use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#server_flag PkiSecretBackendRole#server_flag}
  */
  readonly serverFlag?: boolean | cdktf.IResolvable;
  /**
  * The street address of generated certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#street_address PkiSecretBackendRole#street_address}
  */
  readonly streetAddress?: string[];
  /**
  * The TTL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#ttl PkiSecretBackendRole#ttl}
  */
  readonly ttl?: string;
  /**
  * Flag to use the CN in the CSR.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#use_csr_common_name PkiSecretBackendRole#use_csr_common_name}
  */
  readonly useCsrCommonName?: boolean | cdktf.IResolvable;
  /**
  * Flag to use the SANs in the CSR.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#use_csr_sans PkiSecretBackendRole#use_csr_sans}
  */
  readonly useCsrSans?: boolean | cdktf.IResolvable;
  /**
  * policy_identifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#policy_identifier PkiSecretBackendRole#policy_identifier}
  */
  readonly policyIdentifier?: PkiSecretBackendRolePolicyIdentifier[] | cdktf.IResolvable;
}
export interface PkiSecretBackendRolePolicyIdentifier {
  /**
  * Optional CPS URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#cps PkiSecretBackendRole#cps}
  */
  readonly cps?: string;
  /**
  * Optional notice
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#notice PkiSecretBackendRole#notice}
  */
  readonly notice?: string;
  /**
  * OID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role#oid PkiSecretBackendRole#oid}
  */
  readonly oid: string;
}

export function pkiSecretBackendRolePolicyIdentifierToTerraform(struct?: PkiSecretBackendRolePolicyIdentifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cps: cdktf.stringToTerraform(struct!.cps),
    notice: cdktf.stringToTerraform(struct!.notice),
    oid: cdktf.stringToTerraform(struct!.oid),
  }
}

export class PkiSecretBackendRolePolicyIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PkiSecretBackendRolePolicyIdentifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cps !== undefined) {
      hasAnyValues = true;
      internalValueResult.cps = this._cps;
    }
    if (this._notice !== undefined) {
      hasAnyValues = true;
      internalValueResult.notice = this._notice;
    }
    if (this._oid !== undefined) {
      hasAnyValues = true;
      internalValueResult.oid = this._oid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PkiSecretBackendRolePolicyIdentifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cps = undefined;
      this._notice = undefined;
      this._oid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cps = value.cps;
      this._notice = value.notice;
      this._oid = value.oid;
    }
  }

  // cps - computed: false, optional: true, required: false
  private _cps?: string; 
  public get cps() {
    return this.getStringAttribute('cps');
  }
  public set cps(value: string) {
    this._cps = value;
  }
  public resetCps() {
    this._cps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsInput() {
    return this._cps;
  }

  // notice - computed: false, optional: true, required: false
  private _notice?: string; 
  public get notice() {
    return this.getStringAttribute('notice');
  }
  public set notice(value: string) {
    this._notice = value;
  }
  public resetNotice() {
    this._notice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noticeInput() {
    return this._notice;
  }

  // oid - computed: false, optional: false, required: true
  private _oid?: string; 
  public get oid() {
    return this.getStringAttribute('oid');
  }
  public set oid(value: string) {
    this._oid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid;
  }
}

export class PkiSecretBackendRolePolicyIdentifierList extends cdktf.ComplexList {
  public internalValue? : PkiSecretBackendRolePolicyIdentifier[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PkiSecretBackendRolePolicyIdentifierOutputReference {
    return new PkiSecretBackendRolePolicyIdentifierOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role vault_pki_secret_backend_role}
*/
export class PkiSecretBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_role vault_pki_secret_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.13.0',
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
    this._allowAnyName = config.allowAnyName;
    this._allowBareDomains = config.allowBareDomains;
    this._allowGlobDomains = config.allowGlobDomains;
    this._allowIpSans = config.allowIpSans;
    this._allowLocalhost = config.allowLocalhost;
    this._allowSubdomains = config.allowSubdomains;
    this._allowedDomains = config.allowedDomains;
    this._allowedDomainsTemplate = config.allowedDomainsTemplate;
    this._allowedOtherSans = config.allowedOtherSans;
    this._allowedSerialNumbers = config.allowedSerialNumbers;
    this._allowedUriSans = config.allowedUriSans;
    this._backend = config.backend;
    this._basicConstraintsValidForNonCa = config.basicConstraintsValidForNonCa;
    this._clientFlag = config.clientFlag;
    this._codeSigningFlag = config.codeSigningFlag;
    this._country = config.country;
    this._emailProtectionFlag = config.emailProtectionFlag;
    this._enforceHostnames = config.enforceHostnames;
    this._extKeyUsage = config.extKeyUsage;
    this._generateLease = config.generateLease;
    this._id = config.id;
    this._keyBits = config.keyBits;
    this._keyType = config.keyType;
    this._keyUsage = config.keyUsage;
    this._locality = config.locality;
    this._maxTtl = config.maxTtl;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noStore = config.noStore;
    this._notBeforeDuration = config.notBeforeDuration;
    this._organization = config.organization;
    this._ou = config.ou;
    this._policyIdentifiers = config.policyIdentifiers;
    this._postalCode = config.postalCode;
    this._province = config.province;
    this._requireCn = config.requireCn;
    this._serverFlag = config.serverFlag;
    this._streetAddress = config.streetAddress;
    this._ttl = config.ttl;
    this._useCsrCommonName = config.useCsrCommonName;
    this._useCsrSans = config.useCsrSans;
    this._policyIdentifier.internalValue = config.policyIdentifier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_any_name - computed: false, optional: true, required: false
  private _allowAnyName?: boolean | cdktf.IResolvable; 
  public get allowAnyName() {
    return this.getBooleanAttribute('allow_any_name');
  }
  public set allowAnyName(value: boolean | cdktf.IResolvable) {
    this._allowAnyName = value;
  }
  public resetAllowAnyName() {
    this._allowAnyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnyNameInput() {
    return this._allowAnyName;
  }

  // allow_bare_domains - computed: false, optional: true, required: false
  private _allowBareDomains?: boolean | cdktf.IResolvable; 
  public get allowBareDomains() {
    return this.getBooleanAttribute('allow_bare_domains');
  }
  public set allowBareDomains(value: boolean | cdktf.IResolvable) {
    this._allowBareDomains = value;
  }
  public resetAllowBareDomains() {
    this._allowBareDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBareDomainsInput() {
    return this._allowBareDomains;
  }

  // allow_glob_domains - computed: false, optional: true, required: false
  private _allowGlobDomains?: boolean | cdktf.IResolvable; 
  public get allowGlobDomains() {
    return this.getBooleanAttribute('allow_glob_domains');
  }
  public set allowGlobDomains(value: boolean | cdktf.IResolvable) {
    this._allowGlobDomains = value;
  }
  public resetAllowGlobDomains() {
    this._allowGlobDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGlobDomainsInput() {
    return this._allowGlobDomains;
  }

  // allow_ip_sans - computed: false, optional: true, required: false
  private _allowIpSans?: boolean | cdktf.IResolvable; 
  public get allowIpSans() {
    return this.getBooleanAttribute('allow_ip_sans');
  }
  public set allowIpSans(value: boolean | cdktf.IResolvable) {
    this._allowIpSans = value;
  }
  public resetAllowIpSans() {
    this._allowIpSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpSansInput() {
    return this._allowIpSans;
  }

  // allow_localhost - computed: false, optional: true, required: false
  private _allowLocalhost?: boolean | cdktf.IResolvable; 
  public get allowLocalhost() {
    return this.getBooleanAttribute('allow_localhost');
  }
  public set allowLocalhost(value: boolean | cdktf.IResolvable) {
    this._allowLocalhost = value;
  }
  public resetAllowLocalhost() {
    this._allowLocalhost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLocalhostInput() {
    return this._allowLocalhost;
  }

  // allow_subdomains - computed: false, optional: true, required: false
  private _allowSubdomains?: boolean | cdktf.IResolvable; 
  public get allowSubdomains() {
    return this.getBooleanAttribute('allow_subdomains');
  }
  public set allowSubdomains(value: boolean | cdktf.IResolvable) {
    this._allowSubdomains = value;
  }
  public resetAllowSubdomains() {
    this._allowSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubdomainsInput() {
    return this._allowSubdomains;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string[]; 
  public get allowedDomains() {
    return this.getListAttribute('allowed_domains');
  }
  public set allowedDomains(value: string[]) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // allowed_domains_template - computed: false, optional: true, required: false
  private _allowedDomainsTemplate?: boolean | cdktf.IResolvable; 
  public get allowedDomainsTemplate() {
    return this.getBooleanAttribute('allowed_domains_template');
  }
  public set allowedDomainsTemplate(value: boolean | cdktf.IResolvable) {
    this._allowedDomainsTemplate = value;
  }
  public resetAllowedDomainsTemplate() {
    this._allowedDomainsTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsTemplateInput() {
    return this._allowedDomainsTemplate;
  }

  // allowed_other_sans - computed: false, optional: true, required: false
  private _allowedOtherSans?: string[]; 
  public get allowedOtherSans() {
    return this.getListAttribute('allowed_other_sans');
  }
  public set allowedOtherSans(value: string[]) {
    this._allowedOtherSans = value;
  }
  public resetAllowedOtherSans() {
    this._allowedOtherSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOtherSansInput() {
    return this._allowedOtherSans;
  }

  // allowed_serial_numbers - computed: false, optional: true, required: false
  private _allowedSerialNumbers?: string[]; 
  public get allowedSerialNumbers() {
    return this.getListAttribute('allowed_serial_numbers');
  }
  public set allowedSerialNumbers(value: string[]) {
    this._allowedSerialNumbers = value;
  }
  public resetAllowedSerialNumbers() {
    this._allowedSerialNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSerialNumbersInput() {
    return this._allowedSerialNumbers;
  }

  // allowed_uri_sans - computed: false, optional: true, required: false
  private _allowedUriSans?: string[]; 
  public get allowedUriSans() {
    return this.getListAttribute('allowed_uri_sans');
  }
  public set allowedUriSans(value: string[]) {
    this._allowedUriSans = value;
  }
  public resetAllowedUriSans() {
    this._allowedUriSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUriSansInput() {
    return this._allowedUriSans;
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

  // basic_constraints_valid_for_non_ca - computed: false, optional: true, required: false
  private _basicConstraintsValidForNonCa?: boolean | cdktf.IResolvable; 
  public get basicConstraintsValidForNonCa() {
    return this.getBooleanAttribute('basic_constraints_valid_for_non_ca');
  }
  public set basicConstraintsValidForNonCa(value: boolean | cdktf.IResolvable) {
    this._basicConstraintsValidForNonCa = value;
  }
  public resetBasicConstraintsValidForNonCa() {
    this._basicConstraintsValidForNonCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicConstraintsValidForNonCaInput() {
    return this._basicConstraintsValidForNonCa;
  }

  // client_flag - computed: false, optional: true, required: false
  private _clientFlag?: boolean | cdktf.IResolvable; 
  public get clientFlag() {
    return this.getBooleanAttribute('client_flag');
  }
  public set clientFlag(value: boolean | cdktf.IResolvable) {
    this._clientFlag = value;
  }
  public resetClientFlag() {
    this._clientFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFlagInput() {
    return this._clientFlag;
  }

  // code_signing_flag - computed: false, optional: true, required: false
  private _codeSigningFlag?: boolean | cdktf.IResolvable; 
  public get codeSigningFlag() {
    return this.getBooleanAttribute('code_signing_flag');
  }
  public set codeSigningFlag(value: boolean | cdktf.IResolvable) {
    this._codeSigningFlag = value;
  }
  public resetCodeSigningFlag() {
    this._codeSigningFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningFlagInput() {
    return this._codeSigningFlag;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string[]; 
  public get country() {
    return this.getListAttribute('country');
  }
  public set country(value: string[]) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // email_protection_flag - computed: false, optional: true, required: false
  private _emailProtectionFlag?: boolean | cdktf.IResolvable; 
  public get emailProtectionFlag() {
    return this.getBooleanAttribute('email_protection_flag');
  }
  public set emailProtectionFlag(value: boolean | cdktf.IResolvable) {
    this._emailProtectionFlag = value;
  }
  public resetEmailProtectionFlag() {
    this._emailProtectionFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailProtectionFlagInput() {
    return this._emailProtectionFlag;
  }

  // enforce_hostnames - computed: false, optional: true, required: false
  private _enforceHostnames?: boolean | cdktf.IResolvable; 
  public get enforceHostnames() {
    return this.getBooleanAttribute('enforce_hostnames');
  }
  public set enforceHostnames(value: boolean | cdktf.IResolvable) {
    this._enforceHostnames = value;
  }
  public resetEnforceHostnames() {
    this._enforceHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceHostnamesInput() {
    return this._enforceHostnames;
  }

  // ext_key_usage - computed: false, optional: true, required: false
  private _extKeyUsage?: string[]; 
  public get extKeyUsage() {
    return this.getListAttribute('ext_key_usage');
  }
  public set extKeyUsage(value: string[]) {
    this._extKeyUsage = value;
  }
  public resetExtKeyUsage() {
    this._extKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extKeyUsageInput() {
    return this._extKeyUsage;
  }

  // generate_lease - computed: false, optional: true, required: false
  private _generateLease?: boolean | cdktf.IResolvable; 
  public get generateLease() {
    return this.getBooleanAttribute('generate_lease');
  }
  public set generateLease(value: boolean | cdktf.IResolvable) {
    this._generateLease = value;
  }
  public resetGenerateLease() {
    this._generateLease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateLeaseInput() {
    return this._generateLease;
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

  // key_bits - computed: false, optional: true, required: false
  private _keyBits?: number; 
  public get keyBits() {
    return this.getNumberAttribute('key_bits');
  }
  public set keyBits(value: number) {
    this._keyBits = value;
  }
  public resetKeyBits() {
    this._keyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyBitsInput() {
    return this._keyBits;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // key_usage - computed: true, optional: true, required: false
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
  private _locality?: string[]; 
  public get locality() {
    return this.getListAttribute('locality');
  }
  public set locality(value: string[]) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: string; 
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }
  public set maxTtl(value: string) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
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

  // no_store - computed: false, optional: true, required: false
  private _noStore?: boolean | cdktf.IResolvable; 
  public get noStore() {
    return this.getBooleanAttribute('no_store');
  }
  public set noStore(value: boolean | cdktf.IResolvable) {
    this._noStore = value;
  }
  public resetNoStore() {
    this._noStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStoreInput() {
    return this._noStore;
  }

  // not_before_duration - computed: true, optional: true, required: false
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
  private _organization?: string[]; 
  public get organization() {
    return this.getListAttribute('organization');
  }
  public set organization(value: string[]) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // ou - computed: false, optional: true, required: false
  private _ou?: string[]; 
  public get ou() {
    return this.getListAttribute('ou');
  }
  public set ou(value: string[]) {
    this._ou = value;
  }
  public resetOu() {
    this._ou = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ouInput() {
    return this._ou;
  }

  // policy_identifiers - computed: false, optional: true, required: false
  private _policyIdentifiers?: string[]; 
  public get policyIdentifiers() {
    return this.getListAttribute('policy_identifiers');
  }
  public set policyIdentifiers(value: string[]) {
    this._policyIdentifiers = value;
  }
  public resetPolicyIdentifiers() {
    this._policyIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdentifiersInput() {
    return this._policyIdentifiers;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string[]; 
  public get postalCode() {
    return this.getListAttribute('postal_code');
  }
  public set postalCode(value: string[]) {
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
  private _province?: string[]; 
  public get province() {
    return this.getListAttribute('province');
  }
  public set province(value: string[]) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // require_cn - computed: false, optional: true, required: false
  private _requireCn?: boolean | cdktf.IResolvable; 
  public get requireCn() {
    return this.getBooleanAttribute('require_cn');
  }
  public set requireCn(value: boolean | cdktf.IResolvable) {
    this._requireCn = value;
  }
  public resetRequireCn() {
    this._requireCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCnInput() {
    return this._requireCn;
  }

  // server_flag - computed: false, optional: true, required: false
  private _serverFlag?: boolean | cdktf.IResolvable; 
  public get serverFlag() {
    return this.getBooleanAttribute('server_flag');
  }
  public set serverFlag(value: boolean | cdktf.IResolvable) {
    this._serverFlag = value;
  }
  public resetServerFlag() {
    this._serverFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFlagInput() {
    return this._serverFlag;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string[]; 
  public get streetAddress() {
    return this.getListAttribute('street_address');
  }
  public set streetAddress(value: string[]) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }

  // ttl - computed: true, optional: true, required: false
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

  // use_csr_common_name - computed: false, optional: true, required: false
  private _useCsrCommonName?: boolean | cdktf.IResolvable; 
  public get useCsrCommonName() {
    return this.getBooleanAttribute('use_csr_common_name');
  }
  public set useCsrCommonName(value: boolean | cdktf.IResolvable) {
    this._useCsrCommonName = value;
  }
  public resetUseCsrCommonName() {
    this._useCsrCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCsrCommonNameInput() {
    return this._useCsrCommonName;
  }

  // use_csr_sans - computed: false, optional: true, required: false
  private _useCsrSans?: boolean | cdktf.IResolvable; 
  public get useCsrSans() {
    return this.getBooleanAttribute('use_csr_sans');
  }
  public set useCsrSans(value: boolean | cdktf.IResolvable) {
    this._useCsrSans = value;
  }
  public resetUseCsrSans() {
    this._useCsrSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCsrSansInput() {
    return this._useCsrSans;
  }

  // policy_identifier - computed: false, optional: true, required: false
  private _policyIdentifier = new PkiSecretBackendRolePolicyIdentifierList(this, "policy_identifier", true);
  public get policyIdentifier() {
    return this._policyIdentifier;
  }
  public putPolicyIdentifier(value: PkiSecretBackendRolePolicyIdentifier[] | cdktf.IResolvable) {
    this._policyIdentifier.internalValue = value;
  }
  public resetPolicyIdentifier() {
    this._policyIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdentifierInput() {
    return this._policyIdentifier.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_any_name: cdktf.booleanToTerraform(this._allowAnyName),
      allow_bare_domains: cdktf.booleanToTerraform(this._allowBareDomains),
      allow_glob_domains: cdktf.booleanToTerraform(this._allowGlobDomains),
      allow_ip_sans: cdktf.booleanToTerraform(this._allowIpSans),
      allow_localhost: cdktf.booleanToTerraform(this._allowLocalhost),
      allow_subdomains: cdktf.booleanToTerraform(this._allowSubdomains),
      allowed_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedDomains),
      allowed_domains_template: cdktf.booleanToTerraform(this._allowedDomainsTemplate),
      allowed_other_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOtherSans),
      allowed_serial_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedSerialNumbers),
      allowed_uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedUriSans),
      backend: cdktf.stringToTerraform(this._backend),
      basic_constraints_valid_for_non_ca: cdktf.booleanToTerraform(this._basicConstraintsValidForNonCa),
      client_flag: cdktf.booleanToTerraform(this._clientFlag),
      code_signing_flag: cdktf.booleanToTerraform(this._codeSigningFlag),
      country: cdktf.listMapper(cdktf.stringToTerraform, false)(this._country),
      email_protection_flag: cdktf.booleanToTerraform(this._emailProtectionFlag),
      enforce_hostnames: cdktf.booleanToTerraform(this._enforceHostnames),
      ext_key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extKeyUsage),
      generate_lease: cdktf.booleanToTerraform(this._generateLease),
      id: cdktf.stringToTerraform(this._id),
      key_bits: cdktf.numberToTerraform(this._keyBits),
      key_type: cdktf.stringToTerraform(this._keyType),
      key_usage: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyUsage),
      locality: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locality),
      max_ttl: cdktf.stringToTerraform(this._maxTtl),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_store: cdktf.booleanToTerraform(this._noStore),
      not_before_duration: cdktf.stringToTerraform(this._notBeforeDuration),
      organization: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organization),
      ou: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ou),
      policy_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyIdentifiers),
      postal_code: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postalCode),
      province: cdktf.listMapper(cdktf.stringToTerraform, false)(this._province),
      require_cn: cdktf.booleanToTerraform(this._requireCn),
      server_flag: cdktf.booleanToTerraform(this._serverFlag),
      street_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._streetAddress),
      ttl: cdktf.stringToTerraform(this._ttl),
      use_csr_common_name: cdktf.booleanToTerraform(this._useCsrCommonName),
      use_csr_sans: cdktf.booleanToTerraform(this._useCsrSans),
      policy_identifier: cdktf.listMapper(pkiSecretBackendRolePolicyIdentifierToTerraform, true)(this._policyIdentifier.internalValue),
    };
  }
}
