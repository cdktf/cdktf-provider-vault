/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureSecretBackendStaticRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application object ID for an existing service principal that is managed by the static role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#application_object_id AzureSecretBackendStaticRole#application_object_id}
  */
  readonly applicationObjectId: string;
  /**
  * The path where the Azure secrets backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#backend AzureSecretBackendStaticRole#backend}
  */
  readonly backend: string;
  /**
  * The plaintext secret value of the credential you want to import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#client_secret AzureSecretBackendStaticRole#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * A future expiration time for the imported credential, in RFC3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#expiration AzureSecretBackendStaticRole#expiration}
  */
  readonly expiration?: string;
  /**
  * A map of string key/value pairs that will be stored as metadata on the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#metadata AzureSecretBackendStaticRole#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#namespace AzureSecretBackendStaticRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the static role to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#role AzureSecretBackendStaticRole#role}
  */
  readonly role: string;
  /**
  * The secret ID of the Azure password credential you want to import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#secret_id AzureSecretBackendStaticRole#secret_id}
  */
  readonly secretId?: string;
  /**
  * If true, skip rotation of the client secret on import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#skip_import_rotation AzureSecretBackendStaticRole#skip_import_rotation}
  */
  readonly skipImportRotation?: boolean | cdktf.IResolvable;
  /**
  * Timespan of 1 year (31536000) or more during which the role credentials are valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#ttl AzureSecretBackendStaticRole#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role vault_azure_secret_backend_static_role}
*/
export class AzureSecretBackendStaticRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_azure_secret_backend_static_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureSecretBackendStaticRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureSecretBackendStaticRole to import
  * @param importFromId The id of the existing AzureSecretBackendStaticRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureSecretBackendStaticRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_azure_secret_backend_static_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role vault_azure_secret_backend_static_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureSecretBackendStaticRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AzureSecretBackendStaticRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_azure_secret_backend_static_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.4.0',
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
    this._applicationObjectId = config.applicationObjectId;
    this._backend = config.backend;
    this._clientSecret = config.clientSecret;
    this._expiration = config.expiration;
    this._metadata = config.metadata;
    this._namespace = config.namespace;
    this._role = config.role;
    this._secretId = config.secretId;
    this._skipImportRotation = config.skipImportRotation;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_object_id - computed: false, optional: false, required: true
  private _applicationObjectId?: string; 
  public get applicationObjectId() {
    return this.getStringAttribute('application_object_id');
  }
  public set applicationObjectId(value: string) {
    this._applicationObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationObjectIdInput() {
    return this._applicationObjectId;
  }

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

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
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

  // secret_id - computed: false, optional: true, required: false
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

  // ttl - computed: true, optional: true, required: false
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
      application_object_id: cdktf.stringToTerraform(this._applicationObjectId),
      backend: cdktf.stringToTerraform(this._backend),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      expiration: cdktf.stringToTerraform(this._expiration),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      namespace: cdktf.stringToTerraform(this._namespace),
      role: cdktf.stringToTerraform(this._role),
      secret_id: cdktf.stringToTerraform(this._secretId),
      skip_import_rotation: cdktf.booleanToTerraform(this._skipImportRotation),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_object_id: {
        value: cdktf.stringToHclTerraform(this._applicationObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration: {
        value: cdktf.stringToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
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
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
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
