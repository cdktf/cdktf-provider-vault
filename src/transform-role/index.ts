// https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/transform_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransformRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/transform_role#id TransformRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/transform_role#name TransformRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/transform_role#namespace TransformRole#namespace}
  */
  readonly namespace?: string;
  /**
  * The mount path for a back-end, for example, the path given in "$ vault auth enable -path=my-aws aws".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/transform_role#path TransformRole#path}
  */
  readonly path: string;
  /**
  * A comma separated string or slice of transformations to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/transform_role#transformations TransformRole#transformations}
  */
  readonly transformations?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/transform_role vault_transform_role}
*/
export class TransformRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransformRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransformRole to import
  * @param importFromId The id of the existing TransformRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/transform_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransformRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_transform_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/transform_role vault_transform_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformRoleConfig
  */
  public constructor(scope: Construct, id: string, config: TransformRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.0.0',
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
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._path = config.path;
    this._transformations = config.transformations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // transformations - computed: false, optional: true, required: false
  private _transformations?: string[]; 
  public get transformations() {
    return this.getListAttribute('transformations');
  }
  public set transformations(value: string[]) {
    this._transformations = value;
  }
  public resetTransformations() {
    this._transformations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      transformations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._transformations),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      transformations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._transformations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
