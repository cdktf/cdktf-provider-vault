/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseSecretBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the Database Secret Backend the role belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#backend DatabaseSecretBackendRole#backend}
  */
  readonly backend: string;
  /**
  * Database statements to execute to create and configure a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#creation_statements DatabaseSecretBackendRole#creation_statements}
  */
  readonly creationStatements: string[];
  /**
  * Specifies the configuration for the given credential_type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#credential_config DatabaseSecretBackendRole#credential_config}
  */
  readonly credentialConfig?: { [key: string]: string };
  /**
  * Specifies the type of credential that will be generated for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#credential_type DatabaseSecretBackendRole#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Database connection to use for this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#db_name DatabaseSecretBackendRole#db_name}
  */
  readonly dbName: string;
  /**
  * Default TTL for leases associated with this role, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#default_ttl DatabaseSecretBackendRole#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum TTL for leases associated with this role, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#max_ttl DatabaseSecretBackendRole#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Unique name for the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#name DatabaseSecretBackendRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#namespace DatabaseSecretBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Database statements to execute to renew a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#renew_statements DatabaseSecretBackendRole#renew_statements}
  */
  readonly renewStatements?: string[];
  /**
  * Database statements to execute to revoke a user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#revocation_statements DatabaseSecretBackendRole#revocation_statements}
  */
  readonly revocationStatements?: string[];
  /**
  * Database statements to execute to rollback a create operation in the event of an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#rollback_statements DatabaseSecretBackendRole#rollback_statements}
  */
  readonly rollbackStatements?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role vault_database_secret_backend_role}
*/
export class DatabaseSecretBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_database_secret_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseSecretBackendRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseSecretBackendRole to import
  * @param importFromId The id of the existing DatabaseSecretBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseSecretBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_database_secret_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/database_secret_backend_role vault_database_secret_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseSecretBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseSecretBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_database_secret_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.23.0',
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
    this._backend = config.backend;
    this._creationStatements = config.creationStatements;
    this._credentialConfig = config.credentialConfig;
    this._credentialType = config.credentialType;
    this._dbName = config.dbName;
    this._defaultTtl = config.defaultTtl;
    this._id = config.id;
    this._maxTtl = config.maxTtl;
    this._name = config.name;
    this._namespace = config.namespace;
    this._renewStatements = config.renewStatements;
    this._revocationStatements = config.revocationStatements;
    this._rollbackStatements = config.rollbackStatements;
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

  // creation_statements - computed: false, optional: false, required: true
  private _creationStatements?: string[]; 
  public get creationStatements() {
    return this.getListAttribute('creation_statements');
  }
  public set creationStatements(value: string[]) {
    this._creationStatements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get creationStatementsInput() {
    return this._creationStatements;
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

  // renew_statements - computed: false, optional: true, required: false
  private _renewStatements?: string[]; 
  public get renewStatements() {
    return this.getListAttribute('renew_statements');
  }
  public set renewStatements(value: string[]) {
    this._renewStatements = value;
  }
  public resetRenewStatements() {
    this._renewStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewStatementsInput() {
    return this._renewStatements;
  }

  // revocation_statements - computed: false, optional: true, required: false
  private _revocationStatements?: string[]; 
  public get revocationStatements() {
    return this.getListAttribute('revocation_statements');
  }
  public set revocationStatements(value: string[]) {
    this._revocationStatements = value;
  }
  public resetRevocationStatements() {
    this._revocationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationStatementsInput() {
    return this._revocationStatements;
  }

  // rollback_statements - computed: false, optional: true, required: false
  private _rollbackStatements?: string[]; 
  public get rollbackStatements() {
    return this.getListAttribute('rollback_statements');
  }
  public set rollbackStatements(value: string[]) {
    this._rollbackStatements = value;
  }
  public resetRollbackStatements() {
    this._rollbackStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackStatementsInput() {
    return this._rollbackStatements;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      creation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._creationStatements),
      credential_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._credentialConfig),
      credential_type: cdktf.stringToTerraform(this._credentialType),
      db_name: cdktf.stringToTerraform(this._dbName),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      id: cdktf.stringToTerraform(this._id),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      renew_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._renewStatements),
      revocation_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._revocationStatements),
      rollback_statements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rollbackStatements),
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
      creation_statements: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._creationStatements),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      default_ttl: {
        value: cdktf.numberToHclTerraform(this._defaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      renew_statements: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._renewStatements),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      revocation_statements: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._revocationStatements),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rollback_statements: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rollbackStatements),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
