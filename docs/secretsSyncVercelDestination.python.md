# `secretsSyncVercelDestination` Submodule <a name="`secretsSyncVercelDestination` Submodule" id="@cdktf/provider-vault.secretsSyncVercelDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncVercelDestination <a name="SecretsSyncVercelDestination" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination vault_secrets_sync_vercel_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_vercel_destination

secretsSyncVercelDestination.SecretsSyncVercelDestination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_token: str,
  deployment_environments: typing.List[str],
  name: str,
  project_id: str,
  granularity: str = None,
  id: str = None,
  namespace: str = None,
  secret_name_template: str = None,
  team_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.accessToken">access_token</a></code> | <code>str</code> | Vercel API access token with the permissions to manage environment variables. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.deploymentEnvironments">deployment_environments</a></code> | <code>typing.List[str]</code> | Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name of the Vercel destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Project ID where to manage environment variables. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.granularity">granularity</a></code> | <code>str</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | Team ID the project belongs to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.accessToken"></a>

- *Type:* str

Vercel API access token with the permissions to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#access_token SecretsSyncVercelDestination#access_token}

---

##### `deployment_environments`<sup>Required</sup> <a name="deployment_environments" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.deploymentEnvironments"></a>

- *Type:* typing.List[str]

Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#deployment_environments SecretsSyncVercelDestination#deployment_environments}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.name"></a>

- *Type:* str

Unique name of the Vercel destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#name SecretsSyncVercelDestination#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.projectId"></a>

- *Type:* str

Project ID where to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#project_id SecretsSyncVercelDestination#project_id}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.granularity"></a>

- *Type:* str

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#granularity SecretsSyncVercelDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#namespace SecretsSyncVercelDestination#namespace}

---

##### `secret_name_template`<sup>Optional</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.secretNameTemplate"></a>

- *Type:* str

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#secret_name_template SecretsSyncVercelDestination#secret_name_template}

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.Initializer.parameter.teamId"></a>

- *Type:* str

Team ID the project belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#team_id SecretsSyncVercelDestination#team_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetGranularity">reset_granularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetSecretNameTemplate">reset_secret_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetTeamId">reset_team_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_granularity` <a name="reset_granularity" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetGranularity"></a>

```python
def reset_granularity() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_secret_name_template` <a name="reset_secret_name_template" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetSecretNameTemplate"></a>

```python
def reset_secret_name_template() -> None
```

##### `reset_team_id` <a name="reset_team_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.resetTeamId"></a>

```python
def reset_team_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecretsSyncVercelDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_vercel_destination

secretsSyncVercelDestination.SecretsSyncVercelDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_vercel_destination

secretsSyncVercelDestination.SecretsSyncVercelDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_vercel_destination

secretsSyncVercelDestination.SecretsSyncVercelDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_vercel_destination

secretsSyncVercelDestination.SecretsSyncVercelDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecretsSyncVercelDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecretsSyncVercelDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecretsSyncVercelDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsSyncVercelDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironmentsInput">deployment_environments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplateInput">secret_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironments">deployment_environments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `deployment_environments_input`<sup>Optional</sup> <a name="deployment_environments_input" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironmentsInput"></a>

```python
deployment_environments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `secret_name_template_input`<sup>Optional</sup> <a name="secret_name_template_input" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplateInput"></a>

```python
secret_name_template_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `deployment_environments`<sup>Required</sup> <a name="deployment_environments" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.deploymentEnvironments"></a>

```python
deployment_environments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `secret_name_template`<sup>Required</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.secretNameTemplate"></a>

```python
secret_name_template: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncVercelDestinationConfig <a name="SecretsSyncVercelDestinationConfig" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_vercel_destination

secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_token: str,
  deployment_environments: typing.List[str],
  name: str,
  project_id: str,
  granularity: str = None,
  id: str = None,
  namespace: str = None,
  secret_name_template: str = None,
  team_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.accessToken">access_token</a></code> | <code>str</code> | Vercel API access token with the permissions to manage environment variables. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.deploymentEnvironments">deployment_environments</a></code> | <code>typing.List[str]</code> | Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.name">name</a></code> | <code>str</code> | Unique name of the Vercel destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.projectId">project_id</a></code> | <code>str</code> | Project ID where to manage environment variables. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.granularity">granularity</a></code> | <code>str</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.teamId">team_id</a></code> | <code>str</code> | Team ID the project belongs to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Vercel API access token with the permissions to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#access_token SecretsSyncVercelDestination#access_token}

---

##### `deployment_environments`<sup>Required</sup> <a name="deployment_environments" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.deploymentEnvironments"></a>

```python
deployment_environments: typing.List[str]
```

- *Type:* typing.List[str]

Deployment environments where the environment variables are available. Accepts 'development', 'preview' & 'production'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#deployment_environments SecretsSyncVercelDestination#deployment_environments}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name of the Vercel destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#name SecretsSyncVercelDestination#name}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project ID where to manage environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#project_id SecretsSyncVercelDestination#project_id}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#granularity SecretsSyncVercelDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#id SecretsSyncVercelDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#namespace SecretsSyncVercelDestination#namespace}

---

##### `secret_name_template`<sup>Optional</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.secretNameTemplate"></a>

```python
secret_name_template: str
```

- *Type:* str

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#secret_name_template SecretsSyncVercelDestination#secret_name_template}

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-vault.secretsSyncVercelDestination.SecretsSyncVercelDestinationConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Team ID the project belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.6.0/docs/resources/secrets_sync_vercel_destination#team_id SecretsSyncVercelDestination#team_id}

---



