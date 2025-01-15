// https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlAuthBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#acs_urls SamlAuthBackend#acs_urls}
  */
  readonly acsUrls: string[];
  /**
  * The role to use if no role is provided during login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#default_role SamlAuthBackend#default_role}
  */
  readonly defaultRole?: string;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#disable_remount SamlAuthBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktf.IResolvable;
  /**
  * The entity ID of the SAML authentication service provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#entity_id SamlAuthBackend#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#idp_cert SamlAuthBackend#idp_cert}
  */
  readonly idpCert?: string;
  /**
  * The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#idp_entity_id SamlAuthBackend#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * The metadata URL of the identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#idp_metadata_url SamlAuthBackend#idp_metadata_url}
  */
  readonly idpMetadataUrl?: string;
  /**
  * The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#idp_sso_url SamlAuthBackend#idp_sso_url}
  */
  readonly idpSsoUrl?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#namespace SamlAuthBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#path SamlAuthBackend#path}
  */
  readonly path?: string;
  /**
  * Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#verbose_logging SamlAuthBackend#verbose_logging}
  */
  readonly verboseLogging?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend vault_saml_auth_backend}
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
  * @param importFromId The id of the existing SamlAuthBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlAuthBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_saml_auth_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/saml_auth_backend vault_saml_auth_backend} Resource
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
        providerVersion: '4.5.0',
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
