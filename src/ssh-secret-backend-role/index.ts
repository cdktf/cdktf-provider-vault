/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshSecretBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#algorithm_signer SshSecretBackendRole#algorithm_signer}
  */
  readonly algorithmSigner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allow_bare_domains SshSecretBackendRole#allow_bare_domains}
  */
  readonly allowBareDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allow_host_certificates SshSecretBackendRole#allow_host_certificates}
  */
  readonly allowHostCertificates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allow_subdomains SshSecretBackendRole#allow_subdomains}
  */
  readonly allowSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allow_user_certificates SshSecretBackendRole#allow_user_certificates}
  */
  readonly allowUserCertificates?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allow_user_key_ids SshSecretBackendRole#allow_user_key_ids}
  */
  readonly allowUserKeyIds?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allowed_critical_options SshSecretBackendRole#allowed_critical_options}
  */
  readonly allowedCriticalOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allowed_domains SshSecretBackendRole#allowed_domains}
  */
  readonly allowedDomains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allowed_domains_template SshSecretBackendRole#allowed_domains_template}
  */
  readonly allowedDomainsTemplate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allowed_extensions SshSecretBackendRole#allowed_extensions}
  */
  readonly allowedExtensions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allowed_user_key_lengths SshSecretBackendRole#allowed_user_key_lengths}
  */
  readonly allowedUserKeyLengths?: { [key: string]: number };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allowed_users SshSecretBackendRole#allowed_users}
  */
  readonly allowedUsers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allowed_users_template SshSecretBackendRole#allowed_users_template}
  */
  readonly allowedUsersTemplate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#backend SshSecretBackendRole#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#cidr_list SshSecretBackendRole#cidr_list}
  */
  readonly cidrList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#default_critical_options SshSecretBackendRole#default_critical_options}
  */
  readonly defaultCriticalOptions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#default_extensions SshSecretBackendRole#default_extensions}
  */
  readonly defaultExtensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#default_user SshSecretBackendRole#default_user}
  */
  readonly defaultUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#default_user_template SshSecretBackendRole#default_user_template}
  */
  readonly defaultUserTemplate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#id SshSecretBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#key_id_format SshSecretBackendRole#key_id_format}
  */
  readonly keyIdFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#key_type SshSecretBackendRole#key_type}
  */
  readonly keyType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#max_ttl SshSecretBackendRole#max_ttl}
  */
  readonly maxTtl?: string;
  /**
  * Unique name for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#name SshSecretBackendRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#namespace SshSecretBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#ttl SshSecretBackendRole#ttl}
  */
  readonly ttl?: string;
  /**
  * allowed_user_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#allowed_user_key_config SshSecretBackendRole#allowed_user_key_config}
  */
  readonly allowedUserKeyConfig?: SshSecretBackendRoleAllowedUserKeyConfig[] | cdktf.IResolvable;
}
export interface SshSecretBackendRoleAllowedUserKeyConfig {
  /**
  * List of allowed key lengths, vault-1.10 and above
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#lengths SshSecretBackendRole#lengths}
  */
  readonly lengths: number[];
  /**
  * Key type, choices:
rsa, ecdsa, ec, dsa, ed25519, ssh-rsa, ssh-dss, ssh-ed25519, ecdsa-sha2-nistp256, ecdsa-sha2-nistp384, ecdsa-sha2-nistp521
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role#type SshSecretBackendRole#type}
  */
  readonly type: string;
}

