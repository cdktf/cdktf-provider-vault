# `secretsSyncAzureDestination` Submodule <a name="`secretsSyncAzureDestination` Submodule" id="@cdktf/provider-vault.secretsSyncAzureDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsSyncAzureDestination <a name="SecretsSyncAzureDestination" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination vault_secrets_sync_azure_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_azure_destination

secretsSyncAzureDestination.SecretsSyncAzureDestination(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  client_id: str = None,
  client_secret: str = None,
  cloud: str = None,
  custom_tags: typing.Mapping[str] = None,
  granularity: str = None,
  id: str = None,
  key_vault_uri: str = None,
  namespace: str = None,
  secret_name_template: str = None,
  tenant_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name of the Azure destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Client ID of an Azure app registration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Client Secret of an Azure app registration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.cloud">cloud</a></code> | <code>str</code> | Specifies a cloud for the client. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.granularity">granularity</a></code> | <code>str</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.keyVaultUri">key_vault_uri</a></code> | <code>str</code> | URI of an existing Azure Key Vault instance. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | ID of the target Azure tenant. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.name"></a>

- *Type:* str

Unique name of the Azure destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#name SecretsSyncAzureDestination#name}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.clientId"></a>

- *Type:* str

Client ID of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#client_id SecretsSyncAzureDestination#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.clientSecret"></a>

- *Type:* str

Client Secret of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#client_secret SecretsSyncAzureDestination#client_secret}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.cloud"></a>

- *Type:* str

Specifies a cloud for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#cloud SecretsSyncAzureDestination#cloud}

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.customTags"></a>

- *Type:* typing.Mapping[str]

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#custom_tags SecretsSyncAzureDestination#custom_tags}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.granularity"></a>

- *Type:* str

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#granularity SecretsSyncAzureDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault_uri`<sup>Optional</sup> <a name="key_vault_uri" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.keyVaultUri"></a>

- *Type:* str

URI of an existing Azure Key Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#key_vault_uri SecretsSyncAzureDestination#key_vault_uri}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#namespace SecretsSyncAzureDestination#namespace}

---

##### `secret_name_template`<sup>Optional</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.secretNameTemplate"></a>

- *Type:* str

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#secret_name_template SecretsSyncAzureDestination#secret_name_template}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.Initializer.parameter.tenantId"></a>

- *Type:* str

ID of the target Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#tenant_id SecretsSyncAzureDestination#tenant_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCloud">reset_cloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCustomTags">reset_custom_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetGranularity">reset_granularity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetKeyVaultUri">reset_key_vault_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetSecretNameTemplate">reset_secret_name_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_cloud` <a name="reset_cloud" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCloud"></a>

```python
def reset_cloud() -> None
```

##### `reset_custom_tags` <a name="reset_custom_tags" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetCustomTags"></a>

```python
def reset_custom_tags() -> None
```

##### `reset_granularity` <a name="reset_granularity" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetGranularity"></a>

```python
def reset_granularity() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_vault_uri` <a name="reset_key_vault_uri" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetKeyVaultUri"></a>

```python
def reset_key_vault_uri() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_secret_name_template` <a name="reset_secret_name_template" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetSecretNameTemplate"></a>

```python
def reset_secret_name_template() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SecretsSyncAzureDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_azure_destination

secretsSyncAzureDestination.SecretsSyncAzureDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_azure_destination

secretsSyncAzureDestination.SecretsSyncAzureDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_azure_destination

secretsSyncAzureDestination.SecretsSyncAzureDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_azure_destination

secretsSyncAzureDestination.SecretsSyncAzureDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SecretsSyncAzureDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SecretsSyncAzureDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SecretsSyncAzureDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SecretsSyncAzureDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloudInput">cloud_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTagsInput">custom_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUriInput">key_vault_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplateInput">secret_name_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloud">cloud</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUri">key_vault_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `cloud_input`<sup>Optional</sup> <a name="cloud_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloudInput"></a>

```python
cloud_input: str
```

- *Type:* str

---

##### `custom_tags_input`<sup>Optional</sup> <a name="custom_tags_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTagsInput"></a>

```python
custom_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_uri_input`<sup>Optional</sup> <a name="key_vault_uri_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUriInput"></a>

```python
key_vault_uri_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `secret_name_template_input`<sup>Optional</sup> <a name="secret_name_template_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplateInput"></a>

```python
secret_name_template_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

---

##### `custom_tags`<sup>Required</sup> <a name="custom_tags" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_uri`<sup>Required</sup> <a name="key_vault_uri" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.keyVaultUri"></a>

```python
key_vault_uri: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `secret_name_template`<sup>Required</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.secretNameTemplate"></a>

```python
secret_name_template: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsSyncAzureDestinationConfig <a name="SecretsSyncAzureDestinationConfig" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import secrets_sync_azure_destination

secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  client_id: str = None,
  client_secret: str = None,
  cloud: str = None,
  custom_tags: typing.Mapping[str] = None,
  granularity: str = None,
  id: str = None,
  key_vault_uri: str = None,
  namespace: str = None,
  secret_name_template: str = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.name">name</a></code> | <code>str</code> | Unique name of the Azure destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientId">client_id</a></code> | <code>str</code> | Client ID of an Azure app registration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Client Secret of an Azure app registration. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.cloud">cloud</a></code> | <code>str</code> | Specifies a cloud for the client. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.customTags">custom_tags</a></code> | <code>typing.Mapping[str]</code> | Custom tags to set on the secret managed at the destination. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.granularity">granularity</a></code> | <code>str</code> | Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.keyVaultUri">key_vault_uri</a></code> | <code>str</code> | URI of an existing Azure Key Vault instance. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.secretNameTemplate">secret_name_template</a></code> | <code>str</code> | Template describing how to generate external secret names. |
| <code><a href="#@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | ID of the target Azure tenant. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name of the Azure destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#name SecretsSyncAzureDestination#name}

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Client ID of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#client_id SecretsSyncAzureDestination#client_id}

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Client Secret of an Azure app registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#client_secret SecretsSyncAzureDestination#client_secret}

---

##### `cloud`<sup>Optional</sup> <a name="cloud" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.cloud"></a>

```python
cloud: str
```

- *Type:* str

Specifies a cloud for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#cloud SecretsSyncAzureDestination#cloud}

---

##### `custom_tags`<sup>Optional</sup> <a name="custom_tags" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.customTags"></a>

```python
custom_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Custom tags to set on the secret managed at the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#custom_tags SecretsSyncAzureDestination#custom_tags}

---

##### `granularity`<sup>Optional</sup> <a name="granularity" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

Determines what level of information is synced as a distinct resource at the destination. Can be 'secret-path' or 'secret-key'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#granularity SecretsSyncAzureDestination#granularity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#id SecretsSyncAzureDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_vault_uri`<sup>Optional</sup> <a name="key_vault_uri" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.keyVaultUri"></a>

```python
key_vault_uri: str
```

- *Type:* str

URI of an existing Azure Key Vault instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#key_vault_uri SecretsSyncAzureDestination#key_vault_uri}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#namespace SecretsSyncAzureDestination#namespace}

---

##### `secret_name_template`<sup>Optional</sup> <a name="secret_name_template" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.secretNameTemplate"></a>

```python
secret_name_template: str
```

- *Type:* str

Template describing how to generate external secret names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#secret_name_template SecretsSyncAzureDestination#secret_name_template}

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-vault.secretsSyncAzureDestination.SecretsSyncAzureDestinationConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

ID of the target Azure tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/secrets_sync_azure_destination#tenant_id SecretsSyncAzureDestination#tenant_id}

---



