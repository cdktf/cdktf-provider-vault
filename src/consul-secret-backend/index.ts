// https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsulSecretBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the address of the Consul instance, provided as "host:port" like "127.0.0.1:8500".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#address ConsulSecretBackend#address}
  */
  readonly address: string;
  /**
  * Denotes a backend resource that is used to bootstrap the Consul ACL system. Only one resource may be used to bootstrap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#bootstrap ConsulSecretBackend#bootstrap}
  */
  readonly bootstrap?: boolean | cdktf.IResolvable;
  /**
  * CA certificate to use when verifying Consul server certificate, must be x509 PEM encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#ca_cert ConsulSecretBackend#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Client certificate used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#client_cert ConsulSecretBackend#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Client key used for Consul's TLS communication, must be x509 PEM encoded and if this is set you need to also set client_cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#client_key ConsulSecretBackend#client_key}
  */
  readonly clientKey?: string;
  /**
  * Default lease duration for secrets in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#default_lease_ttl_seconds ConsulSecretBackend#default_lease_ttl_seconds}
  */
  readonly defaultLeaseTtlSeconds?: number;
  /**
  * Human-friendly description of the mount for the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#description ConsulSecretBackend#description}
  */
  readonly description?: string;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#disable_remount ConsulSecretBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#id ConsulSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies if the secret backend is local only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#local ConsulSecretBackend#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Maximum possible lease duration for secrets in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#max_lease_ttl_seconds ConsulSecretBackend#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#namespace ConsulSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Unique name of the Vault Consul mount to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#path ConsulSecretBackend#path}
  */
  readonly path?: string;
  /**
  * Specifies the URL scheme to use. Defaults to "http".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#scheme ConsulSecretBackend#scheme}
  */
  readonly scheme?: string;
  /**
  * Specifies the Consul token to use when managing or issuing new tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#token ConsulSecretBackend#token}
  */
  readonly token?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend vault_consul_secret_backend}
*/
export class ConsulSecretBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_consul_secret_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsulSecretBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsulSecretBackend to import
  * @param importFromId The id of the existing ConsulSecretBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsulSecretBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_consul_secret_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/consul_secret_backend vault_consul_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsulSecretBackendConfig
  */
  public constructor(scope: Construct, id: string, config: ConsulSecretBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_consul_secret_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.21.0',
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
    this._address = config.address;
    this._bootstrap = config.bootstrap;
    this._caCert = config.caCert;
    this._clientCert = config.clientCert;
    this._clientKey = config.clientKey;
    this._defaultLeaseTtlSeconds = config.defaultLeaseTtlSeconds;
    this._description = config.description;
    this._disableRemount = config.disableRemount;
    this._id = config.id;
    this._local = config.local;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._namespace = config.namespace;
    this._path = config.path;
    this._scheme = config.scheme;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // bootstrap - computed: false, optional: true, required: false
  private _bootstrap?: boolean | cdktf.IResolvable; 
  public get bootstrap() {
    return this.getBooleanAttribute('bootstrap');
  }
  public set bootstrap(value: boolean | cdktf.IResolvable) {
    this._bootstrap = value;
  }
  public resetBootstrap() {
    this._bootstrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // client_cert - computed: false, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // default_lease_ttl_seconds - computed: false, optional: true, required: false
  private _defaultLeaseTtlSeconds?: number; 
  public get defaultLeaseTtlSeconds() {
    return this.getNumberAttribute('default_lease_ttl_seconds');
  }
  public set defaultLeaseTtlSeconds(value: number) {
    this._defaultLeaseTtlSeconds = value;
  }
  public resetDefaultLeaseTtlSeconds() {
    this._defaultLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTtlSecondsInput() {
    return this._defaultLeaseTtlSeconds;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_remount - computed: false, optional: true, required: false
  private _disableRemount?: boolean | cdktf.IResolvable; 
  public get disableRemount() {
    return this.getBooleanAttribute('disable_remount');
  }
  public set disableRemount(value: boolean | cdktf.IResolvable) {
    this._disableRemount = value;
  }
  public resetDisableRemount() {
    this._disableRemount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRemountInput() {
    return this._disableRemount;
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

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // max_lease_ttl_seconds - computed: false, optional: true, required: false
  private _maxLeaseTtlSeconds?: number; 
  public get maxLeaseTtlSeconds() {
    return this.getNumberAttribute('max_lease_ttl_seconds');
  }
  public set maxLeaseTtlSeconds(value: number) {
    this._maxLeaseTtlSeconds = value;
  }
  public resetMaxLeaseTtlSeconds() {
    this._maxLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlSecondsInput() {
    return this._maxLeaseTtlSeconds;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      bootstrap: cdktf.booleanToTerraform(this._bootstrap),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      client_key: cdktf.stringToTerraform(this._clientKey),
      default_lease_ttl_seconds: cdktf.numberToTerraform(this._defaultLeaseTtlSeconds),
      description: cdktf.stringToTerraform(this._description),
      disable_remount: cdktf.booleanToTerraform(this._disableRemount),
      id: cdktf.stringToTerraform(this._id),
      local: cdktf.booleanToTerraform(this._local),
      max_lease_ttl_seconds: cdktf.numberToTerraform(this._maxLeaseTtlSeconds),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      scheme: cdktf.stringToTerraform(this._scheme),
      token: cdktf.stringToTerraform(this._token),
    };
  }
}
