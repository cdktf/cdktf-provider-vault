// https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapAuthBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#binddn LdapAuthBackend#binddn}
  */
  readonly binddn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}
  */
  readonly bindpass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}
  */
  readonly caseSensitiveNames?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#certificate LdapAuthBackend#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}
  */
  readonly clientTlsCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}
  */
  readonly clientTlsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}
  */
  readonly denyNullBind?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#description LdapAuthBackend#description}
  */
  readonly description?: string;
  /**
  * If set, opts out of mount migration on path updates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#disable_remount LdapAuthBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}
  */
  readonly discoverdn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}
  */
  readonly groupattr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}
  */
  readonly groupdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}
  */
  readonly groupfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#id LdapAuthBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Specifies if the auth method is local only
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#local LdapAuthBackend#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#namespace LdapAuthBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#path LdapAuthBackend#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#starttls LdapAuthBackend#starttls}
  */
  readonly starttls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}
  */
  readonly tlsMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#token_bound_cidrs LdapAuthBackend#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#token_explicit_max_ttl LdapAuthBackend#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#token_max_ttl LdapAuthBackend#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#token_no_default_policy LdapAuthBackend#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#token_num_uses LdapAuthBackend#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#token_period LdapAuthBackend#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#token_policies LdapAuthBackend#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#token_ttl LdapAuthBackend#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#token_type LdapAuthBackend#token_type}
  */
  readonly tokenType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}
  */
  readonly upndomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#url LdapAuthBackend#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}
  */
  readonly useTokenGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#userattr LdapAuthBackend#userattr}
  */
  readonly userattr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#userdn LdapAuthBackend#userdn}
  */
  readonly userdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}
  */
  readonly userfilter?: string;
  /**
  * Force the auth method to use the username passed by the user as the alias name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend#username_as_alias LdapAuthBackend#username_as_alias}
  */
  readonly usernameAsAlias?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend vault_ldap_auth_backend}
