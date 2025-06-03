# `dataVaultKubernetesAuthBackendConfig` Submodule <a name="`dataVaultKubernetesAuthBackendConfig` Submodule" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKubernetesAuthBackendConfig <a name="DataVaultKubernetesAuthBackendConfig" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config vault_kubernetes_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_auth_backend_config

dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str = None,
  disable_iss_validation: typing.Union[bool, IResolvable] = None,
  disable_local_ca_jwt: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issuer: str = None,
  kubernetes_ca_cert: str = None,
  kubernetes_host: str = None,
  namespace: str = None,
  pem_keys: typing.List[str] = None,
  use_annotations_as_alias_metadata: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.disableIssValidation">disable_iss_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.disableLocalCaJwt">disable_local_ca_jwt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.kubernetesCaCert">kubernetes_ca_cert</a></code> | <code>str</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.kubernetesHost">kubernetes_host</a></code> | <code>str</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.pemKeys">pem_keys</a></code> | <code>typing.List[str]</code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.useAnnotationsAsAliasMetadata">use_annotations_as_alias_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use annotations from the client token's associated service account as alias metadata for the Vault entity. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#backend DataVaultKubernetesAuthBackendConfig#backend}

---

##### `disable_iss_validation`<sup>Optional</sup> <a name="disable_iss_validation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.disableIssValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#disable_iss_validation DataVaultKubernetesAuthBackendConfig#disable_iss_validation}

---

##### `disable_local_ca_jwt`<sup>Optional</sup> <a name="disable_local_ca_jwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.disableLocalCaJwt"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#disable_local_ca_jwt DataVaultKubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.issuer"></a>

- *Type:* str

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#issuer DataVaultKubernetesAuthBackendConfig#issuer}

---

##### `kubernetes_ca_cert`<sup>Optional</sup> <a name="kubernetes_ca_cert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.kubernetesCaCert"></a>

- *Type:* str

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#kubernetes_ca_cert DataVaultKubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `kubernetes_host`<sup>Optional</sup> <a name="kubernetes_host" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.kubernetesHost"></a>

- *Type:* str

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#kubernetes_host DataVaultKubernetesAuthBackendConfig#kubernetes_host}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#namespace DataVaultKubernetesAuthBackendConfig#namespace}

---

##### `pem_keys`<sup>Optional</sup> <a name="pem_keys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.pemKeys"></a>

- *Type:* typing.List[str]

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#pem_keys DataVaultKubernetesAuthBackendConfig#pem_keys}

---

##### `use_annotations_as_alias_metadata`<sup>Optional</sup> <a name="use_annotations_as_alias_metadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.Initializer.parameter.useAnnotationsAsAliasMetadata"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use annotations from the client token's associated service account as alias metadata for the Vault entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#use_annotations_as_alias_metadata DataVaultKubernetesAuthBackendConfig#use_annotations_as_alias_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableIssValidation">reset_disable_iss_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableLocalCaJwt">reset_disable_local_ca_jwt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesCaCert">reset_kubernetes_ca_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesHost">reset_kubernetes_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetPemKeys">reset_pem_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetUseAnnotationsAsAliasMetadata">reset_use_annotations_as_alias_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_disable_iss_validation` <a name="reset_disable_iss_validation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableIssValidation"></a>

```python
def reset_disable_iss_validation() -> None
```

##### `reset_disable_local_ca_jwt` <a name="reset_disable_local_ca_jwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetDisableLocalCaJwt"></a>

```python
def reset_disable_local_ca_jwt() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_kubernetes_ca_cert` <a name="reset_kubernetes_ca_cert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesCaCert"></a>

```python
def reset_kubernetes_ca_cert() -> None
```

##### `reset_kubernetes_host` <a name="reset_kubernetes_host" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetKubernetesHost"></a>

```python
def reset_kubernetes_host() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_pem_keys` <a name="reset_pem_keys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetPemKeys"></a>

```python
def reset_pem_keys() -> None
```

##### `reset_use_annotations_as_alias_metadata` <a name="reset_use_annotations_as_alias_metadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.resetUseAnnotationsAsAliasMetadata"></a>

```python
def reset_use_annotations_as_alias_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultKubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_auth_backend_config

dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_auth_backend_config

dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_auth_backend_config

dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_auth_backend_config

dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultKubernetesAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultKubernetesAuthBackendConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultKubernetesAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultKubernetesAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidationInput">disable_iss_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwtInput">disable_local_ca_jwt_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCertInput">kubernetes_ca_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHostInput">kubernetes_host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeysInput">pem_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadataInput">use_annotations_as_alias_metadata_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidation">disable_iss_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwt">disable_local_ca_jwt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCert">kubernetes_ca_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHost">kubernetes_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeys">pem_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadata">use_annotations_as_alias_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `disable_iss_validation_input`<sup>Optional</sup> <a name="disable_iss_validation_input" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidationInput"></a>

```python
disable_iss_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_local_ca_jwt_input`<sup>Optional</sup> <a name="disable_local_ca_jwt_input" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwtInput"></a>

```python
disable_local_ca_jwt_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `kubernetes_ca_cert_input`<sup>Optional</sup> <a name="kubernetes_ca_cert_input" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCertInput"></a>

```python
kubernetes_ca_cert_input: str
```

- *Type:* str

---

##### `kubernetes_host_input`<sup>Optional</sup> <a name="kubernetes_host_input" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHostInput"></a>

