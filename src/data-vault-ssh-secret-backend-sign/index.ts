/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultSshSecretBackendSignConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the type of certificate to be created; either "user" or "host".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#cert_type DataVaultSshSecretBackendSign#cert_type}
  */
  readonly certType?: string;
  /**
  * Specifies a map of the critical options that the certificate should be signed for. Defaults to none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#critical_options DataVaultSshSecretBackendSign#critical_options}
  */
  readonly criticalOptions?: { [key: string]: string };
  /**
  * Specifies a map of the extensions that the certificate should be signed for. Defaults to none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#extensions DataVaultSshSecretBackendSign#extensions}
  */
  readonly extensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the key id that the created certificate should have. If not specified, the display name of the token will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#key_id DataVaultSshSecretBackendSign#key_id}
  */
  readonly keyId?: string;
  /**
  * Specifies the name of the role to sign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#name DataVaultSshSecretBackendSign#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#namespace DataVaultSshSecretBackendSign#namespace}
  */
  readonly namespace?: string;
  /**
  * Full path where SSH backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#path DataVaultSshSecretBackendSign#path}
  */
  readonly path: string;
  /**
  * Specifies the SSH public key that should be signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#public_key DataVaultSshSecretBackendSign#public_key}
  */
  readonly publicKey: string;
  /**
  * Specifies the Requested Time To Live. Cannot be greater than the role's max_ttl value. If not provided, the role's ttl value will be used. Note that the role values default to system values if not explicitly set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#ttl DataVaultSshSecretBackendSign#ttl}
  */
  readonly ttl?: string;
  /**
  * Specifies valid principals, either usernames or hostnames, that the certificate should be signed for. Required unless the role has specified allow_empty_principals or a value has been set for either the default_user or default_user_template role parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#valid_principals DataVaultSshSecretBackendSign#valid_principals}
  */
  readonly validPrincipals?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign vault_ssh_secret_backend_sign}
*/
export class DataVaultSshSecretBackendSign extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ssh_secret_backend_sign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultSshSecretBackendSign to import
  * @param importFromId The id of the existing DataVaultSshSecretBackendSign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultSshSecretBackendSign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_ssh_secret_backend_sign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign vault_ssh_secret_backend_sign} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultSshSecretBackendSignConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultSshSecretBackendSignConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_ssh_secret_backend_sign',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.5.0',
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
    this._certType = config.certType;
    this._criticalOptions = config.criticalOptions;
    this._extensions = config.extensions;
    this._id = config.id;
    this._keyId = config.keyId;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
    this._publicKey = config.publicKey;
    this._ttl = config.ttl;
    this._validPrincipals = config.validPrincipals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_type - computed: false, optional: true, required: false
  private _certType?: string; 
  public get certType() {
    return this.getStringAttribute('cert_type');
  }
  public set certType(value: string) {
    this._certType = value;
  }
  public resetCertType() {
    this._certType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // critical_options - computed: false, optional: true, required: false
  private _criticalOptions?: { [key: string]: string }; 
  public get criticalOptions() {
    return this.getStringMapAttribute('critical_options');
  }
  public set criticalOptions(value: { [key: string]: string }) {
    this._criticalOptions = value;
  }
  public resetCriticalOptions() {
    this._criticalOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalOptionsInput() {
    return this._criticalOptions;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions?: { [key: string]: string }; 
  public get extensions() {
    return this.getStringMapAttribute('extensions');
  }
  public set extensions(value: { [key: string]: string }) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
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

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
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

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // signed_key - computed: true, optional: false, required: false
  public get signedKey() {
    return this.getStringAttribute('signed_key');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // valid_principals - computed: false, optional: true, required: false
  private _validPrincipals?: string; 
  public get validPrincipals() {
    return this.getStringAttribute('valid_principals');
  }
  public set validPrincipals(value: string) {
    this._validPrincipals = value;
  }
  public resetValidPrincipals() {
    this._validPrincipals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validPrincipalsInput() {
    return this._validPrincipals;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_type: cdktf.stringToTerraform(this._certType),
      critical_options: cdktf.hashMapper(cdktf.stringToTerraform)(this._criticalOptions),
      extensions: cdktf.hashMapper(cdktf.stringToTerraform)(this._extensions),
      id: cdktf.stringToTerraform(this._id),
      key_id: cdktf.stringToTerraform(this._keyId),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      public_key: cdktf.stringToTerraform(this._publicKey),
      ttl: cdktf.stringToTerraform(this._ttl),
      valid_principals: cdktf.stringToTerraform(this._validPrincipals),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_type: {
        value: cdktf.stringToHclTerraform(this._certType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      critical_options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._criticalOptions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      extensions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extensions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_principals: {
        value: cdktf.stringToHclTerraform(this._validPrincipals),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
