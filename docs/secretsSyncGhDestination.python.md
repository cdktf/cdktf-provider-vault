# `secretsSyncGhDestination` Submodule <a name="`secretsSyncGhDestination` Submodule" id="@cdktf/provider-vault.secretsSyncGhDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncGhDestination <a name="SecretsSyncGhDestination" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination vault_secrets_sync_gh_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_gh_destination

secretsSyncGhDestination.SecretsSyncGhDestination(
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
  access_token: str = None,
  app_name: str = None,
  granularity: str = None,
  id: str = None,
  installation_id: typing.Union[int, float] = None,
  namespace: str = None,
  repository_name: str = None,
  repository_owner: str = None,
  secret_name_template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name of the github destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.accessToken">access_token</a></code> | <code>str</code> | Fine-grained or personal access token. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.appName">app_name</a></code> | <code>str</code> | The user-defined name of the GitHub App configuration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.granularity">granularity</a></code> | <code>str</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#id SecretsSyncGhDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.installationId">installation_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the installation generated by GitHub when the app referenced by the app_name was installed in the user’s GitHub account. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.repositoryName">repository_name</a></code> | <code>str</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.repositoryOwner">repository_owner</a></code> | <code>str</code> | GitHub organization or username that owns the repository. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | Template describing how to generate external secret names. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.name"></a>

- *Type:* str

Unique name of the github destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#name SecretsSyncGhDestination#name}

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.accessToken"></a>

- *Type:* str

Fine-grained or personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#access_token SecretsSyncGhDestination#access_token}

---

##### `app_name`<sup>Optional</sup> <a name="app_name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.appName"></a>

- *Type:* str

The user-defined name of the GitHub App configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#app_name SecretsSyncGhDestination#app_name}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.granularity"></a>

- *Type:* str

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#granularity SecretsSyncGhDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#id SecretsSyncGhDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installation_id`<sup>Optional</sup> <a name="installation_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.installationId"></a>

- *Type:* typing.Union[int, float]

The ID of the installation generated by GitHub when the app referenced by the app_name was installed in the user’s GitHub account.

Necessary if the app_name field is also provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#installation_id SecretsSyncGhDestination#installation_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#namespace SecretsSyncGhDestination#namespace}

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.repositoryName"></a>

- *Type:* str

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#repository_name SecretsSyncGhDestination#repository_name}

---

##### `repository_owner`<sup>Optional</sup> <a name="repository_owner" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.repositoryOwner"></a>

- *Type:* str

GitHub organization or username that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#repository_owner SecretsSyncGhDestination#repository_owner}

---

##### `secret_name_template`<sup>Optional</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.Initializer.parameter.secretNameTemplate"></a>

- *Type:* str

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#secret_name_template SecretsSyncGhDestination#secret_name_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAccessToken">reset_access_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAppName">reset_app_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetGranularity">reset_granularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetInstallationId">reset_installation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetRepositoryName">reset_repository_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetRepositoryOwner">reset_repository_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetSecretNameTemplate">reset_secret_name_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_access_token` <a name="reset_access_token" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAccessToken"></a>

```python
def reset_access_token() -> None
```

##### `reset_app_name` <a name="reset_app_name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetAppName"></a>

```python
def reset_app_name() -> None
```

##### `reset_granularity` <a name="reset_granularity" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetGranularity"></a>

```python
def reset_granularity() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_installation_id` <a name="reset_installation_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetInstallationId"></a>

```python
def reset_installation_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_repository_name` <a name="reset_repository_name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetRepositoryName"></a>

```python
def reset_repository_name() -> None
```

##### `reset_repository_owner` <a name="reset_repository_owner" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetRepositoryOwner"></a>

```python
def reset_repository_owner() -> None
```

##### `reset_secret_name_template` <a name="reset_secret_name_template" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.resetSecretNameTemplate"></a>

```python
def reset_secret_name_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecretsSyncGhDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_gh_destination

secretsSyncGhDestination.SecretsSyncGhDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_gh_destination

secretsSyncGhDestination.SecretsSyncGhDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_gh_destination

secretsSyncGhDestination.SecretsSyncGhDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_gh_destination

secretsSyncGhDestination.SecretsSyncGhDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecretsSyncGhDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecretsSyncGhDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecretsSyncGhDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsSyncGhDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.appNameInput">app_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.installationIdInput">installation_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryNameInput">repository_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryOwnerInput">repository_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretNameTemplateInput">secret_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.installationId">installation_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryOwner">repository_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `app_name_input`<sup>Optional</sup> <a name="app_name_input" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.appNameInput"></a>

```python
app_name_input: str
```

- *Type:* str

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `installation_id_input`<sup>Optional</sup> <a name="installation_id_input" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.installationIdInput"></a>

```python
installation_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `repository_name_input`<sup>Optional</sup> <a name="repository_name_input" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryNameInput"></a>

```python
repository_name_input: str
```

- *Type:* str

---

##### `repository_owner_input`<sup>Optional</sup> <a name="repository_owner_input" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryOwnerInput"></a>

```python
repository_owner_input: str
```

- *Type:* str

---

##### `secret_name_template_input`<sup>Optional</sup> <a name="secret_name_template_input" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretNameTemplateInput"></a>

```python
secret_name_template_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `installation_id`<sup>Required</sup> <a name="installation_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.installationId"></a>

```python
installation_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `repository_owner`<sup>Required</sup> <a name="repository_owner" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.repositoryOwner"></a>

```python
repository_owner: str
```

- *Type:* str

---

##### `secret_name_template`<sup>Required</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.secretNameTemplate"></a>

```python
secret_name_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncGhDestinationConfig <a name="SecretsSyncGhDestinationConfig" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_gh_destination

secretsSyncGhDestination.SecretsSyncGhDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_token: str = None,
  app_name: str = None,
  granularity: str = None,
  id: str = None,
  installation_id: typing.Union[int, float] = None,
  namespace: str = None,
  repository_name: str = None,
  repository_owner: str = None,
  secret_name_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.name">name</a></code> | <code>str</code> | Unique name of the github destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.accessToken">access_token</a></code> | <code>str</code> | Fine-grained or personal access token. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.appName">app_name</a></code> | <code>str</code> | The user-defined name of the GitHub App configuration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.granularity">granularity</a></code> | <code>str</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#id SecretsSyncGhDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.installationId">installation_id</a></code> | <code>typing.Union[int, float]</code> | The ID of the installation generated by GitHub when the app referenced by the app_name was installed in the user’s GitHub account. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.repositoryName">repository_name</a></code> | <code>str</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.repositoryOwner">repository_owner</a></code> | <code>str</code> | GitHub organization or username that owns the repository. |
| <code><a href="#@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | Template describing how to generate external secret names. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name of the github destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#name SecretsSyncGhDestination#name}

---

##### `access_token`<sup>Optional</sup> <a name="access_token" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Fine-grained or personal access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#access_token SecretsSyncGhDestination#access_token}

---

##### `app_name`<sup>Optional</sup> <a name="app_name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.appName"></a>

```python
app_name: str
```

- *Type:* str

The user-defined name of the GitHub App configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#app_name SecretsSyncGhDestination#app_name}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#granularity SecretsSyncGhDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#id SecretsSyncGhDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `installation_id`<sup>Optional</sup> <a name="installation_id" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.installationId"></a>

```python
installation_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The ID of the installation generated by GitHub when the app referenced by the app_name was installed in the user’s GitHub account.

Necessary if the app_name field is also provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#installation_id SecretsSyncGhDestination#installation_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#namespace SecretsSyncGhDestination#namespace}

---

##### `repository_name`<sup>Optional</sup> <a name="repository_name" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#repository_name SecretsSyncGhDestination#repository_name}

---

##### `repository_owner`<sup>Optional</sup> <a name="repository_owner" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.repositoryOwner"></a>

```python
repository_owner: str
```

- *Type:* str

GitHub organization or username that owns the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#repository_owner SecretsSyncGhDestination#repository_owner}

---

##### `secret_name_template`<sup>Optional</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncGhDestination.SecretsSyncGhDestinationConfig.property.secretNameTemplate"></a>

```python
secret_name_template: str
```

- *Type:* str

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/secrets_sync_gh_destination#secret_name_template SecretsSyncGhDestination#secret_name_template}

---



