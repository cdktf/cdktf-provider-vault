# `kubernetesSecretBackendRole` Submodule <a name="`kubernetesSecretBackendRole` Submodule" id="@cdktf/provider-vault.kubernetesSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesSecretBackendRole <a name="KubernetesSecretBackendRole" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role vault_kubernetes_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend_role.KubernetesSecretBackendRole;

KubernetesSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .allowedKubernetesNamespaces(java.util.List<java.lang.String>)
    .backend(java.lang.String)
    .name(java.lang.String)
//  .extraAnnotations(java.util.Map<java.lang.String, java.lang.String>)
//  .extraLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .generatedRoleRules(java.lang.String)
//  .id(java.lang.String)
//  .kubernetesRoleName(java.lang.String)
//  .kubernetesRoleType(java.lang.String)
//  .namespace(java.lang.String)
//  .nameTemplate(java.lang.String)
//  .serviceAccountName(java.lang.String)
//  .tokenDefaultTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.allowedKubernetesNamespaces">allowedKubernetesNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | The list of Kubernetes namespaces this role can generate credentials for. If set to '*' all namespaces are allowed. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The mount path for the Kubernetes secrets engine. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.extraAnnotations">extraAnnotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Additional annotations to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.extraLabels">extraLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Additional labels to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.generatedRoleRules">generatedRoleRules</a></code> | <code>java.lang.String</code> | The Role or ClusterRole rules to use when generating a role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.kubernetesRoleName">kubernetesRoleName</a></code> | <code>java.lang.String</code> | The pre-existing Role or ClusterRole to bind a generated service account to. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.kubernetesRoleType">kubernetesRoleType</a></code> | <code>java.lang.String</code> | Specifies whether the Kubernetes role is a Role or ClusterRole. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.nameTemplate">nameTemplate</a></code> | <code>java.lang.String</code> | The name template to use when generating service accounts, roles and role bindings. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.serviceAccountName">serviceAccountName</a></code> | <code>java.lang.String</code> | The pre-existing service account to generate tokens for. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.tokenDefaultTtl">tokenDefaultTtl</a></code> | <code>java.lang.Number</code> | The default TTL for generated Kubernetes tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum TTL for generated Kubernetes tokens in seconds. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedKubernetesNamespaces`<sup>Required</sup> <a name="allowedKubernetesNamespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.allowedKubernetesNamespaces"></a>

- *Type:* java.util.List<java.lang.String>

The list of Kubernetes namespaces this role can generate credentials for. If set to '*' all namespaces are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespaces KubernetesSecretBackendRole#allowed_kubernetes_namespaces}

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The mount path for the Kubernetes secrets engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#backend KubernetesSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#name KubernetesSecretBackendRole#name}

---

##### `extraAnnotations`<sup>Optional</sup> <a name="extraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.extraAnnotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Additional annotations to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#extra_annotations KubernetesSecretBackendRole#extra_annotations}

---

##### `extraLabels`<sup>Optional</sup> <a name="extraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.extraLabels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Additional labels to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#extra_labels KubernetesSecretBackendRole#extra_labels}

---

##### `generatedRoleRules`<sup>Optional</sup> <a name="generatedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.generatedRoleRules"></a>

- *Type:* java.lang.String

The Role or ClusterRole rules to use when generating a role.

Accepts either JSON or YAML formatted rules. Mutually exclusive with 'service_account_name' and 'kubernetes_role_name'. If set, the entire chain of Kubernetes objects will be generated when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#generated_role_rules KubernetesSecretBackendRole#generated_role_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesRoleName`<sup>Optional</sup> <a name="kubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.kubernetesRoleName"></a>

- *Type:* java.lang.String

The pre-existing Role or ClusterRole to bind a generated service account to.

Mutually exclusive with 'service_account_name' and 'generated_role_rules'. If set, Kubernetes token, service account, and role binding objects will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#kubernetes_role_name KubernetesSecretBackendRole#kubernetes_role_name}

