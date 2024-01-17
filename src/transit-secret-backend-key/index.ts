/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitSecretBackendKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}
  */
  readonly allowPlaintextBackup?: boolean | cdktf.IResolvable;
  /**
  * Amount of time the key should live before being automatically rotated. A value of 0 disables automatic rotation for the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#auto_rotate_interval TransitSecretBackendKey#auto_rotate_interval}
  */
  readonly autoRotateInterval?: number;
  /**
  * Amount of seconds the key should live before being automatically rotated. A value of 0 disables automatic rotation for the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}
  */
  readonly autoRotatePeriod?: number;
  /**
  * The Transit secret backend the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#backend TransitSecretBackendKey#backend}
  */
  readonly backend: string;
  /**
  * Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. This requires derived to be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}
  */
  readonly convergentEncryption?: boolean | cdktf.IResolvable;
  /**
  * Specifies if the key is allowed to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}
  */
  readonly deletionAllowed?: boolean | cdktf.IResolvable;
  /**
  * Specifies if key derivation is to be used. If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#derived TransitSecretBackendKey#derived}
  */
  readonly derived?: boolean | cdktf.IResolvable;
  /**
  * Enables keys to be exportable. This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}
  */
  readonly exportable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key size in bytes for algorithms that allow variable key sizes. Currently only applicable to HMAC; this value must be between 32 and 512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#key_size TransitSecretBackendKey#key_size}
  */
  readonly keySize?: number;
  /**
  * Minimum key version to use for decryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}
  */
  readonly minDecryptionVersion?: number;
  /**
  * Minimum key version to use for encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}
  */
  readonly minEncryptionVersion?: number;
  /**
  * Name of the encryption key to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#name TransitSecretBackendKey#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the type of key to create. The currently-supported types are: aes128-gcm96, aes256-gcm96, chacha20-poly1305, ed25519, ecdsa-p256, ecdsa-p384, ecdsa-p521, hmac, rsa-2048, rsa-3072, rsa-4096
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#type TransitSecretBackendKey#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key vault_transit_secret_backend_key}
*/
export class TransitSecretBackendKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transit_secret_backend_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitSecretBackendKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitSecretBackendKey to import
  * @param importFromId The id of the existing TransitSecretBackendKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitSecretBackendKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_transit_secret_backend_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/transit_secret_backend_key vault_transit_secret_backend_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitSecretBackendKeyConfig
  */
  public constructor(scope: Construct, id: string, config: TransitSecretBackendKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transit_secret_backend_key',
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
    this._allowPlaintextBackup = config.allowPlaintextBackup;
    this._autoRotateInterval = config.autoRotateInterval;
    this._autoRotatePeriod = config.autoRotatePeriod;
    this._backend = config.backend;
    this._convergentEncryption = config.convergentEncryption;
    this._deletionAllowed = config.deletionAllowed;
    this._derived = config.derived;
    this._exportable = config.exportable;
    this._id = config.id;
    this._keySize = config.keySize;
    this._minDecryptionVersion = config.minDecryptionVersion;
    this._minEncryptionVersion = config.minEncryptionVersion;
    this._name = config.name;
    this._namespace = config.namespace;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_plaintext_backup - computed: false, optional: true, required: false
  private _allowPlaintextBackup?: boolean | cdktf.IResolvable; 
  public get allowPlaintextBackup() {
    return this.getBooleanAttribute('allow_plaintext_backup');
  }
  public set allowPlaintextBackup(value: boolean | cdktf.IResolvable) {
    this._allowPlaintextBackup = value;
  }
  public resetAllowPlaintextBackup() {
    this._allowPlaintextBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPlaintextBackupInput() {
    return this._allowPlaintextBackup;
  }

  // auto_rotate_interval - computed: true, optional: true, required: false
  private _autoRotateInterval?: number; 
  public get autoRotateInterval() {
    return this.getNumberAttribute('auto_rotate_interval');
  }
  public set autoRotateInterval(value: number) {
    this._autoRotateInterval = value;
  }
  public resetAutoRotateInterval() {
    this._autoRotateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRotateIntervalInput() {
    return this._autoRotateInterval;
  }

  // auto_rotate_period - computed: true, optional: true, required: false
  private _autoRotatePeriod?: number; 
  public get autoRotatePeriod() {
    return this.getNumberAttribute('auto_rotate_period');
  }
  public set autoRotatePeriod(value: number) {
    this._autoRotatePeriod = value;
  }
  public resetAutoRotatePeriod() {
    this._autoRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRotatePeriodInput() {
    return this._autoRotatePeriod;
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

  // convergent_encryption - computed: false, optional: true, required: false
  private _convergentEncryption?: boolean | cdktf.IResolvable; 
  public get convergentEncryption() {
    return this.getBooleanAttribute('convergent_encryption');
  }
  public set convergentEncryption(value: boolean | cdktf.IResolvable) {
    this._convergentEncryption = value;
  }
  public resetConvergentEncryption() {
    this._convergentEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convergentEncryptionInput() {
    return this._convergentEncryption;
  }

  // deletion_allowed - computed: false, optional: true, required: false
  private _deletionAllowed?: boolean | cdktf.IResolvable; 
  public get deletionAllowed() {
    return this.getBooleanAttribute('deletion_allowed');
  }
  public set deletionAllowed(value: boolean | cdktf.IResolvable) {
    this._deletionAllowed = value;
  }
  public resetDeletionAllowed() {
    this._deletionAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionAllowedInput() {
    return this._deletionAllowed;
  }

  // derived - computed: false, optional: true, required: false
  private _derived?: boolean | cdktf.IResolvable; 
  public get derived() {
    return this.getBooleanAttribute('derived');
  }
  public set derived(value: boolean | cdktf.IResolvable) {
    this._derived = value;
  }
  public resetDerived() {
    this._derived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get derivedInput() {
    return this._derived;
  }

  // exportable - computed: false, optional: true, required: false
  private _exportable?: boolean | cdktf.IResolvable; 
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }
  public set exportable(value: boolean | cdktf.IResolvable) {
    this._exportable = value;
  }
  public resetExportable() {
    this._exportable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableInput() {
    return this._exportable;
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

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new cdktf.StringMapList(this, "keys", false);
  public get keys() {
    return this._keys;
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // min_available_version - computed: true, optional: false, required: false
  public get minAvailableVersion() {
    return this.getNumberAttribute('min_available_version');
  }

  // min_decryption_version - computed: false, optional: true, required: false
  private _minDecryptionVersion?: number; 
  public get minDecryptionVersion() {
    return this.getNumberAttribute('min_decryption_version');
  }
  public set minDecryptionVersion(value: number) {
    this._minDecryptionVersion = value;
  }
  public resetMinDecryptionVersion() {
    this._minDecryptionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDecryptionVersionInput() {
    return this._minDecryptionVersion;
  }

  // min_encryption_version - computed: false, optional: true, required: false
  private _minEncryptionVersion?: number; 
  public get minEncryptionVersion() {
    return this.getNumberAttribute('min_encryption_version');
  }
  public set minEncryptionVersion(value: number) {
    this._minEncryptionVersion = value;
  }
  public resetMinEncryptionVersion() {
    this._minEncryptionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minEncryptionVersionInput() {
    return this._minEncryptionVersion;
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

  // supports_decryption - computed: true, optional: false, required: false
  public get supportsDecryption() {
    return this.getBooleanAttribute('supports_decryption');
  }

  // supports_derivation - computed: true, optional: false, required: false
  public get supportsDerivation() {
    return this.getBooleanAttribute('supports_derivation');
  }

  // supports_encryption - computed: true, optional: false, required: false
  public get supportsEncryption() {
    return this.getBooleanAttribute('supports_encryption');
  }

  // supports_signing - computed: true, optional: false, required: false
  public get supportsSigning() {
    return this.getBooleanAttribute('supports_signing');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_plaintext_backup: cdktf.booleanToTerraform(this._allowPlaintextBackup),
      auto_rotate_interval: cdktf.numberToTerraform(this._autoRotateInterval),
      auto_rotate_period: cdktf.numberToTerraform(this._autoRotatePeriod),
      backend: cdktf.stringToTerraform(this._backend),
      convergent_encryption: cdktf.booleanToTerraform(this._convergentEncryption),
      deletion_allowed: cdktf.booleanToTerraform(this._deletionAllowed),
      derived: cdktf.booleanToTerraform(this._derived),
      exportable: cdktf.booleanToTerraform(this._exportable),
      id: cdktf.stringToTerraform(this._id),
      key_size: cdktf.numberToTerraform(this._keySize),
      min_decryption_version: cdktf.numberToTerraform(this._minDecryptionVersion),
      min_encryption_version: cdktf.numberToTerraform(this._minEncryptionVersion),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_plaintext_backup: {
        value: cdktf.booleanToHclTerraform(this._allowPlaintextBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_rotate_interval: {
        value: cdktf.numberToHclTerraform(this._autoRotateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_rotate_period: {
        value: cdktf.numberToHclTerraform(this._autoRotatePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      convergent_encryption: {
        value: cdktf.booleanToHclTerraform(this._convergentEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deletion_allowed: {
        value: cdktf.booleanToHclTerraform(this._deletionAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      derived: {
        value: cdktf.booleanToHclTerraform(this._derived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exportable: {
        value: cdktf.booleanToHclTerraform(this._exportable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_decryption_version: {
        value: cdktf.numberToHclTerraform(this._minDecryptionVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_encryption_version: {
        value: cdktf.numberToHclTerraform(this._minEncryptionVersion),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
