// https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsulSecretBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the Consul Secret Backend the role belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#backend ConsulSecretBackendRole#backend}
  */
  readonly backend?: string;
  /**
  * The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#consul_namespace ConsulSecretBackendRole#consul_namespace}
  */
  readonly consulNamespace?: string;
  /**
  * Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#consul_roles ConsulSecretBackendRole#consul_roles}
  */
  readonly consulRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#id ConsulSecretBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates that the token should not be replicated globally and instead be local to the current datacenter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#local ConsulSecretBackendRole#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Maximum TTL for leases associated with this role, in seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#max_ttl ConsulSecretBackendRole#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * The name of an existing role against which to create this Consul credential
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#name ConsulSecretBackendRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#namespace ConsulSecretBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#partition ConsulSecretBackendRole#partition}
  */
  readonly partition?: string;
  /**
  * List of Consul policies to associate with this role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#policies ConsulSecretBackendRole#policies}
  */
  readonly policies?: string[];
  /**
  * Specifies the type of token to create when using this role. Valid values are "client" or "management".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#token_type ConsulSecretBackendRole#token_type}
  */
  readonly tokenType?: string;
  /**
  * Specifies the TTL for this role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role#ttl ConsulSecretBackendRole#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role vault_consul_secret_backend_role}
*/
export class ConsulSecretBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_consul_secret_backend_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/consul_secret_backend_role vault_consul_secret_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsulSecretBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: ConsulSecretBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_consul_secret_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.7.0',
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
    this._consulNamespace = config.consulNamespace;
    this._consulRoles = config.consulRoles;
    this._id = config.id;
    this._local = config.local;
    this._maxTtl = config.maxTtl;
    this._name = config.name;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._policies = config.policies;
    this._tokenType = config.tokenType;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // consul_namespace - computed: true, optional: true, required: false
  private _consulNamespace?: string; 
  public get consulNamespace() {
    return this.getStringAttribute('consul_namespace');
  }
  public set consulNamespace(value: string) {
    this._consulNamespace = value;
  }
  public resetConsulNamespace() {
    this._consulNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulNamespaceInput() {
    return this._consulNamespace;
  }

  // consul_roles - computed: false, optional: true, required: false
  private _consulRoles?: string[]; 
  public get consulRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('consul_roles'));
  }
  public set consulRoles(value: string[]) {
    this._consulRoles = value;
  }
  public resetConsulRoles() {
    this._consulRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulRolesInput() {
    return this._consulRoles;
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

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
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

  // partition - computed: true, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // token_type - computed: false, optional: true, required: false
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      consul_namespace: cdktf.stringToTerraform(this._consulNamespace),
      consul_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consulRoles),
      id: cdktf.stringToTerraform(this._id),
      local: cdktf.booleanToTerraform(this._local),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      token_type: cdktf.stringToTerraform(this._tokenType),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }
}
