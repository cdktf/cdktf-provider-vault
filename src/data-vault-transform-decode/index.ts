// https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultTransformDecodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a list of items to be decoded in a single batch. If this parameter is set, the top-level parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode#batch_input DataVaultTransformDecode#batch_input}
  */
  readonly batchInput?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The result of decoding batch_input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode#batch_results DataVaultTransformDecode#batch_results}
  */
  readonly batchResults?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The result of decoding a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode#decoded_value DataVaultTransformDecode#decoded_value}
  */
  readonly decodedValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode#namespace DataVaultTransformDecode#namespace}
  */
  readonly namespace?: string;
  /**
  * Path to backend from which to retrieve data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode#path DataVaultTransformDecode#path}
  */
  readonly path: string;
  /**
  * The name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode#role_name DataVaultTransformDecode#role_name}
  */
  readonly roleName: string;
  /**
  * The transformation to perform. If no value is provided and the role contains a single transformation, this value will be inferred from the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode#transformation DataVaultTransformDecode#transformation}
  */
  readonly transformation?: string;
  /**
  * The tweak value to use. Only applicable for FPE transformations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode#tweak DataVaultTransformDecode#tweak}
  */
  readonly tweak?: string;
  /**
  * The value in which to decode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode#value DataVaultTransformDecode#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode vault_transform_decode}
*/
export class DataVaultTransformDecode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_decode";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/transform_decode vault_transform_decode} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultTransformDecodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultTransformDecodeConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_decode',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.18.0',
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
    this._batchInput = config.batchInput;
    this._batchResults = config.batchResults;
    this._decodedValue = config.decodedValue;
    this._id = config.id;
    this._namespace = config.namespace;
    this._path = config.path;
    this._roleName = config.roleName;
    this._transformation = config.transformation;
    this._tweak = config.tweak;
    this._value = config.value;
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

  // decoded_value - computed: true, optional: true, required: false
  private _decodedValue?: string; 
  public get decodedValue() {
    return this.getStringAttribute('decoded_value');
  }
  public set decodedValue(value: string) {
    this._decodedValue = value;
  }
  public resetDecodedValue() {
    this._decodedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodedValueInput() {
    return this._decodedValue;
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

  // transformation - computed: false, optional: true, required: false
  private _transformation?: string; 
  public get transformation() {
    return this.getStringAttribute('transformation');
  }
  public set transformation(value: string) {
    this._transformation = value;
  }
  public resetTransformation() {
    this._transformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation;
  }

  // tweak - computed: false, optional: true, required: false
  private _tweak?: string; 
  public get tweak() {
    return this.getStringAttribute('tweak');
  }
  public set tweak(value: string) {
    this._tweak = value;
  }
  public resetTweak() {
    this._tweak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tweakInput() {
    return this._tweak;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_input: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._batchInput),
      batch_results: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._batchResults),
      decoded_value: cdktf.stringToTerraform(this._decodedValue),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      role_name: cdktf.stringToTerraform(this._roleName),
      transformation: cdktf.stringToTerraform(this._transformation),
      tweak: cdktf.stringToTerraform(this._tweak),
      value: cdktf.stringToTerraform(this._value),
    };
  }
}
