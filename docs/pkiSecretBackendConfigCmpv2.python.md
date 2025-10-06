# `pkiSecretBackendConfigCmpv2` Submodule <a name="`pkiSecretBackendConfigCmpv2` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigCmpv2 <a name="PkiSecretBackendConfigCmpv2" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2 vault_pki_secret_backend_config_cmpv2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_cmpv2

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  audit_fields: typing.List[str] = None,
  authenticators: PkiSecretBackendConfigCmpv2Authenticators = None,
  default_path_policy: str = None,
  disabled_validations: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  enable_sentinel_parsing: bool | IResolvable = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.auditFields">audit_fields</a></code> | <code>typing.List[str]</code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.defaultPathPolicy">default_path_policy</a></code> | <code>str</code> | Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.disabledValidations">disabled_validations</a></code> | <code>typing.List[str]</code> | A comma-separated list of validations not to perform on CMPv2 messages. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether CMPv2 is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.enableSentinelParsing">enable_sentinel_parsing</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.backend"></a>

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#backend PkiSecretBackendConfigCmpv2#backend}

---

##### `audit_fields`<sup>Optional</sup> <a name="audit_fields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.auditFields"></a>

- *Type:* typing.List[str]

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#audit_fields PkiSecretBackendConfigCmpv2#audit_fields}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.authenticators"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#authenticators PkiSecretBackendConfigCmpv2#authenticators}

---

##### `default_path_policy`<sup>Optional</sup> <a name="default_path_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.defaultPathPolicy"></a>

- *Type:* str

Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#default_path_policy PkiSecretBackendConfigCmpv2#default_path_policy}

---

##### `disabled_validations`<sup>Optional</sup> <a name="disabled_validations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.disabledValidations"></a>

- *Type:* typing.List[str]

A comma-separated list of validations not to perform on CMPv2 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#disabled_validations PkiSecretBackendConfigCmpv2#disabled_validations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Specifies whether CMPv2 is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#enabled PkiSecretBackendConfigCmpv2#enabled}

---

##### `enable_sentinel_parsing`<sup>Optional</sup> <a name="enable_sentinel_parsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.enableSentinelParsing"></a>

- *Type:* bool | cdktf.IResolvable

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#enable_sentinel_parsing PkiSecretBackendConfigCmpv2#enable_sentinel_parsing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#namespace PkiSecretBackendConfigCmpv2#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators">put_authenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuditFields">reset_audit_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuthenticators">reset_authenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDefaultPathPolicy">reset_default_path_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDisabledValidations">reset_disabled_validations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnableSentinelParsing">reset_enable_sentinel_parsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authenticators` <a name="put_authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators"></a>

```python
def put_authenticators(
  cert: typing.Mapping[str] = None
) -> None
```

###### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators.parameter.cert"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#cert PkiSecretBackendConfigCmpv2#cert}.

---

##### `reset_audit_fields` <a name="reset_audit_fields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuditFields"></a>

```python
def reset_audit_fields() -> None
```

##### `reset_authenticators` <a name="reset_authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuthenticators"></a>

```python
def reset_authenticators() -> None
```

##### `reset_default_path_policy` <a name="reset_default_path_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDefaultPathPolicy"></a>

```python
def reset_default_path_policy() -> None
```

##### `reset_disabled_validations` <a name="reset_disabled_validations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDisabledValidations"></a>

```python
def reset_disabled_validations() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_enable_sentinel_parsing` <a name="reset_enable_sentinel_parsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnableSentinelParsing"></a>

```python
def reset_enable_sentinel_parsing() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_cmpv2

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_cmpv2

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_cmpv2

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_cmpv2

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendConfigCmpv2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendConfigCmpv2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigCmpv2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference">PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFieldsInput">audit_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticatorsInput">authenticators_input</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicyInput">default_path_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidationsInput">disabled_validations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsingInput">enable_sentinel_parsing_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFields">audit_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicy">default_path_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidations">disabled_validations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsing">enable_sentinel_parsing</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticators"></a>

```python
authenticators: PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference">PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference</a>

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `audit_fields_input`<sup>Optional</sup> <a name="audit_fields_input" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFieldsInput"></a>

