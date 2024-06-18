/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmipSecretRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Grant permission to use the KMIP Activate operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}
  */
  readonly operationActivate?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Add Attribute operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}
  */
  readonly operationAddAttribute?: boolean | cdktf.IResolvable;
  /**
  * Grant all permissions to this role. May not be specified with any other operation_* params
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}
  */
  readonly operationAll?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Create operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}
  */
  readonly operationCreate?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Destroy operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}
  */
  readonly operationDestroy?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Discover Version operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}
  */
  readonly operationDiscoverVersions?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Get operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}
  */
  readonly operationGet?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Get Attribute List operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}
  */
  readonly operationGetAttributeList?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Get Attributes operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}
  */
  readonly operationGetAttributes?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Locate operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}
  */
  readonly operationLocate?: boolean | cdktf.IResolvable;
  /**
  * Remove all permissions from this role. May not be specified with any other operation_* params
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}
  */
  readonly operationNone?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Register operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}
  */
  readonly operationRegister?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Rekey operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}
  */
  readonly operationRekey?: boolean | cdktf.IResolvable;
  /**
  * Grant permission to use the KMIP Revoke operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}
  */
  readonly operationRevoke?: boolean | cdktf.IResolvable;
  /**
  * Path where KMIP backend is mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}
  */
  readonly path: string;
  /**
  * Name of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}
  */
  readonly role: string;
  /**
  * Name of the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}
  */
  readonly scope: string;
  /**
  * Client certificate key bits, valid values depend on key type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}
  */
  readonly tlsClientKeyBits?: number;
  /**
  * Client certificate key type, rsa or ec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}
  */
  readonly tlsClientKeyType?: string;
  /**
  * Client certificate TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}
  */
  readonly tlsClientTtl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role vault_kmip_secret_role}
