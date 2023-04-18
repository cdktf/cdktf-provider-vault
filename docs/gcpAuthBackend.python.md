# `vault_gcp_auth_backend`

Refer to the Terraform Registory for docs: [`vault_gcp_auth_backend`](https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend).

# `gcpAuthBackend` Submodule <a name="`gcpAuthBackend` Submodule" id="@cdktf/provider-vault.gcpAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpAuthBackend <a name="GcpAuthBackend" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend vault_gcp_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend

gcpAuthBackend.GcpAuthBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_email: str = None,
  client_id: str = None,
  credentials: str = None,
  custom_endpoint: GcpAuthBackendCustomEndpoint = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  local: typing.Union[bool, IResolvable] = None,
  namespace: str = None,
  path: str = None,
  private_key_id: str = None,
  project_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.clientEmail">client_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#client_email GcpAuthBackend#client_email}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#client_id GcpAuthBackend#client_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#credentials GcpAuthBackend#credentials}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.customEndpoint">custom_endpoint</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#description GcpAuthBackend#description}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#id GcpAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#path GcpAuthBackend#path}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.privateKeyId">private_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#project_id GcpAuthBackend#project_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_email`<sup>Optional</sup> <a name="client_email" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.clientEmail"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#client_email GcpAuthBackend#client_email}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#client_id GcpAuthBackend#client_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.credentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#credentials GcpAuthBackend#credentials}.

---

##### `custom_endpoint`<sup>Optional</sup> <a name="custom_endpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.customEndpoint"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#custom_endpoint GcpAuthBackend#custom_endpoint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#description GcpAuthBackend#description}.

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#disable_remount GcpAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#id GcpAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.local"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#local GcpAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#namespace GcpAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#path GcpAuthBackend#path}.

---

##### `private_key_id`<sup>Optional</sup> <a name="private_key_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.privateKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#project_id GcpAuthBackend#project_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint">put_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientEmail">reset_client_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCredentials">reset_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCustomEndpoint">reset_custom_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPrivateKeyId">reset_private_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_custom_endpoint` <a name="put_custom_endpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint"></a>

```python
def put_custom_endpoint(
  api: str = None,
  compute: str = None,
  crm: str = None,
  iam: str = None
) -> None
```

###### `api`<sup>Optional</sup> <a name="api" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint.parameter.api"></a>

- *Type:* str

Replaces the service endpoint used in API requests to https://www.googleapis.com.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#api GcpAuthBackend#api}

---

###### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint.parameter.compute"></a>

- *Type:* str

Replaces the service endpoint used in API requests to `https://compute.googleapis.com`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#compute GcpAuthBackend#compute}

---

###### `crm`<sup>Optional</sup> <a name="crm" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint.parameter.crm"></a>

- *Type:* str

Replaces the service endpoint used in API requests to `https://cloudresourcemanager.googleapis.com`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#crm GcpAuthBackend#crm}

---

###### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.putCustomEndpoint.parameter.iam"></a>

- *Type:* str

Replaces the service endpoint used in API requests to `https://iam.googleapis.com`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#iam GcpAuthBackend#iam}

---

##### `reset_client_email` <a name="reset_client_email" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientEmail"></a>

```python
def reset_client_email() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_credentials` <a name="reset_credentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCredentials"></a>

```python
def reset_credentials() -> None
```

##### `reset_custom_endpoint` <a name="reset_custom_endpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetCustomEndpoint"></a>

```python
def reset_custom_endpoint() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_private_key_id` <a name="reset_private_key_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetPrivateKeyId"></a>

```python
def reset_private_key_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.resetProjectId"></a>

```python
def reset_project_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend

gcpAuthBackend.GcpAuthBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend

gcpAuthBackend.GcpAuthBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend

gcpAuthBackend.GcpAuthBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpoint">custom_endpoint</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference">GcpAuthBackendCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmailInput">client_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentialsInput">credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpointInput">custom_endpoint_input</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.localInput">local_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmail">client_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentials">credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_endpoint`<sup>Required</sup> <a name="custom_endpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpoint"></a>

```python
custom_endpoint: GcpAuthBackendCustomEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference">GcpAuthBackendCustomEndpointOutputReference</a>

---

##### `client_email_input`<sup>Optional</sup> <a name="client_email_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmailInput"></a>

```python
client_email_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentialsInput"></a>

```python
credentials_input: str
```

- *Type:* str

---

##### `custom_endpoint_input`<sup>Optional</sup> <a name="custom_endpoint_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.customEndpointInput"></a>

```python
custom_endpoint_input: GcpAuthBackendCustomEndpoint
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemountInput"></a>

```python
disable_remount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.localInput"></a>

```python
local_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `client_email`<sup>Required</sup> <a name="client_email" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GcpAuthBackendConfig <a name="GcpAuthBackendConfig" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend

