/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlAuthBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#acs_urls SamlAuthBackend#acs_urls}
  */
  readonly acsUrls: string[];
  /**
  * The role to use if no role is provided during login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#default_role SamlAuthBackend#default_role}
  */
  readonly defaultRole?: string;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#disable_remount SamlAuthBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktf.IResolvable;
  /**
  * The entity ID of the SAML authentication service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#entity_id SamlAuthBackend#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#idp_cert SamlAuthBackend#idp_cert}
  */
  readonly idpCert?: string;
  /**
  * The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#idp_entity_id SamlAuthBackend#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * The metadata URL of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#idp_metadata_url SamlAuthBackend#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#idp_sso_url SamlAuthBackend#idp_sso_url}
  */
  readonly idpSsoUrl?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#namespace SamlAuthBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#path SamlAuthBackend#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#tune SamlAuthBackend#tune}
  */
  readonly tune?: SamlAuthBackendTune[] | cdktf.IResolvable;
  /**
  * Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#verbose_logging SamlAuthBackend#verbose_logging}
  */
  readonly verboseLogging?: boolean | cdktf.IResolvable;
}
export interface SamlAuthBackendTune {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#allowed_response_headers SamlAuthBackend#allowed_response_headers}
  */
  readonly allowedResponseHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#audit_non_hmac_request_keys SamlAuthBackend#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#audit_non_hmac_response_keys SamlAuthBackend#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#default_lease_ttl SamlAuthBackend#default_lease_ttl}
  */
  readonly defaultLeaseTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#listing_visibility SamlAuthBackend#listing_visibility}
  */
  readonly listingVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#max_lease_ttl SamlAuthBackend#max_lease_ttl}
  */
  readonly maxLeaseTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#passthrough_request_headers SamlAuthBackend#passthrough_request_headers}
  */
  readonly passthroughRequestHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#token_type SamlAuthBackend#token_type}
  */
  readonly tokenType?: string;
}

export function samlAuthBackendTuneToTerraform(struct?: SamlAuthBackendTune | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedResponseHeaders),
    audit_non_hmac_request_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.auditNonHmacRequestKeys),
    audit_non_hmac_response_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.auditNonHmacResponseKeys),
    default_lease_ttl: cdktf.stringToTerraform(struct!.defaultLeaseTtl),
    listing_visibility: cdktf.stringToTerraform(struct!.listingVisibility),
    max_lease_ttl: cdktf.stringToTerraform(struct!.maxLeaseTtl),
    passthrough_request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.passthroughRequestHeaders),
    token_type: cdktf.stringToTerraform(struct!.tokenType),
  }
}


