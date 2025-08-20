# `pkiSecretBackendConfigAcme` Submodule <a name="`pkiSecretBackendConfigAcme` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigAcme <a name="PkiSecretBackendConfigAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme vault_pki_secret_backend_config_acme}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_acme

pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme(
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
  enabled: typing.Union[bool, IResolvable],
  allowed_issuers: typing.List[str] = None,
  allowed_roles: typing.List[str] = None,
  allow_role_ext_key_usage: typing.Union[bool, IResolvable] = None,
  default_directory_policy: str = None,
  dns_resolver: str = None,
  eab_policy: str = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether ACME is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.allowedIssuers">allowed_issuers</a></code> | <code>typing.List[str]</code> | Specifies which issuers are allowed for use with ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | Specifies which roles are allowed for use with ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.allowRoleExtKeyUsage">allow_role_ext_key_usage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the ExtKeyUsage field from a role is used. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.defaultDirectoryPolicy">default_directory_policy</a></code> | <code>str</code> | Specifies the policy to be used for non-role-qualified ACME requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.dnsResolver">dns_resolver</a></code> | <code>str</code> | DNS resolver to use for domain resolution on this mount. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.eabPolicy">eab_policy</a></code> | <code>str</code> | Specifies the policy to use for external account binding behaviour. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum TTL in seconds for certificates issued by ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.backend"></a>

- *Type:* str

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#backend PkiSecretBackendConfigAcme#backend}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether ACME is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#enabled PkiSecretBackendConfigAcme#enabled}

---

##### `allowed_issuers`<sup>Optional</sup> <a name="allowed_issuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.allowedIssuers"></a>

- *Type:* typing.List[str]

Specifies which issuers are allowed for use with ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#allowed_issuers PkiSecretBackendConfigAcme#allowed_issuers}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.allowedRoles"></a>

- *Type:* typing.List[str]

Specifies which roles are allowed for use with ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#allowed_roles PkiSecretBackendConfigAcme#allowed_roles}

---

##### `allow_role_ext_key_usage`<sup>Optional</sup> <a name="allow_role_ext_key_usage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.allowRoleExtKeyUsage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the ExtKeyUsage field from a role is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#allow_role_ext_key_usage PkiSecretBackendConfigAcme#allow_role_ext_key_usage}

---

##### `default_directory_policy`<sup>Optional</sup> <a name="default_directory_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.defaultDirectoryPolicy"></a>

- *Type:* str

Specifies the policy to be used for non-role-qualified ACME requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#default_directory_policy PkiSecretBackendConfigAcme#default_directory_policy}

---

##### `dns_resolver`<sup>Optional</sup> <a name="dns_resolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.dnsResolver"></a>

- *Type:* str

DNS resolver to use for domain resolution on this mount.

Must be in the format <host>:<port>, with both parts mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#dns_resolver PkiSecretBackendConfigAcme#dns_resolver}

---

##### `eab_policy`<sup>Optional</sup> <a name="eab_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.eabPolicy"></a>

- *Type:* str

Specifies the policy to use for external account binding behaviour.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#eab_policy PkiSecretBackendConfigAcme#eab_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum TTL in seconds for certificates issued by ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#max_ttl PkiSecretBackendConfigAcme#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#namespace PkiSecretBackendConfigAcme#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedIssuers">reset_allowed_issuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedRoles">reset_allowed_roles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowRoleExtKeyUsage">reset_allow_role_ext_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDefaultDirectoryPolicy">reset_default_directory_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDnsResolver">reset_dns_resolver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetEabPolicy">reset_eab_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allowed_issuers` <a name="reset_allowed_issuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedIssuers"></a>

```python
def reset_allowed_issuers() -> None
```

##### `reset_allowed_roles` <a name="reset_allowed_roles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowedRoles"></a>

```python
def reset_allowed_roles() -> None
```

##### `reset_allow_role_ext_key_usage` <a name="reset_allow_role_ext_key_usage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetAllowRoleExtKeyUsage"></a>

```python
def reset_allow_role_ext_key_usage() -> None
```

##### `reset_default_directory_policy` <a name="reset_default_directory_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDefaultDirectoryPolicy"></a>

```python
def reset_default_directory_policy() -> None
```

##### `reset_dns_resolver` <a name="reset_dns_resolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetDnsResolver"></a>

```python
def reset_dns_resolver() -> None
```

##### `reset_eab_policy` <a name="reset_eab_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetEabPolicy"></a>

```python
def reset_eab_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigAcme resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_acme

pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_acme

pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_acme

pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_acme

pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendConfigAcme resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendConfigAcme to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendConfigAcme that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigAcme to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuersInput">allowed_issuers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRolesInput">allowed_roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsageInput">allow_role_ext_key_usage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicyInput">default_directory_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolverInput">dns_resolver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicyInput">eab_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuers">allowed_issuers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsage">allow_role_ext_key_usage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicy">default_directory_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolver">dns_resolver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicy">eab_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_issuers_input`<sup>Optional</sup> <a name="allowed_issuers_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuersInput"></a>

```python
allowed_issuers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_roles_input`<sup>Optional</sup> <a name="allowed_roles_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRolesInput"></a>

```python
allowed_roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_role_ext_key_usage_input`<sup>Optional</sup> <a name="allow_role_ext_key_usage_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsageInput"></a>

```python
allow_role_ext_key_usage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `default_directory_policy_input`<sup>Optional</sup> <a name="default_directory_policy_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicyInput"></a>

```python
default_directory_policy_input: str
```

- *Type:* str

---

##### `dns_resolver_input`<sup>Optional</sup> <a name="dns_resolver_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolverInput"></a>

```python
dns_resolver_input: str
```

- *Type:* str

---

##### `eab_policy_input`<sup>Optional</sup> <a name="eab_policy_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicyInput"></a>

```python
eab_policy_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `allowed_issuers`<sup>Required</sup> <a name="allowed_issuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedIssuers"></a>

```python
allowed_issuers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_roles`<sup>Required</sup> <a name="allowed_roles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_role_ext_key_usage`<sup>Required</sup> <a name="allow_role_ext_key_usage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.allowRoleExtKeyUsage"></a>

```python
allow_role_ext_key_usage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `default_directory_policy`<sup>Required</sup> <a name="default_directory_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.defaultDirectoryPolicy"></a>

```python
default_directory_policy: str
```

- *Type:* str

---

##### `dns_resolver`<sup>Required</sup> <a name="dns_resolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.dnsResolver"></a>

```python
dns_resolver: str
```

- *Type:* str

---

##### `eab_policy`<sup>Required</sup> <a name="eab_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.eabPolicy"></a>

```python
eab_policy: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcme.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigAcmeConfig <a name="PkiSecretBackendConfigAcmeConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_acme

pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  enabled: typing.Union[bool, IResolvable],
  allowed_issuers: typing.List[str] = None,
  allowed_roles: typing.List[str] = None,
  allow_role_ext_key_usage: typing.Union[bool, IResolvable] = None,
  default_directory_policy: str = None,
  dns_resolver: str = None,
  eab_policy: str = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.backend">backend</a></code> | <code>str</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether ACME is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedIssuers">allowed_issuers</a></code> | <code>typing.List[str]</code> | Specifies which issuers are allowed for use with ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedRoles">allowed_roles</a></code> | <code>typing.List[str]</code> | Specifies which roles are allowed for use with ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowRoleExtKeyUsage">allow_role_ext_key_usage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the ExtKeyUsage field from a role is used. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.defaultDirectoryPolicy">default_directory_policy</a></code> | <code>str</code> | Specifies the policy to be used for non-role-qualified ACME requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dnsResolver">dns_resolver</a></code> | <code>str</code> | DNS resolver to use for domain resolution on this mount. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.eabPolicy">eab_policy</a></code> | <code>str</code> | Specifies the policy to use for external account binding behaviour. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum TTL in seconds for certificates issued by ACME. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#backend PkiSecretBackendConfigAcme#backend}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether ACME is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#enabled PkiSecretBackendConfigAcme#enabled}

---

##### `allowed_issuers`<sup>Optional</sup> <a name="allowed_issuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedIssuers"></a>

```python
allowed_issuers: typing.List[str]
```

- *Type:* typing.List[str]

Specifies which issuers are allowed for use with ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#allowed_issuers PkiSecretBackendConfigAcme#allowed_issuers}

---

##### `allowed_roles`<sup>Optional</sup> <a name="allowed_roles" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowedRoles"></a>

```python
allowed_roles: typing.List[str]
```

- *Type:* typing.List[str]

Specifies which roles are allowed for use with ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#allowed_roles PkiSecretBackendConfigAcme#allowed_roles}

---

##### `allow_role_ext_key_usage`<sup>Optional</sup> <a name="allow_role_ext_key_usage" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.allowRoleExtKeyUsage"></a>

```python
allow_role_ext_key_usage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the ExtKeyUsage field from a role is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#allow_role_ext_key_usage PkiSecretBackendConfigAcme#allow_role_ext_key_usage}

---

##### `default_directory_policy`<sup>Optional</sup> <a name="default_directory_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.defaultDirectoryPolicy"></a>

```python
default_directory_policy: str
```

- *Type:* str

Specifies the policy to be used for non-role-qualified ACME requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#default_directory_policy PkiSecretBackendConfigAcme#default_directory_policy}

---

##### `dns_resolver`<sup>Optional</sup> <a name="dns_resolver" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.dnsResolver"></a>

```python
dns_resolver: str
```

- *Type:* str

DNS resolver to use for domain resolution on this mount.

Must be in the format <host>:<port>, with both parts mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#dns_resolver PkiSecretBackendConfigAcme#dns_resolver}

---

##### `eab_policy`<sup>Optional</sup> <a name="eab_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.eabPolicy"></a>

```python
eab_policy: str
```

- *Type:* str

Specifies the policy to use for external account binding behaviour.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#eab_policy PkiSecretBackendConfigAcme#eab_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#id PkiSecretBackendConfigAcme#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum TTL in seconds for certificates issued by ACME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#max_ttl PkiSecretBackendConfigAcme#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAcme.PkiSecretBackendConfigAcmeConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.2.1/docs/resources/pki_secret_backend_config_acme#namespace PkiSecretBackendConfigAcme#namespace}

---



