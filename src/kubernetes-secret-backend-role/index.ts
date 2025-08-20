/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesSecretBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A label selector for Kubernetes namespaces in which credentials can begenerated. Accepts either a JSON or YAML object. The value should be of typeLabelSelector. If set with `allowed_kubernetes_namespace`, the conditions are `OR`ed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespace_selector KubernetesSecretBackendRole#allowed_kubernetes_namespace_selector}
  */
  readonly allowedKubernetesNamespaceSelector?: string;
  /**
  * The list of Kubernetes namespaces this role can generate credentials for. If set to '*' all namespaces are allowed. If set with`allowed_kubernetes_namespace_selector`, the conditions are `OR`ed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespaces KubernetesSecretBackendRole#allowed_kubernetes_namespaces}
  */
  readonly allowedKubernetesNamespaces?: string[];
  /**
  * The mount path for the Kubernetes secrets engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#backend KubernetesSecretBackendRole#backend}
  */
  readonly backend: string;
  /**
  * Additional annotations to apply to all generated Kubernetes objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#extra_annotations KubernetesSecretBackendRole#extra_annotations}
  */
  readonly extraAnnotations?: { [key: string]: string };
  /**
  * Additional labels to apply to all generated Kubernetes objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#extra_labels KubernetesSecretBackendRole#extra_labels}
  */
  readonly extraLabels?: { [key: string]: string };
  /**
  * The Role or ClusterRole rules to use when generating a role. Accepts either JSON or YAML formatted rules. Mutually exclusive with 'service_account_name' and 'kubernetes_role_name'. If set, the entire chain of Kubernetes objects will be generated when credentials are requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#generated_role_rules KubernetesSecretBackendRole#generated_role_rules}
  */
  readonly generatedRoleRules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The pre-existing Role or ClusterRole to bind a generated service account to. Mutually exclusive with 'service_account_name' and 'generated_role_rules'. If set, Kubernetes token, service account, and role binding objects will be created when credentials are requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#kubernetes_role_name KubernetesSecretBackendRole#kubernetes_role_name}
  */
  readonly kubernetesRoleName?: string;
  /**
  * Specifies whether the Kubernetes role is a Role or ClusterRole.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#kubernetes_role_type KubernetesSecretBackendRole#kubernetes_role_type}
  */
  readonly kubernetesRoleType?: string;
  /**
  * The name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#name KubernetesSecretBackendRole#name}
  */
  readonly name: string;
  /**
  * The name template to use when generating service accounts, roles and role bindings. If unset, a default template is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#name_template KubernetesSecretBackendRole#name_template}
  */
  readonly nameTemplate?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#namespace KubernetesSecretBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * The pre-existing service account to generate tokens for. Mutually exclusive with 'kubernetes_role_name' and 'generated_role_rules'. If set, only a Kubernetes token will be created when credentials are requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#service_account_name KubernetesSecretBackendRole#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * The default TTL for generated Kubernetes tokens in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#token_default_ttl KubernetesSecretBackendRole#token_default_ttl}
  */
  readonly tokenDefaultTtl?: number;
  /**
  * The maximum TTL for generated Kubernetes tokens in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#token_max_ttl KubernetesSecretBackendRole#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role vault_kubernetes_secret_backend_role}
*/
export class KubernetesSecretBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kubernetes_secret_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesSecretBackendRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesSecretBackendRole to import
  * @param importFromId The id of the existing KubernetesSecretBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesSecretBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_kubernetes_secret_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role vault_kubernetes_secret_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesSecretBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesSecretBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kubernetes_secret_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.2.1',
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
    this._allowedKubernetesNamespaceSelector = config.allowedKubernetesNamespaceSelector;
    this._allowedKubernetesNamespaces = config.allowedKubernetesNamespaces;
    this._backend = config.backend;
    this._extraAnnotations = config.extraAnnotations;
    this._extraLabels = config.extraLabels;
    this._generatedRoleRules = config.generatedRoleRules;
    this._id = config.id;
    this._kubernetesRoleName = config.kubernetesRoleName;
    this._kubernetesRoleType = config.kubernetesRoleType;
    this._name = config.name;
    this._nameTemplate = config.nameTemplate;
    this._namespace = config.namespace;
    this._serviceAccountName = config.serviceAccountName;
    this._tokenDefaultTtl = config.tokenDefaultTtl;
    this._tokenMaxTtl = config.tokenMaxTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_kubernetes_namespace_selector - computed: false, optional: true, required: false
  private _allowedKubernetesNamespaceSelector?: string; 
  public get allowedKubernetesNamespaceSelector() {
    return this.getStringAttribute('allowed_kubernetes_namespace_selector');
  }
  public set allowedKubernetesNamespaceSelector(value: string) {
    this._allowedKubernetesNamespaceSelector = value;
  }
  public resetAllowedKubernetesNamespaceSelector() {
    this._allowedKubernetesNamespaceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedKubernetesNamespaceSelectorInput() {
    return this._allowedKubernetesNamespaceSelector;
  }

  // allowed_kubernetes_namespaces - computed: false, optional: true, required: false
  private _allowedKubernetesNamespaces?: string[]; 
  public get allowedKubernetesNamespaces() {
    return this.getListAttribute('allowed_kubernetes_namespaces');
  }
  public set allowedKubernetesNamespaces(value: string[]) {
    this._allowedKubernetesNamespaces = value;
  }
  public resetAllowedKubernetesNamespaces() {
    this._allowedKubernetesNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedKubernetesNamespacesInput() {
    return this._allowedKubernetesNamespaces;
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

  // extra_annotations - computed: false, optional: true, required: false
  private _extraAnnotations?: { [key: string]: string }; 
  public get extraAnnotations() {
    return this.getStringMapAttribute('extra_annotations');
  }
  public set extraAnnotations(value: { [key: string]: string }) {
    this._extraAnnotations = value;
  }
  public resetExtraAnnotations() {
    this._extraAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraAnnotationsInput() {
    return this._extraAnnotations;
  }

  // extra_labels - computed: false, optional: true, required: false
  private _extraLabels?: { [key: string]: string }; 
  public get extraLabels() {
    return this.getStringMapAttribute('extra_labels');
  }
  public set extraLabels(value: { [key: string]: string }) {
    this._extraLabels = value;
  }
  public resetExtraLabels() {
    this._extraLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraLabelsInput() {
    return this._extraLabels;
  }

  // generated_role_rules - computed: false, optional: true, required: false
  private _generatedRoleRules?: string; 
  public get generatedRoleRules() {
    return this.getStringAttribute('generated_role_rules');
  }
  public set generatedRoleRules(value: string) {
    this._generatedRoleRules = value;
  }
  public resetGeneratedRoleRules() {
    this._generatedRoleRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedRoleRulesInput() {
    return this._generatedRoleRules;
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

  // kubernetes_role_name - computed: false, optional: true, required: false
  private _kubernetesRoleName?: string; 
  public get kubernetesRoleName() {
    return this.getStringAttribute('kubernetes_role_name');
  }
  public set kubernetesRoleName(value: string) {
    this._kubernetesRoleName = value;
  }
  public resetKubernetesRoleName() {
    this._kubernetesRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesRoleNameInput() {
    return this._kubernetesRoleName;
  }

  // kubernetes_role_type - computed: false, optional: true, required: false
  private _kubernetesRoleType?: string; 
  public get kubernetesRoleType() {
    return this.getStringAttribute('kubernetes_role_type');
  }
  public set kubernetesRoleType(value: string) {
    this._kubernetesRoleType = value;
  }
  public resetKubernetesRoleType() {
    this._kubernetesRoleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesRoleTypeInput() {
    return this._kubernetesRoleType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_template - computed: false, optional: true, required: false
  private _nameTemplate?: string; 
  public get nameTemplate() {
    return this.getStringAttribute('name_template');
  }
  public set nameTemplate(value: string) {
    this._nameTemplate = value;
  }
  public resetNameTemplate() {
    this._nameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTemplateInput() {
    return this._nameTemplate;
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

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // token_default_ttl - computed: false, optional: true, required: false
  private _tokenDefaultTtl?: number; 
  public get tokenDefaultTtl() {
    return this.getNumberAttribute('token_default_ttl');
  }
  public set tokenDefaultTtl(value: number) {
    this._tokenDefaultTtl = value;
  }
  public resetTokenDefaultTtl() {
    this._tokenDefaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenDefaultTtlInput() {
    return this._tokenDefaultTtl;
  }

  // token_max_ttl - computed: false, optional: true, required: false
  private _tokenMaxTtl?: number; 
  public get tokenMaxTtl() {
    return this.getNumberAttribute('token_max_ttl');
  }
  public set tokenMaxTtl(value: number) {
    this._tokenMaxTtl = value;
  }
  public resetTokenMaxTtl() {
    this._tokenMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenMaxTtlInput() {
    return this._tokenMaxTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_kubernetes_namespace_selector: cdktf.stringToTerraform(this._allowedKubernetesNamespaceSelector),
      allowed_kubernetes_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedKubernetesNamespaces),
      backend: cdktf.stringToTerraform(this._backend),
      extra_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraAnnotations),
      extra_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraLabels),
      generated_role_rules: cdktf.stringToTerraform(this._generatedRoleRules),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_role_name: cdktf.stringToTerraform(this._kubernetesRoleName),
      kubernetes_role_type: cdktf.stringToTerraform(this._kubernetesRoleType),
      name: cdktf.stringToTerraform(this._name),
      name_template: cdktf.stringToTerraform(this._nameTemplate),
      namespace: cdktf.stringToTerraform(this._namespace),
      service_account_name: cdktf.stringToTerraform(this._serviceAccountName),
      token_default_ttl: cdktf.numberToTerraform(this._tokenDefaultTtl),
      token_max_ttl: cdktf.numberToTerraform(this._tokenMaxTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_kubernetes_namespace_selector: {
        value: cdktf.stringToHclTerraform(this._allowedKubernetesNamespaceSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_kubernetes_namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedKubernetesNamespaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraAnnotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      extra_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      generated_role_rules: {
        value: cdktf.stringToHclTerraform(this._generatedRoleRules),
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
      kubernetes_role_name: {
        value: cdktf.stringToHclTerraform(this._kubernetesRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_role_type: {
        value: cdktf.stringToHclTerraform(this._kubernetesRoleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_template: {
        value: cdktf.stringToHclTerraform(this._nameTemplate),
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
      service_account_name: {
        value: cdktf.stringToHclTerraform(this._serviceAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_default_ttl: {
        value: cdktf.numberToHclTerraform(this._tokenDefaultTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_max_ttl: {
        value: cdktf.numberToHclTerraform(this._tokenMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
