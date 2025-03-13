# `kubernetesAuthBackendConfig` Submodule <a name="`kubernetesAuthBackendConfig` Submodule" id="@cdktf/provider-vault.kubernetesAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesAuthBackendConfig <a name="KubernetesAuthBackendConfig" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_auth_backend_config

kubernetesAuthBackendConfig.KubernetesAuthBackendConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kubernetes_host: str,
  backend: str = None,
  disable_iss_validation: typing.Union[bool, IResolvable] = None,
  disable_local_ca_jwt: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issuer: str = None,
  kubernetes_ca_cert: str = None,
  namespace: str = None,
  pem_keys: typing.List[str] = None,
  token_reviewer_jwt: str = None,
  use_annotations_as_alias_metadata: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.kubernetesHost">kubernetes_host</a></code> | <code>str</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.disableIssValidation">disable_iss_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.disableLocalCaJwt">disable_local_ca_jwt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.kubernetesCaCert">kubernetes_ca_cert</a></code> | <code>str</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.pemKeys">pem_keys</a></code> | <code>typing.List[str]</code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.tokenReviewerJwt">token_reviewer_jwt</a></code> | <code>str</code> | A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.useAnnotationsAsAliasMetadata">use_annotations_as_alias_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use annotations from the client token's associated service account as alias metadata for the Vault entity. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kubernetes_host`<sup>Required</sup> <a name="kubernetes_host" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.kubernetesHost"></a>

- *Type:* str

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#kubernetes_host KubernetesAuthBackendConfig#kubernetes_host}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#backend KubernetesAuthBackendConfig#backend}

---

##### `disable_iss_validation`<sup>Optional</sup> <a name="disable_iss_validation" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.disableIssValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#disable_iss_validation KubernetesAuthBackendConfig#disable_iss_validation}

---

##### `disable_local_ca_jwt`<sup>Optional</sup> <a name="disable_local_ca_jwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.disableLocalCaJwt"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#disable_local_ca_jwt KubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.issuer"></a>

- *Type:* str

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#issuer KubernetesAuthBackendConfig#issuer}

---

##### `kubernetes_ca_cert`<sup>Optional</sup> <a name="kubernetes_ca_cert" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.kubernetesCaCert"></a>

- *Type:* str

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#kubernetes_ca_cert KubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#namespace KubernetesAuthBackendConfig#namespace}

---

##### `pem_keys`<sup>Optional</sup> <a name="pem_keys" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.pemKeys"></a>

- *Type:* typing.List[str]

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#pem_keys KubernetesAuthBackendConfig#pem_keys}

---

##### `token_reviewer_jwt`<sup>Optional</sup> <a name="token_reviewer_jwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.tokenReviewerJwt"></a>

- *Type:* str

A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login.

If not set the JWT used for login will be used to access the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt KubernetesAuthBackendConfig#token_reviewer_jwt}

---

##### `use_annotations_as_alias_metadata`<sup>Optional</sup> <a name="use_annotations_as_alias_metadata" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.Initializer.parameter.useAnnotationsAsAliasMetadata"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use annotations from the client token's associated service account as alias metadata for the Vault entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#use_annotations_as_alias_metadata KubernetesAuthBackendConfig#use_annotations_as_alias_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableIssValidation">reset_disable_iss_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableLocalCaJwt">reset_disable_local_ca_jwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetKubernetesCaCert">reset_kubernetes_ca_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetPemKeys">reset_pem_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwt">reset_token_reviewer_jwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetUseAnnotationsAsAliasMetadata">reset_use_annotations_as_alias_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_disable_iss_validation` <a name="reset_disable_iss_validation" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableIssValidation"></a>

```python
def reset_disable_iss_validation() -> None
```

##### `reset_disable_local_ca_jwt` <a name="reset_disable_local_ca_jwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetDisableLocalCaJwt"></a>

```python
def reset_disable_local_ca_jwt() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_kubernetes_ca_cert` <a name="reset_kubernetes_ca_cert" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetKubernetesCaCert"></a>

```python
def reset_kubernetes_ca_cert() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_pem_keys` <a name="reset_pem_keys" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetPemKeys"></a>

```python
def reset_pem_keys() -> None
```

##### `reset_token_reviewer_jwt` <a name="reset_token_reviewer_jwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetTokenReviewerJwt"></a>

```python
def reset_token_reviewer_jwt() -> None
```

##### `reset_use_annotations_as_alias_metadata` <a name="reset_use_annotations_as_alias_metadata" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.resetUseAnnotationsAsAliasMetadata"></a>

```python
def reset_use_annotations_as_alias_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_auth_backend_config

kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_auth_backend_config

kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_auth_backend_config

kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_auth_backend_config

kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KubernetesAuthBackendConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KubernetesAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidationInput">disable_iss_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwtInput">disable_local_ca_jwt_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCertInput">kubernetes_ca_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHostInput">kubernetes_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeysInput">pem_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtInput">token_reviewer_jwt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadataInput">use_annotations_as_alias_metadata_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidation">disable_iss_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwt">disable_local_ca_jwt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCert">kubernetes_ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHost">kubernetes_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeys">pem_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwt">token_reviewer_jwt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadata">use_annotations_as_alias_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `disable_iss_validation_input`<sup>Optional</sup> <a name="disable_iss_validation_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidationInput"></a>

```python
disable_iss_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_local_ca_jwt_input`<sup>Optional</sup> <a name="disable_local_ca_jwt_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwtInput"></a>

```python
disable_local_ca_jwt_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `kubernetes_ca_cert_input`<sup>Optional</sup> <a name="kubernetes_ca_cert_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCertInput"></a>

