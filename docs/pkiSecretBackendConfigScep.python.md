# `pkiSecretBackendConfigScep` Submodule <a name="`pkiSecretBackendConfigScep` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigScep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigScep <a name="PkiSecretBackendConfigScep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep vault_pki_secret_backend_config_scep}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScep(
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
  allowed_digest_algorithms: typing.List[str] = None,
  allowed_encryption_algorithms: typing.List[str] = None,
  authenticators: PkiSecretBackendConfigScepAuthenticators = None,
  default_path_policy: str = None,
  enabled: bool | IResolvable = None,
  external_validation: IResolvable | typing.List[PkiSecretBackendConfigScepExternalValidation] = None,
  id: str = None,
  log_level: str = None,
  namespace: str = None,
  restrict_ca_chain_to_issuer: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.allowedDigestAlgorithms">allowed_digest_algorithms</a></code> | <code>typing.List[str]</code> | List of allowed digest algorithms for SCEP requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.allowedEncryptionAlgorithms">allowed_encryption_algorithms</a></code> | <code>typing.List[str]</code> | List of allowed encryption algorithms for SCEP requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.defaultPathPolicy">default_path_policy</a></code> | <code>str</code> | Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether SCEP is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.externalValidation">external_validation</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>]</code> | external_validation block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | The level of logging verbosity, affects only SCEP logs on this mount. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.restrictCaChainToIssuer">restrict_ca_chain_to_issuer</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.backend"></a>

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#backend PkiSecretBackendConfigScep#backend}

---

##### `allowed_digest_algorithms`<sup>Optional</sup> <a name="allowed_digest_algorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.allowedDigestAlgorithms"></a>

- *Type:* typing.List[str]

List of allowed digest algorithms for SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#allowed_digest_algorithms PkiSecretBackendConfigScep#allowed_digest_algorithms}

---

##### `allowed_encryption_algorithms`<sup>Optional</sup> <a name="allowed_encryption_algorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.allowedEncryptionAlgorithms"></a>

- *Type:* typing.List[str]

List of allowed encryption algorithms for SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#allowed_encryption_algorithms PkiSecretBackendConfigScep#allowed_encryption_algorithms}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.authenticators"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#authenticators PkiSecretBackendConfigScep#authenticators}

---

##### `default_path_policy`<sup>Optional</sup> <a name="default_path_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.defaultPathPolicy"></a>

- *Type:* str

Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#default_path_policy PkiSecretBackendConfigScep#default_path_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktf.IResolvable

Specifies whether SCEP is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#enabled PkiSecretBackendConfigScep#enabled}

---

##### `external_validation`<sup>Optional</sup> <a name="external_validation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.externalValidation"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>]

external_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#external_validation PkiSecretBackendConfigScep#external_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.logLevel"></a>

- *Type:* str

The level of logging verbosity, affects only SCEP logs on this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#log_level PkiSecretBackendConfigScep#log_level}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#namespace PkiSecretBackendConfigScep#namespace}

---

##### `restrict_ca_chain_to_issuer`<sup>Optional</sup> <a name="restrict_ca_chain_to_issuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.Initializer.parameter.restrictCaChainToIssuer"></a>

- *Type:* bool | cdktf.IResolvable

If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#restrict_ca_chain_to_issuer PkiSecretBackendConfigScep#restrict_ca_chain_to_issuer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putAuthenticators">put_authenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putExternalValidation">put_external_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedDigestAlgorithms">reset_allowed_digest_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedEncryptionAlgorithms">reset_allowed_encryption_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAuthenticators">reset_authenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetDefaultPathPolicy">reset_default_path_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetExternalValidation">reset_external_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetRestrictCaChainToIssuer">reset_restrict_ca_chain_to_issuer</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_authenticators` <a name="put_authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putAuthenticators"></a>

```python
def put_authenticators(
  cert: typing.Mapping[str] = None,
  scep: typing.Mapping[str] = None
) -> None
```

###### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putAuthenticators.parameter.cert"></a>

- *Type:* typing.Mapping[str]

The accessor and cert_role properties for cert auth backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#cert PkiSecretBackendConfigScep#cert}

---

###### `scep`<sup>Optional</sup> <a name="scep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putAuthenticators.parameter.scep"></a>

- *Type:* typing.Mapping[str]

The accessor property for SCEP auth backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#scep PkiSecretBackendConfigScep#scep}

---

##### `put_external_validation` <a name="put_external_validation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putExternalValidation"></a>

