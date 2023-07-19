# `vault_kv_secret_v2`

Refer to the Terraform Registory for docs: [`vault_kv_secret_v2`](https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2).

# `kvSecretV2` Submodule <a name="`kvSecretV2` Submodule" id="@cdktf/provider-vault.kvSecretV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KvSecretV2 <a name="KvSecretV2" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2 vault_kv_secret_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kv_secret_v2

kvSecretV2.KvSecretV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_json: str,
  mount: str,
  name: str,
  cas: typing.Union[int, float] = None,
  custom_metadata: KvSecretV2CustomMetadata = None,
  delete_all_versions: typing.Union[bool, IResolvable] = None,
  disable_read: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  options: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dataJson">data_json</a></code> | <code>str</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Full name of the secret. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.cas">cas</a></code> | <code>typing.Union[int, float]</code> | This flag is required if cas_required is set to true on either the secret or the engine's config. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.customMetadata">custom_metadata</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | custom_metadata block. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.deleteAllVersions">delete_all_versions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, permanently deletes all versions for the specified key. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.disableRead">disable_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, disables reading secret from Vault; note: drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#id KvSecretV2#id}. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.options">options</a></code> | <code>typing.Mapping[str]</code> | An object that holds option settings. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dataJson"></a>

- *Type:* str

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#data_json KvSecretV2#data_json}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.mount"></a>

- *Type:* str

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#mount KvSecretV2#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.name"></a>

- *Type:* str

Full name of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#name KvSecretV2#name}

---

##### `cas`<sup>Optional</sup> <a name="cas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.cas"></a>

- *Type:* typing.Union[int, float]

This flag is required if cas_required is set to true on either the secret or the engine's config.

In order for a write to be successful, cas must be set to the current version of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#cas KvSecretV2#cas}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.customMetadata"></a>

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

custom_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#custom_metadata KvSecretV2#custom_metadata}

---

##### `delete_all_versions`<sup>Optional</sup> <a name="delete_all_versions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.deleteAllVersions"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, permanently deletes all versions for the specified key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#delete_all_versions KvSecretV2#delete_all_versions}

---

##### `disable_read`<sup>Optional</sup> <a name="disable_read" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.disableRead"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, disables reading secret from Vault; note: drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#disable_read KvSecretV2#disable_read}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#id KvSecretV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#namespace KvSecretV2#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.options"></a>

- *Type:* typing.Mapping[str]

An object that holds option settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#options KvSecretV2#options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata">put_custom_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCas">reset_cas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCustomMetadata">reset_custom_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDeleteAllVersions">reset_delete_all_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDisableRead">reset_disable_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOptions">reset_options</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_custom_metadata` <a name="put_custom_metadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata"></a>

```python
def put_custom_metadata(
  cas_required: typing.Union[bool, IResolvable] = None,
  data: typing.Mapping[str] = None,
  delete_version_after: typing.Union[int, float] = None,
  max_versions: typing.Union[int, float] = None
) -> None
```

###### `cas_required`<sup>Optional</sup> <a name="cas_required" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata.parameter.casRequired"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, all keys will require the cas parameter to be set on all write requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#cas_required KvSecretV2#cas_required}

---

###### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata.parameter.data"></a>

- *Type:* typing.Mapping[str]

A map of arbitrary string to string valued user-provided metadata meant to describe the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#data KvSecretV2#data}

---

###### `delete_version_after`<sup>Optional</sup> <a name="delete_version_after" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata.parameter.deleteVersionAfter"></a>

- *Type:* typing.Union[int, float]

If set, specifies the length of time before a version is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#delete_version_after KvSecretV2#delete_version_after}

---

###### `max_versions`<sup>Optional</sup> <a name="max_versions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata.parameter.maxVersions"></a>

- *Type:* typing.Union[int, float]

The number of versions to keep per key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#max_versions KvSecretV2#max_versions}

---

##### `reset_cas` <a name="reset_cas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCas"></a>

```python
def reset_cas() -> None
```

