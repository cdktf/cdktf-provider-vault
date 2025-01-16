// https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertAuthBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#allowed_common_names CertAuthBackendRole#allowed_common_names}
  */
  readonly allowedCommonNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#allowed_dns_sans CertAuthBackendRole#allowed_dns_sans}
  */
  readonly allowedDnsSans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#allowed_email_sans CertAuthBackendRole#allowed_email_sans}
  */
  readonly allowedEmailSans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#allowed_names CertAuthBackendRole#allowed_names}
  */
  readonly allowedNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#allowed_organizational_units CertAuthBackendRole#allowed_organizational_units}
  */
  readonly allowedOrganizationalUnits?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#allowed_uri_sans CertAuthBackendRole#allowed_uri_sans}
  */
  readonly allowedUriSans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#backend CertAuthBackendRole#backend}
  */
  readonly backend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#certificate CertAuthBackendRole#certificate}
  */
  readonly certificate: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#display_name CertAuthBackendRole#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#id CertAuthBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#name CertAuthBackendRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#namespace CertAuthBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Any additional CA certificates needed to verify OCSP responses. Provided as base64 encoded PEM data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#ocsp_ca_certificates CertAuthBackendRole#ocsp_ca_certificates}
  */
  readonly ocspCaCertificates?: string;
  /**
  * If enabled, validate certificates' revocation status using OCSP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#ocsp_enabled CertAuthBackendRole#ocsp_enabled}
  */
  readonly ocspEnabled?: boolean | cdktf.IResolvable;
  /**
  * If true and an OCSP response cannot be fetched or is of an unknown status, the login will proceed as if the certificate has not been revoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#ocsp_fail_open CertAuthBackendRole#ocsp_fail_open}
  */
  readonly ocspFailOpen?: boolean | cdktf.IResolvable;
  /**
  * If set to true, rather than accepting the first successful OCSP response, query all servers and consider the certificate valid only if all servers agree.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#ocsp_query_all_servers CertAuthBackendRole#ocsp_query_all_servers}
  */
  readonly ocspQueryAllServers?: boolean | cdktf.IResolvable;
  /**
  * A comma-separated list of OCSP server addresses. If unset, the OCSP server is determined from the AuthorityInformationAccess extension on the certificate being inspected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#ocsp_servers_override CertAuthBackendRole#ocsp_servers_override}
  */
  readonly ocspServersOverride?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#required_extensions CertAuthBackendRole#required_extensions}
  */
  readonly requiredExtensions?: string[];
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#token_bound_cidrs CertAuthBackendRole#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#token_explicit_max_ttl CertAuthBackendRole#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#token_max_ttl CertAuthBackendRole#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#token_no_default_policy CertAuthBackendRole#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#token_num_uses CertAuthBackendRole#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#token_period CertAuthBackendRole#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#token_policies CertAuthBackendRole#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#token_ttl CertAuthBackendRole#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#token_type CertAuthBackendRole#token_type}
  */
  readonly tokenType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role vault_cert_auth_backend_role}
