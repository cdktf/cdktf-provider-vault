# `approleAuthBackendRoleSecretId` Submodule <a name="`approleAuthBackendRoleSecretId` Submodule" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendRoleSecretId <a name="ApproleAuthBackendRoleSecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role_secret_id

approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_name: str,
  backend: str = None,
  cidr_list: typing.List[str] = None,
  id: str = None,
  metadata: str = None,
  namespace: str = None,
  secret_id: str = None,
  with_wrapped_accessor: typing.Union[bool, IResolvable] = None,
  wrapping_ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.cidrList">cidr_list</a></code> | <code>typing.List[str]</code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.metadata">metadata</a></code> | <code>str</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | The SecretID to be managed. If not specified, Vault auto-generates one. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.withWrappedAccessor">with_wrapped_accessor</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use the wrapped secret-id accessor as the id of this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.wrappingTtl">wrapping_ttl</a></code> | <code>str</code> | The TTL duration of the wrapped SecretID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.roleName"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#role_name ApproleAuthBackendRoleSecretId#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#backend ApproleAuthBackendRoleSecretId#backend}

---

##### `cidr_list`<sup>Optional</sup> <a name="cidr_list" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.cidrList"></a>

- *Type:* typing.List[str]

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#cidr_list ApproleAuthBackendRoleSecretId#cidr_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.metadata"></a>

- *Type:* str

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#metadata ApproleAuthBackendRoleSecretId#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#namespace ApproleAuthBackendRoleSecretId#namespace}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.secretId"></a>

- *Type:* str

The SecretID to be managed. If not specified, Vault auto-generates one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#secret_id ApproleAuthBackendRoleSecretId#secret_id}

---

##### `with_wrapped_accessor`<sup>Optional</sup> <a name="with_wrapped_accessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.withWrappedAccessor"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use the wrapped secret-id accessor as the id of this resource.

If false, a fresh secret-id will be regenerated whenever the wrapping token is expired or invalidated through unwrapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#with_wrapped_accessor ApproleAuthBackendRoleSecretId#with_wrapped_accessor}

---

##### `wrapping_ttl`<sup>Optional</sup> <a name="wrapping_ttl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.wrappingTtl"></a>

- *Type:* str

The TTL duration of the wrapped SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#wrapping_ttl ApproleAuthBackendRoleSecretId#wrapping_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetCidrList">reset_cidr_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWithWrappedAccessor">reset_with_wrapped_accessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWrappingTtl">reset_wrapping_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_cidr_list` <a name="reset_cidr_list" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetCidrList"></a>

```python
def reset_cidr_list() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_with_wrapped_accessor` <a name="reset_with_wrapped_accessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWithWrappedAccessor"></a>

```python
def reset_with_wrapped_accessor() -> None
```

##### `reset_wrapping_ttl` <a name="reset_wrapping_ttl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWrappingTtl"></a>

```python
def reset_wrapping_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApproleAuthBackendRoleSecretId resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role_secret_id

approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role_secret_id

approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role_secret_id

approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role_secret_id

approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApproleAuthBackendRoleSecretId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApproleAuthBackendRoleSecretId to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApproleAuthBackendRoleSecretId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApproleAuthBackendRoleSecretId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingAccessor">wrapping_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingToken">wrapping_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrListInput">cidr_list_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessorInput">with_wrapped_accessor_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtlInput">wrapping_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrList">cidr_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessor">with_wrapped_accessor</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtl">wrapping_ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `wrapping_accessor`<sup>Required</sup> <a name="wrapping_accessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingAccessor"></a>

```python
wrapping_accessor: str
```

- *Type:* str

---

##### `wrapping_token`<sup>Required</sup> <a name="wrapping_token" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingToken"></a>

```python
wrapping_token: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `cidr_list_input`<sup>Optional</sup> <a name="cidr_list_input" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrListInput"></a>

```python
cidr_list_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `with_wrapped_accessor_input`<sup>Optional</sup> <a name="with_wrapped_accessor_input" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessorInput"></a>

```python
with_wrapped_accessor_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wrapping_ttl_input`<sup>Optional</sup> <a name="wrapping_ttl_input" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtlInput"></a>

```python
wrapping_ttl_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `cidr_list`<sup>Required</sup> <a name="cidr_list" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrList"></a>

```python
cidr_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `with_wrapped_accessor`<sup>Required</sup> <a name="with_wrapped_accessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessor"></a>

```python
with_wrapped_accessor: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `wrapping_ttl`<sup>Required</sup> <a name="wrapping_ttl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtl"></a>

```python
wrapping_ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendRoleSecretIdConfig <a name="ApproleAuthBackendRoleSecretIdConfig" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import approle_auth_backend_role_secret_id

approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role_name: str,
  backend: str = None,
  cidr_list: typing.List[str] = None,
  id: str = None,
  metadata: str = None,
  namespace: str = None,
  secret_id: str = None,
  with_wrapped_accessor: typing.Union[bool, IResolvable] = None,
  wrapping_ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.cidrList">cidr_list</a></code> | <code>typing.List[str]</code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.metadata">metadata</a></code> | <code>str</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.secretId">secret_id</a></code> | <code>str</code> | The SecretID to be managed. If not specified, Vault auto-generates one. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.withWrappedAccessor">with_wrapped_accessor</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Use the wrapped secret-id accessor as the id of this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.wrappingTtl">wrapping_ttl</a></code> | <code>str</code> | The TTL duration of the wrapped SecretID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#role_name ApproleAuthBackendRoleSecretId#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#backend ApproleAuthBackendRoleSecretId#backend}

---

##### `cidr_list`<sup>Optional</sup> <a name="cidr_list" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.cidrList"></a>

```python
cidr_list: typing.List[str]
```

- *Type:* typing.List[str]

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#cidr_list ApproleAuthBackendRoleSecretId#cidr_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#metadata ApproleAuthBackendRoleSecretId#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#namespace ApproleAuthBackendRoleSecretId#namespace}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

The SecretID to be managed. If not specified, Vault auto-generates one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#secret_id ApproleAuthBackendRoleSecretId#secret_id}

---

##### `with_wrapped_accessor`<sup>Optional</sup> <a name="with_wrapped_accessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.withWrappedAccessor"></a>

```python
with_wrapped_accessor: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Use the wrapped secret-id accessor as the id of this resource.

If false, a fresh secret-id will be regenerated whenever the wrapping token is expired or invalidated through unwrapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#with_wrapped_accessor ApproleAuthBackendRoleSecretId#with_wrapped_accessor}

---

##### `wrapping_ttl`<sup>Optional</sup> <a name="wrapping_ttl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.wrappingTtl"></a>

```python
wrapping_ttl: str
```

- *Type:* str

The TTL duration of the wrapped SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.3.0/docs/resources/approle_auth_backend_role_secret_id#wrapping_ttl ApproleAuthBackendRoleSecretId#wrapping_ttl}

---



