// https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_config_ca
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PkiSecretBackendConfigCaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The PKI secret backend the resource belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_config_ca#backend PkiSecretBackendConfigCa#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_config_ca#id PkiSecretBackendConfigCa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_config_ca#namespace PkiSecretBackendConfigCa#namespace}
  */
  readonly namespace?: string;
  /**
  * The key and certificate PEM bundle.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_config_ca#pem_bundle PkiSecretBackendConfigCa#pem_bundle}
  */
  readonly pemBundle: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_config_ca vault_pki_secret_backend_config_ca}
*/
export class PkiSecretBackendConfigCa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_config_ca";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/pki_secret_backend_config_ca vault_pki_secret_backend_config_ca} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendConfigCaConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendConfigCaConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_config_ca',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.9.1',
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
    this._backend = config.backend;
    this._id = config.id;
    this._namespace = config.namespace;
    this._pemBundle = config.pemBundle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // pem_bundle - computed: false, optional: false, required: true
  private _pemBundle?: string; 
  public get pemBundle() {
    return this.getStringAttribute('pem_bundle');
  }
  public set pemBundle(value: string) {
    this._pemBundle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemBundleInput() {
    return this._pemBundle;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      pem_bundle: cdktf.stringToTerraform(this._pemBundle),
    };
  }
}