export function samlAuthBackendTuneToHclTerraform(struct?: SamlAuthBackendTune | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_response_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedResponseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audit_non_hmac_request_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.auditNonHmacRequestKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audit_non_hmac_response_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.auditNonHmacResponseKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_lease_ttl: {
      value: cdktf.stringToHclTerraform(struct!.defaultLeaseTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listing_visibility: {
      value: cdktf.stringToHclTerraform(struct!.listingVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lease_ttl: {
      value: cdktf.stringToHclTerraform(struct!.maxLeaseTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passthrough_request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.passthroughRequestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_type: {
      value: cdktf.stringToHclTerraform(struct!.tokenType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SamlAuthBackendTuneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SamlAuthBackendTune | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedResponseHeaders = this._allowedResponseHeaders;
    }
    if (this._auditNonHmacRequestKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditNonHmacRequestKeys = this._auditNonHmacRequestKeys;
    }
    if (this._auditNonHmacResponseKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditNonHmacResponseKeys = this._auditNonHmacResponseKeys;
    }
    if (this._defaultLeaseTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLeaseTtl = this._defaultLeaseTtl;
    }
    if (this._listingVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.listingVisibility = this._listingVisibility;
    }
    if (this._maxLeaseTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLeaseTtl = this._maxLeaseTtl;
    }
    if (this._passthroughRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthroughRequestHeaders = this._passthroughRequestHeaders;
    }
    if (this._tokenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenType = this._tokenType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SamlAuthBackendTune | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedResponseHeaders = undefined;
      this._auditNonHmacRequestKeys = undefined;
      this._auditNonHmacResponseKeys = undefined;
      this._defaultLeaseTtl = undefined;
      this._listingVisibility = undefined;
      this._maxLeaseTtl = undefined;
      this._passthroughRequestHeaders = undefined;
      this._tokenType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedResponseHeaders = value.allowedResponseHeaders;
      this._auditNonHmacRequestKeys = value.auditNonHmacRequestKeys;
      this._auditNonHmacResponseKeys = value.auditNonHmacResponseKeys;
      this._defaultLeaseTtl = value.defaultLeaseTtl;
      this._listingVisibility = value.listingVisibility;
      this._maxLeaseTtl = value.maxLeaseTtl;
      this._passthroughRequestHeaders = value.passthroughRequestHeaders;
      this._tokenType = value.tokenType;
    }
  }

  // allowed_response_headers - computed: true, optional: true, required: false
  private _allowedResponseHeaders?: string[]; 
  public get allowedResponseHeaders() {
    return this.getListAttribute('allowed_response_headers');
  }
  public set allowedResponseHeaders(value: string[]) {
    this._allowedResponseHeaders = value;
  }
  public resetAllowedResponseHeaders() {
    this._allowedResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedResponseHeadersInput() {
    return this._allowedResponseHeaders;
  }

  // audit_non_hmac_request_keys - computed: true, optional: true, required: false
  private _auditNonHmacRequestKeys?: string[]; 
  public get auditNonHmacRequestKeys() {
    return this.getListAttribute('audit_non_hmac_request_keys');
  }
  public set auditNonHmacRequestKeys(value: string[]) {
    this._auditNonHmacRequestKeys = value;
  }
  public resetAuditNonHmacRequestKeys() {
    this._auditNonHmacRequestKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacRequestKeysInput() {
    return this._auditNonHmacRequestKeys;
  }

  // audit_non_hmac_response_keys - computed: true, optional: true, required: false
  private _auditNonHmacResponseKeys?: string[]; 
  public get auditNonHmacResponseKeys() {
    return this.getListAttribute('audit_non_hmac_response_keys');
  }
  public set auditNonHmacResponseKeys(value: string[]) {
    this._auditNonHmacResponseKeys = value;
  }
  public resetAuditNonHmacResponseKeys() {
    this._auditNonHmacResponseKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacResponseKeysInput() {
    return this._auditNonHmacResponseKeys;
  }

  // default_lease_ttl - computed: true, optional: true, required: false
  private _defaultLeaseTtl?: string; 
  public get defaultLeaseTtl() {
    return this.getStringAttribute('default_lease_ttl');
  }
  public set defaultLeaseTtl(value: string) {
    this._defaultLeaseTtl = value;
  }
  public resetDefaultLeaseTtl() {
    this._defaultLeaseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTtlInput() {
    return this._defaultLeaseTtl;
  }

  // listing_visibility - computed: true, optional: true, required: false
  private _listingVisibility?: string; 
  public get listingVisibility() {
    return this.getStringAttribute('listing_visibility');
  }
  public set listingVisibility(value: string) {
    this._listingVisibility = value;
  }
  public resetListingVisibility() {
    this._listingVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listingVisibilityInput() {
    return this._listingVisibility;
  }

  // max_lease_ttl - computed: true, optional: true, required: false
  private _maxLeaseTtl?: string; 
  public get maxLeaseTtl() {
    return this.getStringAttribute('max_lease_ttl');
  }
  public set maxLeaseTtl(value: string) {
    this._maxLeaseTtl = value;
  }
  public resetMaxLeaseTtl() {
    this._maxLeaseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlInput() {
    return this._maxLeaseTtl;
  }

  // passthrough_request_headers - computed: true, optional: true, required: false
  private _passthroughRequestHeaders?: string[]; 
  public get passthroughRequestHeaders() {
    return this.getListAttribute('passthrough_request_headers');
  }
  public set passthroughRequestHeaders(value: string[]) {
    this._passthroughRequestHeaders = value;
  }
  public resetPassthroughRequestHeaders() {
    this._passthroughRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughRequestHeadersInput() {
    return this._passthroughRequestHeaders;
  }

  // token_type - computed: true, optional: true, required: false
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
}

export class SamlAuthBackendTuneList extends cdktf.ComplexList {
  public internalValue? : SamlAuthBackendTune[] | cdktf.IResolvable

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
  public get(index: number): SamlAuthBackendTuneOutputReference {
    return new SamlAuthBackendTuneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend vault_saml_auth_backend}
*/
export class SamlAuthBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_saml_auth_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlAuthBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlAuthBackend to import
  * @param importFromId The id of the existing SamlAuthBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlAuthBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_saml_auth_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/saml_auth_backend vault_saml_auth_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlAuthBackendConfig
  */
  public constructor(scope: Construct, id: string, config: SamlAuthBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_saml_auth_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.6.0',
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
    this._acsUrls = config.acsUrls;
    this._defaultRole = config.defaultRole;
    this._disableRemount = config.disableRemount;
    this._entityId = config.entityId;
    this._id = config.id;
    this._idpCert = config.idpCert;
    this._idpEntityId = config.idpEntityId;
    this._idpMetadataUrl = config.idpMetadataUrl;
    this._idpSsoUrl = config.idpSsoUrl;
    this._namespace = config.namespace;
    this._path = config.path;
    this._tune.internalValue = config.tune;
    this._verboseLogging = config.verboseLogging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_urls - computed: false, optional: false, required: true
  private _acsUrls?: string[]; 
  public get acsUrls() {
    return this.getListAttribute('acs_urls');
  }
  public set acsUrls(value: string[]) {
    this._acsUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acsUrlsInput() {
    return this._acsUrls;
  }

  // default_role - computed: false, optional: true, required: false
  private _defaultRole?: string; 
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }
  public set defaultRole(value: string) {
    this._defaultRole = value;
  }
  public resetDefaultRole() {
    this._defaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole;
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

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
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

  // idp_cert - computed: false, optional: true, required: false
  private _idpCert?: string; 
  public get idpCert() {
    return this.getStringAttribute('idp_cert');
  }
  public set idpCert(value: string) {
    this._idpCert = value;
  }
  public resetIdpCert() {
    this._idpCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertInput() {
    return this._idpCert;
  }

  // idp_entity_id - computed: false, optional: true, required: false
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  public resetIdpEntityId() {
    this._idpEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_metadata_url - computed: false, optional: true, required: false
  private _idpMetadataUrl?: string; 
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }
  public set idpMetadataUrl(value: string) {
    this._idpMetadataUrl = value;
  }
  public resetIdpMetadataUrl() {
    this._idpMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataUrlInput() {
    return this._idpMetadataUrl;
  }

  // idp_sso_url - computed: false, optional: true, required: false
  private _idpSsoUrl?: string; 
  public get idpSsoUrl() {
    return this.getStringAttribute('idp_sso_url');
  }
  public set idpSsoUrl(value: string) {
    this._idpSsoUrl = value;
  }
  public resetIdpSsoUrl() {
    this._idpSsoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSsoUrlInput() {
    return this._idpSsoUrl;
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

  // tune - computed: true, optional: true, required: false
  private _tune = new SamlAuthBackendTuneList(this, "tune", false);
  public get tune() {
    return this._tune;
  }
  public putTune(value: SamlAuthBackendTune[] | cdktf.IResolvable) {
    this._tune.internalValue = value;
  }
  public resetTune() {
    this._tune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuneInput() {
    return this._tune.internalValue;
  }

  // verbose_logging - computed: true, optional: true, required: false
  private _verboseLogging?: boolean | cdktf.IResolvable; 
  public get verboseLogging() {
    return this.getBooleanAttribute('verbose_logging');
  }
  public set verboseLogging(value: boolean | cdktf.IResolvable) {
    this._verboseLogging = value;
  }
  public resetVerboseLogging() {
    this._verboseLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseLoggingInput() {
    return this._verboseLogging;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acs_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acsUrls),
      default_role: cdktf.stringToTerraform(this._defaultRole),
      disable_remount: cdktf.booleanToTerraform(this._disableRemount),
      entity_id: cdktf.stringToTerraform(this._entityId),
      id: cdktf.stringToTerraform(this._id),
      idp_cert: cdktf.stringToTerraform(this._idpCert),
      idp_entity_id: cdktf.stringToTerraform(this._idpEntityId),
      idp_metadata_url: cdktf.stringToTerraform(this._idpMetadataUrl),
      idp_sso_url: cdktf.stringToTerraform(this._idpSsoUrl),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      tune: cdktf.listMapper(samlAuthBackendTuneToTerraform, false)(this._tune.internalValue),
      verbose_logging: cdktf.booleanToTerraform(this._verboseLogging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acs_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acsUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_role: {
        value: cdktf.stringToHclTerraform(this._defaultRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_remount: {
        value: cdktf.booleanToHclTerraform(this._disableRemount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
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
      idp_cert: {
        value: cdktf.stringToHclTerraform(this._idpCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_entity_id: {
        value: cdktf.stringToHclTerraform(this._idpEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_metadata_url: {
        value: cdktf.stringToHclTerraform(this._idpMetadataUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_sso_url: {
        value: cdktf.stringToHclTerraform(this._idpSsoUrl),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tune: {
        value: cdktf.listMapperHcl(samlAuthBackendTuneToHclTerraform, false)(this._tune.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SamlAuthBackendTuneList",
      },
      verbose_logging: {
        value: cdktf.booleanToHclTerraform(this._verboseLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
