// https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityMfaDuoConfig extends cdktf.TerraformMetaArguments {
  /**
  * API hostname for Duo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#api_hostname IdentityMfaDuo#api_hostname}
  */
  readonly apiHostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#id IdentityMfaDuo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Integration key for Duo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#integration_key IdentityMfaDuo#integration_key}
  */
  readonly integrationKey: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#namespace IdentityMfaDuo#namespace}
  */
  readonly namespace?: string;
  /**
  * Push information for Duo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#push_info IdentityMfaDuo#push_info}
  */
  readonly pushInfo?: string;
  /**
  * Secret key for Duo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#secret_key IdentityMfaDuo#secret_key}
  */
  readonly secretKey: string;
  /**
  * Require passcode upon MFA validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#use_passcode IdentityMfaDuo#use_passcode}
  */
  readonly usePasscode?: boolean | cdktf.IResolvable;
  /**
  * A template string for mapping Identity names to MFA methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#username_format IdentityMfaDuo#username_format}
  */
  readonly usernameFormat?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo vault_identity_mfa_duo}
*/
export class IdentityMfaDuo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_mfa_duo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityMfaDuo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityMfaDuo to import
  * @param importFromId The id of the existing IdentityMfaDuo that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityMfaDuo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_identity_mfa_duo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/identity_mfa_duo vault_identity_mfa_duo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityMfaDuoConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityMfaDuoConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_mfa_duo',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.4.0',
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
    this._apiHostname = config.apiHostname;
    this._id = config.id;
    this._integrationKey = config.integrationKey;
    this._namespace = config.namespace;
    this._pushInfo = config.pushInfo;
    this._secretKey = config.secretKey;
    this._usePasscode = config.usePasscode;
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

  // method_id - computed: true, optional: false, required: false
  public get methodId() {
    return this.getStringAttribute('method_id');
  }

  // mount_accessor - computed: true, optional: false, required: false
  public get mountAccessor() {
    return this.getStringAttribute('mount_accessor');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // namespace_path - computed: true, optional: false, required: false
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_passcode - computed: false, optional: true, required: false
  private _usePasscode?: boolean | cdktf.IResolvable; 
  public get usePasscode() {
    return this.getBooleanAttribute('use_passcode');
  }
  public set usePasscode(value: boolean | cdktf.IResolvable) {
    this._usePasscode = value;
  }
  public resetUsePasscode() {
    this._usePasscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePasscodeInput() {
    return this._usePasscode;
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_hostname: cdktf.stringToTerraform(this._apiHostname),
      id: cdktf.stringToTerraform(this._id),
      integration_key: cdktf.stringToTerraform(this._integrationKey),
      namespace: cdktf.stringToTerraform(this._namespace),
      push_info: cdktf.stringToTerraform(this._pushInfo),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      use_passcode: cdktf.booleanToTerraform(this._usePasscode),
      username_format: cdktf.stringToTerraform(this._usernameFormat),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_hostname: {
        value: cdktf.stringToHclTerraform(this._apiHostname),
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
      integration_key: {
        value: cdktf.stringToHclTerraform(this._integrationKey),
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
      push_info: {
        value: cdktf.stringToHclTerraform(this._pushInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_passcode: {
        value: cdktf.booleanToHclTerraform(this._usePasscode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username_format: {
        value: cdktf.stringToHclTerraform(this._usernameFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