```python
kubernetes_ca_cert_input: str
```

- *Type:* str

---

##### `kubernetes_host_input`<sup>Optional</sup> <a name="kubernetes_host_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHostInput"></a>

```python
kubernetes_host_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `pem_keys_input`<sup>Optional</sup> <a name="pem_keys_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeysInput"></a>

```python
pem_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_reviewer_jwt_input`<sup>Optional</sup> <a name="token_reviewer_jwt_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwtInput"></a>

```python
token_reviewer_jwt_input: str
```

- *Type:* str

---

##### `use_annotations_as_alias_metadata_input`<sup>Optional</sup> <a name="use_annotations_as_alias_metadata_input" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadataInput"></a>

```python
use_annotations_as_alias_metadata_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `disable_iss_validation`<sup>Required</sup> <a name="disable_iss_validation" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableIssValidation"></a>

```python
disable_iss_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_local_ca_jwt`<sup>Required</sup> <a name="disable_local_ca_jwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.disableLocalCaJwt"></a>

```python
disable_local_ca_jwt: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `kubernetes_ca_cert`<sup>Required</sup> <a name="kubernetes_ca_cert" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesCaCert"></a>

```python
kubernetes_ca_cert: str
```

- *Type:* str

---

##### `kubernetes_host`<sup>Required</sup> <a name="kubernetes_host" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.kubernetesHost"></a>

```python
kubernetes_host: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `pem_keys`<sup>Required</sup> <a name="pem_keys" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.pemKeys"></a>

```python
pem_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_reviewer_jwt`<sup>Required</sup> <a name="token_reviewer_jwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tokenReviewerJwt"></a>

```python
token_reviewer_jwt: str
```

- *Type:* str

---

##### `use_annotations_as_alias_metadata`<sup>Required</sup> <a name="use_annotations_as_alias_metadata" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadata"></a>

```python
use_annotations_as_alias_metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesAuthBackendConfigConfig <a name="KubernetesAuthBackendConfigConfig" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kubernetes_auth_backend_config

kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kubernetes_host: str,
  backend: str = None,
  disable_iss_validation: typing.Union[bool, IResolvable] = None,
  disable_local_ca_jwt: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issuer: str = None,
  kubernetes_ca_cert: str = None,
  namespace: str = None,
  pem_keys: typing.List[str] = None,
  token_reviewer_jwt: str = None,
  use_annotations_as_alias_metadata: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesHost">kubernetes_host</a></code> | <code>str</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableIssValidation">disable_iss_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableLocalCaJwt">disable_local_ca_jwt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.issuer">issuer</a></code> | <code>str</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesCaCert">kubernetes_ca_cert</a></code> | <code>str</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.pemKeys">pem_keys</a></code> | <code>typing.List[str]</code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwt">token_reviewer_jwt</a></code> | <code>str</code> | A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login. |
| <code><a href="#@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.useAnnotationsAsAliasMetadata">use_annotations_as_alias_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use annotations from the client token's associated service account as alias metadata for the Vault entity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kubernetes_host`<sup>Required</sup> <a name="kubernetes_host" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesHost"></a>

```python
kubernetes_host: str
```

- *Type:* str

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#kubernetes_host KubernetesAuthBackendConfig#kubernetes_host}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#backend KubernetesAuthBackendConfig#backend}

---

##### `disable_iss_validation`<sup>Optional</sup> <a name="disable_iss_validation" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableIssValidation"></a>

```python
disable_iss_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#disable_iss_validation KubernetesAuthBackendConfig#disable_iss_validation}

---

##### `disable_local_ca_jwt`<sup>Optional</sup> <a name="disable_local_ca_jwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.disableLocalCaJwt"></a>

```python
disable_local_ca_jwt: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#disable_local_ca_jwt KubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#id KubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#issuer KubernetesAuthBackendConfig#issuer}

---

##### `kubernetes_ca_cert`<sup>Optional</sup> <a name="kubernetes_ca_cert" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.kubernetesCaCert"></a>

```python
kubernetes_ca_cert: str
```

- *Type:* str

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#kubernetes_ca_cert KubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#namespace KubernetesAuthBackendConfig#namespace}

---

##### `pem_keys`<sup>Optional</sup> <a name="pem_keys" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.pemKeys"></a>

```python
pem_keys: typing.List[str]
```

- *Type:* typing.List[str]

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#pem_keys KubernetesAuthBackendConfig#pem_keys}

---

##### `token_reviewer_jwt`<sup>Optional</sup> <a name="token_reviewer_jwt" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.tokenReviewerJwt"></a>

```python
token_reviewer_jwt: str
```

- *Type:* str

A service account JWT (or other token) used as a bearer token to access the TokenReview API to validate other JWTs during login.

If not set the JWT used for login will be used to access the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#token_reviewer_jwt KubernetesAuthBackendConfig#token_reviewer_jwt}

---

##### `use_annotations_as_alias_metadata`<sup>Optional</sup> <a name="use_annotations_as_alias_metadata" id="@cdktf/provider-vault.kubernetesAuthBackendConfig.KubernetesAuthBackendConfigConfig.property.useAnnotationsAsAliasMetadata"></a>

```python
use_annotations_as_alias_metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use annotations from the client token's associated service account as alias metadata for the Vault entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/kubernetes_auth_backend_config#use_annotations_as_alias_metadata KubernetesAuthBackendConfig#use_annotations_as_alias_metadata}

---