```python
def put_external_validation(
  value: IResolvable | typing.List[PkiSecretBackendConfigScepExternalValidation]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.putExternalValidation.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>]

---

##### `reset_allowed_digest_algorithms` <a name="reset_allowed_digest_algorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedDigestAlgorithms"></a>

```python
def reset_allowed_digest_algorithms() -> None
```

##### `reset_allowed_encryption_algorithms` <a name="reset_allowed_encryption_algorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAllowedEncryptionAlgorithms"></a>

```python
def reset_allowed_encryption_algorithms() -> None
```

##### `reset_authenticators` <a name="reset_authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetAuthenticators"></a>

```python
def reset_authenticators() -> None
```

##### `reset_default_path_policy` <a name="reset_default_path_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetDefaultPathPolicy"></a>

```python
def reset_default_path_policy() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_external_validation` <a name="reset_external_validation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetExternalValidation"></a>

```python
def reset_external_validation() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_restrict_ca_chain_to_issuer` <a name="reset_restrict_ca_chain_to_issuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.resetRestrictCaChainToIssuer"></a>

```python
def reset_restrict_ca_chain_to_issuer() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendConfigScep to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendConfigScep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigScep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference">PkiSecretBackendConfigScepAuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidation">external_validation</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList">PkiSecretBackendConfigScepExternalValidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lastUpdated">last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithmsInput">allowed_digest_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithmsInput">allowed_encryption_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticatorsInput">authenticators_input</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicyInput">default_path_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidationInput">external_validation_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuerInput">restrict_ca_chain_to_issuer_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithms">allowed_digest_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms">allowed_encryption_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicy">default_path_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuer">restrict_ca_chain_to_issuer</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticators"></a>

```python
authenticators: PkiSecretBackendConfigScepAuthenticatorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference">PkiSecretBackendConfigScepAuthenticatorsOutputReference</a>

---

##### `external_validation`<sup>Required</sup> <a name="external_validation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidation"></a>

```python
external_validation: PkiSecretBackendConfigScepExternalValidationList
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList">PkiSecretBackendConfigScepExternalValidationList</a>

---

##### `last_updated`<sup>Required</sup> <a name="last_updated" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.lastUpdated"></a>

```python
last_updated: str
```

- *Type:* str

---

##### `allowed_digest_algorithms_input`<sup>Optional</sup> <a name="allowed_digest_algorithms_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithmsInput"></a>

```python
allowed_digest_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_encryption_algorithms_input`<sup>Optional</sup> <a name="allowed_encryption_algorithms_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithmsInput"></a>

```python
allowed_encryption_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `authenticators_input`<sup>Optional</sup> <a name="authenticators_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.authenticatorsInput"></a>

```python
authenticators_input: PkiSecretBackendConfigScepAuthenticators
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `default_path_policy_input`<sup>Optional</sup> <a name="default_path_policy_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicyInput"></a>

```python
default_path_policy_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `external_validation_input`<sup>Optional</sup> <a name="external_validation_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.externalValidationInput"></a>

```python
external_validation_input: IResolvable | typing.List[PkiSecretBackendConfigScepExternalValidation]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `restrict_ca_chain_to_issuer_input`<sup>Optional</sup> <a name="restrict_ca_chain_to_issuer_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuerInput"></a>

```python
restrict_ca_chain_to_issuer_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `allowed_digest_algorithms`<sup>Required</sup> <a name="allowed_digest_algorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedDigestAlgorithms"></a>

```python
allowed_digest_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_encryption_algorithms`<sup>Required</sup> <a name="allowed_encryption_algorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms"></a>

```python
allowed_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `default_path_policy`<sup>Required</sup> <a name="default_path_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.defaultPathPolicy"></a>

```python
default_path_policy: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `restrict_ca_chain_to_issuer`<sup>Required</sup> <a name="restrict_ca_chain_to_issuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.restrictCaChainToIssuer"></a>

```python
restrict_ca_chain_to_issuer: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScep.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigScepAuthenticators <a name="PkiSecretBackendConfigScepAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators(
  cert: typing.Mapping[str] = None,
  scep: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.cert">cert</a></code> | <code>typing.Mapping[str]</code> | The accessor and cert_role properties for cert auth backends. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.scep">scep</a></code> | <code>typing.Mapping[str]</code> | The accessor property for SCEP auth backends. |

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.cert"></a>

```python
cert: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The accessor and cert_role properties for cert auth backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#cert PkiSecretBackendConfigScep#cert}

---

##### `scep`<sup>Optional</sup> <a name="scep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators.property.scep"></a>

```python
scep: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The accessor property for SCEP auth backends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#scep PkiSecretBackendConfigScep#scep}

---

### PkiSecretBackendConfigScepConfig <a name="PkiSecretBackendConfigScepConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  allowed_digest_algorithms: typing.List[str] = None,
  allowed_encryption_algorithms: typing.List[str] = None,
  authenticators: PkiSecretBackendConfigScepAuthenticators = None,
  default_path_policy: str = None,
  enabled: bool | IResolvable = None,
  external_validation: IResolvable | typing.List[PkiSecretBackendConfigScepExternalValidation] = None,
  id: str = None,
  log_level: str = None,
  namespace: str = None,
  restrict_ca_chain_to_issuer: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedDigestAlgorithms">allowed_digest_algorithms</a></code> | <code>typing.List[str]</code> | List of allowed digest algorithms for SCEP requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedEncryptionAlgorithms">allowed_encryption_algorithms</a></code> | <code>typing.List[str]</code> | List of allowed encryption algorithms for SCEP requests. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.defaultPathPolicy">default_path_policy</a></code> | <code>str</code> | Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.enabled">enabled</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies whether SCEP is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.externalValidation">external_validation</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>]</code> | external_validation block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.logLevel">log_level</a></code> | <code>str</code> | The level of logging verbosity, affects only SCEP logs on this mount. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.restrictCaChainToIssuer">restrict_ca_chain_to_issuer</a></code> | <code>bool \| cdktf.IResolvable</code> | If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#backend PkiSecretBackendConfigScep#backend}

