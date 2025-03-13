// https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_cert_metadata
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultPkiSecretBackendCertMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_cert_metadata#id DataVaultPkiSecretBackendCertMetadata#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_cert_metadata#namespace DataVaultPkiSecretBackendCertMetadata#namespace}
  */
  readonly namespace?: string;
  /**
  * Full path where PKI backend is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_cert_metadata#path DataVaultPkiSecretBackendCertMetadata#path}
  */
  readonly path: string;
  /**
  * Specifies the serial of the certificate whose metadata to read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_cert_metadata#serial DataVaultPkiSecretBackendCertMetadata#serial}
  */
  readonly serial: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_cert_metadata vault_pki_secret_backend_cert_metadata}
*/
export class DataVaultPkiSecretBackendCertMetadata extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_cert_metadata";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVaultPkiSecretBackendCertMetadata resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVaultPkiSecretBackendCertMetadata to import
  * @param importFromId The id of the existing DataVaultPkiSecretBackendCertMetadata that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_cert_metadata#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVaultPkiSecretBackendCertMetadata to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_cert_metadata", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/data-sources/pki_secret_backend_cert_metadata vault_pki_secret_backend_cert_metadata} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultPkiSecretBackendCertMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultPkiSecretBackendCertMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_cert_metadata',
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
    this._id = config.id;
    this._namespace = config.namespace;
    this._path = config.path;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_metadata - computed: true, optional: false, required: false
  public get certMetadata() {
    return this.getStringAttribute('cert_metadata');
  }

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
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

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      serial: cdktf.stringToTerraform(this._serial),
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
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
