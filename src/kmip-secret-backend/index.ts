// https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmipSecretBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client certificate key bits, valid values depend on key type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#default_tls_client_key_bits KmipSecretBackend#default_tls_client_key_bits}
  */
  readonly defaultTlsClientKeyBits?: number;
  /**
  * Client certificate key type, rsa or ec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#default_tls_client_key_type KmipSecretBackend#default_tls_client_key_type}
  */
  readonly defaultTlsClientKeyType?: string;
  /**
  * Client certificate TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#default_tls_client_ttl KmipSecretBackend#default_tls_client_ttl}
  */
  readonly defaultTlsClientTtl?: number;
  /**
  * Human-friendly description of the mount for the backend
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#description KmipSecretBackend#description}
  */
  readonly description?: string;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#disable_remount KmipSecretBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Addresses the KMIP server should listen on (host:port)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#listen_addrs KmipSecretBackend#listen_addrs}
  */
  readonly listenAddrs?: string[];
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#namespace KmipSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Path where KMIP secret backend will be mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#path KmipSecretBackend#path}
  */
  readonly path: string;
  /**
  * Hostnames to include in the server's TLS certificate as SAN DNS names. The first will be used as the common name (CN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#server_hostnames KmipSecretBackend#server_hostnames}
  */
  readonly serverHostnames?: string[];
  /**
  * IPs to include in the server's TLS certificate as SAN IP addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#server_ips KmipSecretBackend#server_ips}
  */
  readonly serverIps?: string[];
  /**
  * CA key bits, valid values depend on key type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#tls_ca_key_bits KmipSecretBackend#tls_ca_key_bits}
  */
  readonly tlsCaKeyBits?: number;
  /**
  * CA key type, rsa or ec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#tls_ca_key_type KmipSecretBackend#tls_ca_key_type}
  */
  readonly tlsCaKeyType?: string;
  /**
  * Minimum TLS version to accept
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#tls_min_version KmipSecretBackend#tls_min_version}
  */
  readonly tlsMinVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend vault_kmip_secret_backend}
