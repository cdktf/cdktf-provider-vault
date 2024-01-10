# `gcpSecretStaticAccount` Submodule <a name="`gcpSecretStaticAccount` Submodule" id="@cdktf/provider-vault.gcpSecretStaticAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretStaticAccount <a name="GcpSecretStaticAccount" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account vault_gcp_secret_static_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_static_account

gcpSecretStaticAccount.GcpSecretStaticAccount(
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
  service_account_email: str,
  static_account: str,
  binding: typing.Union[IResolvable, typing.List[GcpSecretStaticAccountBinding]] = None,
  id: str = None,
  namespace: str = None,
  secret_type: str = None,
  token_scopes: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Email of the GCP service account. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.staticAccount">static_account</a></code> | <code>str</code> | Name of the Static Account to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.binding">binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]]</code> | binding block. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#id GcpSecretStaticAccount#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.secretType">secret_type</a></code> | <code>str</code> | Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.tokenScopes">token_scopes</a></code> | <code>typing.List[str]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.backend"></a>

- *Type:* str

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#backend GcpSecretStaticAccount#backend}

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* str

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#service_account_email GcpSecretStaticAccount#service_account_email}

---

##### `static_account`<sup>Required</sup> <a name="static_account" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.staticAccount"></a>

- *Type:* str

Name of the Static Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#static_account GcpSecretStaticAccount#static_account}

---

##### `binding`<sup>Optional</sup> <a name="binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.binding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]]

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#binding GcpSecretStaticAccount#binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#id GcpSecretStaticAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#namespace GcpSecretStaticAccount#namespace}

---

##### `secret_type`<sup>Optional</sup> <a name="secret_type" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.secretType"></a>

- *Type:* str

Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#secret_type GcpSecretStaticAccount#secret_type}

---

##### `token_scopes`<sup>Optional</sup> <a name="token_scopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.Initializer.parameter.tokenScopes"></a>

- *Type:* typing.List[str]

List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#token_scopes GcpSecretStaticAccount#token_scopes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding">put_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetBinding">reset_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetSecretType">reset_secret_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetTokenScopes">reset_token_scopes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_binding` <a name="put_binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding"></a>

```python
def put_binding(
  value: typing.Union[IResolvable, typing.List[GcpSecretStaticAccountBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.putBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]]

---

##### `reset_binding` <a name="reset_binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetBinding"></a>

```python
def reset_binding() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_secret_type` <a name="reset_secret_type" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetSecretType"></a>

```python
def reset_secret_type() -> None
```

##### `reset_token_scopes` <a name="reset_token_scopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.resetTokenScopes"></a>

```python
def reset_token_scopes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GcpSecretStaticAccount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_static_account

gcpSecretStaticAccount.GcpSecretStaticAccount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_static_account

gcpSecretStaticAccount.GcpSecretStaticAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_static_account

gcpSecretStaticAccount.GcpSecretStaticAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_static_account

gcpSecretStaticAccount.GcpSecretStaticAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GcpSecretStaticAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GcpSecretStaticAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GcpSecretStaticAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GcpSecretStaticAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.binding">binding</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList">GcpSecretStaticAccountBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountProject">service_account_project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.bindingInput">binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretTypeInput">secret_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmailInput">service_account_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccountInput">static_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopesInput">token_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccount">static_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopes">token_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.binding"></a>

```python
binding: GcpSecretStaticAccountBindingList
```

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList">GcpSecretStaticAccountBindingList</a>

---

##### `service_account_project`<sup>Required</sup> <a name="service_account_project" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountProject"></a>

