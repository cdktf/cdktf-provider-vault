// https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendConfigClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path to the cluster's AIA distribution point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cluster#aia_path PkiSecretBackendConfigCluster#aia_path}
  */
  readonly aiaPath?: string;
  /**
  * Full path where PKI backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cluster#backend PkiSecretBackendConfigCluster#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cluster#id PkiSecretBackendConfigCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cluster#namespace PkiSecretBackendConfigCluster#namespace}
  */
  readonly namespace?: string;
  /**
  * Path to the cluster's API mount path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cluster#path PkiSecretBackendConfigCluster#path}
  */
  readonly path?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cluster vault_pki_secret_backend_config_cluster}
*/
export class PkiSecretBackendConfigCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_config_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PkiSecretBackendConfigCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendConfigCluster to import
  * @param importFromId The id of the existing PkiSecretBackendConfigCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendConfigCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_config_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_cluster vault_pki_secret_backend_config_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendConfigClusterConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendConfigClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_config_cluster',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.7.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aiaPath = config.aiaPath;
    this._backend = config.backend;
    this._id = config.id;
    this._namespace = config.namespace;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aia_path - computed: false, optional: true, required: false
  private _aiaPath?: string; 
  public get aiaPath() {
    return this.getStringAttribute('aia_path');
  }
  public set aiaPath(value: string) {
    this._aiaPath = value;
  }
  public resetAiaPath() {
    this._aiaPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiaPathInput() {
    return this._aiaPath;
  }

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
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
      aia_path: cdktf.stringToTerraform(this._aiaPath),
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aia_path: {
        value: cdktf.stringToHclTerraform(this._aiaPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
