# `identityMfaTotp` Submodule <a name="`identityMfaTotp` Submodule" id="@cdktf/provider-vault.identityMfaTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaTotp <a name="IdentityMfaTotp" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp vault_identity_mfa_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_totp

identityMfaTotp.IdentityMfaTotp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issuer: str,
  algorithm: str = None,
  digits: typing.Union[int, float] = None,
  id: str = None,
  key_size: typing.Union[int, float] = None,
  max_validation_attempts: typing.Union[int, float] = None,
  namespace: str = None,
  period: typing.Union[int, float] = None,
  qr_size: typing.Union[int, float] = None,
  skew: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.digits">digits</a></code> | <code>typing.Union[int, float]</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.maxValidationAttempts">max_validation_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of consecutive failed validation attempts allowed. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | The length of time in seconds used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.qrSize">qr_size</a></code> | <code>typing.Union[int, float]</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.skew">skew</a></code> | <code>typing.Union[int, float]</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.issuer"></a>

- *Type:* str

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#issuer IdentityMfaTotp#issuer}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.algorithm"></a>

- *Type:* str

Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#algorithm IdentityMfaTotp#algorithm}

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.digits"></a>

- *Type:* typing.Union[int, float]

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#digits IdentityMfaTotp#digits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.keySize"></a>

- *Type:* typing.Union[int, float]

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#key_size IdentityMfaTotp#key_size}

---

##### `max_validation_attempts`<sup>Optional</sup> <a name="max_validation_attempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.maxValidationAttempts"></a>

- *Type:* typing.Union[int, float]

The maximum number of consecutive failed validation attempts allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#max_validation_attempts IdentityMfaTotp#max_validation_attempts}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#namespace IdentityMfaTotp#namespace}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

The length of time in seconds used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#period IdentityMfaTotp#period}

---

##### `qr_size`<sup>Optional</sup> <a name="qr_size" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.qrSize"></a>

- *Type:* typing.Union[int, float]

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#qr_size IdentityMfaTotp#qr_size}

---

##### `skew`<sup>Optional</sup> <a name="skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.skew"></a>

- *Type:* typing.Union[int, float]

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#skew IdentityMfaTotp#skew}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetDigits">reset_digits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetKeySize">reset_key_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetMaxValidationAttempts">reset_max_validation_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetQrSize">reset_qr_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetSkew">reset_skew</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_digits` <a name="reset_digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetDigits"></a>

```python
def reset_digits() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_size` <a name="reset_key_size" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetKeySize"></a>

```python
def reset_key_size() -> None
```

##### `reset_max_validation_attempts` <a name="reset_max_validation_attempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetMaxValidationAttempts"></a>

```python
def reset_max_validation_attempts() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_qr_size` <a name="reset_qr_size" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetQrSize"></a>

```python
def reset_qr_size() -> None
```

##### `reset_skew` <a name="reset_skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetSkew"></a>

```python
def reset_skew() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IdentityMfaTotp resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_totp

identityMfaTotp.IdentityMfaTotp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_totp

identityMfaTotp.IdentityMfaTotp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_totp

identityMfaTotp.IdentityMfaTotp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_totp

identityMfaTotp.IdentityMfaTotp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IdentityMfaTotp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IdentityMfaTotp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IdentityMfaTotp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaTotp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.methodId">method_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.mountAccessor">mount_accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespacePath">namespace_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digitsInput">digits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySizeInput">key_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttemptsInput">max_validation_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSizeInput">qr_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skewInput">skew_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digits">digits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttempts">max_validation_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSize">qr_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skew">skew</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `method_id`<sup>Required</sup> <a name="method_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.methodId"></a>

```python
method_id: str
```

- *Type:* str

---

##### `mount_accessor`<sup>Required</sup> <a name="mount_accessor" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.mountAccessor"></a>

```python
mount_accessor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `namespace_path`<sup>Required</sup> <a name="namespace_path" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespacePath"></a>

```python
namespace_path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `digits_input`<sup>Optional</sup> <a name="digits_input" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digitsInput"></a>

```python
digits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `key_size_input`<sup>Optional</sup> <a name="key_size_input" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySizeInput"></a>

```python
key_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_validation_attempts_input`<sup>Optional</sup> <a name="max_validation_attempts_input" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttemptsInput"></a>

```python
max_validation_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qr_size_input`<sup>Optional</sup> <a name="qr_size_input" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSizeInput"></a>

```python
qr_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skew_input`<sup>Optional</sup> <a name="skew_input" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skewInput"></a>

```python
skew_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digits"></a>

```python
digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `key_size`<sup>Required</sup> <a name="key_size" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_validation_attempts`<sup>Required</sup> <a name="max_validation_attempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttempts"></a>

```python
max_validation_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qr_size`<sup>Required</sup> <a name="qr_size" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSize"></a>

```python
qr_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skew`<sup>Required</sup> <a name="skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skew"></a>

```python
skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaTotpConfig <a name="IdentityMfaTotpConfig" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_mfa_totp

identityMfaTotp.IdentityMfaTotpConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issuer: str,
  algorithm: str = None,
  digits: typing.Union[int, float] = None,
  id: str = None,
  key_size: typing.Union[int, float] = None,
  max_validation_attempts: typing.Union[int, float] = None,
  namespace: str = None,
  period: typing.Union[int, float] = None,
  qr_size: typing.Union[int, float] = None,
  skew: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.issuer">issuer</a></code> | <code>str</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.algorithm">algorithm</a></code> | <code>str</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.digits">digits</a></code> | <code>typing.Union[int, float]</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.maxValidationAttempts">max_validation_attempts</a></code> | <code>typing.Union[int, float]</code> | The maximum number of consecutive failed validation attempts allowed. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.period">period</a></code> | <code>typing.Union[int, float]</code> | The length of time in seconds used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.qrSize">qr_size</a></code> | <code>typing.Union[int, float]</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.skew">skew</a></code> | <code>typing.Union[int, float]</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#issuer IdentityMfaTotp#issuer}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#algorithm IdentityMfaTotp#algorithm}

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.digits"></a>

```python
digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#digits IdentityMfaTotp#digits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#key_size IdentityMfaTotp#key_size}

---

##### `max_validation_attempts`<sup>Optional</sup> <a name="max_validation_attempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.maxValidationAttempts"></a>

```python
max_validation_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of consecutive failed validation attempts allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#max_validation_attempts IdentityMfaTotp#max_validation_attempts}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#namespace IdentityMfaTotp#namespace}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of time in seconds used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#period IdentityMfaTotp#period}

---

##### `qr_size`<sup>Optional</sup> <a name="qr_size" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.qrSize"></a>

```python
qr_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#qr_size IdentityMfaTotp#qr_size}

---

##### `skew`<sup>Optional</sup> <a name="skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.skew"></a>

```python
skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_mfa_totp#skew IdentityMfaTotp#skew}

---



