// https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultKubernetesAuthBackendConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of the kubernetes backend to configure.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config#backend DataVaultKubernetesAuthBackendConfig#backend}
  */
  readonly backend?: string;
  /**
  * Optional disable JWT issuer validation. Allows to skip ISS validation.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config#disable_iss_validation DataVaultKubernetesAuthBackendConfig#disable_iss_validation}
  */
  readonly disableIssValidation?: boolean | cdktf.IResolvable;
  /**
  * Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config#disable_local_ca_jwt DataVaultKubernetesAuthBackendConfig#disable_local_ca_jwt}
  */
  readonly disableLocalCaJwt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config#issuer DataVaultKubernetesAuthBackendConfig#issuer}
  */
  readonly issuer?: string;
  /**
  * PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config#kubernetes_ca_cert DataVaultKubernetesAuthBackendConfig#kubernetes_ca_cert}
  */
  readonly kubernetesCaCert?: string;
  /**
  * Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config#kubernetes_host DataVaultKubernetesAuthBackendConfig#kubernetes_host}
  */
  readonly kubernetesHost?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config#namespace DataVaultKubernetesAuthBackendConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config#pem_keys DataVaultKubernetesAuthBackendConfig#pem_keys}
  */
  readonly pemKeys?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config}
*/
export class DataVaultKubernetesAuthBackendConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kubernetes_auth_backend_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultKubernetesAuthBackendConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVaultKubernetesAuthBackendConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_kubernetes_auth_backend_config',
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
    this._backend = config.backend;
    this._disableIssValidation = config.disableIssValidation;
    this._disableLocalCaJwt = config.disableLocalCaJwt;
    this._id = config.id;
    this._issuer = config.issuer;
    this._kubernetesCaCert = config.kubernetesCaCert;
    this._kubernetesHost = config.kubernetesHost;
    this._namespace = config.namespace;
    this._pemKeys = config.pemKeys;
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

  // disable_iss_validation - computed: true, optional: true, required: false
  private _disableIssValidation?: boolean | cdktf.IResolvable; 
  public get disableIssValidation() {
    return this.getBooleanAttribute('disable_iss_validation');
  }
  public set disableIssValidation(value: boolean | cdktf.IResolvable) {
    this._disableIssValidation = value;
  }
  public resetDisableIssValidation() {
    this._disableIssValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIssValidationInput() {
    return this._disableIssValidation;
  }

  // disable_local_ca_jwt - computed: true, optional: true, required: false
  private _disableLocalCaJwt?: boolean | cdktf.IResolvable; 
  public get disableLocalCaJwt() {
    return this.getBooleanAttribute('disable_local_ca_jwt');
  }
  public set disableLocalCaJwt(value: boolean | cdktf.IResolvable) {
    this._disableLocalCaJwt = value;
  }
  public resetDisableLocalCaJwt() {
    this._disableLocalCaJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalCaJwtInput() {
    return this._disableLocalCaJwt;
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

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // kubernetes_ca_cert - computed: true, optional: true, required: false
  private _kubernetesCaCert?: string; 
  public get kubernetesCaCert() {
    return this.getStringAttribute('kubernetes_ca_cert');
  }
  public set kubernetesCaCert(value: string) {
    this._kubernetesCaCert = value;
  }
  public resetKubernetesCaCert() {
    this._kubernetesCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesCaCertInput() {
    return this._kubernetesCaCert;
  }

  // kubernetes_host - computed: true, optional: true, required: false
  private _kubernetesHost?: string; 
  public get kubernetesHost() {
    return this.getStringAttribute('kubernetes_host');
  }
  public set kubernetesHost(value: string) {
    this._kubernetesHost = value;
  }
  public resetKubernetesHost() {
    this._kubernetesHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesHostInput() {
    return this._kubernetesHost;
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

  // pem_keys - computed: true, optional: true, required: false
  private _pemKeys?: string[]; 
  public get pemKeys() {
    return this.getListAttribute('pem_keys');
  }
  public set pemKeys(value: string[]) {
    this._pemKeys = value;
  }
  public resetPemKeys() {
    this._pemKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemKeysInput() {
    return this._pemKeys;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      disable_iss_validation: cdktf.booleanToTerraform(this._disableIssValidation),
      disable_local_ca_jwt: cdktf.booleanToTerraform(this._disableLocalCaJwt),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      kubernetes_ca_cert: cdktf.stringToTerraform(this._kubernetesCaCert),
      kubernetes_host: cdktf.stringToTerraform(this._kubernetesHost),
      namespace: cdktf.stringToTerraform(this._namespace),
      pem_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pemKeys),
    };
  }
}
