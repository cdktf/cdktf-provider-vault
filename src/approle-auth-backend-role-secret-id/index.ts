/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApproleAuthBackendRoleSecretIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#backend ApproleAuthBackendRoleSecretId#backend}
  */
  readonly backend?: string;
  /**
  * List of CIDR blocks that can log in using the SecretID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#cidr_list ApproleAuthBackendRoleSecretId#cidr_list}
  */
  readonly cidrList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * JSON-encoded secret data to write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#metadata ApproleAuthBackendRoleSecretId#metadata}
  */
  readonly metadata?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#namespace ApproleAuthBackendRoleSecretId#namespace}
  */
  readonly namespace?: string;
  /**
  * The number of uses for the secret-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#num_uses ApproleAuthBackendRoleSecretId#num_uses}
  */
  readonly numUses?: number;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#role_name ApproleAuthBackendRoleSecretId#role_name}
  */
  readonly roleName: string;
  /**
  * The SecretID to be managed. If not specified, Vault auto-generates one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#secret_id ApproleAuthBackendRoleSecretId#secret_id}
  */
  readonly secretId?: string;
  /**
  * The TTL duration of the SecretID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#ttl ApproleAuthBackendRoleSecretId#ttl}
  */
  readonly ttl?: number;
  /**
  * Use the wrapped secret-id accessor as the id of this resource. If false, a fresh secret-id will be regenerated whenever the wrapping token is expired or invalidated through unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#with_wrapped_accessor ApproleAuthBackendRoleSecretId#with_wrapped_accessor}
  */
  readonly withWrappedAccessor?: boolean | cdktf.IResolvable;
  /**
  * The TTL duration of the wrapped SecretID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#wrapping_ttl ApproleAuthBackendRoleSecretId#wrapping_ttl}
  */
  readonly wrappingTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id}
*/
export class ApproleAuthBackendRoleSecretId extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_approle_auth_backend_role_secret_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApproleAuthBackendRoleSecretId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApproleAuthBackendRoleSecretId to import
  * @param importFromId The id of the existing ApproleAuthBackendRoleSecretId that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApproleAuthBackendRoleSecretId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_approle_auth_backend_role_secret_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApproleAuthBackendRoleSecretIdConfig
  */
  public constructor(scope: Construct, id: string, config: ApproleAuthBackendRoleSecretIdConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_approle_auth_backend_role_secret_id',
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
    this._cidrList = config.cidrList;
    this._id = config.id;
    this._metadata = config.metadata;
    this._namespace = config.namespace;
    this._numUses = config.numUses;
    this._roleName = config.roleName;
    this._secretId = config.secretId;
    this._ttl = config.ttl;
    this._withWrappedAccessor = config.withWrappedAccessor;
    this._wrappingTtl = config.wrappingTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

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

  // cidr_list - computed: false, optional: true, required: false
  private _cidrList?: string[]; 
  public get cidrList() {
    return cdktf.Fn.tolist(this.getListAttribute('cidr_list'));
  }
  public set cidrList(value: string[]) {
    this._cidrList = value;
  }
  public resetCidrList() {
    this._cidrList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrListInput() {
    return this._cidrList;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // num_uses - computed: false, optional: true, required: false
  private _numUses?: number; 
  public get numUses() {
    return this.getNumberAttribute('num_uses');
  }
  public set numUses(value: number) {
    this._numUses = value;
  }
  public resetNumUses() {
    this._numUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numUsesInput() {
    return this._numUses;
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

  // secret_id - computed: true, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
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

  // with_wrapped_accessor - computed: false, optional: true, required: false
  private _withWrappedAccessor?: boolean | cdktf.IResolvable; 
  public get withWrappedAccessor() {
    return this.getBooleanAttribute('with_wrapped_accessor');
  }
  public set withWrappedAccessor(value: boolean | cdktf.IResolvable) {
    this._withWrappedAccessor = value;
  }
  public resetWithWrappedAccessor() {
    this._withWrappedAccessor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withWrappedAccessorInput() {
    return this._withWrappedAccessor;
  }

  // wrapping_accessor - computed: true, optional: false, required: false
  public get wrappingAccessor() {
    return this.getStringAttribute('wrapping_accessor');
  }

  // wrapping_token - computed: true, optional: false, required: false
  public get wrappingToken() {
    return this.getStringAttribute('wrapping_token');
  }

  // wrapping_ttl - computed: false, optional: true, required: false
  private _wrappingTtl?: string; 
  public get wrappingTtl() {
    return this.getStringAttribute('wrapping_ttl');
  }
  public set wrappingTtl(value: string) {
    this._wrappingTtl = value;
  }
  public resetWrappingTtl() {
    this._wrappingTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappingTtlInput() {
    return this._wrappingTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      cidr_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cidrList),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.stringToTerraform(this._metadata),
      namespace: cdktf.stringToTerraform(this._namespace),
      num_uses: cdktf.numberToTerraform(this._numUses),
      role_name: cdktf.stringToTerraform(this._roleName),
      secret_id: cdktf.stringToTerraform(this._secretId),
      ttl: cdktf.numberToTerraform(this._ttl),
      with_wrapped_accessor: cdktf.booleanToTerraform(this._withWrappedAccessor),
      wrapping_ttl: cdktf.stringToTerraform(this._wrappingTtl),
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
      cidr_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cidrList),
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
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
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
      num_uses: {
        value: cdktf.numberToHclTerraform(this._numUses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      with_wrapped_accessor: {
        value: cdktf.booleanToHclTerraform(this._withWrappedAccessor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wrapping_ttl: {
        value: cdktf.stringToHclTerraform(this._wrappingTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