*/
export class KmipSecretBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kmip_secret_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmipSecretBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmipSecretBackend to import
  * @param importFromId The id of the existing KmipSecretBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmipSecretBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_kmip_secret_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/kmip_secret_backend vault_kmip_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmipSecretBackendConfig
  */
  public constructor(scope: Construct, id: string, config: KmipSecretBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kmip_secret_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.5.0',
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
    this._defaultTlsClientKeyBits = config.defaultTlsClientKeyBits;
    this._defaultTlsClientKeyType = config.defaultTlsClientKeyType;
    this._defaultTlsClientTtl = config.defaultTlsClientTtl;
    this._description = config.description;
    this._disableRemount = config.disableRemount;
    this._id = config.id;
    this._listenAddrs = config.listenAddrs;
    this._namespace = config.namespace;
    this._path = config.path;
    this._serverHostnames = config.serverHostnames;
    this._serverIps = config.serverIps;
    this._tlsCaKeyBits = config.tlsCaKeyBits;
    this._tlsCaKeyType = config.tlsCaKeyType;
    this._tlsMinVersion = config.tlsMinVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_tls_client_key_bits - computed: true, optional: true, required: false
  private _defaultTlsClientKeyBits?: number; 
  public get defaultTlsClientKeyBits() {
    return this.getNumberAttribute('default_tls_client_key_bits');
  }
  public set defaultTlsClientKeyBits(value: number) {
    this._defaultTlsClientKeyBits = value;
  }
  public resetDefaultTlsClientKeyBits() {
    this._defaultTlsClientKeyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTlsClientKeyBitsInput() {
    return this._defaultTlsClientKeyBits;
  }

  // default_tls_client_key_type - computed: true, optional: true, required: false
  private _defaultTlsClientKeyType?: string; 
  public get defaultTlsClientKeyType() {
    return this.getStringAttribute('default_tls_client_key_type');
  }
  public set defaultTlsClientKeyType(value: string) {
    this._defaultTlsClientKeyType = value;
  }
  public resetDefaultTlsClientKeyType() {
    this._defaultTlsClientKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTlsClientKeyTypeInput() {
    return this._defaultTlsClientKeyType;
  }

  // default_tls_client_ttl - computed: true, optional: true, required: false
  private _defaultTlsClientTtl?: number; 
  public get defaultTlsClientTtl() {
    return this.getNumberAttribute('default_tls_client_ttl');
  }
  public set defaultTlsClientTtl(value: number) {
    this._defaultTlsClientTtl = value;
  }
  public resetDefaultTlsClientTtl() {
    this._defaultTlsClientTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTlsClientTtlInput() {
    return this._defaultTlsClientTtl;
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

  // listen_addrs - computed: true, optional: true, required: false
  private _listenAddrs?: string[]; 
  public get listenAddrs() {
    return cdktf.Fn.tolist(this.getListAttribute('listen_addrs'));
  }
  public set listenAddrs(value: string[]) {
    this._listenAddrs = value;
  }
  public resetListenAddrs() {
    this._listenAddrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenAddrsInput() {
    return this._listenAddrs;
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

  // server_hostnames - computed: true, optional: true, required: false
  private _serverHostnames?: string[]; 
  public get serverHostnames() {
    return cdktf.Fn.tolist(this.getListAttribute('server_hostnames'));
  }
  public set serverHostnames(value: string[]) {
    this._serverHostnames = value;
  }
  public resetServerHostnames() {
    this._serverHostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostnamesInput() {
    return this._serverHostnames;
  }

  // server_ips - computed: true, optional: true, required: false
  private _serverIps?: string[]; 
  public get serverIps() {
    return cdktf.Fn.tolist(this.getListAttribute('server_ips'));
  }
  public set serverIps(value: string[]) {
    this._serverIps = value;
  }
  public resetServerIps() {
    this._serverIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpsInput() {
    return this._serverIps;
  }

  // tls_ca_key_bits - computed: true, optional: true, required: false
  private _tlsCaKeyBits?: number; 
  public get tlsCaKeyBits() {
    return this.getNumberAttribute('tls_ca_key_bits');
  }
  public set tlsCaKeyBits(value: number) {
    this._tlsCaKeyBits = value;
  }
  public resetTlsCaKeyBits() {
    this._tlsCaKeyBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaKeyBitsInput() {
    return this._tlsCaKeyBits;
  }

  // tls_ca_key_type - computed: true, optional: true, required: false
  private _tlsCaKeyType?: string; 
  public get tlsCaKeyType() {
    return this.getStringAttribute('tls_ca_key_type');
  }
  public set tlsCaKeyType(value: string) {
    this._tlsCaKeyType = value;
  }
  public resetTlsCaKeyType() {
    this._tlsCaKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCaKeyTypeInput() {
    return this._tlsCaKeyType;
  }

  // tls_min_version - computed: true, optional: true, required: false
  private _tlsMinVersion?: string; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_tls_client_key_bits: cdktf.numberToTerraform(this._defaultTlsClientKeyBits),
      default_tls_client_key_type: cdktf.stringToTerraform(this._defaultTlsClientKeyType),
      default_tls_client_ttl: cdktf.numberToTerraform(this._defaultTlsClientTtl),
      description: cdktf.stringToTerraform(this._description),
      disable_remount: cdktf.booleanToTerraform(this._disableRemount),
      id: cdktf.stringToTerraform(this._id),
      listen_addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._listenAddrs),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      server_hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverHostnames),
      server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverIps),
      tls_ca_key_bits: cdktf.numberToTerraform(this._tlsCaKeyBits),
      tls_ca_key_type: cdktf.stringToTerraform(this._tlsCaKeyType),
      tls_min_version: cdktf.stringToTerraform(this._tlsMinVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_tls_client_key_bits: {
        value: cdktf.numberToHclTerraform(this._defaultTlsClientKeyBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_tls_client_key_type: {
        value: cdktf.stringToHclTerraform(this._defaultTlsClientKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_tls_client_ttl: {
        value: cdktf.numberToHclTerraform(this._defaultTlsClientTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_remount: {
        value: cdktf.booleanToHclTerraform(this._disableRemount),
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
      listen_addrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._listenAddrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      server_hostnames: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverHostnames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tls_ca_key_bits: {
        value: cdktf.numberToHclTerraform(this._tlsCaKeyBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_ca_key_type: {
        value: cdktf.stringToHclTerraform(this._tlsCaKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_min_version: {
        value: cdktf.stringToHclTerraform(this._tlsMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
