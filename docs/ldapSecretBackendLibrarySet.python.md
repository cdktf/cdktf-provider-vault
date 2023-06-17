# `vault_ldap_secret_backend_library_set`

Refer to the Terraform Registory for docs: [`vault_ldap_secret_backend_library_set`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set).

# `ldapSecretBackendLibrarySet` Submodule <a name="`ldapSecretBackendLibrarySet` Submodule" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendLibrarySet <a name="LdapSecretBackendLibrarySet" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set vault_ldap_secret_backend_library_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_library_set

ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet(
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
  service_account_names: typing.List[str],
  disable_check_in_enforcement: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  mount: str = None,
  namespace: str = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the set of service accounts. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.serviceAccountNames">service_account_names</a></code> | <code>typing.List[str]</code> | The names of all the service accounts that can be checked out from this set. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.disableCheckInEnforcement">disable_check_in_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable enforcing that service accounts must be checked in by the entity or client token that checked them out. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time a check-out last with renewal before Vault automatically checks it back in. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.mount">mount</a></code> | <code>str</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time a single check-out lasts before Vault automatically checks it back in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.name"></a>

- *Type:* str

The name of the set of service accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#name LdapSecretBackendLibrarySet#name}

---

##### `service_account_names`<sup>Required</sup> <a name="service_account_names" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.serviceAccountNames"></a>

- *Type:* typing.List[str]

The names of all the service accounts that can be checked out from this set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#service_account_names LdapSecretBackendLibrarySet#service_account_names}

---

##### `disable_check_in_enforcement`<sup>Optional</sup> <a name="disable_check_in_enforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.disableCheckInEnforcement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable enforcing that service accounts must be checked in by the entity or client token that checked them out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#disable_check_in_enforcement LdapSecretBackendLibrarySet#disable_check_in_enforcement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time a check-out last with renewal before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#max_ttl LdapSecretBackendLibrarySet#max_ttl}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.mount"></a>

- *Type:* str

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#mount LdapSecretBackendLibrarySet#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#namespace LdapSecretBackendLibrarySet#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time a single check-out lasts before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#ttl LdapSecretBackendLibrarySet#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetDisableCheckInEnforcement">reset_disable_check_in_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMount">reset_mount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_disable_check_in_enforcement` <a name="reset_disable_check_in_enforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetDisableCheckInEnforcement"></a>

```python
def reset_disable_check_in_enforcement() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_mount` <a name="reset_mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetMount"></a>

```python
def reset_mount() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_library_set

ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_library_set

ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_library_set

ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcementInput">disable_check_in_enforcement_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNamesInput">service_account_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcement">disable_check_in_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNames">service_account_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disable_check_in_enforcement_input`<sup>Optional</sup> <a name="disable_check_in_enforcement_input" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcementInput"></a>

```python
disable_check_in_enforcement_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `service_account_names_input`<sup>Optional</sup> <a name="service_account_names_input" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNamesInput"></a>

```python
service_account_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disable_check_in_enforcement`<sup>Required</sup> <a name="disable_check_in_enforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.disableCheckInEnforcement"></a>

```python
disable_check_in_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `service_account_names`<sup>Required</sup> <a name="service_account_names" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.serviceAccountNames"></a>

```python
service_account_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendLibrarySetConfig <a name="LdapSecretBackendLibrarySetConfig" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ldap_secret_backend_library_set

ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  service_account_names: typing.List[str],
  disable_check_in_enforcement: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  mount: str = None,
  namespace: str = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.name">name</a></code> | <code>str</code> | The name of the set of service accounts. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.serviceAccountNames">service_account_names</a></code> | <code>typing.List[str]</code> | The names of all the service accounts that can be checked out from this set. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.disableCheckInEnforcement">disable_check_in_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable enforcing that service accounts must be checked in by the entity or client token that checked them out. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time a check-out last with renewal before Vault automatically checks it back in. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.mount">mount</a></code> | <code>str</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time a single check-out lasts before Vault automatically checks it back in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the set of service accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#name LdapSecretBackendLibrarySet#name}

---

##### `service_account_names`<sup>Required</sup> <a name="service_account_names" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.serviceAccountNames"></a>

```python
service_account_names: typing.List[str]
```

- *Type:* typing.List[str]

The names of all the service accounts that can be checked out from this set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#service_account_names LdapSecretBackendLibrarySet#service_account_names}

---

##### `disable_check_in_enforcement`<sup>Optional</sup> <a name="disable_check_in_enforcement" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.disableCheckInEnforcement"></a>

```python
disable_check_in_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable enforcing that service accounts must be checked in by the entity or client token that checked them out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#disable_check_in_enforcement LdapSecretBackendLibrarySet#disable_check_in_enforcement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#id LdapSecretBackendLibrarySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time a check-out last with renewal before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#max_ttl LdapSecretBackendLibrarySet#max_ttl}

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#mount LdapSecretBackendLibrarySet#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#namespace LdapSecretBackendLibrarySet#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.ldapSecretBackendLibrarySet.LdapSecretBackendLibrarySetConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time a single check-out lasts before Vault automatically checks it back in.

Defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/ldap_secret_backend_library_set#ttl LdapSecretBackendLibrarySet#ttl}

---


