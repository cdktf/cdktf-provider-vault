// https://www.terraform.io/docs/providers/vault/r/kv_secret_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KvSecretV2Config extends cdktf.TerraformMetaArguments {
  /**
  * This flag is required if cas_required is set to true on either the secret or the engine's config. In order for a write to be successful, cas must be set to the current version of the secret.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2#cas KvSecretV2#cas}
  */
  readonly cas?: number;
  /**
  * JSON-encoded secret data to write.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2#data_json KvSecretV2#data_json}
  */
  readonly dataJson: string;
  /**
  * If set to true, permanently deletes all versions for the specified key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2#delete_all_versions KvSecretV2#delete_all_versions}
  */
  readonly deleteAllVersions?: boolean | cdktf.IResolvable;
  /**
  * If set to true, disables reading secret from Vault; note: drift won't be detected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2#disable_read KvSecretV2#disable_read}
  */
  readonly disableRead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2#id KvSecretV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Path where KV-V2 engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2#mount KvSecretV2#mount}
  */
  readonly mount: string;
  /**
  * Full name of the secret. For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2#name KvSecretV2#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2#namespace KvSecretV2#namespace}
  */
  readonly namespace?: string;
  /**
  * An object that holds option settings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2#options KvSecretV2#options}
  */
  readonly options?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2 vault_kv_secret_v2}
*/
export class KvSecretV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kv_secret_v2";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/kv_secret_v2 vault_kv_secret_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KvSecretV2Config
  */
  public constructor(scope: Construct, id: string, config: KvSecretV2Config) {
    super(scope, id, {
      terraformResourceType: 'vault_kv_secret_v2',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.8.2',
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
    this._cas = config.cas;
    this._dataJson = config.dataJson;
    this._deleteAllVersions = config.deleteAllVersions;
    this._disableRead = config.disableRead;
    this._id = config.id;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._options = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cas - computed: false, optional: true, required: false
  private _cas?: number; 
  public get cas() {
    return this.getNumberAttribute('cas');
  }
  public set cas(value: number) {
    this._cas = value;
  }
  public resetCas() {
    this._cas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casInput() {
    return this._cas;
  }

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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cas: cdktf.numberToTerraform(this._cas),
      data_json: cdktf.stringToTerraform(this._dataJson),
      delete_all_versions: cdktf.booleanToTerraform(this._deleteAllVersions),
      disable_read: cdktf.booleanToTerraform(this._disableRead),
      id: cdktf.stringToTerraform(this._id),
      mount: cdktf.stringToTerraform(this._mount),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
    };
  }
}
