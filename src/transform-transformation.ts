// https://www.terraform.io/docs/providers/vault/r/transform_transformation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransformTransformationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The set of roles allowed to perform this transformation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#allowed_roles TransformTransformation#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#id TransformTransformation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The character used to replace data when in masking mode
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#masking_character TransformTransformation#masking_character}
  */
  readonly maskingCharacter?: string;
  /**
  * The name of the transformation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#name TransformTransformation#name}
  */
  readonly name: string;
  /**
  * The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#path TransformTransformation#path}
  */
  readonly path: string;
  /**
  * The name of the template to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#template TransformTransformation#template}
  */
  readonly template?: string;
  /**
  * Templates configured for transformation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#templates TransformTransformation#templates}
  */
  readonly templates?: string[];
  /**
  * The source of where the tweak value comes from. Only valid when in FPE mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#tweak_source TransformTransformation#tweak_source}
  */
  readonly tweakSource?: string;
  /**
  * The type of transformation to perform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation#type TransformTransformation#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation vault_transform_transformation}
*/
export class TransformTransformation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_transformation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/transform_transformation vault_transform_transformation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformTransformationConfig
  */
  public constructor(scope: Construct, id: string, config: TransformTransformationConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_transformation',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.8.0',
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
    this._allowedRoles = config.allowedRoles;
    this._id = config.id;
    this._maskingCharacter = config.maskingCharacter;
    this._name = config.name;
    this._path = config.path;
    this._template = config.template;
    this._templates = config.templates;
    this._tweakSource = config.tweakSource;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_roles - computed: false, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
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

  // masking_character - computed: false, optional: true, required: false
  private _maskingCharacter?: string; 
  public get maskingCharacter() {
    return this.getStringAttribute('masking_character');
  }
  public set maskingCharacter(value: string) {
    this._maskingCharacter = value;
  }
  public resetMaskingCharacter() {
    this._maskingCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingCharacterInput() {
    return this._maskingCharacter;
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

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // templates - computed: true, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return this.getListAttribute('templates');
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }

  // tweak_source - computed: false, optional: true, required: false
  private _tweakSource?: string; 
  public get tweakSource() {
    return this.getStringAttribute('tweak_source');
  }
  public set tweakSource(value: string) {
    this._tweakSource = value;
  }
  public resetTweakSource() {
    this._tweakSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tweakSourceInput() {
    return this._tweakSource;
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
      allowed_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedRoles),
      id: cdktf.stringToTerraform(this._id),
      masking_character: cdktf.stringToTerraform(this._maskingCharacter),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      template: cdktf.stringToTerraform(this._template),
      templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templates),
      tweak_source: cdktf.stringToTerraform(this._tweakSource),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