---

##### `allowed_digest_algorithms`<sup>Optional</sup> <a name="allowed_digest_algorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedDigestAlgorithms"></a>

```python
allowed_digest_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

List of allowed digest algorithms for SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#allowed_digest_algorithms PkiSecretBackendConfigScep#allowed_digest_algorithms}

---

##### `allowed_encryption_algorithms`<sup>Optional</sup> <a name="allowed_encryption_algorithms" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.allowedEncryptionAlgorithms"></a>

```python
allowed_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

List of allowed encryption algorithms for SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#allowed_encryption_algorithms PkiSecretBackendConfigScep#allowed_encryption_algorithms}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.authenticators"></a>

```python
authenticators: PkiSecretBackendConfigScepAuthenticators
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#authenticators PkiSecretBackendConfigScep#authenticators}

---

##### `default_path_policy`<sup>Optional</sup> <a name="default_path_policy" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.defaultPathPolicy"></a>

```python
default_path_policy: str
```

- *Type:* str

Specifies the behavior for requests using the default SCEP label. Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#default_path_policy PkiSecretBackendConfigScep#default_path_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Specifies whether SCEP is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#enabled PkiSecretBackendConfigScep#enabled}

---

##### `external_validation`<sup>Optional</sup> <a name="external_validation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.externalValidation"></a>

```python
external_validation: IResolvable | typing.List[PkiSecretBackendConfigScepExternalValidation]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>]

external_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#external_validation PkiSecretBackendConfigScep#external_validation}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#id PkiSecretBackendConfigScep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

The level of logging verbosity, affects only SCEP logs on this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#log_level PkiSecretBackendConfigScep#log_level}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#namespace PkiSecretBackendConfigScep#namespace}

---

##### `restrict_ca_chain_to_issuer`<sup>Optional</sup> <a name="restrict_ca_chain_to_issuer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepConfig.property.restrictCaChainToIssuer"></a>

```python
restrict_ca_chain_to_issuer: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If true, only return the issuer CA, otherwise the entire CA certificate chain will be returned if available from the PKI mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#restrict_ca_chain_to_issuer PkiSecretBackendConfigScep#restrict_ca_chain_to_issuer}

---

### PkiSecretBackendConfigScepExternalValidation <a name="PkiSecretBackendConfigScepExternalValidation" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation(
  intune: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation.property.intune">intune</a></code> | <code>typing.Mapping[str]</code> | The credentials to enable Microsoft Intune validation of SCEP requests. |

---

##### `intune`<sup>Optional</sup> <a name="intune" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation.property.intune"></a>

```python
intune: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The credentials to enable Microsoft Intune validation of SCEP requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_scep#intune PkiSecretBackendConfigScep#intune}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigScepAuthenticatorsOutputReference <a name="PkiSecretBackendConfigScepAuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetCert">reset_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetScep">reset_scep</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cert` <a name="reset_cert" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetCert"></a>

```python
def reset_cert() -> None
```

##### `reset_scep` <a name="reset_scep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.resetScep"></a>

```python
def reset_scep() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.certInput">cert_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scepInput">scep_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert">cert</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep">scep</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_input`<sup>Optional</sup> <a name="cert_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.certInput"></a>

```python
cert_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `scep_input`<sup>Optional</sup> <a name="scep_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scepInput"></a>

```python
scep_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert"></a>

```python
cert: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `scep`<sup>Required</sup> <a name="scep" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep"></a>

```python
scep: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue"></a>

```python
internal_value: PkiSecretBackendConfigScepAuthenticators
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepAuthenticators">PkiSecretBackendConfigScepAuthenticators</a>

---


### PkiSecretBackendConfigScepExternalValidationList <a name="PkiSecretBackendConfigScepExternalValidationList" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> PkiSecretBackendConfigScepExternalValidationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[PkiSecretBackendConfigScepExternalValidation]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>]

---


### PkiSecretBackendConfigScepExternalValidationOutputReference <a name="PkiSecretBackendConfigScepExternalValidationOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_scep

pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resetIntune">reset_intune</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_intune` <a name="reset_intune" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.resetIntune"></a>

```python
def reset_intune() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intuneInput">intune_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intune">intune</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intune_input`<sup>Optional</sup> <a name="intune_input" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intuneInput"></a>

```python
intune_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `intune`<sup>Required</sup> <a name="intune" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.intune"></a>

```python
intune: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PkiSecretBackendConfigScepExternalValidation
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.pkiSecretBackendConfigScep.PkiSecretBackendConfigScepExternalValidation">PkiSecretBackendConfigScepExternalValidation</a>

---



