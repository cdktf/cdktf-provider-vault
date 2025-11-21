# `dataVaultSshSecretBackendSign` Submodule <a name="`dataVaultSshSecretBackendSign` Submodule" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultSshSecretBackendSign <a name="DataVaultSshSecretBackendSign" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign vault_ssh_secret_backend_sign}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ssh_secret_backend_sign

dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  path: str,
  public_key: str,
  cert_type: str = None,
  critical_options: typing.Mapping[str] = None,
  extensions: typing.Mapping[str] = None,
  id: str = None,
  key_id: str = None,
  namespace: str = None,
  ttl: str = None,
  valid_principals: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the role to sign. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.path">path</a></code> | <code>str</code> | Full path where SSH backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.publicKey">public_key</a></code> | <code>str</code> | Specifies the SSH public key that should be signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.certType">cert_type</a></code> | <code>str</code> | Specifies the type of certificate to be created; either "user" or "host". |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.criticalOptions">critical_options</a></code> | <code>typing.Mapping[str]</code> | Specifies a map of the critical options that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.extensions">extensions</a></code> | <code>typing.Mapping[str]</code> | Specifies a map of the extensions that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.keyId">key_id</a></code> | <code>str</code> | Specifies the key id that the created certificate should have. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | Specifies the Requested Time To Live. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.validPrincipals">valid_principals</a></code> | <code>str</code> | Specifies valid principals, either usernames or hostnames, that the certificate should be signed for. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the role to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#name DataVaultSshSecretBackendSign#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.path"></a>

- *Type:* str

Full path where SSH backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#path DataVaultSshSecretBackendSign#path}

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.publicKey"></a>

- *Type:* str

Specifies the SSH public key that should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#public_key DataVaultSshSecretBackendSign#public_key}

---

##### `cert_type`<sup>Optional</sup> <a name="cert_type" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.certType"></a>

- *Type:* str

Specifies the type of certificate to be created; either "user" or "host".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#cert_type DataVaultSshSecretBackendSign#cert_type}

---

##### `critical_options`<sup>Optional</sup> <a name="critical_options" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.criticalOptions"></a>

- *Type:* typing.Mapping[str]

Specifies a map of the critical options that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#critical_options DataVaultSshSecretBackendSign#critical_options}

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.extensions"></a>

- *Type:* typing.Mapping[str]

Specifies a map of the extensions that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#extensions DataVaultSshSecretBackendSign#extensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.keyId"></a>

- *Type:* str

Specifies the key id that the created certificate should have.

If not specified, the display name of the token will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#key_id DataVaultSshSecretBackendSign#key_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#namespace DataVaultSshSecretBackendSign#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.ttl"></a>

- *Type:* str

Specifies the Requested Time To Live.

Cannot be greater than the role's max_ttl value. If not provided, the role's ttl value will be used. Note that the role values default to system values if not explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#ttl DataVaultSshSecretBackendSign#ttl}

---

##### `valid_principals`<sup>Optional</sup> <a name="valid_principals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.Initializer.parameter.validPrincipals"></a>

- *Type:* str

Specifies valid principals, either usernames or hostnames, that the certificate should be signed for.

Required unless the role has specified allow_empty_principals or a value has been set for either the default_user or default_user_template role parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#valid_principals DataVaultSshSecretBackendSign#valid_principals}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCertType">reset_cert_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCriticalOptions">reset_critical_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetExtensions">reset_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetKeyId">reset_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetValidPrincipals">reset_valid_principals</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_cert_type` <a name="reset_cert_type" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCertType"></a>

```python
def reset_cert_type() -> None
```

##### `reset_critical_options` <a name="reset_critical_options" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetCriticalOptions"></a>

```python
def reset_critical_options() -> None
```

##### `reset_extensions` <a name="reset_extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetExtensions"></a>

```python
def reset_extensions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_id` <a name="reset_key_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetKeyId"></a>

```python
def reset_key_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_valid_principals` <a name="reset_valid_principals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.resetValidPrincipals"></a>

