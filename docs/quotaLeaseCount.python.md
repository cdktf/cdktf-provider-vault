# `quotaLeaseCount` Submodule <a name="`quotaLeaseCount` Submodule" id="@cdktf/provider-vault.quotaLeaseCount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaLeaseCount <a name="QuotaLeaseCount" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count vault_quota_lease_count}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import quota_lease_count

quotaLeaseCount.QuotaLeaseCount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  max_leases: typing.Union[int, float],
  name: str,
  id: str = None,
  inheritable: typing.Union[bool, IResolvable] = None,
  namespace: str = None,
  path: str = None,
  role: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.maxLeases">max_leases</a></code> | <code>typing.Union[int, float]</code> | The maximum number of leases to be allowed by the quota rule. The max_leases must be positive. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the quota. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#id QuotaLeaseCount#id}. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.inheritable">inheritable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true on a quota where path is set to a namespace, the same quota will be cumulatively applied to all child namespace. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.path">path</a></code> | <code>str</code> | Path of the mount or namespace to apply the quota. A blank path configures a global lease count quota. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.role">role</a></code> | <code>str</code> | If set on a quota where path is set to an auth mount with a concept of roles (such as /auth/approle/), this will make the quota restrict login requests to that mount that are made with the specified role. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_leases`<sup>Required</sup> <a name="max_leases" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.maxLeases"></a>

- *Type:* typing.Union[int, float]

The maximum number of leases to be allowed by the quota rule. The max_leases must be positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#max_leases QuotaLeaseCount#max_leases}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.name"></a>

- *Type:* str

The name of the quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#name QuotaLeaseCount#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#id QuotaLeaseCount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inheritable`<sup>Optional</sup> <a name="inheritable" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.inheritable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true on a quota where path is set to a namespace, the same quota will be cumulatively applied to all child namespace.

The inheritable parameter cannot be set to true if the path does not specify a namespace. Only the quotas associated with the root namespace are inheritable by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#inheritable QuotaLeaseCount#inheritable}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#namespace QuotaLeaseCount#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.path"></a>

- *Type:* str

Path of the mount or namespace to apply the quota. A blank path configures a global lease count quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#path QuotaLeaseCount#path}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.Initializer.parameter.role"></a>

- *Type:* str

If set on a quota where path is set to an auth mount with a concept of roles (such as /auth/approle/), this will make the quota restrict login requests to that mount that are made with the specified role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#role QuotaLeaseCount#role}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetInheritable">reset_inheritable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetRole">reset_role</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inheritable` <a name="reset_inheritable" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetInheritable"></a>

```python
def reset_inheritable() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.resetRole"></a>

```python
def reset_role() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a QuotaLeaseCount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import quota_lease_count

quotaLeaseCount.QuotaLeaseCount.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import quota_lease_count

quotaLeaseCount.QuotaLeaseCount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import quota_lease_count

quotaLeaseCount.QuotaLeaseCount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import quota_lease_count

quotaLeaseCount.QuotaLeaseCount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a QuotaLeaseCount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuotaLeaseCount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuotaLeaseCount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuotaLeaseCount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.inheritableInput">inheritable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.maxLeasesInput">max_leases_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.inheritable">inheritable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.maxLeases">max_leases</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inheritable_input`<sup>Optional</sup> <a name="inheritable_input" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.inheritableInput"></a>

```python
inheritable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_leases_input`<sup>Optional</sup> <a name="max_leases_input" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.maxLeasesInput"></a>

```python
max_leases_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inheritable`<sup>Required</sup> <a name="inheritable" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.inheritable"></a>

```python
inheritable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_leases`<sup>Required</sup> <a name="max_leases" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.maxLeases"></a>

```python
max_leases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaLeaseCountConfig <a name="QuotaLeaseCountConfig" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import quota_lease_count

quotaLeaseCount.QuotaLeaseCountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  max_leases: typing.Union[int, float],
  name: str,
  id: str = None,
  inheritable: typing.Union[bool, IResolvable] = None,
  namespace: str = None,
  path: str = None,
  role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.maxLeases">max_leases</a></code> | <code>typing.Union[int, float]</code> | The maximum number of leases to be allowed by the quota rule. The max_leases must be positive. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.name">name</a></code> | <code>str</code> | The name of the quota. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#id QuotaLeaseCount#id}. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.inheritable">inheritable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true on a quota where path is set to a namespace, the same quota will be cumulatively applied to all child namespace. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.path">path</a></code> | <code>str</code> | Path of the mount or namespace to apply the quota. A blank path configures a global lease count quota. |
| <code><a href="#@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.role">role</a></code> | <code>str</code> | If set on a quota where path is set to an auth mount with a concept of roles (such as /auth/approle/), this will make the quota restrict login requests to that mount that are made with the specified role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_leases`<sup>Required</sup> <a name="max_leases" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.maxLeases"></a>

```python
max_leases: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of leases to be allowed by the quota rule. The max_leases must be positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#max_leases QuotaLeaseCount#max_leases}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#name QuotaLeaseCount#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#id QuotaLeaseCount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inheritable`<sup>Optional</sup> <a name="inheritable" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.inheritable"></a>

```python
inheritable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true on a quota where path is set to a namespace, the same quota will be cumulatively applied to all child namespace.

The inheritable parameter cannot be set to true if the path does not specify a namespace. Only the quotas associated with the root namespace are inheritable by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#inheritable QuotaLeaseCount#inheritable}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#namespace QuotaLeaseCount#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path of the mount or namespace to apply the quota. A blank path configures a global lease count quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#path QuotaLeaseCount#path}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-vault.quotaLeaseCount.QuotaLeaseCountConfig.property.role"></a>

```python
role: str
```

- *Type:* str

If set on a quota where path is set to an auth mount with a concept of roles (such as /auth/approle/), this will make the quota restrict login requests to that mount that are made with the specified role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/quota_lease_count#role QuotaLeaseCount#role}

---



