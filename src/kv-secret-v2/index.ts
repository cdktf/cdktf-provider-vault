/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KvSecretV2Config extends cdktf.TerraformMetaArguments {
  /**
  * This flag is required if cas_required is set to true on either the secret or the engine's config. In order for a write to be successful, cas must be set to the current version of the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#cas KvSecretV2#cas}
  */
  readonly cas?: number;
  /**
  * JSON-encoded secret data to write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data_json KvSecretV2#data_json}
  */
  readonly dataJson?: string;
  /**
  * Write-Only JSON-encoded secret data to write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data_json_wo KvSecretV2#data_json_wo}
  */
  readonly dataJsonWo?: string;
  /**
  * Version counter for write-only secret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data_json_wo_version KvSecretV2#data_json_wo_version}
  */
  readonly dataJsonWoVersion?: number;
  /**
  * If set to true, permanently deletes all versions for the specified key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#delete_all_versions KvSecretV2#delete_all_versions}
  */
  readonly deleteAllVersions?: boolean | cdktf.IResolvable;
  /**
  * If set to true, disables reading secret from Vault; note: drift won't be detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#disable_read KvSecretV2#disable_read}
  */
  readonly disableRead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#id KvSecretV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Path where KV-V2 engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#mount KvSecretV2#mount}
  */
  readonly mount: string;
  /**
  * Full name of the secret. For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#name KvSecretV2#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#namespace KvSecretV2#namespace}
  */
  readonly namespace?: string;
  /**
  * An object that holds option settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#options KvSecretV2#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * custom_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#custom_metadata KvSecretV2#custom_metadata}
  */
  readonly customMetadata?: KvSecretV2CustomMetadata;
}
export interface KvSecretV2CustomMetadata {
  /**
  * If true, all keys will require the cas parameter to be set on all write requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#cas_required KvSecretV2#cas_required}
  */
  readonly casRequired?: boolean | cdktf.IResolvable;
  /**
  * A map of arbitrary string to string valued user-provided metadata meant to describe the secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data KvSecretV2#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * If set, specifies the length of time before a version is deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#delete_version_after KvSecretV2#delete_version_after}
  */
  readonly deleteVersionAfter?: number;
  /**
  * The number of versions to keep per key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#max_versions KvSecretV2#max_versions}
  */
  readonly maxVersions?: number;
}

export function kvSecretV2CustomMetadataToTerraform(struct?: KvSecretV2CustomMetadataOutputReference | KvSecretV2CustomMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cas_required: cdktf.booleanToTerraform(struct!.casRequired),
    data: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.data),
    delete_version_after: cdktf.numberToTerraform(struct!.deleteVersionAfter),
    max_versions: cdktf.numberToTerraform(struct!.maxVersions),
  }
}