*/
export class LdapAuthBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ldap_auth_backend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/ldap_auth_backend vault_ldap_auth_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapAuthBackendConfig
  */
  public constructor(scope: Construct, id: string, config: LdapAuthBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_ldap_auth_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.15.0',
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
    this._binddn = config.binddn;
    this._bindpass = config.bindpass;
    this._caseSensitiveNames = config.caseSensitiveNames;
    this._certificate = config.certificate;
    this._clientTlsCert = config.clientTlsCert;
    this._clientTlsKey = config.clientTlsKey;
    this._denyNullBind = config.denyNullBind;
    this._description = config.description;
    this._disableRemount = config.disableRemount;
    this._discoverdn = config.discoverdn;
    this._groupattr = config.groupattr;
    this._groupdn = config.groupdn;
    this._groupfilter = config.groupfilter;
    this._id = config.id;
    this._insecureTls = config.insecureTls;
    this._local = config.local;
    this._namespace = config.namespace;
    this._path = config.path;
    this._starttls = config.starttls;
    this._tlsMaxVersion = config.tlsMaxVersion;
    this._tlsMinVersion = config.tlsMinVersion;
    this._tokenBoundCidrs = config.tokenBoundCidrs;
    this._tokenExplicitMaxTtl = config.tokenExplicitMaxTtl;
    this._tokenMaxTtl = config.tokenMaxTtl;
    this._tokenNoDefaultPolicy = config.tokenNoDefaultPolicy;
    this._tokenNumUses = config.tokenNumUses;
    this._tokenPeriod = config.tokenPeriod;
    this._tokenPolicies = config.tokenPolicies;
    this._tokenTtl = config.tokenTtl;
    this._tokenType = config.tokenType;
    this._upndomain = config.upndomain;
    this._url = config.url;
    this._useTokenGroups = config.useTokenGroups;
    this._userattr = config.userattr;
    this._userdn = config.userdn;
    this._userfilter = config.userfilter;
    this._usernameAsAlias = config.usernameAsAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // binddn - computed: true, optional: true, required: false
  private _binddn?: string; 
  public get binddn() {
    return this.getStringAttribute('binddn');
  }
  public set binddn(value: string) {
    this._binddn = value;
  }
  public resetBinddn() {
    this._binddn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binddnInput() {
    return this._binddn;
  }

  // bindpass - computed: true, optional: true, required: false
  private _bindpass?: string; 
  public get bindpass() {
    return this.getStringAttribute('bindpass');
  }
  public set bindpass(value: string) {
    this._bindpass = value;
  }
  public resetBindpass() {
    this._bindpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpassInput() {
    return this._bindpass;
  }

  // case_sensitive_names - computed: true, optional: true, required: false
  private _caseSensitiveNames?: boolean | cdktf.IResolvable; 
  public get caseSensitiveNames() {
    return this.getBooleanAttribute('case_sensitive_names');
  }
  public set caseSensitiveNames(value: boolean | cdktf.IResolvable) {
    this._caseSensitiveNames = value;
  }
  public resetCaseSensitiveNames() {
    this._caseSensitiveNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveNamesInput() {
    return this._caseSensitiveNames;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // client_tls_cert - computed: true, optional: true, required: false
  private _clientTlsCert?: string; 
  public get clientTlsCert() {
    return this.getStringAttribute('client_tls_cert');
  }
  public set clientTlsCert(value: string) {
    this._clientTlsCert = value;
  }
  public resetClientTlsCert() {
    this._clientTlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsCertInput() {
    return this._clientTlsCert;
  }

  // client_tls_key - computed: true, optional: true, required: false
  private _clientTlsKey?: string; 
  public get clientTlsKey() {
    return this.getStringAttribute('client_tls_key');
  }
  public set clientTlsKey(value: string) {
    this._clientTlsKey = value;
  }
  public resetClientTlsKey() {
    this._clientTlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsKeyInput() {
    return this._clientTlsKey;
  }

  // deny_null_bind - computed: true, optional: true, required: false
  private _denyNullBind?: boolean | cdktf.IResolvable; 
  public get denyNullBind() {
    return this.getBooleanAttribute('deny_null_bind');
  }
  public set denyNullBind(value: boolean | cdktf.IResolvable) {
    this._denyNullBind = value;
  }
  public resetDenyNullBind() {
    this._denyNullBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNullBindInput() {
    return this._denyNullBind;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_remount - computed: false, optional: true, required: false
  private _disableRemount?: boolean | cdktf.IResolvable; 
  public get disableRemount() {
    return this.getBooleanAttribute('disable_remount');
  }
  public set disableRemount(value: boolean | cdktf.IResolvable) {
    this._disableRemount = value;
  }
  public resetDisableRemount() {
    this._disableRemount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRemountInput() {
    return this._disableRemount;
  }

  // discoverdn - computed: true, optional: true, required: false
  private _discoverdn?: boolean | cdktf.IResolvable; 
  public get discoverdn() {
    return this.getBooleanAttribute('discoverdn');
  }
  public set discoverdn(value: boolean | cdktf.IResolvable) {
    this._discoverdn = value;
  }
  public resetDiscoverdn() {
    this._discoverdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverdnInput() {
    return this._discoverdn;
  }

  // groupattr - computed: true, optional: true, required: false
  private _groupattr?: string; 
  public get groupattr() {
    return this.getStringAttribute('groupattr');
  }
  public set groupattr(value: string) {
    this._groupattr = value;
  }
  public resetGroupattr() {
    this._groupattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupattrInput() {
    return this._groupattr;
  }

  // groupdn - computed: true, optional: true, required: false
  private _groupdn?: string; 
  public get groupdn() {
    return this.getStringAttribute('groupdn');
  }
  public set groupdn(value: string) {
    this._groupdn = value;
  }
  public resetGroupdn() {
    this._groupdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupdnInput() {
    return this._groupdn;
  }

  // groupfilter - computed: true, optional: true, required: false
  private _groupfilter?: string; 
  public get groupfilter() {
    return this.getStringAttribute('groupfilter');
  }
  public set groupfilter(value: string) {
    this._groupfilter = value;
  }
  public resetGroupfilter() {
    this._groupfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupfilterInput() {
    return this._groupfilter;
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

  // insecure_tls - computed: true, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktf.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
  }

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // starttls - computed: true, optional: true, required: false
  private _starttls?: boolean | cdktf.IResolvable; 
  public get starttls() {
    return this.getBooleanAttribute('starttls');
  }
  public set starttls(value: boolean | cdktf.IResolvable) {
    this._starttls = value;
  }
  public resetStarttls() {
    this._starttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttlsInput() {
    return this._starttls;
  }

  // tls_max_version - computed: true, optional: true, required: false
  private _tlsMaxVersion?: string; 
  public get tlsMaxVersion() {
    return this.getStringAttribute('tls_max_version');
  }
  public set tlsMaxVersion(value: string) {
    this._tlsMaxVersion = value;
  }
  public resetTlsMaxVersion() {
    this._tlsMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMaxVersionInput() {
    return this._tlsMaxVersion;
  }

  // tls_min_version - computed: true, optional: true, required: false
  private _tlsMinVersion?: string; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion;
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

  // upndomain - computed: true, optional: true, required: false
  private _upndomain?: string; 
  public get upndomain() {
    return this.getStringAttribute('upndomain');
  }
  public set upndomain(value: string) {
    this._upndomain = value;
  }
  public resetUpndomain() {
    this._upndomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upndomainInput() {
    return this._upndomain;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_token_groups - computed: true, optional: true, required: false
  private _useTokenGroups?: boolean | cdktf.IResolvable; 
  public get useTokenGroups() {
    return this.getBooleanAttribute('use_token_groups');
  }
  public set useTokenGroups(value: boolean | cdktf.IResolvable) {
    this._useTokenGroups = value;
  }
  public resetUseTokenGroups() {
    this._useTokenGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTokenGroupsInput() {
    return this._useTokenGroups;
  }

  // userattr - computed: true, optional: true, required: false
  private _userattr?: string; 
  public get userattr() {
    return this.getStringAttribute('userattr');
  }
  public set userattr(value: string) {
    this._userattr = value;
  }
  public resetUserattr() {
    this._userattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userattrInput() {
    return this._userattr;
  }

  // userdn - computed: true, optional: true, required: false
  private _userdn?: string; 
  public get userdn() {
    return this.getStringAttribute('userdn');
  }
  public set userdn(value: string) {
    this._userdn = value;
  }
  public resetUserdn() {
    this._userdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdnInput() {
    return this._userdn;
  }

  // userfilter - computed: true, optional: true, required: false
  private _userfilter?: string; 
  public get userfilter() {
    return this.getStringAttribute('userfilter');
  }
  public set userfilter(value: string) {
    this._userfilter = value;
  }
  public resetUserfilter() {
    this._userfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userfilterInput() {
    return this._userfilter;
  }

  // username_as_alias - computed: true, optional: true, required: false
  private _usernameAsAlias?: boolean | cdktf.IResolvable; 
  public get usernameAsAlias() {
    return this.getBooleanAttribute('username_as_alias');
  }
  public set usernameAsAlias(value: boolean | cdktf.IResolvable) {
    this._usernameAsAlias = value;
  }
  public resetUsernameAsAlias() {
    this._usernameAsAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAsAliasInput() {
    return this._usernameAsAlias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      binddn: cdktf.stringToTerraform(this._binddn),
      bindpass: cdktf.stringToTerraform(this._bindpass),
      case_sensitive_names: cdktf.booleanToTerraform(this._caseSensitiveNames),
      certificate: cdktf.stringToTerraform(this._certificate),
      client_tls_cert: cdktf.stringToTerraform(this._clientTlsCert),
      client_tls_key: cdktf.stringToTerraform(this._clientTlsKey),
      deny_null_bind: cdktf.booleanToTerraform(this._denyNullBind),
      description: cdktf.stringToTerraform(this._description),
      disable_remount: cdktf.booleanToTerraform(this._disableRemount),
      discoverdn: cdktf.booleanToTerraform(this._discoverdn),
      groupattr: cdktf.stringToTerraform(this._groupattr),
      groupdn: cdktf.stringToTerraform(this._groupdn),
      groupfilter: cdktf.stringToTerraform(this._groupfilter),
      id: cdktf.stringToTerraform(this._id),
      insecure_tls: cdktf.booleanToTerraform(this._insecureTls),
      local: cdktf.booleanToTerraform(this._local),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      starttls: cdktf.booleanToTerraform(this._starttls),
      tls_max_version: cdktf.stringToTerraform(this._tlsMaxVersion),
      tls_min_version: cdktf.stringToTerraform(this._tlsMinVersion),
      token_bound_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenBoundCidrs),
      token_explicit_max_ttl: cdktf.numberToTerraform(this._tokenExplicitMaxTtl),
      token_max_ttl: cdktf.numberToTerraform(this._tokenMaxTtl),
      token_no_default_policy: cdktf.booleanToTerraform(this._tokenNoDefaultPolicy),
      token_num_uses: cdktf.numberToTerraform(this._tokenNumUses),
      token_period: cdktf.numberToTerraform(this._tokenPeriod),
      token_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenPolicies),
      token_ttl: cdktf.numberToTerraform(this._tokenTtl),
      token_type: cdktf.stringToTerraform(this._tokenType),
      upndomain: cdktf.stringToTerraform(this._upndomain),
      url: cdktf.stringToTerraform(this._url),
      use_token_groups: cdktf.booleanToTerraform(this._useTokenGroups),
      userattr: cdktf.stringToTerraform(this._userattr),
      userdn: cdktf.stringToTerraform(this._userdn),
      userfilter: cdktf.stringToTerraform(this._userfilter),
      username_as_alias: cdktf.booleanToTerraform(this._usernameAsAlias),
    };
  }
}
