// https://www.terraform.io/docs/providers/vault/r/mfa_duo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MfaDuoConfig extends cdktf.TerraformMetaArguments {
  /**
  * API hostname for Duo.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo#api_hostname MfaDuo#api_hostname}
  */
  readonly apiHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo#id MfaDuo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Integration key for Duo.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo#integration_key MfaDuo#integration_key}
  */
  readonly integrationKey: string;
  /**
  * The mount to tie this method to for use in automatic mappings. The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo#mount_accessor MfaDuo#mount_accessor}
  */
  readonly mountAccessor: string;
  /**
  * Name of the MFA method.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo#name MfaDuo#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo#namespace MfaDuo#namespace}
  */
  readonly namespace?: string;
  /**
  * Push information for Duo.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo#push_info MfaDuo#push_info}
  */
  readonly pushInfo?: string;
  /**
  * Secret key for Duo.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo#secret_key MfaDuo#secret_key}
  */
  readonly secretKey: string;
  /**
  * A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo#username_format MfaDuo#username_format}
  */
  readonly usernameFormat?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo vault_mfa_duo}
*/
export class MfaDuo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_mfa_duo";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/mfa_duo vault_mfa_duo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MfaDuoConfig
  */
  public constructor(scope: Construct, id: string, config: MfaDuoConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_mfa_duo',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.11.0',
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
    this._apiHostname = config.apiHostname;
    this._id = config.id;
    this._integrationKey = config.integrationKey;
    this._mountAccessor = config.mountAccessor;
    this._name = config.name;
    this._namespace = config.namespace;
    this._pushInfo = config.pushInfo;
    this._secretKey = config.secretKey;
    this._usernameFormat = config.usernameFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_hostname - computed: false, optional: false, required: true
  private _apiHostname?: string; 
  public get apiHostname() {
    return this.getStringAttribute('api_hostname');
  }
  public set apiHostname(value: string) {
    this._apiHostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiHostnameInput() {
    return this._apiHostname;
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

  // integration_key - computed: false, optional: false, required: true
  private _integrationKey?: string; 
  public get integrationKey() {
    return this.getStringAttribute('integration_key');
  }
  public set integrationKey(value: string) {
    this._integrationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationKeyInput() {
    return this._integrationKey;
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

  // push_info - computed: false, optional: true, required: false
  private _pushInfo?: string; 
  public get pushInfo() {
    return this.getStringAttribute('push_info');
  }
  public set pushInfo(value: string) {
    this._pushInfo = value;
  }
  public resetPushInfo() {
    this._pushInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInfoInput() {
    return this._pushInfo;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
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
      api_hostname: cdktf.stringToTerraform(this._apiHostname),
      id: cdktf.stringToTerraform(this._id),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      mount_accessor: cdktf.stringToTerraform(this._mountAccessor),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      push_info: cdktf.stringToTerraform(this._pushInfo),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      username_format: cdktf.stringToTerraform(this._usernameFormat),
    };
  }
}
