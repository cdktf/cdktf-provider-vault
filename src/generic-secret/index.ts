// https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/generic_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenericSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * JSON-encoded secret data to write.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/generic_secret#data_json GenericSecret#data_json}
  */
  readonly dataJson: string;
  /**
  * Only applicable for kv-v2 stores. If set, permanently deletes all versions for the specified key.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/generic_secret#delete_all_versions GenericSecret#delete_all_versions}
  */
  readonly deleteAllVersions?: boolean | cdktf.IResolvable;
  /**
  * Don't attempt to read the token from Vault if true; drift won't be detected.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/generic_secret#disable_read GenericSecret#disable_read}
  */
  readonly disableRead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/generic_secret#id GenericSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/generic_secret#namespace GenericSecret#namespace}
  */
  readonly namespace?: string;
  /**
  * Full path where the generic secret will be written.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/generic_secret#path GenericSecret#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/generic_secret vault_generic_secret}
*/
export class GenericSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_generic_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/generic_secret vault_generic_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenericSecretConfig
  */
  public constructor(scope: Construct, id: string, config: GenericSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_generic_secret',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.15.1',
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
    this._deleteAllVersions = config.deleteAllVersions;
    this._disableRead = config.disableRead;
    this._id = config.id;
    this._namespace = config.namespace;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new cdktf.StringMap(this, "data");
  public get data() {
    return this._data;
  }

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

  // delete_all_versions - computed: false, optional: true, required: false
  private _deleteAllVersions?: boolean | cdktf.IResolvable; 
  public get deleteAllVersions() {
    return this.getBooleanAttribute('delete_all_versions');
  }
  public set deleteAllVersions(value: boolean | cdktf.IResolvable) {
    this._deleteAllVersions = value;
  }
  public resetDeleteAllVersions() {
    this._deleteAllVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAllVersionsInput() {
    return this._deleteAllVersions;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_json: cdktf.stringToTerraform(this._dataJson),
      delete_all_versions: cdktf.booleanToTerraform(this._deleteAllVersions),
      disable_read: cdktf.booleanToTerraform(this._disableRead),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
    };
  }
}
