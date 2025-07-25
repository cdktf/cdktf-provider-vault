# `secretsSyncAwsDestination` Submodule <a name="`secretsSyncAwsDestination` Submodule" id="@cdktf/provider-vault.secretsSyncAwsDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncAwsDestination <a name="SecretsSyncAwsDestination" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination vault_secrets_sync_aws_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_aws_destination

secretsSyncAwsDestination.SecretsSyncAwsDestination(
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
  access_key_id: str = None,
  custom_tags: typing.Mapping[str] = None,
  external_id: str = None,
  granularity: str = None,
  id: str = None,
  namespace: str = None,
  region: str = None,
  role_arn: str = None,
  secret_access_key: str = None,
  secret_name_template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name of the AWS destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.accessKeyId">access_key_id</a></code> | <code>str</code> | Access key id to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Extra protection that must match the trust policy granting access to the AWS IAM role ARN. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.granularity">granularity</a></code> | <code>str</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where to manage the secrets manager entries. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Specifies a role to assume when connecting to AWS. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Secret access key to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | Template describing how to generate external secret names. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.name"></a>

- *Type:* str

Unique name of the AWS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#name SecretsSyncAwsDestination#name}

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.accessKeyId"></a>

- *Type:* str

Access key id to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#access_key_id SecretsSyncAwsDestination#access_key_id}

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.customTags"></a>

- *Type:* typing.Mapping[str]

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#custom_tags SecretsSyncAwsDestination#custom_tags}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.externalId"></a>

- *Type:* str

Extra protection that must match the trust policy granting access to the AWS IAM role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#external_id SecretsSyncAwsDestination#external_id}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.granularity"></a>

- *Type:* str

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#granularity SecretsSyncAwsDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#namespace SecretsSyncAwsDestination#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.region"></a>

- *Type:* str

Region where to manage the secrets manager entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#region SecretsSyncAwsDestination#region}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.roleArn"></a>

- *Type:* str

Specifies a role to assume when connecting to AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#role_arn SecretsSyncAwsDestination#role_arn}

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.secretAccessKey"></a>

- *Type:* str

Secret access key to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#secret_access_key SecretsSyncAwsDestination#secret_access_key}

---

##### `secret_name_template`<sup>Optional</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.Initializer.parameter.secretNameTemplate"></a>

- *Type:* str

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#secret_name_template SecretsSyncAwsDestination#secret_name_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAccessKeyId">reset_access_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetGranularity">reset_granularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretAccessKey">reset_secret_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretNameTemplate">reset_secret_name_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_access_key_id` <a name="reset_access_key_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetAccessKeyId"></a>

```python
def reset_access_key_id() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_granularity` <a name="reset_granularity" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetGranularity"></a>

```python
def reset_granularity() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_secret_access_key` <a name="reset_secret_access_key" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretAccessKey"></a>

```python
def reset_secret_access_key() -> None
```

##### `reset_secret_name_template` <a name="reset_secret_name_template" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.resetSecretNameTemplate"></a>

```python
def reset_secret_name_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecretsSyncAwsDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_aws_destination

secretsSyncAwsDestination.SecretsSyncAwsDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_aws_destination

secretsSyncAwsDestination.SecretsSyncAwsDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_aws_destination

secretsSyncAwsDestination.SecretsSyncAwsDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_aws_destination

secretsSyncAwsDestination.SecretsSyncAwsDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecretsSyncAwsDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecretsSyncAwsDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecretsSyncAwsDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsSyncAwsDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTagsInput">custom_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplateInput">secret_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTagsInput"></a>

```python
custom_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `secret_name_template_input`<sup>Optional</sup> <a name="secret_name_template_input" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplateInput"></a>

```python
secret_name_template_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `secret_name_template`<sup>Required</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.secretNameTemplate"></a>

```python
secret_name_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncAwsDestinationConfig <a name="SecretsSyncAwsDestinationConfig" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_aws_destination

secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_key_id: str = None,
  custom_tags: typing.Mapping[str] = None,
  external_id: str = None,
  granularity: str = None,
  id: str = None,
  namespace: str = None,
  region: str = None,
  role_arn: str = None,
  secret_access_key: str = None,
  secret_name_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.name">name</a></code> | <code>str</code> | Unique name of the AWS destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Access key id to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.externalId">external_id</a></code> | <code>str</code> | Extra protection that must match the trust policy granting access to the AWS IAM role ARN. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.granularity">granularity</a></code> | <code>str</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.region">region</a></code> | <code>str</code> | Region where to manage the secrets manager entries. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Specifies a role to assume when connecting to AWS. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Secret access key to authenticate against the AWS secrets manager. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | Template describing how to generate external secret names. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name of the AWS destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#name SecretsSyncAwsDestination#name}

---

##### `access_key_id`<sup>Optional</sup> <a name="access_key_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Access key id to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#access_key_id SecretsSyncAwsDestination#access_key_id}

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#custom_tags SecretsSyncAwsDestination#custom_tags}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Extra protection that must match the trust policy granting access to the AWS IAM role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#external_id SecretsSyncAwsDestination#external_id}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#granularity SecretsSyncAwsDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#id SecretsSyncAwsDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#namespace SecretsSyncAwsDestination#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where to manage the secrets manager entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#region SecretsSyncAwsDestination#region}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Specifies a role to assume when connecting to AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#role_arn SecretsSyncAwsDestination#role_arn}

---

##### `secret_access_key`<sup>Optional</sup> <a name="secret_access_key" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Secret access key to authenticate against the AWS secrets manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#secret_access_key SecretsSyncAwsDestination#secret_access_key}

---

##### `secret_name_template`<sup>Optional</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncAwsDestination.SecretsSyncAwsDestinationConfig.property.secretNameTemplate"></a>

```python
secret_name_template: str
```

- *Type:* str

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/secrets_sync_aws_destination#secret_name_template SecretsSyncAwsDestination#secret_name_template}

---