*/
export class KmipSecretRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kmip_secret_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmipSecretRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmipSecretRole to import
  * @param importFromId The id of the existing KmipSecretRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmipSecretRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_kmip_secret_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/kmip_secret_role vault_kmip_secret_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmipSecretRoleConfig
  */
  public constructor(scope: Construct, id: string, config: KmipSecretRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kmip_secret_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.3.0',
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
    this._id = config.id;
    this._namespace = config.namespace;
    this._operationActivate = config.operationActivate;
    this._operationAddAttribute = config.operationAddAttribute;
    this._operationAll = config.operationAll;
    this._operationCreate = config.operationCreate;
    this._operationDestroy = config.operationDestroy;
    this._operationDiscoverVersions = config.operationDiscoverVersions;
    this._operationGet = config.operationGet;
    this._operationGetAttributeList = config.operationGetAttributeList;
    this._operationGetAttributes = config.operationGetAttributes;
    this._operationLocate = config.operationLocate;
    this._operationNone = config.operationNone;
    this._operationRegister = config.operationRegister;
    this._operationRekey = config.operationRekey;
    this._operationRevoke = config.operationRevoke;
    this._path = config.path;
    this._role = config.role;
    this._scope = config.scope;
    this._tlsClientKeyBits = config.tlsClientKeyBits;
    this._tlsClientKeyType = config.tlsClientKeyType;
    this._tlsClientTtl = config.tlsClientTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // operation_activate - computed: true, optional: true, required: false
  private _operationActivate?: boolean | cdktf.IResolvable; 
  public get operationActivate() {
    return this.getBooleanAttribute('operation_activate');
  }
  public set operationActivate(value: boolean | cdktf.IResolvable) {
    this._operationActivate = value;
  }
  public resetOperationActivate() {
    this._operationActivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationActivateInput() {
    return this._operationActivate;
  }

  // operation_add_attribute - computed: true, optional: true, required: false
  private _operationAddAttribute?: boolean | cdktf.IResolvable; 
  public get operationAddAttribute() {
    return this.getBooleanAttribute('operation_add_attribute');
  }
  public set operationAddAttribute(value: boolean | cdktf.IResolvable) {
    this._operationAddAttribute = value;
  }
  public resetOperationAddAttribute() {
    this._operationAddAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationAddAttributeInput() {
    return this._operationAddAttribute;
  }

  // operation_all - computed: true, optional: true, required: false
  private _operationAll?: boolean | cdktf.IResolvable; 
  public get operationAll() {
    return this.getBooleanAttribute('operation_all');
  }
  public set operationAll(value: boolean | cdktf.IResolvable) {
    this._operationAll = value;
  }
  public resetOperationAll() {
    this._operationAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationAllInput() {
    return this._operationAll;
  }

  // operation_create - computed: true, optional: true, required: false
  private _operationCreate?: boolean | cdktf.IResolvable; 
  public get operationCreate() {
    return this.getBooleanAttribute('operation_create');
  }
  public set operationCreate(value: boolean | cdktf.IResolvable) {
    this._operationCreate = value;
  }
  public resetOperationCreate() {
    this._operationCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationCreateInput() {
    return this._operationCreate;
  }

  // operation_destroy - computed: true, optional: true, required: false
  private _operationDestroy?: boolean | cdktf.IResolvable; 
  public get operationDestroy() {
    return this.getBooleanAttribute('operation_destroy');
  }
  public set operationDestroy(value: boolean | cdktf.IResolvable) {
    this._operationDestroy = value;
  }
  public resetOperationDestroy() {
    this._operationDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDestroyInput() {
    return this._operationDestroy;
  }

  // operation_discover_versions - computed: true, optional: true, required: false
  private _operationDiscoverVersions?: boolean | cdktf.IResolvable; 
  public get operationDiscoverVersions() {
    return this.getBooleanAttribute('operation_discover_versions');
  }
  public set operationDiscoverVersions(value: boolean | cdktf.IResolvable) {
    this._operationDiscoverVersions = value;
  }
  public resetOperationDiscoverVersions() {
    this._operationDiscoverVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDiscoverVersionsInput() {
    return this._operationDiscoverVersions;
  }

  // operation_get - computed: true, optional: true, required: false
  private _operationGet?: boolean | cdktf.IResolvable; 
  public get operationGet() {
    return this.getBooleanAttribute('operation_get');
  }
  public set operationGet(value: boolean | cdktf.IResolvable) {
    this._operationGet = value;
  }
  public resetOperationGet() {
    this._operationGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationGetInput() {
    return this._operationGet;
  }

  // operation_get_attribute_list - computed: true, optional: true, required: false
  private _operationGetAttributeList?: boolean | cdktf.IResolvable; 
  public get operationGetAttributeList() {
    return this.getBooleanAttribute('operation_get_attribute_list');
  }
  public set operationGetAttributeList(value: boolean | cdktf.IResolvable) {
    this._operationGetAttributeList = value;
  }
  public resetOperationGetAttributeList() {
    this._operationGetAttributeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationGetAttributeListInput() {
    return this._operationGetAttributeList;
  }

  // operation_get_attributes - computed: true, optional: true, required: false
  private _operationGetAttributes?: boolean | cdktf.IResolvable; 
  public get operationGetAttributes() {
    return this.getBooleanAttribute('operation_get_attributes');
  }
  public set operationGetAttributes(value: boolean | cdktf.IResolvable) {
    this._operationGetAttributes = value;
  }
  public resetOperationGetAttributes() {
    this._operationGetAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationGetAttributesInput() {
    return this._operationGetAttributes;
  }

  // operation_locate - computed: true, optional: true, required: false
  private _operationLocate?: boolean | cdktf.IResolvable; 
  public get operationLocate() {
    return this.getBooleanAttribute('operation_locate');
  }
  public set operationLocate(value: boolean | cdktf.IResolvable) {
    this._operationLocate = value;
  }
  public resetOperationLocate() {
    this._operationLocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationLocateInput() {
    return this._operationLocate;
  }

  // operation_none - computed: true, optional: true, required: false
  private _operationNone?: boolean | cdktf.IResolvable; 
  public get operationNone() {
    return this.getBooleanAttribute('operation_none');
  }
  public set operationNone(value: boolean | cdktf.IResolvable) {
    this._operationNone = value;
  }
  public resetOperationNone() {
    this._operationNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationNoneInput() {
    return this._operationNone;
  }

  // operation_register - computed: true, optional: true, required: false
  private _operationRegister?: boolean | cdktf.IResolvable; 
  public get operationRegister() {
    return this.getBooleanAttribute('operation_register');
  }
  public set operationRegister(value: boolean | cdktf.IResolvable) {
    this._operationRegister = value;
  }
  public resetOperationRegister() {
    this._operationRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationRegisterInput() {
    return this._operationRegister;
  }

  // operation_rekey - computed: true, optional: true, required: false
  private _operationRekey?: boolean | cdktf.IResolvable; 
  public get operationRekey() {
    return this.getBooleanAttribute('operation_rekey');
  }
  public set operationRekey(value: boolean | cdktf.IResolvable) {
    this._operationRekey = value;
  }
  public resetOperationRekey() {
    this._operationRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationRekeyInput() {
    return this._operationRekey;
  }

  // operation_revoke - computed: true, optional: true, required: false
  private _operationRevoke?: boolean | cdktf.IResolvable; 
  public get operationRevoke() {
    return this.getBooleanAttribute('operation_revoke');
  }
  public set operationRevoke(value: boolean | cdktf.IResolvable) {
    this._operationRevoke = value;
  }
  public resetOperationRevoke() {
    this._operationRevoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationRevokeInput() {
    return this._operationRevoke;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tls_client_key_bits - computed: false, optional: true, required: false
  private _tlsClientKeyBits?: number; 
  public get tlsClientKeyBits() {
    return this.getNumberAttribute('tls_client_key_bits');
  }
  public set tlsClientKeyBits(value: number) {
    this._tlsClientKeyBits = value;
  }
  public resetTlsClientKeyBits() {
    this._tlsClientKeyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyBitsInput() {
    return this._tlsClientKeyBits;
  }

  // tls_client_key_type - computed: false, optional: true, required: false
  private _tlsClientKeyType?: string; 
  public get tlsClientKeyType() {
    return this.getStringAttribute('tls_client_key_type');
  }
  public set tlsClientKeyType(value: string) {
    this._tlsClientKeyType = value;
  }
  public resetTlsClientKeyType() {
    this._tlsClientKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyTypeInput() {
    return this._tlsClientKeyType;
  }

  // tls_client_ttl - computed: false, optional: true, required: false
  private _tlsClientTtl?: number; 
  public get tlsClientTtl() {
    return this.getNumberAttribute('tls_client_ttl');
  }
  public set tlsClientTtl(value: number) {
    this._tlsClientTtl = value;
  }
  public resetTlsClientTtl() {
    this._tlsClientTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientTtlInput() {
    return this._tlsClientTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      operation_activate: cdktf.booleanToTerraform(this._operationActivate),
      operation_add_attribute: cdktf.booleanToTerraform(this._operationAddAttribute),
      operation_all: cdktf.booleanToTerraform(this._operationAll),
      operation_create: cdktf.booleanToTerraform(this._operationCreate),
      operation_destroy: cdktf.booleanToTerraform(this._operationDestroy),
      operation_discover_versions: cdktf.booleanToTerraform(this._operationDiscoverVersions),
      operation_get: cdktf.booleanToTerraform(this._operationGet),
      operation_get_attribute_list: cdktf.booleanToTerraform(this._operationGetAttributeList),
      operation_get_attributes: cdktf.booleanToTerraform(this._operationGetAttributes),
      operation_locate: cdktf.booleanToTerraform(this._operationLocate),
      operation_none: cdktf.booleanToTerraform(this._operationNone),
      operation_register: cdktf.booleanToTerraform(this._operationRegister),
      operation_rekey: cdktf.booleanToTerraform(this._operationRekey),
      operation_revoke: cdktf.booleanToTerraform(this._operationRevoke),
      path: cdktf.stringToTerraform(this._path),
      role: cdktf.stringToTerraform(this._role),
      scope: cdktf.stringToTerraform(this._scope),
      tls_client_key_bits: cdktf.numberToTerraform(this._tlsClientKeyBits),
      tls_client_key_type: cdktf.stringToTerraform(this._tlsClientKeyType),
      tls_client_ttl: cdktf.numberToTerraform(this._tlsClientTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      operation_activate: {
        value: cdktf.booleanToHclTerraform(this._operationActivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_add_attribute: {
        value: cdktf.booleanToHclTerraform(this._operationAddAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_all: {
        value: cdktf.booleanToHclTerraform(this._operationAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_create: {
        value: cdktf.booleanToHclTerraform(this._operationCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_destroy: {
        value: cdktf.booleanToHclTerraform(this._operationDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_discover_versions: {
        value: cdktf.booleanToHclTerraform(this._operationDiscoverVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_get: {
        value: cdktf.booleanToHclTerraform(this._operationGet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_get_attribute_list: {
        value: cdktf.booleanToHclTerraform(this._operationGetAttributeList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_get_attributes: {
        value: cdktf.booleanToHclTerraform(this._operationGetAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_locate: {
        value: cdktf.booleanToHclTerraform(this._operationLocate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_none: {
        value: cdktf.booleanToHclTerraform(this._operationNone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_register: {
        value: cdktf.booleanToHclTerraform(this._operationRegister),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_rekey: {
        value: cdktf.booleanToHclTerraform(this._operationRekey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operation_revoke: {
        value: cdktf.booleanToHclTerraform(this._operationRevoke),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_client_key_bits: {
        value: cdktf.numberToHclTerraform(this._tlsClientKeyBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_client_key_type: {
        value: cdktf.stringToHclTerraform(this._tlsClientKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_client_ttl: {
        value: cdktf.numberToHclTerraform(this._tlsClientTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