export function kvSecretV2CustomMetadataToHclTerraform(struct?: KvSecretV2CustomMetadataOutputReference | KvSecretV2CustomMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cas_required: {
      value: cdktf.booleanToHclTerraform(struct!.casRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.data),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    delete_version_after: {
      value: cdktf.numberToHclTerraform(struct!.deleteVersionAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_versions: {
      value: cdktf.numberToHclTerraform(struct!.maxVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KvSecretV2CustomMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KvSecretV2CustomMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._casRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.casRequired = this._casRequired;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._deleteVersionAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteVersionAfter = this._deleteVersionAfter;
    }
    if (this._maxVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersions = this._maxVersions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KvSecretV2CustomMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._casRequired = undefined;
      this._data = undefined;
      this._deleteVersionAfter = undefined;
      this._maxVersions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._casRequired = value.casRequired;
      this._data = value.data;
      this._deleteVersionAfter = value.deleteVersionAfter;
      this._maxVersions = value.maxVersions;
    }
  }

  // cas_required - computed: false, optional: true, required: false
  private _casRequired?: boolean | cdktf.IResolvable; 
  public get casRequired() {
    return this.getBooleanAttribute('cas_required');
  }
  public set casRequired(value: boolean | cdktf.IResolvable) {
    this._casRequired = value;
  }
  public resetCasRequired() {
    this._casRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casRequiredInput() {
    return this._casRequired;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // delete_version_after - computed: false, optional: true, required: false
  private _deleteVersionAfter?: number; 
  public get deleteVersionAfter() {
    return this.getNumberAttribute('delete_version_after');
  }
  public set deleteVersionAfter(value: number) {
    this._deleteVersionAfter = value;
  }
  public resetDeleteVersionAfter() {
    this._deleteVersionAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVersionAfterInput() {
    return this._deleteVersionAfter;
  }

  // max_versions - computed: false, optional: true, required: false
  private _maxVersions?: number; 
  public get maxVersions() {
    return this.getNumberAttribute('max_versions');
  }
  public set maxVersions(value: number) {
    this._maxVersions = value;
  }
  public resetMaxVersions() {
    this._maxVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionsInput() {
    return this._maxVersions;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2 vault_kv_secret_v2}
*/
export class KvSecretV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kv_secret_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KvSecretV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KvSecretV2 to import
  * @param importFromId The id of the existing KvSecretV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KvSecretV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_kv_secret_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2 vault_kv_secret_v2} Resource
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
        providerVersion: '5.1.0',
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
    this._cas = config.cas;
    this._dataJson = config.dataJson;
    this._dataJsonWo = config.dataJsonWo;
    this._dataJsonWoVersion = config.dataJsonWoVersion;
    this._deleteAllVersions = config.deleteAllVersions;
    this._disableRead = config.disableRead;
    this._id = config.id;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._options = config.options;
    this._customMetadata.internalValue = config.customMetadata;
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

  // data_json - computed: false, optional: true, required: false
  private _dataJson?: string; 
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }
  public set dataJson(value: string) {
    this._dataJson = value;
  }
  public resetDataJson() {
    this._dataJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataJsonInput() {
    return this._dataJson;
  }

  // data_json_wo - computed: false, optional: true, required: false
  private _dataJsonWo?: string; 
  public get dataJsonWo() {
    return this.getStringAttribute('data_json_wo');
  }
  public set dataJsonWo(value: string) {
    this._dataJsonWo = value;
  }
  public resetDataJsonWo() {
    this._dataJsonWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataJsonWoInput() {
    return this._dataJsonWo;
  }

  // data_json_wo_version - computed: false, optional: true, required: false
  private _dataJsonWoVersion?: number; 
  public get dataJsonWoVersion() {
    return this.getNumberAttribute('data_json_wo_version');
  }
  public set dataJsonWoVersion(value: number) {
    this._dataJsonWoVersion = value;
  }
  public resetDataJsonWoVersion() {
    this._dataJsonWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataJsonWoVersionInput() {
    return this._dataJsonWoVersion;
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

  // custom_metadata - computed: false, optional: true, required: false
  private _customMetadata = new KvSecretV2CustomMetadataOutputReference(this, "custom_metadata");
  public get customMetadata() {
    return this._customMetadata;
  }
  public putCustomMetadata(value: KvSecretV2CustomMetadata) {
    this._customMetadata.internalValue = value;
  }
  public resetCustomMetadata() {
    this._customMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMetadataInput() {
    return this._customMetadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cas: cdktf.numberToTerraform(this._cas),
      data_json: cdktf.stringToTerraform(this._dataJson),
      data_json_wo: cdktf.stringToTerraform(this._dataJsonWo),
      data_json_wo_version: cdktf.numberToTerraform(this._dataJsonWoVersion),
      delete_all_versions: cdktf.booleanToTerraform(this._deleteAllVersions),
      disable_read: cdktf.booleanToTerraform(this._disableRead),
      id: cdktf.stringToTerraform(this._id),
      mount: cdktf.stringToTerraform(this._mount),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      custom_metadata: kvSecretV2CustomMetadataToTerraform(this._customMetadata.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cas: {
        value: cdktf.numberToHclTerraform(this._cas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_json: {
        value: cdktf.stringToHclTerraform(this._dataJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_json_wo: {
        value: cdktf.stringToHclTerraform(this._dataJsonWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_json_wo_version: {
        value: cdktf.numberToHclTerraform(this._dataJsonWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_all_versions: {
        value: cdktf.booleanToHclTerraform(this._deleteAllVersions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_read: {
        value: cdktf.booleanToHclTerraform(this._disableRead),
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
      mount: {
        value: cdktf.stringToHclTerraform(this._mount),
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
      options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      custom_metadata: {
        value: kvSecretV2CustomMetadataToHclTerraform(this._customMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KvSecretV2CustomMetadataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
