// https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultTransformEncodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a list of items to be encoded in a single batch. If this parameter is set, the parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#batch_input DataVaultTransformEncode#batch_input}
  */
  readonly batchInput?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The result of encoding batch_input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#batch_results DataVaultTransformEncode#batch_results}
  */
  readonly batchResults?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The result of encoding a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#encoded_value DataVaultTransformEncode#encoded_value}
  */
  readonly encodedValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#id DataVaultTransformEncode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#namespace DataVaultTransformEncode#namespace}
  */
  readonly namespace?: string;
  /**
  * Path to backend from which to retrieve data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#path DataVaultTransformEncode#path}
  */
  readonly path: string;
  /**
  * The name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#role_name DataVaultTransformEncode#role_name}
  */
  readonly roleName: string;
  /**
  * The transformation to perform. If no value is provided and the role contains a single transformation, this value will be inferred from the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#transformation DataVaultTransformEncode#transformation}
  */
  readonly transformation?: string;
  /**
  * The tweak value to use. Only applicable for FPE transformations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#tweak DataVaultTransformEncode#tweak}
  */
  readonly tweak?: string;
  /**
  * The value in which to encode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#value DataVaultTransformEncode#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode vault_transform_encode}
*/
export class DataVaultTransformEncode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_encode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultTransformEncode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultTransformEncode to import
  * @param importFromId The id of the existing DataVaultTransformEncode that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultTransformEncode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_transform_encode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/data-sources/transform_encode vault_transform_encode} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultTransformEncodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultTransformEncodeConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_encode',
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
    this._batchInput = config.batchInput;
    this._batchResults = config.batchResults;
    this._encodedValue = config.encodedValue;
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

  // encoded_value - computed: true, optional: true, required: false
  private _encodedValue?: string; 
  public get encodedValue() {
    return this.getStringAttribute('encoded_value');
  }
  public set encodedValue(value: string) {
    this._encodedValue = value;
  }
  public resetEncodedValue() {
    this._encodedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedValueInput() {
    return this._encodedValue;
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
      encoded_value: cdktf.stringToTerraform(this._encodedValue),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      role_name: cdktf.stringToTerraform(this._roleName),
      transformation: cdktf.stringToTerraform(this._transformation),
      tweak: cdktf.stringToTerraform(this._tweak),
      value: cdktf.stringToTerraform(this._value),
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
      encoded_value: {
        value: cdktf.stringToHclTerraform(this._encodedValue),
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
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transformation: {
        value: cdktf.stringToHclTerraform(this._transformation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tweak: {
        value: cdktf.stringToHclTerraform(this._tweak),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
