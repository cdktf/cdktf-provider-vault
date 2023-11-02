# `vault_terraform_cloud_secret_role`

Refer to the Terraform Registory for docs: [`vault_terraform_cloud_secret_role`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role).

# `terraformCloudSecretRole` Submodule <a name="`terraformCloudSecretRole` Submodule" id="@cdktf/provider-vault.terraformCloudSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformCloudSecretRole <a name="TerraformCloudSecretRole" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role vault_terraform_cloud_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import terraform_cloud_secret_role

terraformCloudSecretRole.TerraformCloudSecretRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  backend: str = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  organization: str = None,
  team_id: str = None,
  ttl: typing.Union[int, float] = None,
  user_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of an existing role against which to create this Terraform Cloud credential. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path of the Terraform Cloud Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#id TerraformCloudSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum allowed lease for generated credentials. If not set or set to 0, will use system default. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Name of the Terraform Cloud or Enterprise organization. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | ID of the Terraform Cloud or Enterprise team under organization (e.g., settings/teams/team-xxxxxxxxxxxxx). |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Default lease for generated credentials. If not set or set to 0, will use system default. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | ID of the Terraform Cloud or Enterprise user (e.g., user-xxxxxxxxxxxxxxxx). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.name"></a>

- *Type:* str

The name of an existing role against which to create this Terraform Cloud credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#name TerraformCloudSecretRole#name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.backend"></a>

- *Type:* str

The path of the Terraform Cloud Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#backend TerraformCloudSecretRole#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#id TerraformCloudSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

Maximum allowed lease for generated credentials. If not set or set to 0, will use system default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#max_ttl TerraformCloudSecretRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#namespace TerraformCloudSecretRole#namespace}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.organization"></a>

- *Type:* str

Name of the Terraform Cloud or Enterprise organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#organization TerraformCloudSecretRole#organization}

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.teamId"></a>

- *Type:* str

ID of the Terraform Cloud or Enterprise team under organization (e.g., settings/teams/team-xxxxxxxxxxxxx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#team_id TerraformCloudSecretRole#team_id}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Default lease for generated credentials. If not set or set to 0, will use system default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#ttl TerraformCloudSecretRole#ttl}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.Initializer.parameter.userId"></a>

- *Type:* str

ID of the Terraform Cloud or Enterprise user (e.g., user-xxxxxxxxxxxxxxxx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#user_id TerraformCloudSecretRole#user_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetTeamId">reset_team_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_team_id` <a name="reset_team_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetTeamId"></a>

```python
def reset_team_id() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.resetUserId"></a>

```python
def reset_user_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TerraformCloudSecretRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import terraform_cloud_secret_role

terraformCloudSecretRole.TerraformCloudSecretRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import terraform_cloud_secret_role

terraformCloudSecretRole.TerraformCloudSecretRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import terraform_cloud_secret_role

terraformCloudSecretRole.TerraformCloudSecretRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import terraform_cloud_secret_role

terraformCloudSecretRole.TerraformCloudSecretRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TerraformCloudSecretRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TerraformCloudSecretRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TerraformCloudSecretRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TerraformCloudSecretRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TerraformCloudSecretRoleConfig <a name="TerraformCloudSecretRoleConfig" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import terraform_cloud_secret_role

terraformCloudSecretRole.TerraformCloudSecretRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  backend: str = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  organization: str = None,
  team_id: str = None,
  ttl: typing.Union[int, float] = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.name">name</a></code> | <code>str</code> | The name of an existing role against which to create this Terraform Cloud credential. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.backend">backend</a></code> | <code>str</code> | The path of the Terraform Cloud Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#id TerraformCloudSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum allowed lease for generated credentials. If not set or set to 0, will use system default. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.organization">organization</a></code> | <code>str</code> | Name of the Terraform Cloud or Enterprise organization. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.teamId">team_id</a></code> | <code>str</code> | ID of the Terraform Cloud or Enterprise team under organization (e.g., settings/teams/team-xxxxxxxxxxxxx). |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Default lease for generated credentials. If not set or set to 0, will use system default. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.userId">user_id</a></code> | <code>str</code> | ID of the Terraform Cloud or Enterprise user (e.g., user-xxxxxxxxxxxxxxxx). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of an existing role against which to create this Terraform Cloud credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#name TerraformCloudSecretRole#name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path of the Terraform Cloud Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#backend TerraformCloudSecretRole#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#id TerraformCloudSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum allowed lease for generated credentials. If not set or set to 0, will use system default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#max_ttl TerraformCloudSecretRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#namespace TerraformCloudSecretRole#namespace}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Name of the Terraform Cloud or Enterprise organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#organization TerraformCloudSecretRole#organization}

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

ID of the Terraform Cloud or Enterprise team under organization (e.g., settings/teams/team-xxxxxxxxxxxxx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#team_id TerraformCloudSecretRole#team_id}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease for generated credentials. If not set or set to 0, will use system default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#ttl TerraformCloudSecretRole#ttl}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="@cdktf/provider-vault.terraformCloudSecretRole.TerraformCloudSecretRoleConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

ID of the Terraform Cloud or Enterprise user (e.g., user-xxxxxxxxxxxxxxxx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/terraform_cloud_secret_role#user_id TerraformCloudSecretRole#user_id}

---



