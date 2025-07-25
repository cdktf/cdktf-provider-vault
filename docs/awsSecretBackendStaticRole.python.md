# `awsSecretBackendStaticRole` Submodule <a name="`awsSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.awsSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackendStaticRole <a name="AwsSecretBackendStaticRole" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role vault_aws_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_static_role

awsSecretBackendStaticRole.AwsSecretBackendStaticRole(
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
  rotation_period: typing.Union[int, float],
  username: str,
  assume_role_arn: str = None,
  assume_role_session_name: str = None,
  backend: str = None,
  external_id: str = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | How often Vault should rotate the password of the user entry. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.username">username</a></code> | <code>str</code> | The username of the existing AWS IAM user to manage password rotation for. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.assumeRoleArn">assume_role_arn</a></code> | <code>str</code> | The ARN of the role to assume when managing the static role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.assumeRoleSessionName">assume_role_session_name</a></code> | <code>str</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path where the AWS secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | External ID to use when assuming the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#id AwsSecretBackendStaticRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.name"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#name AwsSecretBackendStaticRole#name}

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.rotationPeriod"></a>

- *Type:* typing.Union[int, float]

How often Vault should rotate the password of the user entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#rotation_period AwsSecretBackendStaticRole#rotation_period}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.username"></a>

- *Type:* str

The username of the existing AWS IAM user to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#username AwsSecretBackendStaticRole#username}

---

##### `assume_role_arn`<sup>Optional</sup> <a name="assume_role_arn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.assumeRoleArn"></a>

- *Type:* str

The ARN of the role to assume when managing the static role.

This is required for cross-account role management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#assume_role_arn AwsSecretBackendStaticRole#assume_role_arn}

---

##### `assume_role_session_name`<sup>Optional</sup> <a name="assume_role_session_name" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.assumeRoleSessionName"></a>

- *Type:* str

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#assume_role_session_name AwsSecretBackendStaticRole#assume_role_session_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.backend"></a>

- *Type:* str

The path where the AWS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#backend AwsSecretBackendStaticRole#backend}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.externalId"></a>

- *Type:* str

External ID to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#external_id AwsSecretBackendStaticRole#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#id AwsSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#namespace AwsSecretBackendStaticRole#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetAssumeRoleArn">reset_assume_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetAssumeRoleSessionName">reset_assume_role_session_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_assume_role_arn` <a name="reset_assume_role_arn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetAssumeRoleArn"></a>

```python
def reset_assume_role_arn() -> None
```

##### `reset_assume_role_session_name` <a name="reset_assume_role_session_name" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetAssumeRoleSessionName"></a>

```python
def reset_assume_role_session_name() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AwsSecretBackendStaticRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_static_role

awsSecretBackendStaticRole.AwsSecretBackendStaticRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_static_role

awsSecretBackendStaticRole.AwsSecretBackendStaticRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_static_role

awsSecretBackendStaticRole.AwsSecretBackendStaticRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_static_role

awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AwsSecretBackendStaticRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsSecretBackendStaticRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleArnInput">assume_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleSessionNameInput">assume_role_session_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.rotationPeriodInput">rotation_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleArn">assume_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleSessionName">assume_role_session_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.username">username</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `assume_role_arn_input`<sup>Optional</sup> <a name="assume_role_arn_input" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleArnInput"></a>

```python
assume_role_arn_input: str
```

- *Type:* str

---

##### `assume_role_session_name_input`<sup>Optional</sup> <a name="assume_role_session_name_input" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleSessionNameInput"></a>

```python
assume_role_session_name_input: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `rotation_period_input`<sup>Optional</sup> <a name="rotation_period_input" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.rotationPeriodInput"></a>

```python
rotation_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `assume_role_arn`<sup>Required</sup> <a name="assume_role_arn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleArn"></a>

```python
assume_role_arn: str
```

- *Type:* str

---

##### `assume_role_session_name`<sup>Required</sup> <a name="assume_role_session_name" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.assumeRoleSessionName"></a>

```python
assume_role_session_name: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.username"></a>

```python
username: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendStaticRoleConfig <a name="AwsSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_static_role

awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rotation_period: typing.Union[int, float],
  username: str,
  assume_role_arn: str = None,
  assume_role_session_name: str = None,
  backend: str = None,
  external_id: str = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.name">name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.rotationPeriod">rotation_period</a></code> | <code>typing.Union[int, float]</code> | How often Vault should rotate the password of the user entry. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.username">username</a></code> | <code>str</code> | The username of the existing AWS IAM user to manage password rotation for. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.assumeRoleArn">assume_role_arn</a></code> | <code>str</code> | The ARN of the role to assume when managing the static role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.assumeRoleSessionName">assume_role_session_name</a></code> | <code>str</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.backend">backend</a></code> | <code>str</code> | The path where the AWS secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.externalId">external_id</a></code> | <code>str</code> | External ID to use when assuming the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#id AwsSecretBackendStaticRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#name AwsSecretBackendStaticRole#name}

---

##### `rotation_period`<sup>Required</sup> <a name="rotation_period" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.rotationPeriod"></a>

```python
rotation_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

How often Vault should rotate the password of the user entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#rotation_period AwsSecretBackendStaticRole#rotation_period}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.username"></a>

```python
username: str
```

- *Type:* str

The username of the existing AWS IAM user to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#username AwsSecretBackendStaticRole#username}

---

##### `assume_role_arn`<sup>Optional</sup> <a name="assume_role_arn" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.assumeRoleArn"></a>

```python
assume_role_arn: str
```

- *Type:* str

The ARN of the role to assume when managing the static role.

This is required for cross-account role management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#assume_role_arn AwsSecretBackendStaticRole#assume_role_arn}

---

##### `assume_role_session_name`<sup>Optional</sup> <a name="assume_role_session_name" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.assumeRoleSessionName"></a>

```python
assume_role_session_name: str
```

- *Type:* str

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#assume_role_session_name AwsSecretBackendStaticRole#assume_role_session_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path where the AWS secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#backend AwsSecretBackendStaticRole#backend}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

External ID to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#external_id AwsSecretBackendStaticRole#external_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#id AwsSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendStaticRole.AwsSecretBackendStaticRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/aws_secret_backend_static_role#namespace AwsSecretBackendStaticRole#namespace}

---



