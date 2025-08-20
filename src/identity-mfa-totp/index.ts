/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityMfaTotpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#algorithm IdentityMfaTotp#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The number of digits in the generated TOTP token. This value can either be 6 or 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#digits IdentityMfaTotp#digits}
  */
  readonly digits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the key's issuing organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#issuer IdentityMfaTotp#issuer}
  */
  readonly issuer: string;
  /**
  * Specifies the size in bytes of the generated key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#key_size IdentityMfaTotp#key_size}
  */
  readonly keySize?: number;
  /**
  * The maximum number of consecutive failed validation attempts allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#max_validation_attempts IdentityMfaTotp#max_validation_attempts}
  */
  readonly maxValidationAttempts?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#namespace IdentityMfaTotp#namespace}
  */
  readonly namespace?: string;
  /**
  * The length of time in seconds used to generate a counter for the TOTP token calculation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#period IdentityMfaTotp#period}
  */
  readonly period?: number;
  /**
  * The pixel size of the generated square QR code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#qr_size IdentityMfaTotp#qr_size}
  */
  readonly qrSize?: number;
  /**
  * The number of delay periods that are allowed when validating a TOTP token. This value can either be 0 or 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#skew IdentityMfaTotp#skew}
  */
  readonly skew?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp vault_identity_mfa_totp}
*/
export class IdentityMfaTotp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_mfa_totp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityMfaTotp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityMfaTotp to import
  * @param importFromId The id of the existing IdentityMfaTotp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityMfaTotp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_identity_mfa_totp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/identity_mfa_totp vault_identity_mfa_totp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityMfaTotpConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityMfaTotpConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_mfa_totp',
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
    this._algorithm = config.algorithm;
    this._digits = config.digits;
    this._id = config.id;
    this._issuer = config.issuer;
    this._keySize = config.keySize;
    this._maxValidationAttempts = config.maxValidationAttempts;
    this._namespace = config.namespace;
    this._period = config.period;
    this._qrSize = config.qrSize;
    this._skew = config.skew;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // digits - computed: false, optional: true, required: false
  private _digits?: number; 
  public get digits() {
    return this.getNumberAttribute('digits');
  }
  public set digits(value: number) {
    this._digits = value;
  }
  public resetDigits() {
    this._digits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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

  // max_validation_attempts - computed: false, optional: true, required: false
  private _maxValidationAttempts?: number; 
  public get maxValidationAttempts() {
    return this.getNumberAttribute('max_validation_attempts');
  }
  public set maxValidationAttempts(value: number) {
    this._maxValidationAttempts = value;
  }
  public resetMaxValidationAttempts() {
    this._maxValidationAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValidationAttemptsInput() {
    return this._maxValidationAttempts;
  }

  // method_id - computed: true, optional: false, required: false
  public get methodId() {
    return this.getStringAttribute('method_id');
  }

  // mount_accessor - computed: true, optional: false, required: false
  public get mountAccessor() {
    return this.getStringAttribute('mount_accessor');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_path - computed: true, optional: false, required: false
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // qr_size - computed: true, optional: true, required: false
  private _qrSize?: number; 
  public get qrSize() {
    return this.getNumberAttribute('qr_size');
  }
  public set qrSize(value: number) {
    this._qrSize = value;
  }
  public resetQrSize() {
    this._qrSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qrSizeInput() {
    return this._qrSize;
  }

  // skew - computed: false, optional: true, required: false
  private _skew?: number; 
  public get skew() {
    return this.getNumberAttribute('skew');
  }
  public set skew(value: number) {
    this._skew = value;
  }
  public resetSkew() {
    this._skew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewInput() {
    return this._skew;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      digits: cdktf.numberToTerraform(this._digits),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      key_size: cdktf.numberToTerraform(this._keySize),
      max_validation_attempts: cdktf.numberToTerraform(this._maxValidationAttempts),
      namespace: cdktf.stringToTerraform(this._namespace),
      period: cdktf.numberToTerraform(this._period),
      qr_size: cdktf.numberToTerraform(this._qrSize),
      skew: cdktf.numberToTerraform(this._skew),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digits: {
        value: cdktf.numberToHclTerraform(this._digits),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      max_validation_attempts: {
        value: cdktf.numberToHclTerraform(this._maxValidationAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qr_size: {
        value: cdktf.numberToHclTerraform(this._qrSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skew: {
        value: cdktf.numberToHclTerraform(this._skew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
