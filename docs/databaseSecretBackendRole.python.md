# `databaseSecretBackendRole` Submodule <a name="`databaseSecretBackendRole` Submodule" id="@cdktf/provider-vault.databaseSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSecretBackendRole <a name="DatabaseSecretBackendRole" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role vault_database_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_role

databaseSecretBackendRole.DatabaseSecretBackendRole(
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
  creation_statements: typing.List[str],
  db_name: str,
  name: str,
  credential_config: typing.Mapping[str] = None,
  credential_type: str = None,
  default_ttl: typing.Union[int, float] = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  renew_statements: typing.List[str] = None,
  revocation_statements: typing.List[str] = None,
  rollback_statements: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.creationStatements">creation_statements</a></code> | <code>typing.List[str]</code> | Database statements to execute to create and configure a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.dbName">db_name</a></code> | <code>str</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.credentialConfig">credential_config</a></code> | <code>typing.Mapping[str]</code> | Specifies the configuration for the given credential_type. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.credentialType">credential_type</a></code> | <code>str</code> | Specifies the type of credential that will be generated for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | Default TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.renewStatements">renew_statements</a></code> | <code>typing.List[str]</code> | Database statements to execute to renew a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.revocationStatements">revocation_statements</a></code> | <code>typing.List[str]</code> | Database statements to execute to revoke a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.rollbackStatements">rollback_statements</a></code> | <code>typing.List[str]</code> | Database statements to execute to rollback a create operation in the event of an error. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#backend DatabaseSecretBackendRole#backend}

---

##### `creation_statements`<sup>Required</sup> <a name="creation_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.creationStatements"></a>

- *Type:* typing.List[str]

Database statements to execute to create and configure a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#creation_statements DatabaseSecretBackendRole#creation_statements}

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.dbName"></a>

- *Type:* str

Database connection to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#db_name DatabaseSecretBackendRole#db_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#name DatabaseSecretBackendRole#name}

---

##### `credential_config`<sup>Optional</sup> <a name="credential_config" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.credentialConfig"></a>

- *Type:* typing.Mapping[str]

Specifies the configuration for the given credential_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#credential_config DatabaseSecretBackendRole#credential_config}

---

##### `credential_type`<sup>Optional</sup> <a name="credential_type" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.credentialType"></a>

- *Type:* str

Specifies the type of credential that will be generated for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#credential_type DatabaseSecretBackendRole#credential_type}

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.defaultTtl"></a>

- *Type:* typing.Union[int, float]

Default TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#default_ttl DatabaseSecretBackendRole#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#max_ttl DatabaseSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#namespace DatabaseSecretBackendRole#namespace}

---

##### `renew_statements`<sup>Optional</sup> <a name="renew_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.renewStatements"></a>

- *Type:* typing.List[str]

Database statements to execute to renew a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#renew_statements DatabaseSecretBackendRole#renew_statements}

---

##### `revocation_statements`<sup>Optional</sup> <a name="revocation_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.revocationStatements"></a>

- *Type:* typing.List[str]

Database statements to execute to revoke a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#revocation_statements DatabaseSecretBackendRole#revocation_statements}

---

##### `rollback_statements`<sup>Optional</sup> <a name="rollback_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.Initializer.parameter.rollbackStatements"></a>

- *Type:* typing.List[str]

Database statements to execute to rollback a create operation in the event of an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#rollback_statements DatabaseSecretBackendRole#rollback_statements}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialConfig">reset_credential_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialType">reset_credential_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRenewStatements">reset_renew_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRevocationStatements">reset_revocation_statements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRollbackStatements">reset_rollback_statements</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_credential_config` <a name="reset_credential_config" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialConfig"></a>

```python
def reset_credential_config() -> None
```

##### `reset_credential_type` <a name="reset_credential_type" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetCredentialType"></a>

```python
def reset_credential_type() -> None
```

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_renew_statements` <a name="reset_renew_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRenewStatements"></a>

```python
def reset_renew_statements() -> None
```

##### `reset_revocation_statements` <a name="reset_revocation_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRevocationStatements"></a>

```python
def reset_revocation_statements() -> None
```

##### `reset_rollback_statements` <a name="reset_rollback_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.resetRollbackStatements"></a>

```python
def reset_rollback_statements() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_role

databaseSecretBackendRole.DatabaseSecretBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_role

databaseSecretBackendRole.DatabaseSecretBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_role

databaseSecretBackendRole.DatabaseSecretBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_role

databaseSecretBackendRole.DatabaseSecretBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseSecretBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatementsInput">creation_statements_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfigInput">credential_config_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtlInput">default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatementsInput">renew_statements_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatementsInput">revocation_statements_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatementsInput">rollback_statements_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatements">creation_statements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfig">credential_config</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatements">renew_statements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatements">revocation_statements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatements">rollback_statements</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `creation_statements_input`<sup>Optional</sup> <a name="creation_statements_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatementsInput"></a>

```python
creation_statements_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credential_config_input`<sup>Optional</sup> <a name="credential_config_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfigInput"></a>

```python
credential_config_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtlInput"></a>

```python
default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `renew_statements_input`<sup>Optional</sup> <a name="renew_statements_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatementsInput"></a>

```python
renew_statements_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `revocation_statements_input`<sup>Optional</sup> <a name="revocation_statements_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatementsInput"></a>

```python
revocation_statements_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rollback_statements_input`<sup>Optional</sup> <a name="rollback_statements_input" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatementsInput"></a>

```python
rollback_statements_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `creation_statements`<sup>Required</sup> <a name="creation_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.creationStatements"></a>

```python
creation_statements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credential_config`<sup>Required</sup> <a name="credential_config" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialConfig"></a>

```python
credential_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `renew_statements`<sup>Required</sup> <a name="renew_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.renewStatements"></a>

```python
renew_statements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `revocation_statements`<sup>Required</sup> <a name="revocation_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.revocationStatements"></a>

```python
revocation_statements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rollback_statements`<sup>Required</sup> <a name="rollback_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.rollbackStatements"></a>

```python
rollback_statements: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSecretBackendRoleConfig <a name="DatabaseSecretBackendRoleConfig" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import database_secret_backend_role

databaseSecretBackendRole.DatabaseSecretBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  creation_statements: typing.List[str],
  db_name: str,
  name: str,
  credential_config: typing.Mapping[str] = None,
  credential_type: str = None,
  default_ttl: typing.Union[int, float] = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  renew_statements: typing.List[str] = None,
  revocation_statements: typing.List[str] = None,
  rollback_statements: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | The path of the Database Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.creationStatements">creation_statements</a></code> | <code>typing.List[str]</code> | Database statements to execute to create and configure a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dbName">db_name</a></code> | <code>str</code> | Database connection to use for this role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.name">name</a></code> | <code>str</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialConfig">credential_config</a></code> | <code>typing.Mapping[str]</code> | Specifies the configuration for the given credential_type. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialType">credential_type</a></code> | <code>str</code> | Specifies the type of credential that will be generated for the role. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | Default TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.renewStatements">renew_statements</a></code> | <code>typing.List[str]</code> | Database statements to execute to renew a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.revocationStatements">revocation_statements</a></code> | <code>typing.List[str]</code> | Database statements to execute to revoke a user. |
| <code><a href="#@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.rollbackStatements">rollback_statements</a></code> | <code>typing.List[str]</code> | Database statements to execute to rollback a create operation in the event of an error. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path of the Database Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#backend DatabaseSecretBackendRole#backend}

---

##### `creation_statements`<sup>Required</sup> <a name="creation_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.creationStatements"></a>

```python
creation_statements: typing.List[str]
```

- *Type:* typing.List[str]

Database statements to execute to create and configure a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#creation_statements DatabaseSecretBackendRole#creation_statements}

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Database connection to use for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#db_name DatabaseSecretBackendRole#db_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#name DatabaseSecretBackendRole#name}

---

##### `credential_config`<sup>Optional</sup> <a name="credential_config" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialConfig"></a>

```python
credential_config: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Specifies the configuration for the given credential_type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#credential_config DatabaseSecretBackendRole#credential_config}

---

##### `credential_type`<sup>Optional</sup> <a name="credential_type" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

Specifies the type of credential that will be generated for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#credential_type DatabaseSecretBackendRole#credential_type}

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#default_ttl DatabaseSecretBackendRole#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#id DatabaseSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#max_ttl DatabaseSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#namespace DatabaseSecretBackendRole#namespace}

---

##### `renew_statements`<sup>Optional</sup> <a name="renew_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.renewStatements"></a>

```python
renew_statements: typing.List[str]
```

- *Type:* typing.List[str]

Database statements to execute to renew a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#renew_statements DatabaseSecretBackendRole#renew_statements}

---

##### `revocation_statements`<sup>Optional</sup> <a name="revocation_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.revocationStatements"></a>

```python
revocation_statements: typing.List[str]
```

- *Type:* typing.List[str]

Database statements to execute to revoke a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#revocation_statements DatabaseSecretBackendRole#revocation_statements}

---

##### `rollback_statements`<sup>Optional</sup> <a name="rollback_statements" id="@cdktf/provider-vault.databaseSecretBackendRole.DatabaseSecretBackendRoleConfig.property.rollbackStatements"></a>

```python
rollback_statements: typing.List[str]
```

- *Type:* typing.List[str]

Database statements to execute to rollback a create operation in the event of an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/database_secret_backend_role#rollback_statements DatabaseSecretBackendRole#rollback_statements}

---



