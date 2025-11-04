# `azureSecretBackendStaticRole` Submodule <a name="`azureSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.azureSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackendStaticRole <a name="AzureSecretBackendStaticRole" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role vault_azure_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_static_role

azureSecretBackendStaticRole.AzureSecretBackendStaticRole(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_object_id: str,
  backend: str,
  role: str,
  client_secret: str = None,
  expiration: str = None,
  metadata: typing.Mapping[str] = None,
  namespace: str = None,
  secret_id: str = None,
  skip_import_rotation: bool | IResolvable = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.applicationObjectId">application_object_id</a></code> | <code>str</code> | Application object ID for an existing service principal that is managed by the static role. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path where the Azure secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.role">role</a></code> | <code>str</code> | Name of the static role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | The plaintext secret value of the credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.expiration">expiration</a></code> | <code>str</code> | A future expiration time for the imported credential, in RFC3339 format. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | A map of string key/value pairs that will be stored as metadata on the secret. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.secretId">secret_id</a></code> | <code>str</code> | The secret ID of the Azure password credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.skipImportRotation">skip_import_rotation</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, skip rotation of the client secret on import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Timespan of 1 year (31536000) or more during which the role credentials are valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `application_object_id`<sup>Required</sup> <a name="application_object_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.applicationObjectId"></a>

- *Type:* str

Application object ID for an existing service principal that is managed by the static role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#application_object_id AzureSecretBackendStaticRole#application_object_id}

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.backend"></a>

- *Type:* str

The path where the Azure secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#backend AzureSecretBackendStaticRole#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.role"></a>

- *Type:* str

Name of the static role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#role AzureSecretBackendStaticRole#role}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.clientSecret"></a>

- *Type:* str

The plaintext secret value of the credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#client_secret AzureSecretBackendStaticRole#client_secret}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.expiration"></a>

- *Type:* str

A future expiration time for the imported credential, in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#expiration AzureSecretBackendStaticRole#expiration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

A map of string key/value pairs that will be stored as metadata on the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#metadata AzureSecretBackendStaticRole#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#namespace AzureSecretBackendStaticRole#namespace}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.secretId"></a>

- *Type:* str

The secret ID of the Azure password credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#secret_id AzureSecretBackendStaticRole#secret_id}

---

##### `skip_import_rotation`<sup>Optional</sup> <a name="skip_import_rotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.skipImportRotation"></a>

- *Type:* bool | cdktf.IResolvable

If true, skip rotation of the client secret on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#skip_import_rotation AzureSecretBackendStaticRole#skip_import_rotation}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Timespan of 1 year (31536000) or more during which the role credentials are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#ttl AzureSecretBackendStaticRole#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSecretId">reset_secret_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSkipImportRotation">reset_skip_import_rotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_secret_id` <a name="reset_secret_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSecretId"></a>

```python
def reset_secret_id() -> None
```

##### `reset_skip_import_rotation` <a name="reset_skip_import_rotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSkipImportRotation"></a>

```python
def reset_skip_import_rotation() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AzureSecretBackendStaticRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_static_role

azureSecretBackendStaticRole.AzureSecretBackendStaticRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_static_role

azureSecretBackendStaticRole.AzureSecretBackendStaticRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_static_role

azureSecretBackendStaticRole.AzureSecretBackendStaticRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_static_role

azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AzureSecretBackendStaticRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AzureSecretBackendStaticRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AzureSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AzureSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectIdInput">application_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expirationInput">expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretIdInput">secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotationInput">skip_import_rotation_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectId">application_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotation">skip_import_rotation</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `application_object_id_input`<sup>Optional</sup> <a name="application_object_id_input" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectIdInput"></a>

```python
application_object_id_input: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expirationInput"></a>

```python
expiration_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `secret_id_input`<sup>Optional</sup> <a name="secret_id_input" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretIdInput"></a>

```python
secret_id_input: str
```

- *Type:* str

---

##### `skip_import_rotation_input`<sup>Optional</sup> <a name="skip_import_rotation_input" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotationInput"></a>

```python
skip_import_rotation_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `application_object_id`<sup>Required</sup> <a name="application_object_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectId"></a>

```python
application_object_id: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `skip_import_rotation`<sup>Required</sup> <a name="skip_import_rotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotation"></a>

```python
skip_import_rotation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendStaticRoleConfig <a name="AzureSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_static_role

azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  application_object_id: str,
  backend: str,
  role: str,
  client_secret: str = None,
  expiration: str = None,
  metadata: typing.Mapping[str] = None,
  namespace: str = None,
  secret_id: str = None,
  skip_import_rotation: bool | IResolvable = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.applicationObjectId">application_object_id</a></code> | <code>str</code> | Application object ID for an existing service principal that is managed by the static role. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.backend">backend</a></code> | <code>str</code> | The path where the Azure secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.role">role</a></code> | <code>str</code> | Name of the static role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | The plaintext secret value of the credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.expiration">expiration</a></code> | <code>str</code> | A future expiration time for the imported credential, in RFC3339 format. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | A map of string key/value pairs that will be stored as metadata on the secret. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.secretId">secret_id</a></code> | <code>str</code> | The secret ID of the Azure password credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.skipImportRotation">skip_import_rotation</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, skip rotation of the client secret on import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Timespan of 1 year (31536000) or more during which the role credentials are valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `application_object_id`<sup>Required</sup> <a name="application_object_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.applicationObjectId"></a>

```python
application_object_id: str
```

- *Type:* str

Application object ID for an existing service principal that is managed by the static role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#application_object_id AzureSecretBackendStaticRole#application_object_id}

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path where the Azure secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#backend AzureSecretBackendStaticRole#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the static role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#role AzureSecretBackendStaticRole#role}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

The plaintext secret value of the credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#client_secret AzureSecretBackendStaticRole#client_secret}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

A future expiration time for the imported credential, in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#expiration AzureSecretBackendStaticRole#expiration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of string key/value pairs that will be stored as metadata on the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#metadata AzureSecretBackendStaticRole#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#namespace AzureSecretBackendStaticRole#namespace}

---

##### `secret_id`<sup>Optional</sup> <a name="secret_id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

The secret ID of the Azure password credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#secret_id AzureSecretBackendStaticRole#secret_id}

---

##### `skip_import_rotation`<sup>Optional</sup> <a name="skip_import_rotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.skipImportRotation"></a>

```python
skip_import_rotation: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, skip rotation of the client secret on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#skip_import_rotation AzureSecretBackendStaticRole#skip_import_rotation}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Timespan of 1 year (31536000) or more during which the role credentials are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/azure_secret_backend_static_role#ttl AzureSecretBackendStaticRole#ttl}

---



