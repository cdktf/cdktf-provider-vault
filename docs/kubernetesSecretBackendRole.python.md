# `kubernetesSecretBackendRole` Submodule <a name="`kubernetesSecretBackendRole` Submodule" id="@cdktf/provider-vault.kubernetesSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesSecretBackendRole <a name="KubernetesSecretBackendRole" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role vault_kubernetes_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_secret_backend_role

kubernetesSecretBackendRole.KubernetesSecretBackendRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  name: str,
  allowed_kubernetes_namespaces: typing.List[str] = None,
  allowed_kubernetes_namespace_selector: str = None,
  extra_annotations: typing.Mapping[str] = None,
  extra_labels: typing.Mapping[str] = None,
  generated_role_rules: str = None,
  id: str = None,
  kubernetes_role_name: str = None,
  kubernetes_role_type: str = None,
  namespace: str = None,
  name_template: str = None,
  service_account_name: str = None,
  token_default_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The mount path for the Kubernetes secrets engine. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.allowedKubernetesNamespaces">allowed_kubernetes_namespaces</a></code> | <code>typing.List[str]</code> | The list of Kubernetes namespaces this role can generate credentials for. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.allowedKubernetesNamespaceSelector">allowed_kubernetes_namespace_selector</a></code> | <code>str</code> | A label selector for Kubernetes namespaces in which credentials can begenerated. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.extraAnnotations">extra_annotations</a></code> | <code>typing.Mapping[str]</code> | Additional annotations to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.extraLabels">extra_labels</a></code> | <code>typing.Mapping[str]</code> | Additional labels to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.generatedRoleRules">generated_role_rules</a></code> | <code>str</code> | The Role or ClusterRole rules to use when generating a role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.kubernetesRoleName">kubernetes_role_name</a></code> | <code>str</code> | The pre-existing Role or ClusterRole to bind a generated service account to. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.kubernetesRoleType">kubernetes_role_type</a></code> | <code>str</code> | Specifies whether the Kubernetes role is a Role or ClusterRole. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.nameTemplate">name_template</a></code> | <code>str</code> | The name template to use when generating service accounts, roles and role bindings. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.serviceAccountName">service_account_name</a></code> | <code>str</code> | The pre-existing service account to generate tokens for. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.tokenDefaultTtl">token_default_ttl</a></code> | <code>typing.Union[int, float]</code> | The default TTL for generated Kubernetes tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum TTL for generated Kubernetes tokens in seconds. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

The mount path for the Kubernetes secrets engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#backend KubernetesSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#name KubernetesSecretBackendRole#name}

---

##### `allowed_kubernetes_namespaces`<sup>Optional</sup> <a name="allowed_kubernetes_namespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.allowedKubernetesNamespaces"></a>

- *Type:* typing.List[str]

The list of Kubernetes namespaces this role can generate credentials for.

If set to '*' all namespaces are allowed. If set with`allowed_kubernetes_namespace_selector`, the conditions are `OR`ed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespaces KubernetesSecretBackendRole#allowed_kubernetes_namespaces}

---

##### `allowed_kubernetes_namespace_selector`<sup>Optional</sup> <a name="allowed_kubernetes_namespace_selector" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.allowedKubernetesNamespaceSelector"></a>

- *Type:* str

A label selector for Kubernetes namespaces in which credentials can begenerated.

Accepts either a JSON or YAML object. The value should be of typeLabelSelector. If set with `allowed_kubernetes_namespace`, the conditions are `OR`ed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespace_selector KubernetesSecretBackendRole#allowed_kubernetes_namespace_selector}

---

##### `extra_annotations`<sup>Optional</sup> <a name="extra_annotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.extraAnnotations"></a>

- *Type:* typing.Mapping[str]

Additional annotations to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#extra_annotations KubernetesSecretBackendRole#extra_annotations}

---

##### `extra_labels`<sup>Optional</sup> <a name="extra_labels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.extraLabels"></a>

- *Type:* typing.Mapping[str]

Additional labels to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#extra_labels KubernetesSecretBackendRole#extra_labels}

---

##### `generated_role_rules`<sup>Optional</sup> <a name="generated_role_rules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.generatedRoleRules"></a>

- *Type:* str

The Role or ClusterRole rules to use when generating a role.

Accepts either JSON or YAML formatted rules. Mutually exclusive with 'service_account_name' and 'kubernetes_role_name'. If set, the entire chain of Kubernetes objects will be generated when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#generated_role_rules KubernetesSecretBackendRole#generated_role_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes_role_name`<sup>Optional</sup> <a name="kubernetes_role_name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.kubernetesRoleName"></a>

