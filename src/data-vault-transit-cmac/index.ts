/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultTransitCmacConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a list of items for processing. When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#batch_input DataVaultTransitCmac#batch_input}
  */
  readonly batchInput?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The results returned from Vault if using batch_input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#batch_results DataVaultTransitCmac#batch_results}
  */
  readonly batchResults?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The CMAC returned from Vault if using input
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#cmac DataVaultTransitCmac#cmac}
  */
  readonly cmac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the base64 encoded input data. One of input or batch_input must be supplied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#input DataVaultTransitCmac#input}
  */
  readonly input?: string;
  /**
  * The version of the key to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#key_version DataVaultTransitCmac#key_version}
  */
  readonly keyVersion?: number;
  /**
  * Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#mac_length DataVaultTransitCmac#mac_length}
  */
  readonly macLength?: number;
  /**
  * Name of the CMAC key to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#name DataVaultTransitCmac#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#namespace DataVaultTransitCmac#namespace}
  */
  readonly namespace?: string;
  /**
  * The Transit secret backend the key belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#path DataVaultTransitCmac#path}
  */
  readonly path: string;
  /**
  * Specifies the MAC length to use (URL parameter). If provided, this value overrides mac_length. The url_mac_length cannot be larger than the cipher's block size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#url_mac_length DataVaultTransitCmac#url_mac_length}
  */
  readonly urlMacLength?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac vault_transit_cmac}
*/
export class DataVaultTransitCmac extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transit_cmac";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultTransitCmac resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultTransitCmac to import
  * @param importFromId The id of the existing DataVaultTransitCmac that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultTransitCmac to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_transit_cmac", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/transit_cmac vault_transit_cmac} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultTransitCmacConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultTransitCmacConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transit_cmac',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.6.0',
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
    this._cmac = config.cmac;
    this._id = config.id;
    this._input = config.input;
    this._keyVersion = config.keyVersion;
    this._macLength = config.macLength;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
    this._urlMacLength = config.urlMacLength;
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

  // cmac - computed: true, optional: true, required: false
  private _cmac?: string; 
  public get cmac() {
    return this.getStringAttribute('cmac');
  }
  public set cmac(value: string) {
    this._cmac = value;
  }
  public resetCmac() {
    this._cmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmacInput() {
    return this._cmac;
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

  // mac_length - computed: false, optional: true, required: false
  private _macLength?: number; 
  public get macLength() {
    return this.getNumberAttribute('mac_length');
  }
  public set macLength(value: number) {
    this._macLength = value;
  }
  public resetMacLength() {
    this._macLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macLengthInput() {
    return this._macLength;
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

  // url_mac_length - computed: false, optional: true, required: false
  private _urlMacLength?: number; 
  public get urlMacLength() {
    return this.getNumberAttribute('url_mac_length');
  }
  public set urlMacLength(value: number) {
    this._urlMacLength = value;
  }
  public resetUrlMacLength() {
    this._urlMacLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMacLengthInput() {
    return this._urlMacLength;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_input: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._batchInput),
      batch_results: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._batchResults),
      cmac: cdktf.stringToTerraform(this._cmac),
      id: cdktf.stringToTerraform(this._id),
      input: cdktf.stringToTerraform(this._input),
      key_version: cdktf.numberToTerraform(this._keyVersion),
      mac_length: cdktf.numberToTerraform(this._macLength),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      url_mac_length: cdktf.numberToTerraform(this._urlMacLength),
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
      cmac: {
        value: cdktf.stringToHclTerraform(this._cmac),
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
      mac_length: {
        value: cdktf.numberToHclTerraform(this._macLength),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_mac_length: {
        value: cdktf.numberToHclTerraform(this._urlMacLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