export function sshSecretBackendRoleAllowedUserKeyConfigToTerraform(struct?: SshSecretBackendRoleAllowedUserKeyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lengths: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.lengths),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class SshSecretBackendRoleAllowedUserKeyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SshSecretBackendRoleAllowedUserKeyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lengths !== undefined) {
      hasAnyValues = true;
      internalValueResult.lengths = this._lengths;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SshSecretBackendRoleAllowedUserKeyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lengths = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lengths = value.lengths;
      this._type = value.type;
    }
  }

  // lengths - computed: false, optional: false, required: true
  private _lengths?: number[]; 
  public get lengths() {
    return this.getNumberListAttribute('lengths');
  }
  public set lengths(value: number[]) {
    this._lengths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthsInput() {
    return this._lengths;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class SshSecretBackendRoleAllowedUserKeyConfigList extends cdktf.ComplexList {
  public internalValue? : SshSecretBackendRoleAllowedUserKeyConfig[] | cdktf.IResolvable

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
  public get(index: number): SshSecretBackendRoleAllowedUserKeyConfigOutputReference {
    return new SshSecretBackendRoleAllowedUserKeyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role vault_ssh_secret_backend_role}
*/
export class SshSecretBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ssh_secret_backend_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ssh_secret_backend_role vault_ssh_secret_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshSecretBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: SshSecretBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_ssh_secret_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.20.1',
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
    this._algorithmSigner = config.algorithmSigner;
    this._allowBareDomains = config.allowBareDomains;
    this._allowHostCertificates = config.allowHostCertificates;
    this._allowSubdomains = config.allowSubdomains;
    this._allowUserCertificates = config.allowUserCertificates;
    this._allowUserKeyIds = config.allowUserKeyIds;
    this._allowedCriticalOptions = config.allowedCriticalOptions;
    this._allowedDomains = config.allowedDomains;
    this._allowedDomainsTemplate = config.allowedDomainsTemplate;
    this._allowedExtensions = config.allowedExtensions;
    this._allowedUserKeyLengths = config.allowedUserKeyLengths;
    this._allowedUsers = config.allowedUsers;
    this._allowedUsersTemplate = config.allowedUsersTemplate;
    this._backend = config.backend;
    this._cidrList = config.cidrList;
    this._defaultCriticalOptions = config.defaultCriticalOptions;
    this._defaultExtensions = config.defaultExtensions;
    this._defaultUser = config.defaultUser;
    this._defaultUserTemplate = config.defaultUserTemplate;
    this._id = config.id;
    this._keyIdFormat = config.keyIdFormat;
    this._keyType = config.keyType;
    this._maxTtl = config.maxTtl;
    this._name = config.name;
    this._namespace = config.namespace;
    this._ttl = config.ttl;
    this._allowedUserKeyConfig.internalValue = config.allowedUserKeyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm_signer - computed: true, optional: true, required: false
  private _algorithmSigner?: string; 
  public get algorithmSigner() {
    return this.getStringAttribute('algorithm_signer');
  }
  public set algorithmSigner(value: string) {
    this._algorithmSigner = value;
  }
  public resetAlgorithmSigner() {
    this._algorithmSigner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmSignerInput() {
    return this._algorithmSigner;
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

  // allow_host_certificates - computed: false, optional: true, required: false
  private _allowHostCertificates?: boolean | cdktf.IResolvable; 
  public get allowHostCertificates() {
    return this.getBooleanAttribute('allow_host_certificates');
  }
  public set allowHostCertificates(value: boolean | cdktf.IResolvable) {
    this._allowHostCertificates = value;
  }
  public resetAllowHostCertificates() {
    this._allowHostCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHostCertificatesInput() {
    return this._allowHostCertificates;
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

  // allow_user_certificates - computed: false, optional: true, required: false
  private _allowUserCertificates?: boolean | cdktf.IResolvable; 
  public get allowUserCertificates() {
    return this.getBooleanAttribute('allow_user_certificates');
  }
  public set allowUserCertificates(value: boolean | cdktf.IResolvable) {
    this._allowUserCertificates = value;
  }
  public resetAllowUserCertificates() {
    this._allowUserCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserCertificatesInput() {
    return this._allowUserCertificates;
  }

  // allow_user_key_ids - computed: false, optional: true, required: false
  private _allowUserKeyIds?: boolean | cdktf.IResolvable; 
  public get allowUserKeyIds() {
    return this.getBooleanAttribute('allow_user_key_ids');
  }
  public set allowUserKeyIds(value: boolean | cdktf.IResolvable) {
    this._allowUserKeyIds = value;
  }
  public resetAllowUserKeyIds() {
    this._allowUserKeyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserKeyIdsInput() {
    return this._allowUserKeyIds;
  }

  // allowed_critical_options - computed: false, optional: true, required: false
  private _allowedCriticalOptions?: string; 
  public get allowedCriticalOptions() {
    return this.getStringAttribute('allowed_critical_options');
  }
  public set allowedCriticalOptions(value: string) {
    this._allowedCriticalOptions = value;
  }
  public resetAllowedCriticalOptions() {
    this._allowedCriticalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCriticalOptionsInput() {
    return this._allowedCriticalOptions;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains?: string; 
  public get allowedDomains() {
    return this.getStringAttribute('allowed_domains');
  }
  public set allowedDomains(value: string) {
    this._allowedDomains = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains;
  }

  // allowed_domains_template - computed: true, optional: true, required: false
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

  // allowed_extensions - computed: false, optional: true, required: false
  private _allowedExtensions?: string; 
  public get allowedExtensions() {
    return this.getStringAttribute('allowed_extensions');
  }
  public set allowedExtensions(value: string) {
    this._allowedExtensions = value;
  }
  public resetAllowedExtensions() {
    this._allowedExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExtensionsInput() {
    return this._allowedExtensions;
  }

  // allowed_user_key_lengths - computed: false, optional: true, required: false
  private _allowedUserKeyLengths?: { [key: string]: number }; 
  public get allowedUserKeyLengths() {
    return this.getNumberMapAttribute('allowed_user_key_lengths');
  }
  public set allowedUserKeyLengths(value: { [key: string]: number }) {
    this._allowedUserKeyLengths = value;
  }
  public resetAllowedUserKeyLengths() {
    this._allowedUserKeyLengths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUserKeyLengthsInput() {
    return this._allowedUserKeyLengths;
  }

  // allowed_users - computed: false, optional: true, required: false
  private _allowedUsers?: string; 
  public get allowedUsers() {
    return this.getStringAttribute('allowed_users');
  }
  public set allowedUsers(value: string) {
    this._allowedUsers = value;
  }
  public resetAllowedUsers() {
    this._allowedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUsersInput() {
    return this._allowedUsers;
  }

  // allowed_users_template - computed: false, optional: true, required: false
  private _allowedUsersTemplate?: boolean | cdktf.IResolvable; 
  public get allowedUsersTemplate() {
    return this.getBooleanAttribute('allowed_users_template');
  }
  public set allowedUsersTemplate(value: boolean | cdktf.IResolvable) {
    this._allowedUsersTemplate = value;
  }
  public resetAllowedUsersTemplate() {
    this._allowedUsersTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUsersTemplateInput() {
    return this._allowedUsersTemplate;
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

  // cidr_list - computed: false, optional: true, required: false
  private _cidrList?: string; 
  public get cidrList() {
    return this.getStringAttribute('cidr_list');
  }
  public set cidrList(value: string) {
    this._cidrList = value;
  }
  public resetCidrList() {
    this._cidrList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrListInput() {
    return this._cidrList;
  }

  // default_critical_options - computed: false, optional: true, required: false
  private _defaultCriticalOptions?: { [key: string]: string }; 
  public get defaultCriticalOptions() {
    return this.getStringMapAttribute('default_critical_options');
  }
  public set defaultCriticalOptions(value: { [key: string]: string }) {
    this._defaultCriticalOptions = value;
  }
  public resetDefaultCriticalOptions() {
    this._defaultCriticalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCriticalOptionsInput() {
    return this._defaultCriticalOptions;
  }

  // default_extensions - computed: false, optional: true, required: false
  private _defaultExtensions?: { [key: string]: string }; 
  public get defaultExtensions() {
    return this.getStringMapAttribute('default_extensions');
  }
  public set defaultExtensions(value: { [key: string]: string }) {
    this._defaultExtensions = value;
  }
  public resetDefaultExtensions() {
    this._defaultExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExtensionsInput() {
    return this._defaultExtensions;
  }

  // default_user - computed: false, optional: true, required: false
  private _defaultUser?: string; 
  public get defaultUser() {
    return this.getStringAttribute('default_user');
  }
  public set defaultUser(value: string) {
    this._defaultUser = value;
  }
  public resetDefaultUser() {
    this._defaultUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserInput() {
    return this._defaultUser;
  }

  // default_user_template - computed: false, optional: true, required: false
  private _defaultUserTemplate?: boolean | cdktf.IResolvable; 
  public get defaultUserTemplate() {
    return this.getBooleanAttribute('default_user_template');
  }
  public set defaultUserTemplate(value: boolean | cdktf.IResolvable) {
    this._defaultUserTemplate = value;
  }
  public resetDefaultUserTemplate() {
    this._defaultUserTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUserTemplateInput() {
    return this._defaultUserTemplate;
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

  // key_id_format - computed: false, optional: true, required: false
  private _keyIdFormat?: string; 
  public get keyIdFormat() {
    return this.getStringAttribute('key_id_format');
  }
  public set keyIdFormat(value: string) {
    this._keyIdFormat = value;
  }
  public resetKeyIdFormat() {
    this._keyIdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdFormatInput() {
    return this._keyIdFormat;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
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

  // allowed_user_key_config - computed: false, optional: true, required: false
  private _allowedUserKeyConfig = new SshSecretBackendRoleAllowedUserKeyConfigList(this, "allowed_user_key_config", true);
  public get allowedUserKeyConfig() {
    return this._allowedUserKeyConfig;
  }
  public putAllowedUserKeyConfig(value: SshSecretBackendRoleAllowedUserKeyConfig[] | cdktf.IResolvable) {
    this._allowedUserKeyConfig.internalValue = value;
  }
  public resetAllowedUserKeyConfig() {
    this._allowedUserKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUserKeyConfigInput() {
    return this._allowedUserKeyConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm_signer: cdktf.stringToTerraform(this._algorithmSigner),
      allow_bare_domains: cdktf.booleanToTerraform(this._allowBareDomains),
      allow_host_certificates: cdktf.booleanToTerraform(this._allowHostCertificates),
      allow_subdomains: cdktf.booleanToTerraform(this._allowSubdomains),
      allow_user_certificates: cdktf.booleanToTerraform(this._allowUserCertificates),
      allow_user_key_ids: cdktf.booleanToTerraform(this._allowUserKeyIds),
      allowed_critical_options: cdktf.stringToTerraform(this._allowedCriticalOptions),
      allowed_domains: cdktf.stringToTerraform(this._allowedDomains),
      allowed_domains_template: cdktf.booleanToTerraform(this._allowedDomainsTemplate),
      allowed_extensions: cdktf.stringToTerraform(this._allowedExtensions),
      allowed_user_key_lengths: cdktf.hashMapper(cdktf.numberToTerraform)(this._allowedUserKeyLengths),
      allowed_users: cdktf.stringToTerraform(this._allowedUsers),
      allowed_users_template: cdktf.booleanToTerraform(this._allowedUsersTemplate),
      backend: cdktf.stringToTerraform(this._backend),
      cidr_list: cdktf.stringToTerraform(this._cidrList),
      default_critical_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultCriticalOptions),
      default_extensions: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultExtensions),
      default_user: cdktf.stringToTerraform(this._defaultUser),
      default_user_template: cdktf.booleanToTerraform(this._defaultUserTemplate),
      id: cdktf.stringToTerraform(this._id),
      key_id_format: cdktf.stringToTerraform(this._keyIdFormat),
      key_type: cdktf.stringToTerraform(this._keyType),
      max_ttl: cdktf.stringToTerraform(this._maxTtl),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      ttl: cdktf.stringToTerraform(this._ttl),
      allowed_user_key_config: cdktf.listMapper(sshSecretBackendRoleAllowedUserKeyConfigToTerraform, true)(this._allowedUserKeyConfig.internalValue),
    };
  }
}
