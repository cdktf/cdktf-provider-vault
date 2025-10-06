# `consulSecretBackendRole` Submodule <a name="`consulSecretBackendRole` Submodule" id="@cdktf/provider-vault.consulSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConsulSecretBackendRole <a name="ConsulSecretBackendRole" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role vault_consul_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend_role

consulSecretBackendRole.ConsulSecretBackendRole(
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
  backend: str = None,
  consul_namespace: str = None,
  consul_policies: typing.List[str] = None,
  consul_roles: typing.List[str] = None,
  id: str = None,
  local: bool | IResolvable = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  node_identities: typing.List[str] = None,
  partition: str = None,
  policies: typing.List[str] = None,
  service_identities: typing.List[str] = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of an existing role against which to create this Consul credential. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path of the Consul Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulNamespace">consul_namespace</a></code> | <code>str</code> | The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulPolicies">consul_policies</a></code> | <code>typing.List[str]</code> | List of Consul policies to associate with this role. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulRoles">consul_roles</a></code> | <code>typing.List[str]</code> | Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates that the token should not be replicated globally and instead be local to the current datacenter. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.nodeIdentities">node_identities</a></code> | <code>typing.List[str]</code> | Set of Consul node identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.8+. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.partition">partition</a></code> | <code>str</code> | The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | List of Consul policies to associate with this role. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.serviceIdentities">service_identities</a></code> | <code>typing.List[str]</code> | Set of Consul service identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.5+. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the TTL for this role. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* str

The name of an existing role against which to create this Consul credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#name ConsulSecretBackendRole#name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

The path of the Consul Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#backend ConsulSecretBackendRole#backend}

---

##### `consul_namespace`<sup>Optional</sup> <a name="consul_namespace" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulNamespace"></a>

- *Type:* str

The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#consul_namespace ConsulSecretBackendRole#consul_namespace}

---

##### `consul_policies`<sup>Optional</sup> <a name="consul_policies" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulPolicies"></a>

- *Type:* typing.List[str]

List of Consul policies to associate with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#consul_policies ConsulSecretBackendRole#consul_policies}

---

##### `consul_roles`<sup>Optional</sup> <a name="consul_roles" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.consulRoles"></a>

- *Type:* typing.List[str]

Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#consul_roles ConsulSecretBackendRole#consul_roles}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.local"></a>

- *Type:* bool | cdktf.IResolvable

Indicates that the token should not be replicated globally and instead be local to the current datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#local ConsulSecretBackendRole#local}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#max_ttl ConsulSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#namespace ConsulSecretBackendRole#namespace}

---

##### `node_identities`<sup>Optional</sup> <a name="node_identities" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.nodeIdentities"></a>

- *Type:* typing.List[str]

Set of Consul node identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.8+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#node_identities ConsulSecretBackendRole#node_identities}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.partition"></a>

- *Type:* str

The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#partition ConsulSecretBackendRole#partition}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

List of Consul policies to associate with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#policies ConsulSecretBackendRole#policies}

---

##### `service_identities`<sup>Optional</sup> <a name="service_identities" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.serviceIdentities"></a>

- *Type:* typing.List[str]

Set of Consul service identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.5+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#service_identities ConsulSecretBackendRole#service_identities}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Specifies the TTL for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#ttl ConsulSecretBackendRole#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulNamespace">reset_consul_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulPolicies">reset_consul_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulRoles">reset_consul_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetLocal">reset_local</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNodeIdentities">reset_node_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPartition">reset_partition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetServiceIdentities">reset_service_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_consul_namespace` <a name="reset_consul_namespace" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulNamespace"></a>

```python
def reset_consul_namespace() -> None
```

##### `reset_consul_policies` <a name="reset_consul_policies" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulPolicies"></a>

```python
def reset_consul_policies() -> None
```

##### `reset_consul_roles` <a name="reset_consul_roles" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetConsulRoles"></a>

```python
def reset_consul_roles() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local` <a name="reset_local" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetLocal"></a>

```python
def reset_local() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_node_identities` <a name="reset_node_identities" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetNodeIdentities"></a>

```python
def reset_node_identities() -> None
```

##### `reset_partition` <a name="reset_partition" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPartition"></a>

```python
def reset_partition() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_service_identities` <a name="reset_service_identities" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetServiceIdentities"></a>

```python
def reset_service_identities() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ConsulSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend_role

consulSecretBackendRole.ConsulSecretBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend_role

consulSecretBackendRole.ConsulSecretBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend_role

consulSecretBackendRole.ConsulSecretBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend_role

consulSecretBackendRole.ConsulSecretBackendRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ConsulSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ConsulSecretBackendRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ConsulSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConsulSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespaceInput">consul_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPoliciesInput">consul_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRolesInput">consul_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.localInput">local_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentitiesInput">node_identities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partitionInput">partition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentitiesInput">service_identities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespace">consul_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPolicies">consul_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRoles">consul_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentities">node_identities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partition">partition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentities">service_identities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `consul_namespace_input`<sup>Optional</sup> <a name="consul_namespace_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespaceInput"></a>

```python
consul_namespace_input: str
```

- *Type:* str

---

##### `consul_policies_input`<sup>Optional</sup> <a name="consul_policies_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPoliciesInput"></a>

```python
consul_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consul_roles_input`<sup>Optional</sup> <a name="consul_roles_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRolesInput"></a>

```python
consul_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_input`<sup>Optional</sup> <a name="local_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.localInput"></a>

```python
local_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `node_identities_input`<sup>Optional</sup> <a name="node_identities_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentitiesInput"></a>

```python
node_identities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `partition_input`<sup>Optional</sup> <a name="partition_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partitionInput"></a>

```python
partition_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_identities_input`<sup>Optional</sup> <a name="service_identities_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentitiesInput"></a>

```python
service_identities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `consul_namespace`<sup>Required</sup> <a name="consul_namespace" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulNamespace"></a>

```python
consul_namespace: str
```

- *Type:* str

---

##### `consul_policies`<sup>Required</sup> <a name="consul_policies" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulPolicies"></a>

```python
consul_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `consul_roles`<sup>Required</sup> <a name="consul_roles" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.consulRoles"></a>

```python
consul_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `node_identities`<sup>Required</sup> <a name="node_identities" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.nodeIdentities"></a>

```python
node_identities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.partition"></a>

```python
partition: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `service_identities`<sup>Required</sup> <a name="service_identities" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.serviceIdentities"></a>

```python
service_identities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ConsulSecretBackendRoleConfig <a name="ConsulSecretBackendRoleConfig" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import consul_secret_backend_role

consulSecretBackendRole.ConsulSecretBackendRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  backend: str = None,
  consul_namespace: str = None,
  consul_policies: typing.List[str] = None,
  consul_roles: typing.List[str] = None,
  id: str = None,
  local: bool | IResolvable = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  node_identities: typing.List[str] = None,
  partition: str = None,
  policies: typing.List[str] = None,
  service_identities: typing.List[str] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.name">name</a></code> | <code>str</code> | The name of an existing role against which to create this Consul credential. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | The path of the Consul Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulNamespace">consul_namespace</a></code> | <code>str</code> | The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulPolicies">consul_policies</a></code> | <code>typing.List[str]</code> | List of Consul policies to associate with this role. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulRoles">consul_roles</a></code> | <code>typing.List[str]</code> | Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.local">local</a></code> | <code>bool \| cdktf.IResolvable</code> | Indicates that the token should not be replicated globally and instead be local to the current datacenter. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Maximum TTL for leases associated with this role, in seconds. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.nodeIdentities">node_identities</a></code> | <code>typing.List[str]</code> | Set of Consul node identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.8+. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.partition">partition</a></code> | <code>str</code> | The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | List of Consul policies to associate with this role. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.serviceIdentities">service_identities</a></code> | <code>typing.List[str]</code> | Set of Consul service identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.5+. |
| <code><a href="#@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the TTL for this role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of an existing role against which to create this Consul credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#name ConsulSecretBackendRole#name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path of the Consul Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#backend ConsulSecretBackendRole#backend}

---

##### `consul_namespace`<sup>Optional</sup> <a name="consul_namespace" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulNamespace"></a>

```python
consul_namespace: str
```

- *Type:* str

The Consul namespace that the token will be created in. Applicable for Vault 1.10+ and Consul 1.7+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#consul_namespace ConsulSecretBackendRole#consul_namespace}

---

##### `consul_policies`<sup>Optional</sup> <a name="consul_policies" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulPolicies"></a>

```python
consul_policies: typing.List[str]
```

- *Type:* typing.List[str]

List of Consul policies to associate with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#consul_policies ConsulSecretBackendRole#consul_policies}

---

##### `consul_roles`<sup>Optional</sup> <a name="consul_roles" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.consulRoles"></a>

```python
consul_roles: typing.List[str]
```

- *Type:* typing.List[str]

Set of Consul roles to attach to the token. Applicable for Vault 1.10+ with Consul 1.5+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#consul_roles ConsulSecretBackendRole#consul_roles}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#id ConsulSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.local"></a>

```python
local: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Indicates that the token should not be replicated globally and instead be local to the current datacenter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#local ConsulSecretBackendRole#local}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum TTL for leases associated with this role, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#max_ttl ConsulSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#namespace ConsulSecretBackendRole#namespace}

---

##### `node_identities`<sup>Optional</sup> <a name="node_identities" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.nodeIdentities"></a>

```python
node_identities: typing.List[str]
```

- *Type:* typing.List[str]

Set of Consul node identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.8+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#node_identities ConsulSecretBackendRole#node_identities}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.partition"></a>

```python
partition: str
```

- *Type:* str

The Consul admin partition that the token will be created in. Applicable for Vault 1.10+ and Consul 1.11+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#partition ConsulSecretBackendRole#partition}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

List of Consul policies to associate with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#policies ConsulSecretBackendRole#policies}

---

##### `service_identities`<sup>Optional</sup> <a name="service_identities" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.serviceIdentities"></a>

```python
service_identities: typing.List[str]
```

- *Type:* typing.List[str]

Set of Consul service identities to attach to 				the token. Applicable for Vault 1.11+ with Consul 1.5+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#service_identities ConsulSecretBackendRole#service_identities}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.consulSecretBackendRole.ConsulSecretBackendRoleConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the TTL for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/consul_secret_backend_role#ttl ConsulSecretBackendRole#ttl}

---



