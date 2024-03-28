# `ldapSecretBackendDynamicRole` Submodule <a name="`ldapSecretBackendDynamicRole` Submodule" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendDynamicRole <a name="LdapSecretBackendDynamicRole" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role vault_ldap_secret_backend_dynamic_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_dynamic_role

ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  creation_ldif: str,
  deletion_ldif: str,
  role_name: str,
  default_ttl: typing.Union[int, float] = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  mount: str = None,
  namespace: str = None,
  rollback_ldif: str = None,
  username_template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.creationLdif">creation_ldif</a></code> | <code>str</code> | A templatized LDIF string used to create a user account. May contain multiple entries. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.deletionLdif">deletion_ldif</a></code> | <code>str</code> | A templatized LDIF string used to delete the user account once its TTL has expired. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.mount">mount</a></code> | <code>str</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.rollbackLdif">rollback_ldif</a></code> | <code>str</code> | A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.usernameTemplate">username_template</a></code> | <code>str</code> | A template used to generate a dynamic username. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_ldif`<sup>Required</sup> <a name="creation_ldif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.creationLdif"></a>

- *Type:* str

A templatized LDIF string used to create a user account. May contain multiple entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#creation_ldif LdapSecretBackendDynamicRole#creation_ldif}

---

##### `deletion_ldif`<sup>Required</sup> <a name="deletion_ldif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.deletionLdif"></a>

- *Type:* str

A templatized LDIF string used to delete the user account once its TTL has expired.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#deletion_ldif LdapSecretBackendDynamicRole#deletion_ldif}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.roleName"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#role_name LdapSecretBackendDynamicRole#role_name}

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.defaultTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#default_ttl LdapSecretBackendDynamicRole#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#max_ttl LdapSecretBackendDynamicRole#max_ttl}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.mount"></a>

- *Type:* str

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#mount LdapSecretBackendDynamicRole#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#namespace LdapSecretBackendDynamicRole#namespace}

---

##### `rollback_ldif`<sup>Optional</sup> <a name="rollback_ldif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.rollbackLdif"></a>

- *Type:* str

A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#rollback_ldif LdapSecretBackendDynamicRole#rollback_ldif}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.Initializer.parameter.usernameTemplate"></a>

- *Type:* str

A template used to generate a dynamic username.

This will be used to fill in the .Username field within the creation_ldif string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#username_template LdapSecretBackendDynamicRole#username_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMount">reset_mount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetRollbackLdif">reset_rollback_ldif</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_mount` <a name="reset_mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetMount"></a>

```python
def reset_mount() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_rollback_ldif` <a name="reset_rollback_ldif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetRollbackLdif"></a>

```python
def reset_rollback_ldif() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LdapSecretBackendDynamicRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_dynamic_role

ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_dynamic_role

ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_dynamic_role

ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_dynamic_role

ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LdapSecretBackendDynamicRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LdapSecretBackendDynamicRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LdapSecretBackendDynamicRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LdapSecretBackendDynamicRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdifInput">creation_ldif_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtlInput">default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdifInput">deletion_ldif_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdifInput">rollback_ldif_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdif">creation_ldif</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdif">deletion_ldif</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdif">rollback_ldif</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_ldif_input`<sup>Optional</sup> <a name="creation_ldif_input" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdifInput"></a>

```python
creation_ldif_input: str
```

- *Type:* str

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtlInput"></a>

```python
default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deletion_ldif_input`<sup>Optional</sup> <a name="deletion_ldif_input" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdifInput"></a>

```python
deletion_ldif_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `rollback_ldif_input`<sup>Optional</sup> <a name="rollback_ldif_input" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdifInput"></a>

```python
rollback_ldif_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `creation_ldif`<sup>Required</sup> <a name="creation_ldif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.creationLdif"></a>

```python
creation_ldif: str
```

- *Type:* str

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `deletion_ldif`<sup>Required</sup> <a name="deletion_ldif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.deletionLdif"></a>

```python
deletion_ldif: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `rollback_ldif`<sup>Required</sup> <a name="rollback_ldif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.rollbackLdif"></a>

```python
rollback_ldif: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendDynamicRoleConfig <a name="LdapSecretBackendDynamicRoleConfig" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_dynamic_role

ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  creation_ldif: str,
  deletion_ldif: str,
  role_name: str,
  default_ttl: typing.Union[int, float] = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  mount: str = None,
  namespace: str = None,
  rollback_ldif: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.creationLdif">creation_ldif</a></code> | <code>str</code> | A templatized LDIF string used to create a user account. May contain multiple entries. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.deletionLdif">deletion_ldif</a></code> | <code>str</code> | A templatized LDIF string used to delete the user account once its TTL has expired. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.roleName">role_name</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum TTL for the leases associated with this role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.mount">mount</a></code> | <code>str</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.rollbackLdif">rollback_ldif</a></code> | <code>str</code> | A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.usernameTemplate">username_template</a></code> | <code>str</code> | A template used to generate a dynamic username. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_ldif`<sup>Required</sup> <a name="creation_ldif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.creationLdif"></a>

```python
creation_ldif: str
```

- *Type:* str

A templatized LDIF string used to create a user account. May contain multiple entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#creation_ldif LdapSecretBackendDynamicRole#creation_ldif}

---

##### `deletion_ldif`<sup>Required</sup> <a name="deletion_ldif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.deletionLdif"></a>

```python
deletion_ldif: str
```

- *Type:* str

A templatized LDIF string used to delete the user account once its TTL has expired.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#deletion_ldif LdapSecretBackendDynamicRole#deletion_ldif}

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#role_name LdapSecretBackendDynamicRole#role_name}

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#default_ttl LdapSecretBackendDynamicRole#default_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#id LdapSecretBackendDynamicRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum TTL for the leases associated with this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#max_ttl LdapSecretBackendDynamicRole#max_ttl}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#mount LdapSecretBackendDynamicRole#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#namespace LdapSecretBackendDynamicRole#namespace}

---

##### `rollback_ldif`<sup>Optional</sup> <a name="rollback_ldif" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.rollbackLdif"></a>

```python
rollback_ldif: str
```

- *Type:* str

A templatized LDIF string used to attempt to rollback any changes in the event that execution of the creation_ldif results in an error.

This may contain multiple LDIF entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#rollback_ldif LdapSecretBackendDynamicRole#rollback_ldif}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.ldapSecretBackendDynamicRole.LdapSecretBackendDynamicRoleConfig.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

A template used to generate a dynamic username.

This will be used to fill in the .Username field within the creation_ldif string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/ldap_secret_backend_dynamic_role#username_template LdapSecretBackendDynamicRole#username_template}

---