gcpAuthBackend.GcpAuthBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  client_email: str = None,
  client_id: str = None,
  credentials: str = None,
  custom_endpoint: GcpAuthBackendCustomEndpoint = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  id: str = None,
  local: typing.Union[bool, IResolvable] = None,
  namespace: str = None,
  path: str = None,
  private_key_id: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientEmail">client_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#client_email GcpAuthBackend#client_email}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#client_id GcpAuthBackend#client_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.credentials">credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#credentials GcpAuthBackend#credentials}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.customEndpoint">custom_endpoint</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#description GcpAuthBackend#description}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#id GcpAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.local">local</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#path GcpAuthBackend#path}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.privateKeyId">private_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#project_id GcpAuthBackend#project_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_email`<sup>Optional</sup> <a name="client_email" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientEmail"></a>

```python
client_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#client_email GcpAuthBackend#client_email}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#client_id GcpAuthBackend#client_id}.

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.credentials"></a>

```python
credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#credentials GcpAuthBackend#credentials}.

---

##### `custom_endpoint`<sup>Optional</sup> <a name="custom_endpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.customEndpoint"></a>

```python
custom_endpoint: GcpAuthBackendCustomEndpoint
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#custom_endpoint GcpAuthBackend#custom_endpoint}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#description GcpAuthBackend#description}.

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#disable_remount GcpAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#id GcpAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.local"></a>

```python
local: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#local GcpAuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#namespace GcpAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#path GcpAuthBackend#path}.

---

##### `private_key_id`<sup>Optional</sup> <a name="private_key_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#project_id GcpAuthBackend#project_id}.

---

### GcpAuthBackendCustomEndpoint <a name="GcpAuthBackendCustomEndpoint" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend

gcpAuthBackend.GcpAuthBackendCustomEndpoint(
  api: str = None,
  compute: str = None,
  crm: str = None,
  iam: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.api">api</a></code> | <code>str</code> | Replaces the service endpoint used in API requests to https://www.googleapis.com. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.compute">compute</a></code> | <code>str</code> | Replaces the service endpoint used in API requests to `https://compute.googleapis.com`. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.crm">crm</a></code> | <code>str</code> | Replaces the service endpoint used in API requests to `https://cloudresourcemanager.googleapis.com`. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.iam">iam</a></code> | <code>str</code> | Replaces the service endpoint used in API requests to `https://iam.googleapis.com`. |

---

##### `api`<sup>Optional</sup> <a name="api" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.api"></a>

```python
api: str
```

- *Type:* str

Replaces the service endpoint used in API requests to https://www.googleapis.com.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#api GcpAuthBackend#api}

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.compute"></a>

```python
compute: str
```

- *Type:* str

Replaces the service endpoint used in API requests to `https://compute.googleapis.com`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#compute GcpAuthBackend#compute}

---

##### `crm`<sup>Optional</sup> <a name="crm" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.crm"></a>

```python
crm: str
```

- *Type:* str

Replaces the service endpoint used in API requests to `https://cloudresourcemanager.googleapis.com`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#crm GcpAuthBackend#crm}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint.property.iam"></a>

```python
iam: str
```

- *Type:* str

Replaces the service endpoint used in API requests to `https://iam.googleapis.com`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend#iam GcpAuthBackend#iam}

---

## Classes <a name="Classes" id="Classes"></a>

### GcpAuthBackendCustomEndpointOutputReference <a name="GcpAuthBackendCustomEndpointOutputReference" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_auth_backend

gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetApi">reset_api</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCompute">reset_compute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCrm">reset_crm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetIam">reset_iam</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api` <a name="reset_api" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetApi"></a>

```python
def reset_api() -> None
```

##### `reset_compute` <a name="reset_compute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCompute"></a>

```python
def reset_compute() -> None
```

##### `reset_crm` <a name="reset_crm" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetCrm"></a>

```python
def reset_crm() -> None
```

##### `reset_iam` <a name="reset_iam" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.resetIam"></a>

```python
def reset_iam() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.apiInput">api_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.computeInput">compute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crmInput">crm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iamInput">iam_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.api">api</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.compute">compute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crm">crm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iam">iam</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_input`<sup>Optional</sup> <a name="api_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.apiInput"></a>

```python
api_input: str
```

- *Type:* str

---

##### `compute_input`<sup>Optional</sup> <a name="compute_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.computeInput"></a>

```python
compute_input: str
```

- *Type:* str

---

##### `crm_input`<sup>Optional</sup> <a name="crm_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crmInput"></a>

```python
crm_input: str
```

- *Type:* str

---

##### `iam_input`<sup>Optional</sup> <a name="iam_input" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iamInput"></a>

```python
iam_input: str
```

- *Type:* str

---

##### `api`<sup>Required</sup> <a name="api" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.api"></a>

```python
api: str
```

- *Type:* str

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.compute"></a>

```python
compute: str
```

- *Type:* str

---

##### `crm`<sup>Required</sup> <a name="crm" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.crm"></a>

```python
crm: str
```

- *Type:* str

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.iam"></a>

```python
iam: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpointOutputReference.property.internalValue"></a>

```python
internal_value: GcpAuthBackendCustomEndpoint
```

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackend.GcpAuthBackendCustomEndpoint">GcpAuthBackendCustomEndpoint</a>

---