##### `reset_custom_metadata` <a name="reset_custom_metadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCustomMetadata"></a>

```python
def reset_custom_metadata() -> None
```

##### `reset_delete_all_versions` <a name="reset_delete_all_versions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDeleteAllVersions"></a>

```python
def reset_delete_all_versions() -> None
```

##### `reset_disable_read` <a name="reset_disable_read" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDisableRead"></a>

```python
def reset_disable_read() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_options` <a name="reset_options" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOptions"></a>

```python
def reset_options() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import kv_secret_v2

kvSecretV2.KvSecretV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import kv_secret_v2

kvSecretV2.KvSecretV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import kv_secret_v2

kvSecretV2.KvSecretV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadata">custom_metadata</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference">KvSecretV2CustomMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.data">data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.casInput">cas_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadataInput">custom_metadata_input</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonInput">data_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersionsInput">delete_all_versions_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableReadInput">disable_read_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cas">cas</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJson">data_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersions">delete_all_versions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableRead">disable_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadata"></a>

```python
custom_metadata: KvSecretV2CustomMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference">KvSecretV2CustomMetadataOutputReference</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.data"></a>

```python
data: StringMap
```

- *Type:* cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `cas_input`<sup>Optional</sup> <a name="cas_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.casInput"></a>

```python
cas_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `custom_metadata_input`<sup>Optional</sup> <a name="custom_metadata_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadataInput"></a>

```python
custom_metadata_input: KvSecretV2CustomMetadata
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---

##### `data_json_input`<sup>Optional</sup> <a name="data_json_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonInput"></a>

```python
data_json_input: str
```

- *Type:* str

---

##### `delete_all_versions_input`<sup>Optional</sup> <a name="delete_all_versions_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersionsInput"></a>

```python
delete_all_versions_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_read_input`<sup>Optional</sup> <a name="disable_read_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableReadInput"></a>

```python
disable_read_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cas`<sup>Required</sup> <a name="cas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cas"></a>

```python
cas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

---

##### `delete_all_versions`<sup>Required</sup> <a name="delete_all_versions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersions"></a>

```python
delete_all_versions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_read`<sup>Required</sup> <a name="disable_read" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableRead"></a>

```python
disable_read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KvSecretV2Config <a name="KvSecretV2Config" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kv_secret_v2

kvSecretV2.KvSecretV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_json: str,
  mount: str,
  name: str,
  cas: typing.Union[int, float] = None,
  custom_metadata: KvSecretV2CustomMetadata = None,
  delete_all_versions: typing.Union[bool, IResolvable] = None,
  disable_read: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  options: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJson">data_json</a></code> | <code>str</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.mount">mount</a></code> | <code>str</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.name">name</a></code> | <code>str</code> | Full name of the secret. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.cas">cas</a></code> | <code>typing.Union[int, float]</code> | This flag is required if cas_required is set to true on either the secret or the engine's config. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.customMetadata">custom_metadata</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | custom_metadata block. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.deleteAllVersions">delete_all_versions</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, permanently deletes all versions for the specified key. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.disableRead">disable_read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, disables reading secret from Vault; note: drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#id KvSecretV2#id}. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.options">options</a></code> | <code>typing.Mapping[str]</code> | An object that holds option settings. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_json`<sup>Required</sup> <a name="data_json" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJson"></a>

```python
data_json: str
```

- *Type:* str

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#data_json KvSecretV2#data_json}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#mount KvSecretV2#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Full name of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#name KvSecretV2#name}

---

##### `cas`<sup>Optional</sup> <a name="cas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.cas"></a>

```python
cas: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

This flag is required if cas_required is set to true on either the secret or the engine's config.

In order for a write to be successful, cas must be set to the current version of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#cas KvSecretV2#cas}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.customMetadata"></a>

```python
custom_metadata: KvSecretV2CustomMetadata
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

custom_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#custom_metadata KvSecretV2#custom_metadata}

---

##### `delete_all_versions`<sup>Optional</sup> <a name="delete_all_versions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.deleteAllVersions"></a>

