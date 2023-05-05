# `vault_azure_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_azure_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role).

# `azureSecretBackendRole` Submodule <a name="`azureSecretBackendRole` Submodule" id="@cdktf/provider-vault.azureSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackendRole <a name="AzureSecretBackendRole" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role vault_azure_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRole(
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
  application_object_id: str = None,
  azure_groups: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureGroups]] = None,
  azure_roles: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureRoles]] = None,
  backend: str = None,
  description: str = None,
  id: str = None,
  max_ttl: str = None,
  namespace: str = None,
  ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.role">role</a></code> | <code>str</code> | Name of the role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.applicationObjectId">application_object_id</a></code> | <code>str</code> | Application Object ID for an existing service principal that will be used instead of creating dynamic service principals. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.azureGroups">azure_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>]]</code> | azure_groups block. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.azureRoles">azure_roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>]]</code> | azure_roles block. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.role"></a>

- *Type:* str

Name of the role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#role AzureSecretBackendRole#role}

---

##### `application_object_id`<sup>Optional</sup> <a name="application_object_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.applicationObjectId"></a>

- *Type:* str

Application Object ID for an existing service principal that will be used instead of creating dynamic service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#application_object_id AzureSecretBackendRole#application_object_id}

---

##### `azure_groups`<sup>Optional</sup> <a name="azure_groups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.azureGroups"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>]]

azure_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#azure_groups AzureSecretBackendRole#azure_groups}

---

##### `azure_roles`<sup>Optional</sup> <a name="azure_roles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.azureRoles"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>]]

azure_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#azure_roles AzureSecretBackendRole#azure_roles}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#backend AzureSecretBackendRole#backend}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#description AzureSecretBackendRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#max_ttl AzureSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#namespace AzureSecretBackendRole#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.ttl"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#ttl AzureSecretBackendRole#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups">put_azure_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles">put_azure_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetApplicationObjectId">reset_application_object_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureGroups">reset_azure_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureRoles">reset_azure_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_azure_groups` <a name="put_azure_groups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups"></a>

```python
def put_azure_groups(
  value: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureGroups]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>]]

---

##### `put_azure_roles` <a name="put_azure_roles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles"></a>

```python
def put_azure_roles(
  value: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureRoles]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>]]

---

##### `reset_application_object_id` <a name="reset_application_object_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetApplicationObjectId"></a>

```python
def reset_application_object_id() -> None
```

##### `reset_azure_groups` <a name="reset_azure_groups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureGroups"></a>

```python
def reset_azure_groups() -> None
```

##### `reset_azure_roles` <a name="reset_azure_roles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureRoles"></a>

```python
def reset_azure_roles() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroups">azure_groups</a></code> | <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList">AzureSecretBackendRoleAzureGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRoles">azure_roles</a></code> | <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList">AzureSecretBackendRoleAzureRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectIdInput">application_object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroupsInput">azure_groups_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRolesInput">azure_roles_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtlInput">max_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectId">application_object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtl">max_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_groups`<sup>Required</sup> <a name="azure_groups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroups"></a>

```python
azure_groups: AzureSecretBackendRoleAzureGroupsList
```

- *Type:* <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList">AzureSecretBackendRoleAzureGroupsList</a>

---

##### `azure_roles`<sup>Required</sup> <a name="azure_roles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRoles"></a>

```python
azure_roles: AzureSecretBackendRoleAzureRolesList
```

- *Type:* <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList">AzureSecretBackendRoleAzureRolesList</a>

---

##### `application_object_id_input`<sup>Optional</sup> <a name="application_object_id_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectIdInput"></a>

```python
application_object_id_input: str
```

- *Type:* str

---

##### `azure_groups_input`<sup>Optional</sup> <a name="azure_groups_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroupsInput"></a>

```python
azure_groups_input: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>]]

---

##### `azure_roles_input`<sup>Optional</sup> <a name="azure_roles_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRolesInput"></a>

```python
azure_roles_input: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtlInput"></a>

```python
max_ttl_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `application_object_id`<sup>Required</sup> <a name="application_object_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectId"></a>

```python
application_object_id: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtl"></a>

