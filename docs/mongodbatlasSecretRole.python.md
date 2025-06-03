# `mongodbatlasSecretRole` Submodule <a name="`mongodbatlasSecretRole` Submodule" id="@cdktf/provider-vault.mongodbatlasSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbatlasSecretRole <a name="MongodbatlasSecretRole" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role vault_mongodbatlas_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import mongodbatlas_secret_role

mongodbatlasSecretRole.MongodbatlasSecretRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mount: str,
  name: str,
  roles: typing.List[str],
  cidr_blocks: typing.List[str] = None,
  id: str = None,
  ip_addresses: typing.List[str] = None,
  max_ttl: str = None,
  namespace: str = None,
  organization_id: str = None,
  project_id: str = None,
  project_roles: typing.List[str] = None,
  ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Path where MongoDB Atlas secret backend is mounted. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | List of roles that the API Key needs to have. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | Whitelist entry in CIDR notation to be added for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | IP address to be added to the whitelist for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>str</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.organizationId">organization_id</a></code> | <code>str</code> | ID for the organization to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | ID for the project to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.projectRoles">project_roles</a></code> | <code>typing.List[str]</code> | Roles assigned when an org API key is assigned to a project API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | Duration in seconds after which the issued credential should expire. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.mount"></a>

- *Type:* str

Path where MongoDB Atlas secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#mount MongodbatlasSecretRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.name"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#name MongodbatlasSecretRole#name}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

List of roles that the API Key needs to have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#roles MongodbatlasSecretRole#roles}

---

##### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.cidrBlocks"></a>

- *Type:* typing.List[str]

Whitelist entry in CIDR notation to be added for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#cidr_blocks MongodbatlasSecretRole#cidr_blocks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.ipAddresses"></a>

- *Type:* typing.List[str]

IP address to be added to the whitelist for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#ip_addresses MongodbatlasSecretRole#ip_addresses}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.maxTtl"></a>

- *Type:* str

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#max_ttl MongodbatlasSecretRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#namespace MongodbatlasSecretRole#namespace}

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.organizationId"></a>

- *Type:* str

ID for the organization to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#organization_id MongodbatlasSecretRole#organization_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.projectId"></a>

- *Type:* str

ID for the project to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#project_id MongodbatlasSecretRole#project_id}

---

##### `project_roles`<sup>Optional</sup> <a name="project_roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.projectRoles"></a>

- *Type:* typing.List[str]

Roles assigned when an org API key is assigned to a project API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#project_roles MongodbatlasSecretRole#project_roles}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.ttl"></a>

- *Type:* str

Duration in seconds after which the issued credential should expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#ttl MongodbatlasSecretRole#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetCidrBlocks">reset_cidr_blocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetIpAddresses">reset_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOrganizationId">reset_organization_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectRoles">reset_project_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_cidr_blocks` <a name="reset_cidr_blocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetCidrBlocks"></a>

```python
def reset_cidr_blocks() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_addresses` <a name="reset_ip_addresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetIpAddresses"></a>

```python
def reset_ip_addresses() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_organization_id` <a name="reset_organization_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOrganizationId"></a>

```python
def reset_organization_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_project_roles` <a name="reset_project_roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectRoles"></a>

```python
def reset_project_roles() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MongodbatlasSecretRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import mongodbatlas_secret_role

mongodbatlasSecretRole.MongodbatlasSecretRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import mongodbatlas_secret_role

mongodbatlasSecretRole.MongodbatlasSecretRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import mongodbatlas_secret_role

mongodbatlasSecretRole.MongodbatlasSecretRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import mongodbatlas_secret_role

mongodbatlasSecretRole.MongodbatlasSecretRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MongodbatlasSecretRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MongodbatlasSecretRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MongodbatlasSecretRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MongodbatlasSecretRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocksInput">cidr_blocks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddressesInput">ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtlInput">max_ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationIdInput">organization_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRolesInput">project_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtl">max_ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRoles">project_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cidr_blocks_input`<sup>Optional</sup> <a name="cidr_blocks_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocksInput"></a>

```python
cidr_blocks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddressesInput"></a>

```python
ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtlInput"></a>

```python
max_ttl_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `organization_id_input`<sup>Optional</sup> <a name="organization_id_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationIdInput"></a>

```python
organization_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `project_roles_input`<sup>Optional</sup> <a name="project_roles_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRolesInput"></a>

```python
project_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `cidr_blocks`<sup>Required</sup> <a name="cidr_blocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtl"></a>

```python
max_ttl: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `project_roles`<sup>Required</sup> <a name="project_roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRoles"></a>

```python
project_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbatlasSecretRoleConfig <a name="MongodbatlasSecretRoleConfig" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import mongodbatlas_secret_role

mongodbatlasSecretRole.MongodbatlasSecretRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mount: str,
  name: str,
  roles: typing.List[str],
  cidr_blocks: typing.List[str] = None,
  id: str = None,
  ip_addresses: typing.List[str] = None,
  max_ttl: str = None,
  namespace: str = None,
  organization_id: str = None,
  project_id: str = None,
  project_roles: typing.List[str] = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.mount">mount</a></code> | <code>str</code> | Path where MongoDB Atlas secret backend is mounted. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.name">name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | List of roles that the API Key needs to have. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.cidrBlocks">cidr_blocks</a></code> | <code>typing.List[str]</code> | Whitelist entry in CIDR notation to be added for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | IP address to be added to the whitelist for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.maxTtl">max_ttl</a></code> | <code>str</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.organizationId">organization_id</a></code> | <code>str</code> | ID for the organization to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectId">project_id</a></code> | <code>str</code> | ID for the project to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectRoles">project_roles</a></code> | <code>typing.List[str]</code> | Roles assigned when an org API key is assigned to a project API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ttl">ttl</a></code> | <code>str</code> | Duration in seconds after which the issued credential should expire. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Path where MongoDB Atlas secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#mount MongodbatlasSecretRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#name MongodbatlasSecretRole#name}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

List of roles that the API Key needs to have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#roles MongodbatlasSecretRole#roles}

---

##### `cidr_blocks`<sup>Optional</sup> <a name="cidr_blocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.cidrBlocks"></a>

```python
cidr_blocks: typing.List[str]
```

- *Type:* typing.List[str]

Whitelist entry in CIDR notation to be added for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#cidr_blocks MongodbatlasSecretRole#cidr_blocks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

IP address to be added to the whitelist for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#ip_addresses MongodbatlasSecretRole#ip_addresses}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.maxTtl"></a>

```python
max_ttl: str
```

- *Type:* str

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#max_ttl MongodbatlasSecretRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#namespace MongodbatlasSecretRole#namespace}

---

##### `organization_id`<sup>Optional</sup> <a name="organization_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

ID for the organization to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#organization_id MongodbatlasSecretRole#organization_id}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

ID for the project to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#project_id MongodbatlasSecretRole#project_id}

---

##### `project_roles`<sup>Optional</sup> <a name="project_roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectRoles"></a>

```python
project_roles: typing.List[str]
```

- *Type:* typing.List[str]

Roles assigned when an org API key is assigned to a project API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#project_roles MongodbatlasSecretRole#project_roles}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Duration in seconds after which the issued credential should expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/mongodbatlas_secret_role#ttl MongodbatlasSecretRole#ttl}

---



