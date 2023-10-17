# `data_vault_kubernetes_service_account_token`

Refer to the Terraform Registory for docs: [`data_vault_kubernetes_service_account_token`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token).

# `dataVaultKubernetesServiceAccountToken` Submodule <a name="`dataVaultKubernetesServiceAccountToken` Submodule" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultKubernetesServiceAccountToken <a name="DataVaultKubernetesServiceAccountToken" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token vault_kubernetes_service_account_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_service_account_token

dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken(
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
  kubernetes_namespace: str,
  role: str,
  cluster_role_binding: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The Kubernetes secret backend to generate service account tokens from. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.kubernetesNamespace">kubernetes_namespace</a></code> | <code>str</code> | The name of the Kubernetes namespace in which to generate the credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.role">role</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.clusterRoleBinding">cluster_role_binding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.backend"></a>

- *Type:* str

The Kubernetes secret backend to generate service account tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#backend DataVaultKubernetesServiceAccountToken#backend}

---

##### `kubernetes_namespace`<sup>Required</sup> <a name="kubernetes_namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.kubernetesNamespace"></a>

- *Type:* str

The name of the Kubernetes namespace in which to generate the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#kubernetes_namespace DataVaultKubernetesServiceAccountToken#kubernetes_namespace}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.role"></a>

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#role DataVaultKubernetesServiceAccountToken#role}

---

##### `cluster_role_binding`<sup>Optional</sup> <a name="cluster_role_binding" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.clusterRoleBinding"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#cluster_role_binding DataVaultKubernetesServiceAccountToken#cluster_role_binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#namespace DataVaultKubernetesServiceAccountToken#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.Initializer.parameter.ttl"></a>

- *Type:* str

The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#ttl DataVaultKubernetesServiceAccountToken#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetClusterRoleBinding">reset_cluster_role_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cluster_role_binding` <a name="reset_cluster_role_binding" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetClusterRoleBinding"></a>

```python
def reset_cluster_role_binding() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultKubernetesServiceAccountToken resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_service_account_token

dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_service_account_token

dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_service_account_token

dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_service_account_token

dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultKubernetesServiceAccountToken resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultKubernetesServiceAccountToken to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultKubernetesServiceAccountToken that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultKubernetesServiceAccountToken to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseRenewable">lease_renewable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountName">service_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountNamespace">service_account_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountToken">service_account_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput">cluster_role_binding_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput">kubernetes_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBinding">cluster_role_binding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespace">kubernetes_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `lease_renewable`<sup>Required</sup> <a name="lease_renewable" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.leaseRenewable"></a>

```python
lease_renewable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `service_account_name`<sup>Required</sup> <a name="service_account_name" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountName"></a>

```python
service_account_name: str
```

- *Type:* str

---

##### `service_account_namespace`<sup>Required</sup> <a name="service_account_namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountNamespace"></a>

```python
service_account_namespace: str
```

- *Type:* str

---

##### `service_account_token`<sup>Required</sup> <a name="service_account_token" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.serviceAccountToken"></a>

```python
service_account_token: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `cluster_role_binding_input`<sup>Optional</sup> <a name="cluster_role_binding_input" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBindingInput"></a>

```python
cluster_role_binding_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kubernetes_namespace_input`<sup>Optional</sup> <a name="kubernetes_namespace_input" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespaceInput"></a>

```python
kubernetes_namespace_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `cluster_role_binding`<sup>Required</sup> <a name="cluster_role_binding" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.clusterRoleBinding"></a>

```python
cluster_role_binding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_namespace`<sup>Required</sup> <a name="kubernetes_namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.kubernetesNamespace"></a>

```python
kubernetes_namespace: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountToken.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultKubernetesServiceAccountTokenConfig <a name="DataVaultKubernetesServiceAccountTokenConfig" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_kubernetes_service_account_token

dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  kubernetes_namespace: str,
  role: str,
  cluster_role_binding: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.backend">backend</a></code> | <code>str</code> | The Kubernetes secret backend to generate service account tokens from. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace">kubernetes_namespace</a></code> | <code>str</code> | The name of the Kubernetes namespace in which to generate the credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.role">role</a></code> | <code>str</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding">cluster_role_binding</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.ttl">ttl</a></code> | <code>str</code> | The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The Kubernetes secret backend to generate service account tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#backend DataVaultKubernetesServiceAccountToken#backend}

---

##### `kubernetes_namespace`<sup>Required</sup> <a name="kubernetes_namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.kubernetesNamespace"></a>

```python
kubernetes_namespace: str
```

- *Type:* str

The name of the Kubernetes namespace in which to generate the credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#kubernetes_namespace DataVaultKubernetesServiceAccountToken#kubernetes_namespace}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#role DataVaultKubernetesServiceAccountToken#role}

---

##### `cluster_role_binding`<sup>Optional</sup> <a name="cluster_role_binding" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.clusterRoleBinding"></a>

```python
cluster_role_binding: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, generate a ClusterRoleBinding to grant permissions across the whole cluster instead of within a namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#cluster_role_binding DataVaultKubernetesServiceAccountToken#cluster_role_binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#id DataVaultKubernetesServiceAccountToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#namespace DataVaultKubernetesServiceAccountToken#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultKubernetesServiceAccountToken.DataVaultKubernetesServiceAccountTokenConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

The TTL of the generated Kubernetes service account token, specified in seconds or as a Go duration format string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/kubernetes_service_account_token#ttl DataVaultKubernetesServiceAccountToken#ttl}

---