*/
export class CertAuthBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_cert_auth_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertAuthBackendRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertAuthBackendRole to import
  * @param importFromId The id of the existing CertAuthBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertAuthBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_cert_auth_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/cert_auth_backend_role vault_cert_auth_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertAuthBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: CertAuthBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_cert_auth_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.6.0',
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
    this._allowedCommonNames = config.allowedCommonNames;
    this._allowedDnsSans = config.allowedDnsSans;
    this._allowedEmailSans = config.allowedEmailSans;
    this._allowedNames = config.allowedNames;
    this._allowedOrganizationalUnits = config.allowedOrganizationalUnits;
    this._allowedUriSans = config.allowedUriSans;
    this._backend = config.backend;
    this._certificate = config.certificate;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._ocspCaCertificates = config.ocspCaCertificates;
    this._ocspEnabled = config.ocspEnabled;
    this._ocspFailOpen = config.ocspFailOpen;
    this._ocspQueryAllServers = config.ocspQueryAllServers;
    this._ocspServersOverride = config.ocspServersOverride;
    this._requiredExtensions = config.requiredExtensions;
    this._tokenBoundCidrs = config.tokenBoundCidrs;
    this._tokenExplicitMaxTtl = config.tokenExplicitMaxTtl;
    this._tokenMaxTtl = config.tokenMaxTtl;
    this._tokenNoDefaultPolicy = config.tokenNoDefaultPolicy;
    this._tokenNumUses = config.tokenNumUses;
    this._tokenPeriod = config.tokenPeriod;
    this._tokenPolicies = config.tokenPolicies;
    this._tokenTtl = config.tokenTtl;
    this._tokenType = config.tokenType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_common_names - computed: true, optional: true, required: false
  private _allowedCommonNames?: string[]; 
  public get allowedCommonNames() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_common_names'));
  }
  public set allowedCommonNames(value: string[]) {
    this._allowedCommonNames = value;
  }
  public resetAllowedCommonNames() {
    this._allowedCommonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCommonNamesInput() {
    return this._allowedCommonNames;
  }

  // allowed_dns_sans - computed: true, optional: true, required: false
  private _allowedDnsSans?: string[]; 
  public get allowedDnsSans() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_dns_sans'));
  }
  public set allowedDnsSans(value: string[]) {
    this._allowedDnsSans = value;
  }
  public resetAllowedDnsSans() {
    this._allowedDnsSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDnsSansInput() {
    return this._allowedDnsSans;
  }

  // allowed_email_sans - computed: true, optional: true, required: false
  private _allowedEmailSans?: string[]; 
  public get allowedEmailSans() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_email_sans'));
  }
  public set allowedEmailSans(value: string[]) {
    this._allowedEmailSans = value;
  }
  public resetAllowedEmailSans() {
    this._allowedEmailSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEmailSansInput() {
    return this._allowedEmailSans;
  }

  // allowed_names - computed: true, optional: true, required: false
  private _allowedNames?: string[]; 
  public get allowedNames() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_names'));
  }
  public set allowedNames(value: string[]) {
    this._allowedNames = value;
  }
  public resetAllowedNames() {
    this._allowedNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNamesInput() {
    return this._allowedNames;
  }

  // allowed_organizational_units - computed: false, optional: true, required: false
  private _allowedOrganizationalUnits?: string[]; 
  public get allowedOrganizationalUnits() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_organizational_units'));
  }
  public set allowedOrganizationalUnits(value: string[]) {
    this._allowedOrganizationalUnits = value;
  }
  public resetAllowedOrganizationalUnits() {
    this._allowedOrganizationalUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOrganizationalUnitsInput() {
    return this._allowedOrganizationalUnits;
  }

  // allowed_uri_sans - computed: true, optional: true, required: false
  private _allowedUriSans?: string[]; 
  public get allowedUriSans() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_uri_sans'));
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

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ocsp_ca_certificates - computed: false, optional: true, required: false
  private _ocspCaCertificates?: string; 
  public get ocspCaCertificates() {
    return this.getStringAttribute('ocsp_ca_certificates');
  }
  public set ocspCaCertificates(value: string) {
    this._ocspCaCertificates = value;
  }
  public resetOcspCaCertificates() {
    this._ocspCaCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspCaCertificatesInput() {
    return this._ocspCaCertificates;
  }

  // ocsp_enabled - computed: true, optional: true, required: false
  private _ocspEnabled?: boolean | cdktf.IResolvable; 
  public get ocspEnabled() {
    return this.getBooleanAttribute('ocsp_enabled');
  }
  public set ocspEnabled(value: boolean | cdktf.IResolvable) {
    this._ocspEnabled = value;
  }
  public resetOcspEnabled() {
    this._ocspEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspEnabledInput() {
    return this._ocspEnabled;
  }

  // ocsp_fail_open - computed: true, optional: true, required: false
  private _ocspFailOpen?: boolean | cdktf.IResolvable; 
  public get ocspFailOpen() {
    return this.getBooleanAttribute('ocsp_fail_open');
  }
  public set ocspFailOpen(value: boolean | cdktf.IResolvable) {
    this._ocspFailOpen = value;
  }
  public resetOcspFailOpen() {
    this._ocspFailOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspFailOpenInput() {
    return this._ocspFailOpen;
  }

  // ocsp_query_all_servers - computed: true, optional: true, required: false
  private _ocspQueryAllServers?: boolean | cdktf.IResolvable; 
  public get ocspQueryAllServers() {
    return this.getBooleanAttribute('ocsp_query_all_servers');
  }
  public set ocspQueryAllServers(value: boolean | cdktf.IResolvable) {
    this._ocspQueryAllServers = value;
  }
  public resetOcspQueryAllServers() {
    this._ocspQueryAllServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspQueryAllServersInput() {
    return this._ocspQueryAllServers;
  }

  // ocsp_servers_override - computed: false, optional: true, required: false
  private _ocspServersOverride?: string[]; 
  public get ocspServersOverride() {
    return cdktf.Fn.tolist(this.getListAttribute('ocsp_servers_override'));
  }
  public set ocspServersOverride(value: string[]) {
    this._ocspServersOverride = value;
  }
  public resetOcspServersOverride() {
    this._ocspServersOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspServersOverrideInput() {
    return this._ocspServersOverride;
  }

  // required_extensions - computed: true, optional: true, required: false
  private _requiredExtensions?: string[]; 
  public get requiredExtensions() {
    return cdktf.Fn.tolist(this.getListAttribute('required_extensions'));
  }
  public set requiredExtensions(value: string[]) {
    this._requiredExtensions = value;
  }
  public resetRequiredExtensions() {
    this._requiredExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredExtensionsInput() {
    return this._requiredExtensions;
  }

  // token_bound_cidrs - computed: false, optional: true, required: false
  private _tokenBoundCidrs?: string[]; 
  public get tokenBoundCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('token_bound_cidrs'));
  }
  public set tokenBoundCidrs(value: string[]) {
    this._tokenBoundCidrs = value;
  }
  public resetTokenBoundCidrs() {
    this._tokenBoundCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBoundCidrsInput() {
    return this._tokenBoundCidrs;
  }

  // token_explicit_max_ttl - computed: false, optional: true, required: false
  private _tokenExplicitMaxTtl?: number; 
  public get tokenExplicitMaxTtl() {
    return this.getNumberAttribute('token_explicit_max_ttl');
  }
  public set tokenExplicitMaxTtl(value: number) {
    this._tokenExplicitMaxTtl = value;
  }
  public resetTokenExplicitMaxTtl() {
    this._tokenExplicitMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExplicitMaxTtlInput() {
    return this._tokenExplicitMaxTtl;
  }

  // token_max_ttl - computed: false, optional: true, required: false
  private _tokenMaxTtl?: number; 
  public get tokenMaxTtl() {
    return this.getNumberAttribute('token_max_ttl');
  }
  public set tokenMaxTtl(value: number) {
    this._tokenMaxTtl = value;
  }
  public resetTokenMaxTtl() {
    this._tokenMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenMaxTtlInput() {
    return this._tokenMaxTtl;
  }

  // token_no_default_policy - computed: false, optional: true, required: false
  private _tokenNoDefaultPolicy?: boolean | cdktf.IResolvable; 
  public get tokenNoDefaultPolicy() {
    return this.getBooleanAttribute('token_no_default_policy');
  }
  public set tokenNoDefaultPolicy(value: boolean | cdktf.IResolvable) {
    this._tokenNoDefaultPolicy = value;
  }
  public resetTokenNoDefaultPolicy() {
    this._tokenNoDefaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNoDefaultPolicyInput() {
    return this._tokenNoDefaultPolicy;
  }

  // token_num_uses - computed: false, optional: true, required: false
  private _tokenNumUses?: number; 
  public get tokenNumUses() {
    return this.getNumberAttribute('token_num_uses');
  }
  public set tokenNumUses(value: number) {
    this._tokenNumUses = value;
  }
  public resetTokenNumUses() {
    this._tokenNumUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNumUsesInput() {
    return this._tokenNumUses;
  }

  // token_period - computed: false, optional: true, required: false
  private _tokenPeriod?: number; 
  public get tokenPeriod() {
    return this.getNumberAttribute('token_period');
  }
  public set tokenPeriod(value: number) {
    this._tokenPeriod = value;
  }
  public resetTokenPeriod() {
    this._tokenPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPeriodInput() {
    return this._tokenPeriod;
  }

  // token_policies - computed: false, optional: true, required: false
  private _tokenPolicies?: string[]; 
  public get tokenPolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('token_policies'));
  }
  public set tokenPolicies(value: string[]) {
    this._tokenPolicies = value;
  }
  public resetTokenPolicies() {
    this._tokenPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPoliciesInput() {
    return this._tokenPolicies;
  }

  // token_ttl - computed: false, optional: true, required: false
  private _tokenTtl?: number; 
  public get tokenTtl() {
    return this.getNumberAttribute('token_ttl');
  }
  public set tokenTtl(value: number) {
    this._tokenTtl = value;
  }
  public resetTokenTtl() {
    this._tokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTtlInput() {
    return this._tokenTtl;
  }

  // token_type - computed: false, optional: true, required: false
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  public resetTokenType() {
    this._tokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_common_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCommonNames),
      allowed_dns_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedDnsSans),
      allowed_email_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedEmailSans),
      allowed_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedNames),
      allowed_organizational_units: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOrganizationalUnits),
      allowed_uri_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedUriSans),
      backend: cdktf.stringToTerraform(this._backend),
      certificate: cdktf.stringToTerraform(this._certificate),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      ocsp_ca_certificates: cdktf.stringToTerraform(this._ocspCaCertificates),
      ocsp_enabled: cdktf.booleanToTerraform(this._ocspEnabled),
      ocsp_fail_open: cdktf.booleanToTerraform(this._ocspFailOpen),
      ocsp_query_all_servers: cdktf.booleanToTerraform(this._ocspQueryAllServers),
      ocsp_servers_override: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ocspServersOverride),
      required_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requiredExtensions),
      token_bound_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenBoundCidrs),
      token_explicit_max_ttl: cdktf.numberToTerraform(this._tokenExplicitMaxTtl),
      token_max_ttl: cdktf.numberToTerraform(this._tokenMaxTtl),
      token_no_default_policy: cdktf.booleanToTerraform(this._tokenNoDefaultPolicy),
      token_num_uses: cdktf.numberToTerraform(this._tokenNumUses),
      token_period: cdktf.numberToTerraform(this._tokenPeriod),
      token_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenPolicies),
      token_ttl: cdktf.numberToTerraform(this._tokenTtl),
      token_type: cdktf.stringToTerraform(this._tokenType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_common_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCommonNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_dns_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedDnsSans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_email_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedEmailSans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_organizational_units: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOrganizationalUnits),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_uri_sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedUriSans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      ocsp_ca_certificates: {
        value: cdktf.stringToHclTerraform(this._ocspCaCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ocsp_enabled: {
        value: cdktf.booleanToHclTerraform(this._ocspEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ocsp_fail_open: {
        value: cdktf.booleanToHclTerraform(this._ocspFailOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ocsp_query_all_servers: {
        value: cdktf.booleanToHclTerraform(this._ocspQueryAllServers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ocsp_servers_override: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ocspServersOverride),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      required_extensions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requiredExtensions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_bound_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenBoundCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_explicit_max_ttl: {
        value: cdktf.numberToHclTerraform(this._tokenExplicitMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_max_ttl: {
        value: cdktf.numberToHclTerraform(this._tokenMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_no_default_policy: {
        value: cdktf.booleanToHclTerraform(this._tokenNoDefaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_num_uses: {
        value: cdktf.numberToHclTerraform(this._tokenNumUses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_period: {
        value: cdktf.numberToHclTerraform(this._tokenPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tokenPolicies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_ttl: {
        value: cdktf.numberToHclTerraform(this._tokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_type: {
        value: cdktf.stringToHclTerraform(this._tokenType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