---

##### `kubernetesRoleType`<sup>Optional</sup> <a name="kubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.kubernetesRoleType"></a>

- *Type:* java.lang.String

Specifies whether the Kubernetes role is a Role or ClusterRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#kubernetes_role_type KubernetesSecretBackendRole#kubernetes_role_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#namespace KubernetesSecretBackendRole#namespace}

---

##### `nameTemplate`<sup>Optional</sup> <a name="nameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.nameTemplate"></a>

- *Type:* java.lang.String

The name template to use when generating service accounts, roles and role bindings.

If unset, a default template is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#name_template KubernetesSecretBackendRole#name_template}

---

##### `serviceAccountName`<sup>Optional</sup> <a name="serviceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.serviceAccountName"></a>

- *Type:* java.lang.String

The pre-existing service account to generate tokens for.

Mutually exclusive with 'kubernetes_role_name' and 'generated_role_rules'. If set, only a Kubernetes token will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#service_account_name KubernetesSecretBackendRole#service_account_name}

---

##### `tokenDefaultTtl`<sup>Optional</sup> <a name="tokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.tokenDefaultTtl"></a>

- *Type:* java.lang.Number

The default TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#token_default_ttl KubernetesSecretBackendRole#token_default_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#token_max_ttl KubernetesSecretBackendRole#token_max_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraAnnotations">resetExtraAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraLabels">resetExtraLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetGeneratedRoleRules">resetGeneratedRoleRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleName">resetKubernetesRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleType">resetKubernetesRoleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNameTemplate">resetNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetServiceAccountName">resetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenDefaultTtl">resetTokenDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetExtraAnnotations` <a name="resetExtraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraAnnotations"></a>

```java
public void resetExtraAnnotations()
```

##### `resetExtraLabels` <a name="resetExtraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraLabels"></a>

```java
public void resetExtraLabels()
```

##### `resetGeneratedRoleRules` <a name="resetGeneratedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetGeneratedRoleRules"></a>

```java
public void resetGeneratedRoleRules()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetKubernetesRoleName` <a name="resetKubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleName"></a>

```java
public void resetKubernetesRoleName()
```

##### `resetKubernetesRoleType` <a name="resetKubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleType"></a>

```java
public void resetKubernetesRoleType()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNameTemplate` <a name="resetNameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNameTemplate"></a>

```java
public void resetNameTemplate()
```

##### `resetServiceAccountName` <a name="resetServiceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetServiceAccountName"></a>

```java
public void resetServiceAccountName()
```

##### `resetTokenDefaultTtl` <a name="resetTokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenDefaultTtl"></a>

```java
public void resetTokenDefaultTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend_role.KubernetesSecretBackendRole;

KubernetesSecretBackendRole.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend_role.KubernetesSecretBackendRole;

KubernetesSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend_role.KubernetesSecretBackendRole;

KubernetesSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend_role.KubernetesSecretBackendRole;

KubernetesSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KubernetesSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KubernetesSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KubernetesSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KubernetesSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespacesInput">allowedKubernetesNamespacesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotationsInput">extraAnnotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabelsInput">extraLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRulesInput">generatedRoleRulesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleNameInput">kubernetesRoleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleTypeInput">kubernetesRoleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplateInput">nameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountNameInput">serviceAccountNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtlInput">tokenDefaultTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaces">allowedKubernetesNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotations">extraAnnotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabels">extraLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRules">generatedRoleRules</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleName">kubernetesRoleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleType">kubernetesRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplate">nameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountName">serviceAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtl">tokenDefaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedKubernetesNamespacesInput`<sup>Optional</sup> <a name="allowedKubernetesNamespacesInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespacesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedKubernetesNamespacesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `extraAnnotationsInput`<sup>Optional</sup> <a name="extraAnnotationsInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `extraLabelsInput`<sup>Optional</sup> <a name="extraLabelsInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generatedRoleRulesInput`<sup>Optional</sup> <a name="generatedRoleRulesInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRulesInput"></a>

