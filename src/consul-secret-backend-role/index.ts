/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsulSecretBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the Consul Secret Backend the role belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#backend ConsulSecretBackendRole#backend}
  */
  readonly backend?: string;
  /**
  * The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#consul_namespace ConsulSecretBackendRole#consul_namespace}
  */
  readonly consulNamespace?: string;
  /**
  * List of Consul policies to associate with this role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#consul_policies ConsulSecretBackendRole#consul_policies}
  */
  readonly consulPolicies?: string[];
  /**
  * Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#consul_roles ConsulSecretBackendRole#consul_roles}
  */
  readonly consulRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates that the token should not be replicated globally and instead be local to the current datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#local ConsulSecretBackendRole#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Maximum TTL for leases associated with this role, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#max_ttl ConsulSecretBackendRole#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * The name of an existing role against which to create this Consul credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#name ConsulSecretBackendRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#namespace ConsulSecretBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Set of Consul node identities to attach to
  * 				the token. Applicable for Vault 1.11+ with Consul 1.8+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#node_identities ConsulSecretBackendRole#node_identities}
  */
  readonly nodeIdentities?: string[];
  /**
  * The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#partition ConsulSecretBackendRole#partition}
  */
  readonly partition?: string;
  /**
  * List of Consul policies to associate with this role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#policies ConsulSecretBackendRole#policies}
  */
  readonly policies?: string[];
  /**
  * Set of Consul service identities to attach to
  * 				the token. Applicable for Vault 1.11+ with Consul 1.5+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#service_identities ConsulSecretBackendRole#service_identities}
  */
  readonly serviceIdentities?: string[];
  /**
  * Specifies the TTL for this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#ttl ConsulSecretBackendRole#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role vault_consul_secret_backend_role}
*/
export class ConsulSecretBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_consul_secret_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsulSecretBackendRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsulSecretBackendRole to import
  * @param importFromId The id of the existing ConsulSecretBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsulSecretBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_consul_secret_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/consul_secret_backend_role vault_consul_secret_backend_role} Resource
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
        providerVersion: '5.2.1',
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
    this._consulNamespace = config.consulNamespace;
    this._consulPolicies = config.consulPolicies;
    this._consulRoles = config.consulRoles;
    this._id = config.id;
    this._local = config.local;
    this._maxTtl = config.maxTtl;
    this._name = config.name;
    this._namespace = config.namespace;
    this._nodeIdentities = config.nodeIdentities;
    this._partition = config.partition;
    this._policies = config.policies;
    this._serviceIdentities = config.serviceIdentities;
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

  // consul_policies - computed: false, optional: true, required: false
  private _consulPolicies?: string[]; 
  public get consulPolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('consul_policies'));
  }
  public set consulPolicies(value: string[]) {
    this._consulPolicies = value;
  }
  public resetConsulPolicies() {
    this._consulPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulPoliciesInput() {
    return this._consulPolicies;
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

  // node_identities - computed: false, optional: true, required: false
  private _nodeIdentities?: string[]; 
  public get nodeIdentities() {
    return cdktf.Fn.tolist(this.getListAttribute('node_identities'));
  }
  public set nodeIdentities(value: string[]) {
    this._nodeIdentities = value;
  }
  public resetNodeIdentities() {
    this._nodeIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdentitiesInput() {
    return this._nodeIdentities;
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

  // service_identities - computed: false, optional: true, required: false
  private _serviceIdentities?: string[]; 
  public get serviceIdentities() {
    return cdktf.Fn.tolist(this.getListAttribute('service_identities'));
  }
  public set serviceIdentities(value: string[]) {
    this._serviceIdentities = value;
  }
  public resetServiceIdentities() {
    this._serviceIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdentitiesInput() {
    return this._serviceIdentities;
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
      consul_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consulPolicies),
      consul_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consulRoles),
      id: cdktf.stringToTerraform(this._id),
      local: cdktf.booleanToTerraform(this._local),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      node_identities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeIdentities),
      partition: cdktf.stringToTerraform(this._partition),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      service_identities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIdentities),
      ttl: cdktf.numberToTerraform(this._ttl),
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
      consul_namespace: {
        value: cdktf.stringToHclTerraform(this._consulNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consul_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consulPolicies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      consul_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consulRoles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local: {
        value: cdktf.booleanToHclTerraform(this._local),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      node_identities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeIdentities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_identities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIdentities),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
