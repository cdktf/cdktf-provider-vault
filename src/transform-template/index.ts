// https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransformTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The alphabet to use for this template. This is only used during FPE transformations.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template#alphabet TransformTemplate#alphabet}
  */
  readonly alphabet?: string;
  /**
  * The map of regular expression templates used to customize decoded outputs.
Only applicable to FPE transformations.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template#decode_formats TransformTemplate#decode_formats}
  */
  readonly decodeFormats?: { [key: string]: string };
  /**
  * The regular expression template used for encoding values.
Only applicable to FPE transformations.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template#encode_format TransformTemplate#encode_format}
  */
  readonly encodeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template#id TransformTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the template.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template#name TransformTemplate#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template#namespace TransformTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template#path TransformTemplate#path}
  */
  readonly path: string;
  /**
  * The pattern used for matching. Currently, only regular expression pattern is supported.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template#pattern TransformTemplate#pattern}
  */
  readonly pattern?: string;
  /**
  * The pattern type to use for match detection. Currently, only regex is supported.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template#type TransformTemplate#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template vault_transform_template}
*/
export class TransformTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/transform_template vault_transform_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TransformTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_template',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.15.2',
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
    this._alphabet = config.alphabet;
    this._decodeFormats = config.decodeFormats;
    this._encodeFormat = config.encodeFormat;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
    this._pattern = config.pattern;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alphabet - computed: false, optional: true, required: false
  private _alphabet?: string; 
  public get alphabet() {
    return this.getStringAttribute('alphabet');
  }
  public set alphabet(value: string) {
    this._alphabet = value;
  }
  public resetAlphabet() {
    this._alphabet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alphabetInput() {
    return this._alphabet;
  }

  // decode_formats - computed: false, optional: true, required: false
  private _decodeFormats?: { [key: string]: string }; 
  public get decodeFormats() {
    return this.getStringMapAttribute('decode_formats');
  }
  public set decodeFormats(value: { [key: string]: string }) {
    this._decodeFormats = value;
  }
  public resetDecodeFormats() {
    this._decodeFormats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeFormatsInput() {
    return this._decodeFormats;
  }

  // encode_format - computed: false, optional: true, required: false
  private _encodeFormat?: string; 
  public get encodeFormat() {
    return this.getStringAttribute('encode_format');
  }
  public set encodeFormat(value: string) {
    this._encodeFormat = value;
  }
  public resetEncodeFormat() {
    this._encodeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeFormatInput() {
    return this._encodeFormat;
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

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
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
      alphabet: cdktf.stringToTerraform(this._alphabet),
      decode_formats: cdktf.hashMapper(cdktf.stringToTerraform)(this._decodeFormats),
      encode_format: cdktf.stringToTerraform(this._encodeFormat),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      pattern: cdktf.stringToTerraform(this._pattern),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