```java
public java.lang.String getGeneratedRoleRulesInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kubernetesRoleNameInput`<sup>Optional</sup> <a name="kubernetesRoleNameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleNameInput"></a>

```java
public java.lang.String getKubernetesRoleNameInput();
```

- *Type:* java.lang.String

---

##### `kubernetesRoleTypeInput`<sup>Optional</sup> <a name="kubernetesRoleTypeInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleTypeInput"></a>

```java
public java.lang.String getKubernetesRoleTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `nameTemplateInput`<sup>Optional</sup> <a name="nameTemplateInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplateInput"></a>

```java
public java.lang.String getNameTemplateInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountNameInput`<sup>Optional</sup> <a name="serviceAccountNameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountNameInput"></a>

```java
public java.lang.String getServiceAccountNameInput();
```

- *Type:* java.lang.String

---

##### `tokenDefaultTtlInput`<sup>Optional</sup> <a name="tokenDefaultTtlInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtlInput"></a>

```java
public java.lang.Number getTokenDefaultTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `allowedKubernetesNamespaces`<sup>Required</sup> <a name="allowedKubernetesNamespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaces"></a>

```java
public java.util.List<java.lang.String> getAllowedKubernetesNamespaces();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `extraAnnotations`<sup>Required</sup> <a name="extraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `extraLabels`<sup>Required</sup> <a name="extraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generatedRoleRules`<sup>Required</sup> <a name="generatedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRules"></a>

```java
public java.lang.String getGeneratedRoleRules();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesRoleName`<sup>Required</sup> <a name="kubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleName"></a>

```java
public java.lang.String getKubernetesRoleName();
```

- *Type:* java.lang.String

---

##### `kubernetesRoleType`<sup>Required</sup> <a name="kubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleType"></a>

```java
public java.lang.String getKubernetesRoleType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `nameTemplate`<sup>Required</sup> <a name="nameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplate"></a>

```java
public java.lang.String getNameTemplate();
```

- *Type:* java.lang.String

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountName"></a>

```java
public java.lang.String getServiceAccountName();
```

- *Type:* java.lang.String

---

##### `tokenDefaultTtl`<sup>Required</sup> <a name="tokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtl"></a>

```java
public java.lang.Number getTokenDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesSecretBackendRoleConfig <a name="KubernetesSecretBackendRoleConfig" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kubernetes_secret_backend_role.KubernetesSecretBackendRoleConfig;

KubernetesSecretBackendRoleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .allowedKubernetesNamespaces(java.util.List<java.lang.String>)
    .backend(java.lang.String)
    .name(java.lang.String)
//  .extraAnnotations(java.util.Map<java.lang.String, java.lang.String>)
//  .extraLabels(java.util.Map<java.lang.String, java.lang.String>)
//  .generatedRoleRules(java.lang.String)
//  .id(java.lang.String)
//  .kubernetesRoleName(java.lang.String)
//  .kubernetesRoleType(java.lang.String)
//  .namespace(java.lang.String)
//  .nameTemplate(java.lang.String)
//  .serviceAccountName(java.lang.String)
//  .tokenDefaultTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaces">allowedKubernetesNamespaces</a></code> | <code>java.util.List<java.lang.String></code> | The list of Kubernetes namespaces this role can generate credentials for. If set to '*' all namespaces are allowed. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The mount path for the Kubernetes secrets engine. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraAnnotations">extraAnnotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Additional annotations to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraLabels">extraLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Additional labels to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.generatedRoleRules">generatedRoleRules</a></code> | <code>java.lang.String</code> | The Role or ClusterRole rules to use when generating a role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleName">kubernetesRoleName</a></code> | <code>java.lang.String</code> | The pre-existing Role or ClusterRole to bind a generated service account to. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleType">kubernetesRoleType</a></code> | <code>java.lang.String</code> | Specifies whether the Kubernetes role is a Role or ClusterRole. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.nameTemplate">nameTemplate</a></code> | <code>java.lang.String</code> | The name template to use when generating service accounts, roles and role bindings. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.serviceAccountName">serviceAccountName</a></code> | <code>java.lang.String</code> | The pre-existing service account to generate tokens for. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenDefaultTtl">tokenDefaultTtl</a></code> | <code>java.lang.Number</code> | The default TTL for generated Kubernetes tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum TTL for generated Kubernetes tokens in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedKubernetesNamespaces`<sup>Required</sup> <a name="allowedKubernetesNamespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaces"></a>