- *Type:* str

The pre-existing Role or ClusterRole to bind a generated service account to.

Mutually exclusive with 'service_account_name' and 'generated_role_rules'. If set, Kubernetes token, service account, and role binding objects will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#kubernetes_role_name KubernetesSecretBackendRole#kubernetes_role_name}

---

##### `kubernetes_role_type`<sup>Optional</sup> <a name="kubernetes_role_type" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.kubernetesRoleType"></a>

- *Type:* str

Specifies whether the Kubernetes role is a Role or ClusterRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#kubernetes_role_type KubernetesSecretBackendRole#kubernetes_role_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#namespace KubernetesSecretBackendRole#namespace}

---

##### `name_template`<sup>Optional</sup> <a name="name_template" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.nameTemplate"></a>

- *Type:* str

The name template to use when generating service accounts, roles and role bindings.

If unset, a default template is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#name_template KubernetesSecretBackendRole#name_template}

---

##### `service_account_name`<sup>Optional</sup> <a name="service_account_name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.serviceAccountName"></a>

- *Type:* str

The pre-existing service account to generate tokens for.

Mutually exclusive with 'kubernetes_role_name' and 'generated_role_rules'. If set, only a Kubernetes token will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#service_account_name KubernetesSecretBackendRole#service_account_name}

---

##### `token_default_ttl`<sup>Optional</sup> <a name="token_default_ttl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.tokenDefaultTtl"></a>

- *Type:* typing.Union[int, float]

The default TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#token_default_ttl KubernetesSecretBackendRole#token_default_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#token_max_ttl KubernetesSecretBackendRole#token_max_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetAllowedKubernetesNamespaces">reset_allowed_kubernetes_namespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetAllowedKubernetesNamespaceSelector">reset_allowed_kubernetes_namespace_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraAnnotations">reset_extra_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraLabels">reset_extra_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetGeneratedRoleRules">reset_generated_role_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleName">reset_kubernetes_role_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleType">reset_kubernetes_role_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNameTemplate">reset_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetServiceAccountName">reset_service_account_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenDefaultTtl">reset_token_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_kubernetes_namespaces` <a name="reset_allowed_kubernetes_namespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetAllowedKubernetesNamespaces"></a>

```python
def reset_allowed_kubernetes_namespaces() -> None
```

##### `reset_allowed_kubernetes_namespace_selector` <a name="reset_allowed_kubernetes_namespace_selector" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetAllowedKubernetesNamespaceSelector"></a>

```python
def reset_allowed_kubernetes_namespace_selector() -> None
```

##### `reset_extra_annotations` <a name="reset_extra_annotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraAnnotations"></a>

```python
def reset_extra_annotations() -> None
```

##### `reset_extra_labels` <a name="reset_extra_labels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraLabels"></a>

```python
def reset_extra_labels() -> None
```

##### `reset_generated_role_rules` <a name="reset_generated_role_rules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetGeneratedRoleRules"></a>

```python
def reset_generated_role_rules() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kubernetes_role_name` <a name="reset_kubernetes_role_name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleName"></a>

```python
def reset_kubernetes_role_name() -> None
```

##### `reset_kubernetes_role_type` <a name="reset_kubernetes_role_type" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleType"></a>

```python
def reset_kubernetes_role_type() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_name_template` <a name="reset_name_template" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNameTemplate"></a>

```python
def reset_name_template() -> None
```

##### `reset_service_account_name` <a name="reset_service_account_name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetServiceAccountName"></a>

```python
def reset_service_account_name() -> None
```

##### `reset_token_default_ttl` <a name="reset_token_default_ttl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenDefaultTtl"></a>

```python
def reset_token_default_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KubernetesSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_secret_backend_role

kubernetesSecretBackendRole.KubernetesSecretBackendRole.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_secret_backend_role

kubernetesSecretBackendRole.KubernetesSecretBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_secret_backend_role

kubernetesSecretBackendRole.KubernetesSecretBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_secret_backend_role

kubernetesSecretBackendRole.KubernetesSecretBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KubernetesSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KubernetesSecretBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KubernetesSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaceSelectorInput">allowed_kubernetes_namespace_selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespacesInput">allowed_kubernetes_namespaces_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotationsInput">extra_annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabelsInput">extra_labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRulesInput">generated_role_rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleNameInput">kubernetes_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleTypeInput">kubernetes_role_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplateInput">name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountNameInput">service_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtlInput">token_default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaces">allowed_kubernetes_namespaces</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaceSelector">allowed_kubernetes_namespace_selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotations">extra_annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabels">extra_labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRules">generated_role_rules</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleName">kubernetes_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleType">kubernetes_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplate">name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountName">service_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtl">token_default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_kubernetes_namespace_selector_input`<sup>Optional</sup> <a name="allowed_kubernetes_namespace_selector_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaceSelectorInput"></a>

