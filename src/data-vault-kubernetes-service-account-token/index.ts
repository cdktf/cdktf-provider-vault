// https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/data-sources/kubernetes_service_account_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultKubernetesServiceAccountTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Kubernetes secret backend to generate service account tokens from.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/data-sources/kubernetes_service_account_token#backend DataVaultKubernetesServiceAccountToken#backend}
  */
  readonly backend: string;
  /**
  * If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/data-sources/kubernetes_service_account_token#cluster_role_binding DataVaultKubernetesServiceAccountToken#cluster_role_binding}
  */
  readonly clusterRoleBinding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Kubernetes namespace in which to generate the credentials.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/data-sources/kubernetes_service_account_token#kubernetes_namespace DataVaultKubernetesServiceAccountToken#kubernetes_namespace}
  */
  readonly kubernetesNamespace: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/data-sources/kubernetes_service_account_token#namespace DataVaultKubernetesServiceAccountToken#namespace}
  */
  readonly namespace?: string;
  /**
  * The name of the role.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/data-sources/kubernetes_service_account_token#role DataVaultKubernetesServiceAccountToken#role}
  */
  readonly role: string;
  /**
  * The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/data-sources/kubernetes_service_account_token#ttl DataVaultKubernetesServiceAccountToken#ttl}
  */
  readonly ttl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/data-sources/kubernetes_service_account_token vault_kubernetes_service_account_token}
*/
export class DataVaultKubernetesServiceAccountToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kubernetes_service_account_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/data-sources/kubernetes_service_account_token vault_kubernetes_service_account_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultKubernetesServiceAccountTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataVaultKubernetesServiceAccountTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kubernetes_service_account_token',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.16.0',
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
    this._clusterRoleBinding = config.clusterRoleBinding;
    this._id = config.id;
    this._kubernetesNamespace = config.kubernetesNamespace;
    this._namespace = config.namespace;
    this._role = config.role;
    this._ttl = config.ttl;
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

  // cluster_role_binding - computed: false, optional: true, required: false
  private _clusterRoleBinding?: boolean | cdktf.IResolvable; 
  public get clusterRoleBinding() {
    return this.getBooleanAttribute('cluster_role_binding');
  }
  public set clusterRoleBinding(value: boolean | cdktf.IResolvable) {
    this._clusterRoleBinding = value;
  }
  public resetClusterRoleBinding() {
    this._clusterRoleBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleBindingInput() {
    return this._clusterRoleBinding;
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

  // kubernetes_namespace - computed: false, optional: false, required: true
  private _kubernetesNamespace?: string; 
  public get kubernetesNamespace() {
    return this.getStringAttribute('kubernetes_namespace');
  }
  public set kubernetesNamespace(value: string) {
    this._kubernetesNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNamespaceInput() {
    return this._kubernetesNamespace;
  }

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // lease_id - computed: true, optional: false, required: false
  public get leaseId() {
    return this.getStringAttribute('lease_id');
  }

  // lease_renewable - computed: true, optional: false, required: false
  public get leaseRenewable() {
    return this.getBooleanAttribute('lease_renewable');
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

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // service_account_namespace - computed: true, optional: false, required: false
  public get serviceAccountNamespace() {
    return this.getStringAttribute('service_account_namespace');
  }

  // service_account_token - computed: true, optional: false, required: false
  public get serviceAccountToken() {
    return this.getStringAttribute('service_account_token');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      cluster_role_binding: cdktf.booleanToTerraform(this._clusterRoleBinding),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_namespace: cdktf.stringToTerraform(this._kubernetesNamespace),
      namespace: cdktf.stringToTerraform(this._namespace),
      role: cdktf.stringToTerraform(this._role),
      ttl: cdktf.stringToTerraform(this._ttl),
    };
  }
}