```python
def reset_valid_principals() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ssh_secret_backend_sign

dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ssh_secret_backend_sign

dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ssh_secret_backend_sign

dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ssh_secret_backend_sign

dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultSshSecretBackendSign resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultSshSecretBackendSign to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultSshSecretBackendSign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultSshSecretBackendSign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.signedKey">signed_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certTypeInput">cert_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptionsInput">critical_options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensionsInput">extensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyIdInput">key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipalsInput">valid_principals_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certType">cert_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptions">critical_options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensions">extensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipals">valid_principals</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `signed_key`<sup>Required</sup> <a name="signed_key" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.signedKey"></a>

```python
signed_key: str
```

- *Type:* str

---

##### `cert_type_input`<sup>Optional</sup> <a name="cert_type_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certTypeInput"></a>

```python
cert_type_input: str
```

- *Type:* str

---

##### `critical_options_input`<sup>Optional</sup> <a name="critical_options_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptionsInput"></a>

```python
critical_options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extensions_input`<sup>Optional</sup> <a name="extensions_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensionsInput"></a>

```python
extensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_id_input`<sup>Optional</sup> <a name="key_id_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyIdInput"></a>

```python
key_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `valid_principals_input`<sup>Optional</sup> <a name="valid_principals_input" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipalsInput"></a>

```python
valid_principals_input: str
```

- *Type:* str

---

##### `cert_type`<sup>Required</sup> <a name="cert_type" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.certType"></a>

```python
cert_type: str
```

- *Type:* str

---

##### `critical_options`<sup>Required</sup> <a name="critical_options" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.criticalOptions"></a>

```python
critical_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.extensions"></a>

```python
extensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `valid_principals`<sup>Required</sup> <a name="valid_principals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.validPrincipals"></a>

```python
valid_principals: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSign.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultSshSecretBackendSignConfig <a name="DataVaultSshSecretBackendSignConfig" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_ssh_secret_backend_sign

dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  path: str,
  public_key: str,
  cert_type: str = None,
  critical_options: typing.Mapping[str] = None,
  extensions: typing.Mapping[str] = None,
  id: str = None,
  key_id: str = None,
  namespace: str = None,
  ttl: str = None,
  valid_principals: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the role to sign. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.path">path</a></code> | <code>str</code> | Full path where SSH backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.publicKey">public_key</a></code> | <code>str</code> | Specifies the SSH public key that should be signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.certType">cert_type</a></code> | <code>str</code> | Specifies the type of certificate to be created; either "user" or "host". |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.criticalOptions">critical_options</a></code> | <code>typing.Mapping[str]</code> | Specifies a map of the critical options that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.extensions">extensions</a></code> | <code>typing.Mapping[str]</code> | Specifies a map of the extensions that the certificate should be signed for. Defaults to none. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.keyId">key_id</a></code> | <code>str</code> | Specifies the key id that the created certificate should have. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.ttl">ttl</a></code> | <code>str</code> | Specifies the Requested Time To Live. |
| <code><a href="#@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.validPrincipals">valid_principals</a></code> | <code>str</code> | Specifies valid principals, either usernames or hostnames, that the certificate should be signed for. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the role to sign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#name DataVaultSshSecretBackendSign#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Full path where SSH backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#path DataVaultSshSecretBackendSign#path}

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Specifies the SSH public key that should be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#public_key DataVaultSshSecretBackendSign#public_key}

---

##### `cert_type`<sup>Optional</sup> <a name="cert_type" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.certType"></a>

```python
cert_type: str
```

- *Type:* str

Specifies the type of certificate to be created; either "user" or "host".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#cert_type DataVaultSshSecretBackendSign#cert_type}

---

##### `critical_options`<sup>Optional</sup> <a name="critical_options" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.criticalOptions"></a>

```python
critical_options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies a map of the critical options that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#critical_options DataVaultSshSecretBackendSign#critical_options}

---

##### `extensions`<sup>Optional</sup> <a name="extensions" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.extensions"></a>

```python
extensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies a map of the extensions that the certificate should be signed for. Defaults to none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#extensions DataVaultSshSecretBackendSign#extensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#id DataVaultSshSecretBackendSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_id`<sup>Optional</sup> <a name="key_id" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

Specifies the key id that the created certificate should have.

If not specified, the display name of the token will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#key_id DataVaultSshSecretBackendSign#key_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#namespace DataVaultSshSecretBackendSign#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Specifies the Requested Time To Live.

Cannot be greater than the role's max_ttl value. If not provided, the role's ttl value will be used. Note that the role values default to system values if not explicitly set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#ttl DataVaultSshSecretBackendSign#ttl}

---

##### `valid_principals`<sup>Optional</sup> <a name="valid_principals" id="@cdktf/provider-vault.dataVaultSshSecretBackendSign.DataVaultSshSecretBackendSignConfig.property.validPrincipals"></a>

```python
valid_principals: str
```

- *Type:* str

Specifies valid principals, either usernames or hostnames, that the certificate should be signed for.

Required unless the role has specified allow_empty_principals or a value has been set for either the default_user or default_user_template role parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/ssh_secret_backend_sign#valid_principals DataVaultSshSecretBackendSign#valid_principals}

---



