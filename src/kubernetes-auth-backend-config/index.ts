/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesAuthBackendConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique name of the kubernetes backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#backend KubernetesAuthBackendConfig#backend}
  */
  readonly backend?: string;
  /**
  * Optional disable JWT issuer validation. Allows to skip ISS validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#disable_iss_validation KubernetesAuthBackendConfig#disable_iss_validation}
  */
  readonly disableIssValidation?: boolean | cdktf.IResolvable;
  /**
  * Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#disable_local_ca_jwt KubernetesAuthBackendConfig#disable_local_ca_jwt}
  */
  readonly disableLocalCaJwt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#issuer KubernetesAuthBackendConfig#issuer}
  */
  readonly issuer?: string;
  /**
  * PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#kubernetes_ca_cert KubernetesAuthBackendConfig#kubernetes_ca_cert}
  */
  readonly kubernetesCaCert?: string;
  /**
  * Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#kubernetes_host KubernetesAuthBackendConfig#kubernetes_host}
  */
  readonly kubernetesHost: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#namespace KubernetesAuthBackendConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#pem_keys KubernetesAuthBackendConfig#pem_keys}
  */
  readonly pemKeys?: string[];
  /**
  * A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login. If not set the JWT used for login will be used to access the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt KubernetesAuthBackendConfig#token_reviewer_jwt}
  */
  readonly tokenReviewerJwt?: string;
  /**
  * Use annotations from the client token's associated service account as alias metadata for the Vault entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#use_annotations_as_alias_metadata KubernetesAuthBackendConfig#use_annotations_as_alias_metadata}
  */
  readonly useAnnotationsAsAliasMetadata?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config}
*/
export class KubernetesAuthBackendConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kubernetes_auth_backend_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesAuthBackendConfig to import
  * @param importFromId The id of the existing KubernetesAuthBackendConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesAuthBackendConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_kubernetes_auth_backend_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesAuthBackendConfigConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesAuthBackendConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kubernetes_auth_backend_config',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.1.0',
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
    this._backend = config.backend;
    this._disableIssValidation = config.disableIssValidation;
    this._disableLocalCaJwt = config.disableLocalCaJwt;
    this._id = config.id;
    this._issuer = config.issuer;
    this._kubernetesCaCert = config.kubernetesCaCert;
    this._kubernetesHost = config.kubernetesHost;
    this._namespace = config.namespace;
    this._pemKeys = config.pemKeys;
    this._tokenReviewerJwt = config.tokenReviewerJwt;
    this._useAnnotationsAsAliasMetadata = config.useAnnotationsAsAliasMetadata;
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

  // issuer - computed: false, optional: true, required: false
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

  // kubernetes_host - computed: false, optional: false, required: true
  private _kubernetesHost?: string; 
  public get kubernetesHost() {
    return this.getStringAttribute('kubernetes_host');
  }
  public set kubernetesHost(value: string) {
    this._kubernetesHost = value;
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

  // pem_keys - computed: false, optional: true, required: false
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

  // token_reviewer_jwt - computed: false, optional: true, required: false
  private _tokenReviewerJwt?: string; 
  public get tokenReviewerJwt() {
    return this.getStringAttribute('token_reviewer_jwt');
  }
  public set tokenReviewerJwt(value: string) {
    this._tokenReviewerJwt = value;
  }
  public resetTokenReviewerJwt() {
    this._tokenReviewerJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenReviewerJwtInput() {
    return this._tokenReviewerJwt;
  }

  // use_annotations_as_alias_metadata - computed: true, optional: true, required: false
  private _useAnnotationsAsAliasMetadata?: boolean | cdktf.IResolvable; 
  public get useAnnotationsAsAliasMetadata() {
    return this.getBooleanAttribute('use_annotations_as_alias_metadata');
  }
  public set useAnnotationsAsAliasMetadata(value: boolean | cdktf.IResolvable) {
    this._useAnnotationsAsAliasMetadata = value;
  }
  public resetUseAnnotationsAsAliasMetadata() {
    this._useAnnotationsAsAliasMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAnnotationsAsAliasMetadataInput() {
    return this._useAnnotationsAsAliasMetadata;
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
      token_reviewer_jwt: cdktf.stringToTerraform(this._tokenReviewerJwt),
      use_annotations_as_alias_metadata: cdktf.booleanToTerraform(this._useAnnotationsAsAliasMetadata),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_iss_validation: {
        value: cdktf.booleanToHclTerraform(this._disableIssValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_local_ca_jwt: {
        value: cdktf.booleanToHclTerraform(this._disableLocalCaJwt),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_ca_cert: {
        value: cdktf.stringToHclTerraform(this._kubernetesCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_host: {
        value: cdktf.stringToHclTerraform(this._kubernetesHost),
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
      pem_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pemKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      token_reviewer_jwt: {
        value: cdktf.stringToHclTerraform(this._tokenReviewerJwt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_annotations_as_alias_metadata: {
        value: cdktf.booleanToHclTerraform(this._useAnnotationsAsAliasMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
