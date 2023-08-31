// https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshSecretBackendCaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the SSH Secret Backend where the CA should be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#backend SshSecretBackendCa#backend}
  */
  readonly backend?: string;
  /**
  * Whether Vault should generate the signing key pair internally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#generate_signing_key SshSecretBackendCa#generate_signing_key}
  */
  readonly generateSigningKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#id SshSecretBackendCa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#namespace SshSecretBackendCa#namespace}
  */
  readonly namespace?: string;
  /**
  * Private key part the SSH CA key pair; required if generate_signing_key is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#private_key SshSecretBackendCa#private_key}
  */
  readonly privateKey?: string;
  /**
  * Public key part the SSH CA key pair; required if generate_signing_key is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca#public_key SshSecretBackendCa#public_key}
  */
  readonly publicKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca vault_ssh_secret_backend_ca}
*/
export class SshSecretBackendCa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ssh_secret_backend_ca";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/ssh_secret_backend_ca vault_ssh_secret_backend_ca} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshSecretBackendCaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SshSecretBackendCaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_ssh_secret_backend_ca',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.20.0',
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
    this._generateSigningKey = config.generateSigningKey;
    this._id = config.id;
    this._namespace = config.namespace;
    this._privateKey = config.privateKey;
    this._publicKey = config.publicKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // generate_signing_key - computed: false, optional: true, required: false
  private _generateSigningKey?: boolean | cdktf.IResolvable; 
  public get generateSigningKey() {
    return this.getBooleanAttribute('generate_signing_key');
  }
  public set generateSigningKey(value: boolean | cdktf.IResolvable) {
    this._generateSigningKey = value;
  }
  public resetGenerateSigningKey() {
    this._generateSigningKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSigningKeyInput() {
    return this._generateSigningKey;
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

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      generate_signing_key: cdktf.booleanToTerraform(this._generateSigningKey),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
    };
  }
}
