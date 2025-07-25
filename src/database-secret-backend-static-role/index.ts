/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseSecretBackendStaticRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the Database Secret Backend the role belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#backend DatabaseSecretBackendStaticRole#backend}
  */
  readonly backend: string;
  /**
  * The configuration for the credential type.Full documentation for the allowed values can be found under "https://developer.hashicorp.com/vault/api-docs/secret/databases#credential_config".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#credential_config DatabaseSecretBackendStaticRole#credential_config}
  */
  readonly credentialConfig?: { [key: string]: string };
  /**
  * The credential type for the user, can be one of "password", "rsa_private_key" or "client_certificate".The configuration can be done in `credential_config`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#credential_type DatabaseSecretBackendStaticRole#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Database connection to use for this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#db_name DatabaseSecretBackendStaticRole#db_name}
  */
  readonly dbName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#id DatabaseSecretBackendStaticRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for the static role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#name DatabaseSecretBackendStaticRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#namespace DatabaseSecretBackendStaticRole#namespace}
  */
  readonly namespace?: string;
  /**
  * The amount of time Vault should wait before rotating the password, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#rotation_period DatabaseSecretBackendStaticRole#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * A cron-style string that will define the schedule on which rotations should occur.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#rotation_schedule DatabaseSecretBackendStaticRole#rotation_schedule}
  */
  readonly rotationSchedule?: string;
  /**
  * Database statements to execute to rotate the password for the configured database user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#rotation_statements DatabaseSecretBackendStaticRole#rotation_statements}
  */
  readonly rotationStatements?: string[];
  /**
  * The amount of time in seconds in which the rotations are allowed to occur starting from a given rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#rotation_window DatabaseSecretBackendStaticRole#rotation_window}
  */
  readonly rotationWindow?: number;
  /**
  * The password corresponding to the username in the database. Required when using the Rootless Password Rotation workflow for static roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#self_managed_password DatabaseSecretBackendStaticRole#self_managed_password}
  */
  readonly selfManagedPassword?: string;
  /**
  * Skip rotation of the password on import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#skip_import_rotation DatabaseSecretBackendStaticRole#skip_import_rotation}
  */
  readonly skipImportRotation?: boolean | cdktf.IResolvable;
  /**
  * The database username that this role corresponds to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#username DatabaseSecretBackendStaticRole#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role vault_database_secret_backend_static_role}
*/
export class DatabaseSecretBackendStaticRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_database_secret_backend_static_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseSecretBackendStaticRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseSecretBackendStaticRole to import
  * @param importFromId The id of the existing DatabaseSecretBackendStaticRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseSecretBackendStaticRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_database_secret_backend_static_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/database_secret_backend_static_role vault_database_secret_backend_static_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseSecretBackendStaticRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseSecretBackendStaticRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_database_secret_backend_static_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.1.0',
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
    this._backend = config.backend;
    this._credentialConfig = config.credentialConfig;
    this._credentialType = config.credentialType;
    this._dbName = config.dbName;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._rotationPeriod = config.rotationPeriod;
    this._rotationSchedule = config.rotationSchedule;
    this._rotationStatements = config.rotationStatements;
    this._rotationWindow = config.rotationWindow;
    this._selfManagedPassword = config.selfManagedPassword;
    this._skipImportRotation = config.skipImportRotation;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // credential_config - computed: false, optional: true, required: false
  private _credentialConfig?: { [key: string]: string }; 
  public get credentialConfig() {
    return this.getStringMapAttribute('credential_config');
  }
  public set credentialConfig(value: { [key: string]: string }) {
    this._credentialConfig = value;
  }
  public resetCredentialConfig() {
    this._credentialConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialConfigInput() {
    return this._credentialConfig;
  }

  // credential_type - computed: true, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
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

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: number; 
  public get rotationPeriod() {
    return this.getNumberAttribute('rotation_period');
  }
  public set rotationPeriod(value: number) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // rotation_schedule - computed: false, optional: true, required: false
  private _rotationSchedule?: string; 
  public get rotationSchedule() {
    return this.getStringAttribute('rotation_schedule');
  }
  public set rotationSchedule(value: string) {
    this._rotationSchedule = value;
  }
  public resetRotationSchedule() {
    this._rotationSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationScheduleInput() {
    return this._rotationSchedule;
  }

  // rotation_statements - computed: false, optional: true, required: false
  private _rotationStatements?: string[]; 
  public get rotationStatements() {
    return this.getListAttribute('rotation_statements');
  }
  public set rotationStatements(value: string[]) {
    this._rotationStatements = value;
  }
  public resetRotationStatements() {
    this._rotationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationStatementsInput() {
    return this._rotationStatements;
  }

  // rotation_window - computed: false, optional: true, required: false
  private _rotationWindow?: number; 
  public get rotationWindow() {
    return this.getNumberAttribute('rotation_window');
  }
  public set rotationWindow(value: number) {
    this._rotationWindow = value;
  }
  public resetRotationWindow() {
    this._rotationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationWindowInput() {
    return this._rotationWindow;
  }

  // self_managed_password - computed: false, optional: true, required: false
  private _selfManagedPassword?: string; 
  public get selfManagedPassword() {
    return this.getStringAttribute('self_managed_password');
  }
  public set selfManagedPassword(value: string) {
    this._selfManagedPassword = value;
  }
  public resetSelfManagedPassword() {
    this._selfManagedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedPasswordInput() {
    return this._selfManagedPassword;
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
      backend: cdktf.stringToTerraform(this._backend),
      credential_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._credentialConfig),
      credential_type: cdktf.stringToTerraform(this._credentialType),
      db_name: cdktf.stringToTerraform(this._dbName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      rotation_period: cdktf.numberToTerraform(this._rotationPeriod),
      rotation_schedule: cdktf.stringToTerraform(this._rotationSchedule),
      rotation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rotationStatements),
      rotation_window: cdktf.numberToTerraform(this._rotationWindow),
      self_managed_password: cdktf.stringToTerraform(this._selfManagedPassword),
      skip_import_rotation: cdktf.booleanToTerraform(this._skipImportRotation),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._credentialConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      credential_type: {
        value: cdktf.stringToHclTerraform(this._credentialType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
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
      rotation_period: {
        value: cdktf.numberToHclTerraform(this._rotationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotation_schedule: {
        value: cdktf.stringToHclTerraform(this._rotationSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_statements: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rotationStatements),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rotation_window: {
        value: cdktf.numberToHclTerraform(this._rotationWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      self_managed_password: {
        value: cdktf.stringToHclTerraform(this._selfManagedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