```python
max_ttl: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendRoleAzureGroups <a name="AzureSecretBackendRoleAzureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRoleAzureGroups(
  group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.property.groupName">group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#group_name AzureSecretBackendRole#group_name}. |

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#group_name AzureSecretBackendRole#group_name}.

---

### AzureSecretBackendRoleAzureRoles <a name="AzureSecretBackendRoleAzureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRoleAzureRoles(
  scope: str,
  role_id: str = None,
  role_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.scope">scope</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#scope AzureSecretBackendRole#scope}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleId">role_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#role_id AzureSecretBackendRole#role_id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#role_name AzureSecretBackendRole#role_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.scope"></a>

```python
scope: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#scope AzureSecretBackendRole#scope}.

---

##### `role_id`<sup>Optional</sup> <a name="role_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#role_id AzureSecretBackendRole#role_id}.

---

##### `role_name`<sup>Optional</sup> <a name="role_name" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#role_name AzureSecretBackendRole#role_name}.

---

### AzureSecretBackendRoleConfig <a name="AzureSecretBackendRoleConfig" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role: str,
  application_object_id: str = None,
  azure_groups: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureGroups]] = None,
  azure_roles: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureRoles]] = None,
  backend: str = None,
  description: str = None,
  id: str = None,
  max_ttl: str = None,
  namespace: str = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.role">role</a></code> | <code>str</code> | Name of the role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.applicationObjectId">application_object_id</a></code> | <code>str</code> | Application Object ID for an existing service principal that will be used instead of creating dynamic service principals. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureGroups">azure_groups</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>]]</code> | azure_groups block. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureRoles">azure_roles</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>]]</code> | azure_roles block. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.maxTtl">max_ttl</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#role AzureSecretBackendRole#role}

---

##### `application_object_id`<sup>Optional</sup> <a name="application_object_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.applicationObjectId"></a>

```python
application_object_id: str
```

- *Type:* str

Application Object ID for an existing service principal that will be used instead of creating dynamic service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#application_object_id AzureSecretBackendRole#application_object_id}

---

##### `azure_groups`<sup>Optional</sup> <a name="azure_groups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureGroups"></a>

```python
azure_groups: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>]]

azure_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#azure_groups AzureSecretBackendRole#azure_groups}

---

##### `azure_roles`<sup>Optional</sup> <a name="azure_roles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureRoles"></a>

```python
azure_roles: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>]]

azure_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#azure_roles AzureSecretBackendRole#azure_roles}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#backend AzureSecretBackendRole#backend}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#description AzureSecretBackendRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.maxTtl"></a>

```python
max_ttl: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#max_ttl AzureSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#namespace AzureSecretBackendRole#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/azure_secret_backend_role#ttl AzureSecretBackendRole#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### AzureSecretBackendRoleAzureGroupsList <a name="AzureSecretBackendRoleAzureGroupsList" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AzureSecretBackendRoleAzureGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureGroups]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>]]

---


### AzureSecretBackendRoleAzureGroupsOutputReference <a name="AzureSecretBackendRoleAzureGroupsOutputReference" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AzureSecretBackendRoleAzureGroups, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>, cdktf.IResolvable]

---


### AzureSecretBackendRoleAzureRolesList <a name="AzureSecretBackendRoleAzureRolesList" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AzureSecretBackendRoleAzureRolesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AzureSecretBackendRoleAzureRoles]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>]]

---


### AzureSecretBackendRoleAzureRolesOutputReference <a name="AzureSecretBackendRoleAzureRolesOutputReference" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import azure_secret_backend_role

azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleId">reset_role_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleName">reset_role_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_role_id` <a name="reset_role_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleId"></a>

```python
def reset_role_id() -> None
```

##### `reset_role_name` <a name="reset_role_name" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleName"></a>

```python
def reset_role_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleIdInput">role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `role_id_input`<sup>Optional</sup> <a name="role_id_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleIdInput"></a>

```python
role_id_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AzureSecretBackendRoleAzureRoles, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>, cdktf.IResolvable]

---