```python
delete_all_versions: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, permanently deletes all versions for the specified key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#delete_all_versions KvSecretV2#delete_all_versions}

---

##### `disable_read`<sup>Optional</sup> <a name="disable_read" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.disableRead"></a>

```python
disable_read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, disables reading secret from Vault; note: drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#disable_read KvSecretV2#disable_read}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#id KvSecretV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#namespace KvSecretV2#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An object that holds option settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#options KvSecretV2#options}

---

### KvSecretV2CustomMetadata <a name="KvSecretV2CustomMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kv_secret_v2

kvSecretV2.KvSecretV2CustomMetadata(
  cas_required: typing.Union[bool, IResolvable] = None,
  data: typing.Mapping[str] = None,
  delete_version_after: typing.Union[int, float] = None,
  max_versions: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.casRequired">cas_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, all keys will require the cas parameter to be set on all write requests. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.data">data</a></code> | <code>typing.Mapping[str]</code> | A map of arbitrary string to string valued user-provided metadata meant to describe the secret. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.deleteVersionAfter">delete_version_after</a></code> | <code>typing.Union[int, float]</code> | If set, specifies the length of time before a version is deleted. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.maxVersions">max_versions</a></code> | <code>typing.Union[int, float]</code> | The number of versions to keep per key. |

---

##### `cas_required`<sup>Optional</sup> <a name="cas_required" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.casRequired"></a>

```python
cas_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, all keys will require the cas parameter to be set on all write requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#cas_required KvSecretV2#cas_required}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.data"></a>

```python
data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of arbitrary string to string valued user-provided metadata meant to describe the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#data KvSecretV2#data}

---

##### `delete_version_after`<sup>Optional</sup> <a name="delete_version_after" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.deleteVersionAfter"></a>

```python
delete_version_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, specifies the length of time before a version is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#delete_version_after KvSecretV2#delete_version_after}

---

##### `max_versions`<sup>Optional</sup> <a name="max_versions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.maxVersions"></a>

```python
max_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of versions to keep per key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/kv_secret_v2#max_versions KvSecretV2#max_versions}

---

## Classes <a name="Classes" id="Classes"></a>

### KvSecretV2CustomMetadataOutputReference <a name="KvSecretV2CustomMetadataOutputReference" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kv_secret_v2

kvSecretV2.KvSecretV2CustomMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetCasRequired">reset_cas_required</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetData">reset_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetDeleteVersionAfter">reset_delete_version_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetMaxVersions">reset_max_versions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cas_required` <a name="reset_cas_required" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetCasRequired"></a>

```python
def reset_cas_required() -> None
```

##### `reset_data` <a name="reset_data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetData"></a>

```python
def reset_data() -> None
```

##### `reset_delete_version_after` <a name="reset_delete_version_after" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetDeleteVersionAfter"></a>

```python
def reset_delete_version_after() -> None
```

##### `reset_max_versions` <a name="reset_max_versions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetMaxVersions"></a>

```python
def reset_max_versions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequiredInput">cas_required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.dataInput">data_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfterInput">delete_version_after_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersionsInput">max_versions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequired">cas_required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.data">data</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfter">delete_version_after</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersions">max_versions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cas_required_input`<sup>Optional</sup> <a name="cas_required_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequiredInput"></a>

```python
cas_required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.dataInput"></a>

```python
data_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_version_after_input`<sup>Optional</sup> <a name="delete_version_after_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfterInput"></a>

```python
delete_version_after_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_versions_input`<sup>Optional</sup> <a name="max_versions_input" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersionsInput"></a>

```python
max_versions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cas_required`<sup>Required</sup> <a name="cas_required" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequired"></a>

```python
cas_required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.data"></a>

```python
data: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `delete_version_after`<sup>Required</sup> <a name="delete_version_after" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfter"></a>

```python
delete_version_after: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_versions`<sup>Required</sup> <a name="max_versions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersions"></a>

```python
max_versions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.internalValue"></a>

```python
internal_value: KvSecretV2CustomMetadata
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---



