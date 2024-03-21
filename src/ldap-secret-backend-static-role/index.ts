// https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapSecretBackendStaticRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Distinguished name (DN) of the existing LDAP entry to manage password rotation for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#dn LdapSecretBackendStaticRole#dn}
  */
  readonly dn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path where the LDAP secrets backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#mount LdapSecretBackendStaticRole#mount}
  */
  readonly mount?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#namespace LdapSecretBackendStaticRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#role_name LdapSecretBackendStaticRole#role_name}
  */
  readonly roleName: string;
  /**
  * How often Vault should rotate the password of the user entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#rotation_period LdapSecretBackendStaticRole#rotation_period}
  */
  readonly rotationPeriod: number;
  /**
  * Skip rotation of the password on import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#skip_import_rotation LdapSecretBackendStaticRole#skip_import_rotation}
  */
  readonly skipImportRotation?: boolean | cdktf.IResolvable;
  /**
  * The username of the existing LDAP entry to manage password rotation for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#username LdapSecretBackendStaticRole#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role vault_ldap_secret_backend_static_role}
*/
export class LdapSecretBackendStaticRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ldap_secret_backend_static_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapSecretBackendStaticRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapSecretBackendStaticRole to import
  * @param importFromId The id of the existing LdapSecretBackendStaticRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapSecretBackendStaticRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_ldap_secret_backend_static_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_secret_backend_static_role vault_ldap_secret_backend_static_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapSecretBackendStaticRoleConfig
  */
  public constructor(scope: Construct, id: string, config: LdapSecretBackendStaticRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_ldap_secret_backend_static_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.1.0',
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
    this._dn = config.dn;
    this._id = config.id;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._roleName = config.roleName;
    this._rotationPeriod = config.rotationPeriod;
    this._skipImportRotation = config.skipImportRotation;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dn - computed: false, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
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

  // mount - computed: false, optional: true, required: false
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  public resetMount() {
    this._mount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // rotation_period - computed: false, optional: false, required: true
  private _rotationPeriod?: number; 
  public get rotationPeriod() {
    return this.getNumberAttribute('rotation_period');
  }
  public set rotationPeriod(value: number) {
    this._rotationPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // skip_import_rotation - computed: false, optional: true, required: false
  private _skipImportRotation?: boolean | cdktf.IResolvable; 
  public get skipImportRotation() {
    return this.getBooleanAttribute('skip_import_rotation');
  }
  public set skipImportRotation(value: boolean | cdktf.IResolvable) {
    this._skipImportRotation = value;
  }
  public resetSkipImportRotation() {
    this._skipImportRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipImportRotationInput() {
    return this._skipImportRotation;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dn: cdktf.stringToTerraform(this._dn),
      id: cdktf.stringToTerraform(this._id),
      mount: cdktf.stringToTerraform(this._mount),
      namespace: cdktf.stringToTerraform(this._namespace),
      role_name: cdktf.stringToTerraform(this._roleName),
      rotation_period: cdktf.numberToTerraform(this._rotationPeriod),
      skip_import_rotation: cdktf.booleanToTerraform(this._skipImportRotation),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
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
      mount: {
        value: cdktf.stringToHclTerraform(this._mount),
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
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_period: {
        value: cdktf.numberToHclTerraform(this._rotationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_import_rotation: {
        value: cdktf.booleanToHclTerraform(this._skipImportRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
