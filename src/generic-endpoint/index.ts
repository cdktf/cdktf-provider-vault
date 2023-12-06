// https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenericEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON-encoded data to write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#data_json GenericEndpoint#data_json}
  */
  readonly dataJson: string;
  /**
  * Don't attempt to delete the path from Vault if true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#disable_delete GenericEndpoint#disable_delete}
  */
  readonly disableDelete?: boolean | cdktf.IResolvable;
  /**
  * Don't attempt to read the path from Vault if true; drift won't be detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#disable_read GenericEndpoint#disable_read}
  */
  readonly disableRead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#id GenericEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When reading, disregard fields not present in data_json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#ignore_absent_fields GenericEndpoint#ignore_absent_fields}
  */
  readonly ignoreAbsentFields?: boolean | cdktf.IResolvable;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#namespace GenericEndpoint#namespace}
  */
  readonly namespace?: string;
  /**
  * Full path where to the endpoint that will be written
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#path GenericEndpoint#path}
  */
  readonly path: string;
  /**
  * Top-level fields returned by write to persist in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#write_fields GenericEndpoint#write_fields}
  */
  readonly writeFields?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint vault_generic_endpoint}
*/
export class GenericEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_generic_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenericEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenericEndpoint to import
  * @param importFromId The id of the existing GenericEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenericEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_generic_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint vault_generic_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenericEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: GenericEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_generic_endpoint',
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
    this._dataJson = config.dataJson;
    this._disableDelete = config.disableDelete;
    this._disableRead = config.disableRead;
    this._id = config.id;
    this._ignoreAbsentFields = config.ignoreAbsentFields;
    this._namespace = config.namespace;
    this._path = config.path;
    this._writeFields = config.writeFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_json - computed: false, optional: false, required: true
  private _dataJson?: string; 
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }
  public set dataJson(value: string) {
    this._dataJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataJsonInput() {
    return this._dataJson;
  }

  // disable_delete - computed: false, optional: true, required: false
  private _disableDelete?: boolean | cdktf.IResolvable; 
  public get disableDelete() {
    return this.getBooleanAttribute('disable_delete');
  }
  public set disableDelete(value: boolean | cdktf.IResolvable) {
    this._disableDelete = value;
  }
  public resetDisableDelete() {
    this._disableDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDeleteInput() {
    return this._disableDelete;
  }

  // disable_read - computed: false, optional: true, required: false
  private _disableRead?: boolean | cdktf.IResolvable; 
  public get disableRead() {
    return this.getBooleanAttribute('disable_read');
  }
  public set disableRead(value: boolean | cdktf.IResolvable) {
    this._disableRead = value;
  }
  public resetDisableRead() {
    this._disableRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReadInput() {
    return this._disableRead;
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

  // ignore_absent_fields - computed: false, optional: true, required: false
  private _ignoreAbsentFields?: boolean | cdktf.IResolvable; 
  public get ignoreAbsentFields() {
    return this.getBooleanAttribute('ignore_absent_fields');
  }
  public set ignoreAbsentFields(value: boolean | cdktf.IResolvable) {
    this._ignoreAbsentFields = value;
  }
  public resetIgnoreAbsentFields() {
    this._ignoreAbsentFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAbsentFieldsInput() {
    return this._ignoreAbsentFields;
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

  // write_data - computed: true, optional: false, required: false
  private _writeData = new cdktf.StringMap(this, "write_data");
  public get writeData() {
    return this._writeData;
  }

  // write_data_json - computed: true, optional: false, required: false
  public get writeDataJson() {
    return this.getStringAttribute('write_data_json');
  }

  // write_fields - computed: false, optional: true, required: false
  private _writeFields?: string[]; 
  public get writeFields() {
    return this.getListAttribute('write_fields');
  }
  public set writeFields(value: string[]) {
    this._writeFields = value;
  }
  public resetWriteFields() {
    this._writeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeFieldsInput() {
    return this._writeFields;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_json: cdktf.stringToTerraform(this._dataJson),
      disable_delete: cdktf.booleanToTerraform(this._disableDelete),
      disable_read: cdktf.booleanToTerraform(this._disableRead),
      id: cdktf.stringToTerraform(this._id),
      ignore_absent_fields: cdktf.booleanToTerraform(this._ignoreAbsentFields),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      write_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._writeFields),
    };
  }
}
