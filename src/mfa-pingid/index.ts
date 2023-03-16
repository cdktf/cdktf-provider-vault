// https://www.terraform.io/docs/providers/vault/r/mfa_pingid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MfaPingidConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID computed by Vault.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_pingid#id MfaPingid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The mount to tie this method to for use in automatic mappings. The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_pingid#mount_accessor MfaPingid#mount_accessor}
  */
  readonly mountAccessor: string;
  /**
  * Name of the MFA method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_pingid#name MfaPingid#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_pingid#namespace MfaPingid#namespace}
  */
  readonly namespace?: string;
  /**
  * A base64-encoded third-party settings file retrieved from PingID's configuration page.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_pingid#settings_file_base64 MfaPingid#settings_file_base64}
  */
  readonly settingsFileBase64: string;
  /**
  * A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_pingid#username_format MfaPingid#username_format}
  */
  readonly usernameFormat?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/mfa_pingid vault_mfa_pingid}
*/
export class MfaPingid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_mfa_pingid";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/mfa_pingid vault_mfa_pingid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MfaPingidConfig
  */
  public constructor(scope: Construct, id: string, config: MfaPingidConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_mfa_pingid',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.14.0',
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
    this._id = config.id;
    this._mountAccessor = config.mountAccessor;
    this._name = config.name;
    this._namespace = config.namespace;
    this._settingsFileBase64 = config.settingsFileBase64;
    this._usernameFormat = config.usernameFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_url - computed: true, optional: false, required: false
  public get adminUrl() {
    return this.getStringAttribute('admin_url');
  }

  // authenticator_url - computed: true, optional: false, required: false
  public get authenticatorUrl() {
    return this.getStringAttribute('authenticator_url');
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

  // idp_url - computed: true, optional: false, required: false
  public get idpUrl() {
    return this.getStringAttribute('idp_url');
  }

  // mount_accessor - computed: false, optional: false, required: true
  private _mountAccessor?: string; 
  public get mountAccessor() {
    return this.getStringAttribute('mount_accessor');
  }
  public set mountAccessor(value: string) {
    this._mountAccessor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountAccessorInput() {
    return this._mountAccessor;
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

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // org_alias - computed: true, optional: false, required: false
  public get orgAlias() {
    return this.getStringAttribute('org_alias');
  }

  // settings_file_base64 - computed: false, optional: false, required: true
  private _settingsFileBase64?: string; 
  public get settingsFileBase64() {
    return this.getStringAttribute('settings_file_base64');
  }
  public set settingsFileBase64(value: string) {
    this._settingsFileBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsFileBase64Input() {
    return this._settingsFileBase64;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_signature - computed: true, optional: false, required: false
  public get useSignature() {
    return this.getBooleanAttribute('use_signature');
  }

  // username_format - computed: false, optional: true, required: false
  private _usernameFormat?: string; 
  public get usernameFormat() {
    return this.getStringAttribute('username_format');
  }
  public set usernameFormat(value: string) {
    this._usernameFormat = value;
  }
  public resetUsernameFormat() {
    this._usernameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameFormatInput() {
    return this._usernameFormat;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mount_accessor: cdktf.stringToTerraform(this._mountAccessor),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      settings_file_base64: cdktf.stringToTerraform(this._settingsFileBase64),
      username_format: cdktf.stringToTerraform(this._usernameFormat),
    };
  }
}