```python
kubernetes_host_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `pem_keys_input`<sup>Optional</sup> <a name="pem_keys_input" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeysInput"></a>

```python
pem_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_annotations_as_alias_metadata_input`<sup>Optional</sup> <a name="use_annotations_as_alias_metadata_input" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadataInput"></a>

```python
use_annotations_as_alias_metadata_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `disable_iss_validation`<sup>Required</sup> <a name="disable_iss_validation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableIssValidation"></a>

```python
disable_iss_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_local_ca_jwt`<sup>Required</sup> <a name="disable_local_ca_jwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.disableLocalCaJwt"></a>

```python
disable_local_ca_jwt: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `kubernetes_ca_cert`<sup>Required</sup> <a name="kubernetes_ca_cert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesCaCert"></a>

```python
kubernetes_ca_cert: str
```

- *Type:* str

---

##### `kubernetes_host`<sup>Required</sup> <a name="kubernetes_host" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.kubernetesHost"></a>

```python
kubernetes_host: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `pem_keys`<sup>Required</sup> <a name="pem_keys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.pemKeys"></a>

```python
pem_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_annotations_as_alias_metadata`<sup>Required</sup> <a name="use_annotations_as_alias_metadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.useAnnotationsAsAliasMetadata"></a>

```python
use_annotations_as_alias_metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKubernetesAuthBackendConfigConfig <a name="DataVaultKubernetesAuthBackendConfigConfig" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_auth_backend_config

dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str = None,
  disable_iss_validation: typing.Union[bool, IResolvable] = None,
  disable_local_ca_jwt: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issuer: str = None,
  kubernetes_ca_cert: str = None,
  kubernetes_host: str = None,
  namespace: str = None,
  pem_keys: typing.List[str] = None,
  use_annotations_as_alias_metadata: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the kubernetes backend to configure. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableIssValidation">disable_iss_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional disable JWT issuer validation. Allows to skip ISS validation. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableLocalCaJwt">disable_local_ca_jwt</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.issuer">issuer</a></code> | <code>str</code> | Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesCaCert">kubernetes_ca_cert</a></code> | <code>str</code> | PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesHost">kubernetes_host</a></code> | <code>str</code> | Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.pemKeys">pem_keys</a></code> | <code>typing.List[str]</code> | Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.useAnnotationsAsAliasMetadata">use_annotations_as_alias_metadata</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use annotations from the client token's associated service account as alias metadata for the Vault entity. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the kubernetes backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#backend DataVaultKubernetesAuthBackendConfig#backend}

---

##### `disable_iss_validation`<sup>Optional</sup> <a name="disable_iss_validation" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableIssValidation"></a>

```python
disable_iss_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional disable JWT issuer validation. Allows to skip ISS validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#disable_iss_validation DataVaultKubernetesAuthBackendConfig#disable_iss_validation}

---

##### `disable_local_ca_jwt`<sup>Optional</sup> <a name="disable_local_ca_jwt" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.disableLocalCaJwt"></a>

```python
disable_local_ca_jwt: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional disable defaulting to the local CA cert and service account JWT when running in a Kubernetes pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#disable_local_ca_jwt DataVaultKubernetesAuthBackendConfig#disable_local_ca_jwt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#id DataVaultKubernetesAuthBackendConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Optional JWT issuer. If no issuer is specified, kubernetes.io/serviceaccount will be used as the default issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#issuer DataVaultKubernetesAuthBackendConfig#issuer}

---

##### `kubernetes_ca_cert`<sup>Optional</sup> <a name="kubernetes_ca_cert" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesCaCert"></a>

```python
kubernetes_ca_cert: str
```

- *Type:* str

PEM encoded CA cert for use by the TLS client used to talk with the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#kubernetes_ca_cert DataVaultKubernetesAuthBackendConfig#kubernetes_ca_cert}

---

##### `kubernetes_host`<sup>Optional</sup> <a name="kubernetes_host" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.kubernetesHost"></a>

```python
kubernetes_host: str
```

- *Type:* str

Host must be a host string, a host:port pair, or a URL to the base of the Kubernetes API server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#kubernetes_host DataVaultKubernetesAuthBackendConfig#kubernetes_host}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#namespace DataVaultKubernetesAuthBackendConfig#namespace}

---

##### `pem_keys`<sup>Optional</sup> <a name="pem_keys" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.pemKeys"></a>

```python
pem_keys: typing.List[str]
```

- *Type:* typing.List[str]

Optional list of PEM-formatted public keys or certificates used to verify the signatures of Kubernetes service account JWTs.

If a certificate is given, its public key will be extracted. Not every installation of Kubernetes exposes these keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#pem_keys DataVaultKubernetesAuthBackendConfig#pem_keys}

---

##### `use_annotations_as_alias_metadata`<sup>Optional</sup> <a name="use_annotations_as_alias_metadata" id="@cdktf/provider-vault.dataVaultKubernetesAuthBackendConfig.DataVaultKubernetesAuthBackendConfigConfig.property.useAnnotationsAsAliasMetadata"></a>

```python
use_annotations_as_alias_metadata: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use annotations from the client token's associated service account as alias metadata for the Vault entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/data-sources/kubernetes_auth_backend_config#use_annotations_as_alias_metadata DataVaultKubernetesAuthBackendConfig#use_annotations_as_alias_metadata}

---



