# `vault_gcp_secret_roleset`

Refer to the Terraform Registory for docs: [`vault_gcp_secret_roleset`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset).

# `gcpSecretRoleset` Submodule <a name="`gcpSecretRoleset` Submodule" id="@cdktf/provider-vault.gcpSecretRoleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretRoleset <a name="GcpSecretRoleset" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset vault_gcp_secret_roleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRoleset(
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
  binding: typing.Union[IResolvable, typing.List[GcpSecretRolesetBinding]],
  project: str,
  roleset: str,
  id: str = None,
  namespace: str = None,
  secret_type: str = None,
  token_scopes: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.binding">binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]]</code> | binding block. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.project">project</a></code> | <code>str</code> | Name of the GCP project that this roleset's service account will belong to. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.roleset">roleset</a></code> | <code>str</code> | Name of the RoleSet to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.secretType">secret_type</a></code> | <code>str</code> | Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.tokenScopes">token_scopes</a></code> | <code>typing.List[str]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.backend"></a>

- *Type:* str

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#backend GcpSecretRoleset#backend}

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.binding"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]]

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#binding GcpSecretRoleset#binding}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.project"></a>

- *Type:* str

Name of the GCP project that this roleset's service account will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#project GcpSecretRoleset#project}

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.roleset"></a>

- *Type:* str

Name of the RoleSet to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#roleset GcpSecretRoleset#roleset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#namespace GcpSecretRoleset#namespace}

---

##### `secret_type`<sup>Optional</sup> <a name="secret_type" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.secretType"></a>

- *Type:* str

Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#secret_type GcpSecretRoleset#secret_type}

---

##### `token_scopes`<sup>Optional</sup> <a name="token_scopes" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.Initializer.parameter.tokenScopes"></a>

- *Type:* typing.List[str]

List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#token_scopes GcpSecretRoleset#token_scopes}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding">put_binding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetSecretType">reset_secret_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetTokenScopes">reset_token_scopes</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_binding` <a name="put_binding" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding"></a>

```python
def put_binding(
  value: typing.Union[IResolvable, typing.List[GcpSecretRolesetBinding]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.putBinding.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_secret_type` <a name="reset_secret_type" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetSecretType"></a>

```python
def reset_secret_type() -> None
```

##### `reset_token_scopes` <a name="reset_token_scopes" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.resetTokenScopes"></a>

```python
def reset_token_scopes() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRoleset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRoleset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRoleset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.binding">binding</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList">GcpSecretRolesetBindingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.serviceAccountEmail">service_account_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.bindingInput">binding_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.rolesetInput">roleset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretTypeInput">secret_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopesInput">token_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.roleset">roleset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopes">token_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.binding"></a>

```python
binding: GcpSecretRolesetBindingList
```

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList">GcpSecretRolesetBindingList</a>

---

##### `service_account_email`<sup>Required</sup> <a name="service_account_email" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.serviceAccountEmail"></a>

```python
service_account_email: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `binding_input`<sup>Optional</sup> <a name="binding_input" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.bindingInput"></a>

```python
binding_input: typing.Union[IResolvable, typing.List[GcpSecretRolesetBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `roleset_input`<sup>Optional</sup> <a name="roleset_input" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.rolesetInput"></a>

```python
roleset_input: str
```

- *Type:* str

---

##### `secret_type_input`<sup>Optional</sup> <a name="secret_type_input" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretTypeInput"></a>

```python
secret_type_input: str
```

- *Type:* str

---

##### `token_scopes_input`<sup>Optional</sup> <a name="token_scopes_input" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopesInput"></a>

```python
token_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.roleset"></a>

```python
roleset: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

##### `token_scopes`<sup>Required</sup> <a name="token_scopes" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tokenScopes"></a>

```python
token_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRoleset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretRolesetBinding <a name="GcpSecretRolesetBinding" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRolesetBinding(
  resource: str,
  roles: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.resource">resource</a></code> | <code>str</code> | Resource name. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.roles">roles</a></code> | <code>typing.List[str]</code> | List of roles to apply to the resource. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.resource"></a>

```python
resource: str
```

- *Type:* str

Resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#resource GcpSecretRoleset#resource}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

List of roles to apply to the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#roles GcpSecretRoleset#roles}

---

### GcpSecretRolesetConfig <a name="GcpSecretRolesetConfig" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRolesetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  binding: typing.Union[IResolvable, typing.List[GcpSecretRolesetBinding]],
  project: str,
  roleset: str,
  id: str = None,
  namespace: str = None,
  secret_type: str = None,
  token_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.backend">backend</a></code> | <code>str</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.binding">binding</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]]</code> | binding block. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.project">project</a></code> | <code>str</code> | Name of the GCP project that this roleset's service account will belong to. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.roleset">roleset</a></code> | <code>str</code> | Name of the RoleSet to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.secretType">secret_type</a></code> | <code>str</code> | Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.tokenScopes">token_scopes</a></code> | <code>typing.List[str]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#backend GcpSecretRoleset#backend}

---

##### `binding`<sup>Required</sup> <a name="binding" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.binding"></a>

```python
binding: typing.Union[IResolvable, typing.List[GcpSecretRolesetBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]]

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#binding GcpSecretRoleset#binding}

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Name of the GCP project that this roleset's service account will belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#project GcpSecretRoleset#project}

---

##### `roleset`<sup>Required</sup> <a name="roleset" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.roleset"></a>

```python
roleset: str
```

- *Type:* str

Name of the RoleSet to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#roleset GcpSecretRoleset#roleset}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#id GcpSecretRoleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#namespace GcpSecretRoleset#namespace}

---

##### `secret_type`<sup>Optional</sup> <a name="secret_type" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

Type of secret generated for this role set. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#secret_type GcpSecretRoleset#secret_type}

---

##### `token_scopes`<sup>Optional</sup> <a name="token_scopes" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetConfig.property.tokenScopes"></a>

```python
token_scopes: typing.List[str]
```

- *Type:* typing.List[str]

List of OAuth scopes to assign to `access_token` secrets generated under this role set (`access_token` role sets only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/gcp_secret_roleset#token_scopes GcpSecretRoleset#token_scopes}

---

## Classes <a name="Classes" id="Classes"></a>

### GcpSecretRolesetBindingList <a name="GcpSecretRolesetBindingList" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRolesetBindingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GcpSecretRolesetBindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GcpSecretRolesetBinding]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>]]

---


### GcpSecretRolesetBindingOutputReference <a name="GcpSecretRolesetBindingOutputReference" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import gcp_secret_roleset

gcpSecretRoleset.GcpSecretRolesetBindingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBindingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GcpSecretRolesetBinding, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-vault.gcpSecretRoleset.GcpSecretRolesetBinding">GcpSecretRolesetBinding</a>, cdktf.IResolvable]

---