```java
public java.util.List<java.lang.String> getAllowedKubernetesNamespaces();
```

- *Type:* java.util.List<java.lang.String>

The list of Kubernetes namespaces this role can generate credentials for. If set to '*' all namespaces are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespaces KubernetesSecretBackendRole#allowed_kubernetes_namespaces}

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The mount path for the Kubernetes secrets engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#backend KubernetesSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#name KubernetesSecretBackendRole#name}

---

##### `extraAnnotations`<sup>Optional</sup> <a name="extraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraAnnotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Additional annotations to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#extra_annotations KubernetesSecretBackendRole#extra_annotations}

---

##### `extraLabels`<sup>Optional</sup> <a name="extraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Additional labels to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#extra_labels KubernetesSecretBackendRole#extra_labels}

---

##### `generatedRoleRules`<sup>Optional</sup> <a name="generatedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.generatedRoleRules"></a>

```java
public java.lang.String getGeneratedRoleRules();
```

- *Type:* java.lang.String

The Role or ClusterRole rules to use when generating a role.

Accepts either JSON or YAML formatted rules. Mutually exclusive with 'service_account_name' and 'kubernetes_role_name'. If set, the entire chain of Kubernetes objects will be generated when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#generated_role_rules KubernetesSecretBackendRole#generated_role_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesRoleName`<sup>Optional</sup> <a name="kubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleName"></a>

```java
public java.lang.String getKubernetesRoleName();
```

- *Type:* java.lang.String

The pre-existing Role or ClusterRole to bind a generated service account to.

Mutually exclusive with 'service_account_name' and 'generated_role_rules'. If set, Kubernetes token, service account, and role binding objects will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#kubernetes_role_name KubernetesSecretBackendRole#kubernetes_role_name}

---

##### `kubernetesRoleType`<sup>Optional</sup> <a name="kubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleType"></a>

```java
public java.lang.String getKubernetesRoleType();
```

- *Type:* java.lang.String

Specifies whether the Kubernetes role is a Role or ClusterRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#kubernetes_role_type KubernetesSecretBackendRole#kubernetes_role_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#namespace KubernetesSecretBackendRole#namespace}

---

##### `nameTemplate`<sup>Optional</sup> <a name="nameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.nameTemplate"></a>

```java
public java.lang.String getNameTemplate();
```

- *Type:* java.lang.String

The name template to use when generating service accounts, roles and role bindings.

If unset, a default template is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#name_template KubernetesSecretBackendRole#name_template}

---

##### `serviceAccountName`<sup>Optional</sup> <a name="serviceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.serviceAccountName"></a>

```java
public java.lang.String getServiceAccountName();
```

- *Type:* java.lang.String

The pre-existing service account to generate tokens for.

Mutually exclusive with 'kubernetes_role_name' and 'generated_role_rules'. If set, only a Kubernetes token will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#service_account_name KubernetesSecretBackendRole#service_account_name}

---

##### `tokenDefaultTtl`<sup>Optional</sup> <a name="tokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenDefaultTtl"></a>

```java
public java.lang.Number getTokenDefaultTtl();
```

- *Type:* java.lang.Number

The default TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#token_default_ttl KubernetesSecretBackendRole#token_default_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/kubernetes_secret_backend_role#token_max_ttl KubernetesSecretBackendRole#token_max_ttl}

---