```python
service_account_project: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `binding_input`<sup>Optional</sup> <a name="binding_input" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.bindingInput"></a>

```python
binding_input: typing.Union[IResolvable, typing.List[GcpSecretStaticAccountBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `secret_type_input`<sup>Optional</sup> <a name="secret_type_input" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretTypeInput"></a>

```python
secret_type_input: str
```

- *Type:* str

---

##### `service_account_email_input`<sup>Optional</sup> <a name="service_account_email_input" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmailInput"></a>

```python
service_account_email_input: str
```

- *Type:* str

---

##### `static_account_input`<sup>Optional</sup> <a name="static_account_input" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccountInput"></a>

```python
static_account_input: str
```

- *Type:* str

---

##### `token_scopes_input`<sup>Optional</sup> <a name="token_scopes_input" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopesInput"></a>

```python
token_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `static_account`<sup>Required</sup> <a name="static_account" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.staticAccount"></a>

```python
static_account: str
```

- *Type:* str

---

##### `token_scopes`<sup>Required</sup> <a name="token_scopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tokenScopes"></a>

```python
token_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretStaticAccountBinding <a name="GcpSecretStaticAccountBinding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_static_account

gcpSecretStaticAccount.GcpSecretStaticAccountBinding(
  resource: str,
  roles: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.resource">resource</a></code> | <code>str</code> | Resource name. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.roles">roles</a></code> | <code>typing.List[str]</code> | List of roles to apply to the resource. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.resource"></a>

```python
resource: str
```

- *Type:* str

Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#resource GcpSecretStaticAccount#resource}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

List of roles to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#roles GcpSecretStaticAccount#roles}

---

### GcpSecretStaticAccountConfig <a name="GcpSecretStaticAccountConfig" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_static_account

gcpSecretStaticAccount.GcpSecretStaticAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  service_account_email: str,
  static_account: str,
  binding: typing.Union[IResolvable, typing.List[GcpSecretStaticAccountBinding]] = None,
  id: str = None,
  namespace: str = None,
  secret_type: str = None,
  token_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.backend">backend</a></code> | <code>str</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | Email of the GCP service account. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.staticAccount">static_account</a></code> | <code>str</code> | Name of the Static Account to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.binding">binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]]</code> | binding block. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#id GcpSecretStaticAccount#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.secretType">secret_type</a></code> | <code>str</code> | Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.tokenScopes">token_scopes</a></code> | <code>typing.List[str]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#backend GcpSecretStaticAccount#backend}

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#service_account_email GcpSecretStaticAccount#service_account_email}

---

##### `static_account`<sup>Required</sup> <a name="static_account" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.staticAccount"></a>

```python
static_account: str
```

- *Type:* str

Name of the Static Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#static_account GcpSecretStaticAccount#static_account}

---

##### `binding`<sup>Optional</sup> <a name="binding" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.binding"></a>

```python
binding: typing.Union[IResolvable, typing.List[GcpSecretStaticAccountBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]]

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#binding GcpSecretStaticAccount#binding}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#id GcpSecretStaticAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#namespace GcpSecretStaticAccount#namespace}

---

##### `secret_type`<sup>Optional</sup> <a name="secret_type" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#secret_type GcpSecretStaticAccount#secret_type}

---

##### `token_scopes`<sup>Optional</sup> <a name="token_scopes" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountConfig.property.tokenScopes"></a>

```python
token_scopes: typing.List[str]
```

- *Type:* typing.List[str]

List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/gcp_secret_static_account#token_scopes GcpSecretStaticAccount#token_scopes}

---

## Classes <a name="Classes" id="Classes"></a>

### GcpSecretStaticAccountBindingList <a name="GcpSecretStaticAccountBindingList" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_static_account

gcpSecretStaticAccount.GcpSecretStaticAccountBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GcpSecretStaticAccountBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GcpSecretStaticAccountBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]]

---


### GcpSecretStaticAccountBindingOutputReference <a name="GcpSecretStaticAccountBindingOutputReference" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_static_account

gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GcpSecretStaticAccountBinding]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-vault.gcpSecretStaticAccount.GcpSecretStaticAccountBinding">GcpSecretStaticAccountBinding</a>]

---



