/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultTransitSignConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a list of items for processing. When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#batch_input DataVaultTransitSign#batch_input}
  */
  readonly batchInput?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The results returned from Vault if using batch_input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#batch_results DataVaultTransitSign#batch_results}
  */
  readonly batchResults?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#context DataVaultTransitSign#context}
  */
  readonly context?: string;
  /**
  * Specifies the hash algorithm to use for supporting key types (notably, not including ed25519 which specifies its own hash algorithm).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#hash_algorithm DataVaultTransitSign#hash_algorithm}
  */
  readonly hashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#id DataVaultTransitSign#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the base64 encoded input data. One of input or batch_input must be supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#input DataVaultTransitSign#input}
  */
  readonly input?: string;
  /**
  * The version of the key to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#key_version DataVaultTransitSign#key_version}
  */
  readonly keyVersion?: number;
  /**
  * Specifies the way in which the signature should be marshaled. This currently only applies to ECDSA keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#marshaling_algorithm DataVaultTransitSign#marshaling_algorithm}
  */
  readonly marshalingAlgorithm?: string;
  /**
  * Name of the signing key to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#name DataVaultTransitSign#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#namespace DataVaultTransitSign#namespace}
  */
  readonly namespace?: string;
  /**
  * The Transit secret backend the key belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#path DataVaultTransitSign#path}
  */
  readonly path: string;
  /**
  * Set to true when the input is already hashed. If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#prehashed DataVaultTransitSign#prehashed}
  */
  readonly prehashed?: boolean | cdktf.IResolvable;
  /**
  * A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. Only valid on batch requests when using ‘batch_input’ below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#reference DataVaultTransitSign#reference}
  */
  readonly reference?: string;
  /**
  * The salt length used to sign. This currently only applies to the RSA PSS signature scheme.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#salt_length DataVaultTransitSign#salt_length}
  */
  readonly saltLength?: string;
  /**
  * The signature returned from Vault if using input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#signature DataVaultTransitSign#signature}
  */
  readonly signature?: string;
  /**
  * When using a RSA key, specifies the RSA signature algorithm to use for signing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#signature_algorithm DataVaultTransitSign#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Base64 encoded context for Ed25519ctx and Ed25519ph signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#signature_context DataVaultTransitSign#signature_context}
  */
  readonly signatureContext?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign vault_transit_sign}
*/
export class DataVaultTransitSign extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transit_sign";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultTransitSign resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultTransitSign to import
  * @param importFromId The id of the existing DataVaultTransitSign that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultTransitSign to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_transit_sign", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/data-sources/transit_sign vault_transit_sign} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultTransitSignConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultTransitSignConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transit_sign',
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
    this._batchInput = config.batchInput;
    this._batchResults = config.batchResults;
    this._context = config.context;
    this._hashAlgorithm = config.hashAlgorithm;
    this._id = config.id;
    this._input = config.input;
    this._keyVersion = config.keyVersion;
    this._marshalingAlgorithm = config.marshalingAlgorithm;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
    this._prehashed = config.prehashed;
    this._reference = config.reference;
    this._saltLength = config.saltLength;
    this._signature = config.signature;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._signatureContext = config.signatureContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_input - computed: false, optional: true, required: false
  private _batchInput?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get batchInput() {
    return this.interpolationForAttribute('batch_input');
  }
  public set batchInput(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._batchInput = value;
  }
  public resetBatchInput() {
    this._batchInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInputInput() {
    return this._batchInput;
  }

  // batch_results - computed: true, optional: true, required: false
  private _batchResults?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get batchResults() {
    return this.interpolationForAttribute('batch_results');
  }
  public set batchResults(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._batchResults = value;
  }
  public resetBatchResults() {
    this._batchResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchResultsInput() {
    return this._batchResults;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // hash_algorithm - computed: false, optional: true, required: false
  private _hashAlgorithm?: string; 
  public get hashAlgorithm() {
    return this.getStringAttribute('hash_algorithm');
  }
  public set hashAlgorithm(value: string) {
    this._hashAlgorithm = value;
  }
  public resetHashAlgorithm() {
    this._hashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmInput() {
    return this._hashAlgorithm;
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

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // key_version - computed: false, optional: true, required: false
  private _keyVersion?: number; 
  public get keyVersion() {
    return this.getNumberAttribute('key_version');
  }
  public set keyVersion(value: number) {
    this._keyVersion = value;
  }
  public resetKeyVersion() {
    this._keyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion;
  }

  // marshaling_algorithm - computed: false, optional: true, required: false
  private _marshalingAlgorithm?: string; 
  public get marshalingAlgorithm() {
    return this.getStringAttribute('marshaling_algorithm');
  }
  public set marshalingAlgorithm(value: string) {
    this._marshalingAlgorithm = value;
  }
  public resetMarshalingAlgorithm() {
    this._marshalingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marshalingAlgorithmInput() {
    return this._marshalingAlgorithm;
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

  // prehashed - computed: false, optional: true, required: false
  private _prehashed?: boolean | cdktf.IResolvable; 
  public get prehashed() {
    return this.getBooleanAttribute('prehashed');
  }
  public set prehashed(value: boolean | cdktf.IResolvable) {
    this._prehashed = value;
  }
  public resetPrehashed() {
    this._prehashed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prehashedInput() {
    return this._prehashed;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }

  // salt_length - computed: false, optional: true, required: false
  private _saltLength?: string; 
  public get saltLength() {
    return this.getStringAttribute('salt_length');
  }
  public set saltLength(value: string) {
    this._saltLength = value;
  }
  public resetSaltLength() {
    this._saltLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltLengthInput() {
    return this._saltLength;
  }

  // signature - computed: true, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // signature_context - computed: false, optional: true, required: false
  private _signatureContext?: string; 
  public get signatureContext() {
    return this.getStringAttribute('signature_context');
  }
  public set signatureContext(value: string) {
    this._signatureContext = value;
  }
  public resetSignatureContext() {
    this._signatureContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureContextInput() {
    return this._signatureContext;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_input: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._batchInput),
      batch_results: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._batchResults),
      context: cdktf.stringToTerraform(this._context),
      hash_algorithm: cdktf.stringToTerraform(this._hashAlgorithm),
      id: cdktf.stringToTerraform(this._id),
      input: cdktf.stringToTerraform(this._input),
      key_version: cdktf.numberToTerraform(this._keyVersion),
      marshaling_algorithm: cdktf.stringToTerraform(this._marshalingAlgorithm),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      prehashed: cdktf.booleanToTerraform(this._prehashed),
      reference: cdktf.stringToTerraform(this._reference),
      salt_length: cdktf.stringToTerraform(this._saltLength),
      signature: cdktf.stringToTerraform(this._signature),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      signature_context: cdktf.stringToTerraform(this._signatureContext),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      batch_input: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._batchInput),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      batch_results: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._batchResults),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_algorithm: {
        value: cdktf.stringToHclTerraform(this._hashAlgorithm),
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
      input: {
        value: cdktf.stringToHclTerraform(this._input),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_version: {
        value: cdktf.numberToHclTerraform(this._keyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      marshaling_algorithm: {
        value: cdktf.stringToHclTerraform(this._marshalingAlgorithm),
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
      prehashed: {
        value: cdktf.booleanToHclTerraform(this._prehashed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reference: {
        value: cdktf.stringToHclTerraform(this._reference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      salt_length: {
        value: cdktf.stringToHclTerraform(this._saltLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature: {
        value: cdktf.stringToHclTerraform(this._signature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_context: {
        value: cdktf.stringToHclTerraform(this._signatureContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
