// https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/data-sources/pki_secret_backend_issuer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultPkiSecretBackendIssuerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Full path where PKI backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/data-sources/pki_secret_backend_issuer#backend DataVaultPkiSecretBackendIssuer#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reference to an existing issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/data-sources/pki_secret_backend_issuer#issuer_ref DataVaultPkiSecretBackendIssuer#issuer_ref}
  */
  readonly issuerRef: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/data-sources/pki_secret_backend_issuer#namespace DataVaultPkiSecretBackendIssuer#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/data-sources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}
*/
export class DataVaultPkiSecretBackendIssuer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_issuer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/data-sources/pki_secret_backend_issuer vault_pki_secret_backend_issuer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultPkiSecretBackendIssuerConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultPkiSecretBackendIssuerConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_issuer',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.20.1',
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
    this._issuerRef = config.issuerRef;
    this._namespace = config.namespace;
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

  // ca_chain - computed: true, optional: false, required: false
  public get caChain() {
    return this.getListAttribute('ca_chain');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
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

  // issuer_id - computed: true, optional: false, required: false
  public get issuerId() {
    return this.getStringAttribute('issuer_id');
  }

  // issuer_name - computed: true, optional: false, required: false
  public get issuerName() {
    return this.getStringAttribute('issuer_name');
  }

  // issuer_ref - computed: false, optional: false, required: true
  private _issuerRef?: string; 
  public get issuerRef() {
    return this.getStringAttribute('issuer_ref');
  }
  public set issuerRef(value: string) {
    this._issuerRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerRefInput() {
    return this._issuerRef;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // leaf_not_after_behavior - computed: true, optional: false, required: false
  public get leafNotAfterBehavior() {
    return this.getStringAttribute('leaf_not_after_behavior');
  }

  // manual_chain - computed: true, optional: false, required: false
  public get manualChain() {
    return this.getListAttribute('manual_chain');
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

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      issuer_ref: cdktf.stringToTerraform(this._issuerRef),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