```python
allowed_kubernetes_namespace_selector_input: str
```

- *Type:* str

---

##### `allowed_kubernetes_namespaces_input`<sup>Optional</sup> <a name="allowed_kubernetes_namespaces_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespacesInput"></a>

```python
allowed_kubernetes_namespaces_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `extra_annotations_input`<sup>Optional</sup> <a name="extra_annotations_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotationsInput"></a>

```python
extra_annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extra_labels_input`<sup>Optional</sup> <a name="extra_labels_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabelsInput"></a>

```python
extra_labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generated_role_rules_input`<sup>Optional</sup> <a name="generated_role_rules_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRulesInput"></a>

```python
generated_role_rules_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kubernetes_role_name_input`<sup>Optional</sup> <a name="kubernetes_role_name_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleNameInput"></a>

```python
kubernetes_role_name_input: str
```

- *Type:* str

---

##### `kubernetes_role_type_input`<sup>Optional</sup> <a name="kubernetes_role_type_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleTypeInput"></a>

```python
kubernetes_role_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name_template_input`<sup>Optional</sup> <a name="name_template_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplateInput"></a>

```python
name_template_input: str
```

- *Type:* str

---

##### `service_account_name_input`<sup>Optional</sup> <a name="service_account_name_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountNameInput"></a>

```python
service_account_name_input: str
```

- *Type:* str

---

##### `token_default_ttl_input`<sup>Optional</sup> <a name="token_default_ttl_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtlInput"></a>

```python
token_default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `allowed_kubernetes_namespaces`<sup>Required</sup> <a name="allowed_kubernetes_namespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaces"></a>

```python
allowed_kubernetes_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_kubernetes_namespace_selector`<sup>Required</sup> <a name="allowed_kubernetes_namespace_selector" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaceSelector"></a>

```python
allowed_kubernetes_namespace_selector: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `extra_annotations`<sup>Required</sup> <a name="extra_annotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotations"></a>

```python
extra_annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extra_labels`<sup>Required</sup> <a name="extra_labels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabels"></a>

```python
extra_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generated_role_rules`<sup>Required</sup> <a name="generated_role_rules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRules"></a>

```python
generated_role_rules: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_role_name`<sup>Required</sup> <a name="kubernetes_role_name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleName"></a>

```python
kubernetes_role_name: str
```

- *Type:* str

---

##### `kubernetes_role_type`<sup>Required</sup> <a name="kubernetes_role_type" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleType"></a>

```python
kubernetes_role_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `name_template`<sup>Required</sup> <a name="name_template" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplate"></a>

```python
name_template: str
```

- *Type:* str

---

##### `service_account_name`<sup>Required</sup> <a name="service_account_name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountName"></a>

```python
service_account_name: str
```

- *Type:* str

---

##### `token_default_ttl`<sup>Required</sup> <a name="token_default_ttl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtl"></a>

