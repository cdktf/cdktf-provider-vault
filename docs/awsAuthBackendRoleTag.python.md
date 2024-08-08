# `awsAuthBackendRoleTag` Submodule <a name="`awsAuthBackendRoleTag` Submodule" id="@cdktf/provider-vault.awsAuthBackendRoleTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRoleTag <a name="AwsAuthBackendRoleTag" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag vault_aws_auth_backend_role_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role_tag

awsAuthBackendRoleTag.AwsAuthBackendRoleTag(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role: str,
  allow_instance_migration: typing.Union[bool, IResolvable] = None,
  backend: str = None,
  disallow_reauthentication: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_id: str = None,
  max_ttl: str = None,
  namespace: str = None,
  policies: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.role">role</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.allowInstanceMigration">allow_instance_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows migration of the underlying instance where the client resides. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.backend">backend</a></code> | <code>str</code> | AWS auth backend to read tags from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.disallowReauthentication">disallow_reauthentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only allow a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Instance ID for which this tag is intended. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>str</code> | The maximum allowed lifetime of tokens issued using this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | Policies to be associated with the tag. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.role"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#role AwsAuthBackendRoleTag#role}

---

##### `allow_instance_migration`<sup>Optional</sup> <a name="allow_instance_migration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.allowInstanceMigration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows migration of the underlying instance where the client resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#allow_instance_migration AwsAuthBackendRoleTag#allow_instance_migration}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.backend"></a>

- *Type:* str

AWS auth backend to read tags from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#backend AwsAuthBackendRoleTag#backend}

---

##### `disallow_reauthentication`<sup>Optional</sup> <a name="disallow_reauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.disallowReauthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only allow a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#disallow_reauthentication AwsAuthBackendRoleTag#disallow_reauthentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.instanceId"></a>

- *Type:* str

Instance ID for which this tag is intended.

The created tag can only be used by the instance with the given ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#instance_id AwsAuthBackendRoleTag#instance_id}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.maxTtl"></a>

- *Type:* str

The maximum allowed lifetime of tokens issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#max_ttl AwsAuthBackendRoleTag#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#namespace AwsAuthBackendRoleTag#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

Policies to be associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#policies AwsAuthBackendRoleTag#policies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetAllowInstanceMigration">reset_allow_instance_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetDisallowReauthentication">reset_disallow_reauthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetInstanceId">reset_instance_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetPolicies">reset_policies</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allow_instance_migration` <a name="reset_allow_instance_migration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetAllowInstanceMigration"></a>

```python
def reset_allow_instance_migration() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_disallow_reauthentication` <a name="reset_disallow_reauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetDisallowReauthentication"></a>

```python
def reset_disallow_reauthentication() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_instance_id` <a name="reset_instance_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetInstanceId"></a>

```python
def reset_instance_id() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetPolicies"></a>

```python
def reset_policies() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AwsAuthBackendRoleTag resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role_tag

awsAuthBackendRoleTag.AwsAuthBackendRoleTag.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role_tag

awsAuthBackendRoleTag.AwsAuthBackendRoleTag.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role_tag

awsAuthBackendRoleTag.AwsAuthBackendRoleTag.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role_tag

awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AwsAuthBackendRoleTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsAuthBackendRoleTag to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsAuthBackendRoleTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendRoleTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagKey">tag_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigrationInput">allow_instance_migration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthenticationInput">disallow_reauthentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtlInput">max_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigration">allow_instance_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthentication">disallow_reauthentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtl">max_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `tag_key`<sup>Required</sup> <a name="tag_key" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagKey"></a>

```python
tag_key: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `allow_instance_migration_input`<sup>Optional</sup> <a name="allow_instance_migration_input" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigrationInput"></a>

```python
allow_instance_migration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `disallow_reauthentication_input`<sup>Optional</sup> <a name="disallow_reauthentication_input" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthenticationInput"></a>

```python
disallow_reauthentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtlInput"></a>

```python
max_ttl_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `allow_instance_migration`<sup>Required</sup> <a name="allow_instance_migration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigration"></a>

```python
allow_instance_migration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `disallow_reauthentication`<sup>Required</sup> <a name="disallow_reauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthentication"></a>

```python
disallow_reauthentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtl"></a>

```python
max_ttl: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoleTagConfig <a name="AwsAuthBackendRoleTagConfig" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role_tag

awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role: str,
  allow_instance_migration: typing.Union[bool, IResolvable] = None,
  backend: str = None,
  disallow_reauthentication: typing.Union[bool, IResolvable] = None,
  id: str = None,
  instance_id: str = None,
  max_ttl: str = None,
  namespace: str = None,
  policies: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.role">role</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.allowInstanceMigration">allow_instance_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Allows migration of the underlying instance where the client resides. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.backend">backend</a></code> | <code>str</code> | AWS auth backend to read tags from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.disallowReauthentication">disallow_reauthentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Only allow a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Instance ID for which this tag is intended. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.maxTtl">max_ttl</a></code> | <code>str</code> | The maximum allowed lifetime of tokens issued using this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | Policies to be associated with the tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#role AwsAuthBackendRoleTag#role}

---

##### `allow_instance_migration`<sup>Optional</sup> <a name="allow_instance_migration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.allowInstanceMigration"></a>

```python
allow_instance_migration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Allows migration of the underlying instance where the client resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#allow_instance_migration AwsAuthBackendRoleTag#allow_instance_migration}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

AWS auth backend to read tags from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#backend AwsAuthBackendRoleTag#backend}

---

##### `disallow_reauthentication`<sup>Optional</sup> <a name="disallow_reauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.disallowReauthentication"></a>

```python
disallow_reauthentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Only allow a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#disallow_reauthentication AwsAuthBackendRoleTag#disallow_reauthentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instance_id`<sup>Optional</sup> <a name="instance_id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Instance ID for which this tag is intended.

The created tag can only be used by the instance with the given ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#instance_id AwsAuthBackendRoleTag#instance_id}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.maxTtl"></a>

```python
max_ttl: str
```

- *Type:* str

The maximum allowed lifetime of tokens issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#max_ttl AwsAuthBackendRoleTag#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#namespace AwsAuthBackendRoleTag#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

Policies to be associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_role_tag#policies AwsAuthBackendRoleTag#policies}

---