```python
audit_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authenticators_input`<sup>Optional</sup> <a name="authenticators_input" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticatorsInput"></a>

```python
authenticators_input: PkiSecretBackendConfigCmpv2Authenticators
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `default_path_policy_input`<sup>Optional</sup> <a name="default_path_policy_input" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicyInput"></a>

```python
default_path_policy_input: str
```

- *Type:* str

---

##### `disabled_validations_input`<sup>Optional</sup> <a name="disabled_validations_input" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidationsInput"></a>

```python
disabled_validations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_sentinel_parsing_input`<sup>Optional</sup> <a name="enable_sentinel_parsing_input" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsingInput"></a>

```python
enable_sentinel_parsing_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `audit_fields`<sup>Required</sup> <a name="audit_fields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFields"></a>

```python
audit_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `default_path_policy`<sup>Required</sup> <a name="default_path_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicy"></a>

```python
default_path_policy: str
```

- *Type:* str

---

##### `disabled_validations`<sup>Required</sup> <a name="disabled_validations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidations"></a>

```python
disabled_validations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `enable_sentinel_parsing`<sup>Required</sup> <a name="enable_sentinel_parsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsing"></a>

```python
enable_sentinel_parsing: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigCmpv2Authenticators <a name="PkiSecretBackendConfigCmpv2Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_cmpv2

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators(
  cert: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.property.cert">cert</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#cert PkiSecretBackendConfigCmpv2#cert}. |

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.property.cert"></a>

```python
cert: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#cert PkiSecretBackendConfigCmpv2#cert}.

---

### PkiSecretBackendConfigCmpv2Config <a name="PkiSecretBackendConfigCmpv2Config" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_cmpv2

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  audit_fields: typing.List[str] = None,
  authenticators: PkiSecretBackendConfigCmpv2Authenticators = None,
  default_path_policy: str = None,
  disabled_validations: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  enable_sentinel_parsing: bool | IResolvable = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.auditFields">audit_fields</a></code> | <code>typing.List[str]</code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.defaultPathPolicy">default_path_policy</a></code> | <code>str</code> | Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.disabledValidations">disabled_validations</a></code> | <code>typing.List[str]</code> | A comma-separated list of validations not to perform on CMPv2 messages. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether CMPv2 is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enableSentinelParsing">enable_sentinel_parsing</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.backend"></a>

```python
backend: str
```

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#backend PkiSecretBackendConfigCmpv2#backend}

---

##### `audit_fields`<sup>Optional</sup> <a name="audit_fields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.auditFields"></a>

```python
audit_fields: typing.List[str]
```

- *Type:* typing.List[str]

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#audit_fields PkiSecretBackendConfigCmpv2#audit_fields}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.authenticators"></a>

```python
authenticators: PkiSecretBackendConfigCmpv2Authenticators
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#authenticators PkiSecretBackendConfigCmpv2#authenticators}

---

##### `default_path_policy`<sup>Optional</sup> <a name="default_path_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.defaultPathPolicy"></a>

```python
default_path_policy: str
```

- *Type:* str

Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#default_path_policy PkiSecretBackendConfigCmpv2#default_path_policy}

---

##### `disabled_validations`<sup>Optional</sup> <a name="disabled_validations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.disabledValidations"></a>

```python
disabled_validations: typing.List[str]
```

- *Type:* typing.List[str]

A comma-separated list of validations not to perform on CMPv2 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#disabled_validations PkiSecretBackendConfigCmpv2#disabled_validations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Specifies whether CMPv2 is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#enabled PkiSecretBackendConfigCmpv2#enabled}

---

##### `enable_sentinel_parsing`<sup>Optional</sup> <a name="enable_sentinel_parsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enableSentinelParsing"></a>

```python
enable_sentinel_parsing: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#enable_sentinel_parsing PkiSecretBackendConfigCmpv2#enable_sentinel_parsing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#namespace PkiSecretBackendConfigCmpv2#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference <a name="PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_cmpv2

pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resetCert">reset_cert</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cert` <a name="reset_cert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resetCert"></a>

```python
def reset_cert() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.certInput">cert_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert">cert</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.certInput"></a>

```python
cert_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert"></a>

```python
cert: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue"></a>

```python
internal_value: PkiSecretBackendConfigCmpv2Authenticators
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---



