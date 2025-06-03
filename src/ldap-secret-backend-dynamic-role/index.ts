// https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapSecretBackendDynamicRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A templatized LDIF string used to create a user account. May contain multiple entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#creation_ldif LdapSecretBackendDynamicRole#creation_ldif}
  */
  readonly creationLdif: string;
  /**
  * Specifies the TTL for the leases associated with this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#default_ttl LdapSecretBackendDynamicRole#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * A templatized LDIF string used to delete the user account once its TTL has expired. This may contain multiple LDIF entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#deletion_ldif LdapSecretBackendDynamicRole#deletion_ldif}
  */
  readonly deletionLdif: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the maximum TTL for the leases associated with this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#max_ttl LdapSecretBackendDynamicRole#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * The path where the LDAP secrets backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#mount LdapSecretBackendDynamicRole#mount}
  */
  readonly mount?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#namespace LdapSecretBackendDynamicRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#role_name LdapSecretBackendDynamicRole#role_name}
  */
  readonly roleName: string;
  /**
  * A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error. This may contain multiple LDIF entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#rollback_ldif LdapSecretBackendDynamicRole#rollback_ldif}
  */
  readonly rollbackLdif?: string;
  /**
  * A template used to generate a dynamic username. This will be used to fill in the .Username field within the creation_ldif string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#username_template LdapSecretBackendDynamicRole#username_template}
  */
  readonly usernameTemplate?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role vault_ldap_secret_backend_dynamic_role}
*/
export class LdapSecretBackendDynamicRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ldap_secret_backend_dynamic_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapSecretBackendDynamicRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapSecretBackendDynamicRole to import
  * @param importFromId The id of the existing LdapSecretBackendDynamicRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapSecretBackendDynamicRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_ldap_secret_backend_dynamic_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/ldap_secret_backend_dynamic_role vault_ldap_secret_backend_dynamic_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapSecretBackendDynamicRoleConfig
  */
  public constructor(scope: Construct, id: string, config: LdapSecretBackendDynamicRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_ldap_secret_backend_dynamic_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.0.0',
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
    this._creationLdif = config.creationLdif;
    this._defaultTtl = config.defaultTtl;
    this._deletionLdif = config.deletionLdif;
    this._id = config.id;
    this._maxTtl = config.maxTtl;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._roleName = config.roleName;
    this._rollbackLdif = config.rollbackLdif;
    this._usernameTemplate = config.usernameTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_ldif - computed: false, optional: false, required: true
  private _creationLdif?: string; 
  public get creationLdif() {
    return this.getStringAttribute('creation_ldif');
  }
  public set creationLdif(value: string) {
    this._creationLdif = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationLdifInput() {
    return this._creationLdif;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // deletion_ldif - computed: false, optional: false, required: true
  private _deletionLdif?: string; 
  public get deletionLdif() {
    return this.getStringAttribute('deletion_ldif');
  }
  public set deletionLdif(value: string) {
    this._deletionLdif = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionLdifInput() {
    return this._deletionLdif;
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

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
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

  // rollback_ldif - computed: false, optional: true, required: false
  private _rollbackLdif?: string; 
  public get rollbackLdif() {
    return this.getStringAttribute('rollback_ldif');
  }
  public set rollbackLdif(value: string) {
    this._rollbackLdif = value;
  }
  public resetRollbackLdif() {
    this._rollbackLdif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackLdifInput() {
    return this._rollbackLdif;
  }

  // username_template - computed: false, optional: true, required: false
  private _usernameTemplate?: string; 
  public get usernameTemplate() {
    return this.getStringAttribute('username_template');
  }
  public set usernameTemplate(value: string) {
    this._usernameTemplate = value;
  }
  public resetUsernameTemplate() {
    this._usernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameTemplateInput() {
    return this._usernameTemplate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      creation_ldif: cdktf.stringToTerraform(this._creationLdif),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      deletion_ldif: cdktf.stringToTerraform(this._deletionLdif),
      id: cdktf.stringToTerraform(this._id),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      mount: cdktf.stringToTerraform(this._mount),
      namespace: cdktf.stringToTerraform(this._namespace),
      role_name: cdktf.stringToTerraform(this._roleName),
      rollback_ldif: cdktf.stringToTerraform(this._rollbackLdif),
      username_template: cdktf.stringToTerraform(this._usernameTemplate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      creation_ldif: {
        value: cdktf.stringToHclTerraform(this._creationLdif),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ttl: {
        value: cdktf.numberToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deletion_ldif: {
        value: cdktf.stringToHclTerraform(this._deletionLdif),
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
      max_ttl: {
        value: cdktf.numberToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      rollback_ldif: {
        value: cdktf.stringToHclTerraform(this._rollbackLdif),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_template: {
        value: cdktf.stringToHclTerraform(this._usernameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