```python
token_default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesSecretBackendRoleConfig <a name="KubernetesSecretBackendRoleConfig" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_secret_backend_role

kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  name: str,
  allowed_kubernetes_namespaces: typing.List[str] = None,
  allowed_kubernetes_namespace_selector: str = None,
  extra_annotations: typing.Mapping[str] = None,
  extra_labels: typing.Mapping[str] = None,
  generated_role_rules: str = None,
  id: str = None,
  kubernetes_role_name: str = None,
  kubernetes_role_type: str = None,
  namespace: str = None,
  name_template: str = None,
  service_account_name: str = None,
  token_default_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | The mount path for the Kubernetes secrets engine. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.name">name</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaces">allowed_kubernetes_namespaces</a></code> | <code>typing.List[str]</code> | The list of Kubernetes namespaces this role can generate credentials for. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaceSelector">allowed_kubernetes_namespace_selector</a></code> | <code>str</code> | A label selector for Kubernetes namespaces in which credentials can begenerated. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraAnnotations">extra_annotations</a></code> | <code>typing.Mapping[str]</code> | Additional annotations to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraLabels">extra_labels</a></code> | <code>typing.Mapping[str]</code> | Additional labels to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.generatedRoleRules">generated_role_rules</a></code> | <code>str</code> | The Role or ClusterRole rules to use when generating a role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleName">kubernetes_role_name</a></code> | <code>str</code> | The pre-existing Role or ClusterRole to bind a generated service account to. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleType">kubernetes_role_type</a></code> | <code>str</code> | Specifies whether the Kubernetes role is a Role or ClusterRole. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.nameTemplate">name_template</a></code> | <code>str</code> | The name template to use when generating service accounts, roles and role bindings. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.serviceAccountName">service_account_name</a></code> | <code>str</code> | The pre-existing service account to generate tokens for. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenDefaultTtl">token_default_ttl</a></code> | <code>typing.Union[int, float]</code> | The default TTL for generated Kubernetes tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum TTL for generated Kubernetes tokens in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The mount path for the Kubernetes secrets engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#backend KubernetesSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#name KubernetesSecretBackendRole#name}

---

##### `allowed_kubernetes_namespaces`<sup>Optional</sup> <a name="allowed_kubernetes_namespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaces"></a>

```python
allowed_kubernetes_namespaces: typing.List[str]
```

- *Type:* typing.List[str]

The list of Kubernetes namespaces this role can generate credentials for.

If set to '*' all namespaces are allowed. If set with`allowed_kubernetes_namespace_selector`, the conditions are `OR`ed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespaces KubernetesSecretBackendRole#allowed_kubernetes_namespaces}

---

##### `allowed_kubernetes_namespace_selector`<sup>Optional</sup> <a name="allowed_kubernetes_namespace_selector" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaceSelector"></a>

```python
allowed_kubernetes_namespace_selector: str
```

- *Type:* str

A label selector for Kubernetes namespaces in which credentials can begenerated.

Accepts either a JSON or YAML object. The value should be of typeLabelSelector. If set with `allowed_kubernetes_namespace`, the conditions are `OR`ed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespace_selector KubernetesSecretBackendRole#allowed_kubernetes_namespace_selector}

---

##### `extra_annotations`<sup>Optional</sup> <a name="extra_annotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraAnnotations"></a>

```python
extra_annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Additional annotations to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#extra_annotations KubernetesSecretBackendRole#extra_annotations}

---

##### `extra_labels`<sup>Optional</sup> <a name="extra_labels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraLabels"></a>

```python
extra_labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Additional labels to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#extra_labels KubernetesSecretBackendRole#extra_labels}

---

##### `generated_role_rules`<sup>Optional</sup> <a name="generated_role_rules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.generatedRoleRules"></a>

```python
generated_role_rules: str
```

- *Type:* str

The Role or ClusterRole rules to use when generating a role.

Accepts either JSON or YAML formatted rules. Mutually exclusive with 'service_account_name' and 'kubernetes_role_name'. If set, the entire chain of Kubernetes objects will be generated when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#generated_role_rules KubernetesSecretBackendRole#generated_role_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetes_role_name`<sup>Optional</sup> <a name="kubernetes_role_name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleName"></a>

```python
kubernetes_role_name: str
```

- *Type:* str

The pre-existing Role or ClusterRole to bind a generated service account to.

Mutually exclusive with 'service_account_name' and 'generated_role_rules'. If set, Kubernetes token, service account, and role binding objects will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#kubernetes_role_name KubernetesSecretBackendRole#kubernetes_role_name}

---

##### `kubernetes_role_type`<sup>Optional</sup> <a name="kubernetes_role_type" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleType"></a>

```python
kubernetes_role_type: str
```

- *Type:* str

Specifies whether the Kubernetes role is a Role or ClusterRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#kubernetes_role_type KubernetesSecretBackendRole#kubernetes_role_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#namespace KubernetesSecretBackendRole#namespace}

---

##### `name_template`<sup>Optional</sup> <a name="name_template" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.nameTemplate"></a>

```python
name_template: str
```

- *Type:* str

The name template to use when generating service accounts, roles and role bindings.

If unset, a default template is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#name_template KubernetesSecretBackendRole#name_template}

---

##### `service_account_name`<sup>Optional</sup> <a name="service_account_name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.serviceAccountName"></a>

```python
service_account_name: str
```

- *Type:* str

The pre-existing service account to generate tokens for.

Mutually exclusive with 'kubernetes_role_name' and 'generated_role_rules'. If set, only a Kubernetes token will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#service_account_name KubernetesSecretBackendRole#service_account_name}

---

##### `token_default_ttl`<sup>Optional</sup> <a name="token_default_ttl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenDefaultTtl"></a>

```python
token_default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#token_default_ttl KubernetesSecretBackendRole#token_default_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/kubernetes_secret_backend_role#token_max_ttl KubernetesSecretBackendRole#token_max_ttl}

---



