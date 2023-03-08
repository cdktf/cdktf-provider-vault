# `mfaTotp` Submodule <a name="`mfaTotp` Submodule" id="@cdktf/provider-vault.mfaTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaTotp <a name="MfaTotp" id="@cdktf/provider-vault.mfaTotp.MfaTotp"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp vault_mfa_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import mfa_totp

mfaTotp.MfaTotp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issuer: str,
  name: str,
  algorithm: str = None,
  digits: typing.Union[int, float] = None,
  id: str = None,
  key_size: typing.Union[int, float] = None,
  namespace: str = None,
  period: typing.Union[int, float] = None,
  qr_size: typing.Union[int, float] = None,
  skew: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.issuer">issuer</a></code> | <code>str</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the MFA method. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.digits">digits</a></code> | <code>typing.Union[int, float]</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id">id</a></code> | <code>str</code> | ID computed by Vault. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.period">period</a></code> | <code>typing.Union[int, float]</code> | The length of time used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.qrSize">qr_size</a></code> | <code>typing.Union[int, float]</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.skew">skew</a></code> | <code>typing.Union[int, float]</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.issuer"></a>

- *Type:* str

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#issuer MfaTotp#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.name"></a>

- *Type:* str

Name of the MFA method.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#name MfaTotp#name}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.algorithm"></a>

- *Type:* str

Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#algorithm MfaTotp#algorithm}

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.digits"></a>

- *Type:* typing.Union[int, float]

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#digits MfaTotp#digits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.id"></a>

- *Type:* str

ID computed by Vault.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#id MfaTotp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.keySize"></a>

- *Type:* typing.Union[int, float]

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#key_size MfaTotp#key_size}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#namespace MfaTotp#namespace}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.period"></a>

- *Type:* typing.Union[int, float]

The length of time used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#period MfaTotp#period}

---

##### `qr_size`<sup>Optional</sup> <a name="qr_size" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.qrSize"></a>

- *Type:* typing.Union[int, float]

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#qr_size MfaTotp#qr_size}

---

##### `skew`<sup>Optional</sup> <a name="skew" id="@cdktf/provider-vault.mfaTotp.MfaTotp.Initializer.parameter.skew"></a>

- *Type:* typing.Union[int, float]

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#skew MfaTotp#skew}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetDigits">reset_digits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetKeySize">reset_key_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetPeriod">reset_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetQrSize">reset_qr_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.resetSkew">reset_skew</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mfaTotp.MfaTotp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.mfaTotp.MfaTotp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.mfaTotp.MfaTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_algorithm` <a name="reset_algorithm" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_digits` <a name="reset_digits" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetDigits"></a>

```python
def reset_digits() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_size` <a name="reset_key_size" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetKeySize"></a>

```python
def reset_key_size() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_period` <a name="reset_period" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetPeriod"></a>

```python
def reset_period() -> None
```

##### `reset_qr_size` <a name="reset_qr_size" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetQrSize"></a>

```python
def reset_qr_size() -> None
```

##### `reset_skew` <a name="reset_skew" id="@cdktf/provider-vault.mfaTotp.MfaTotp.resetSkew"></a>

```python
def reset_skew() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import mfa_totp

mfaTotp.MfaTotp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import mfa_totp

mfaTotp.MfaTotp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import mfa_totp

mfaTotp.MfaTotp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaTotp.MfaTotp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.digitsInput">digits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySizeInput">key_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.periodInput">period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSizeInput">qr_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.skewInput">skew_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.digits">digits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.period">period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSize">qr_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.skew">skew</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `digits_input`<sup>Optional</sup> <a name="digits_input" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.digitsInput"></a>

```python
digits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `key_size_input`<sup>Optional</sup> <a name="key_size_input" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySizeInput"></a>

```python
key_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.periodInput"></a>

```python
period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qr_size_input`<sup>Optional</sup> <a name="qr_size_input" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSizeInput"></a>

```python
qr_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skew_input`<sup>Optional</sup> <a name="skew_input" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.skewInput"></a>

```python
skew_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.digits"></a>

```python
digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `key_size`<sup>Required</sup> <a name="key_size" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `qr_size`<sup>Required</sup> <a name="qr_size" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.qrSize"></a>

```python
qr_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skew`<sup>Required</sup> <a name="skew" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.skew"></a>

```python
skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.mfaTotp.MfaTotp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MfaTotpConfig <a name="MfaTotpConfig" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import mfa_totp

mfaTotp.MfaTotpConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  issuer: str,
  name: str,
  algorithm: str = None,
  digits: typing.Union[int, float] = None,
  id: str = None,
  key_size: typing.Union[int, float] = None,
  namespace: str = None,
  period: typing.Union[int, float] = None,
  qr_size: typing.Union[int, float] = None,
  skew: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.issuer">issuer</a></code> | <code>str</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.name">name</a></code> | <code>str</code> | Name of the MFA method. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.algorithm">algorithm</a></code> | <code>str</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.digits">digits</a></code> | <code>typing.Union[int, float]</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.id">id</a></code> | <code>str</code> | ID computed by Vault. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.period">period</a></code> | <code>typing.Union[int, float]</code> | The length of time used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.qrSize">qr_size</a></code> | <code>typing.Union[int, float]</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.skew">skew</a></code> | <code>typing.Union[int, float]</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#issuer MfaTotp#issuer}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the MFA method.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#name MfaTotp#name}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Specifies the hashing algorithm used to generate the TOTP code. Options include 'SHA1', 'SHA256' and 'SHA512'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#algorithm MfaTotp#algorithm}

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.digits"></a>

```python
digits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#digits MfaTotp#digits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.id"></a>

```python
id: str
```

- *Type:* str

ID computed by Vault.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#id MfaTotp#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#key_size MfaTotp#key_size}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#namespace MfaTotp#namespace}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.period"></a>

```python
period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The length of time used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#period MfaTotp#period}

---

##### `qr_size`<sup>Optional</sup> <a name="qr_size" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.qrSize"></a>

```python
qr_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#qr_size MfaTotp#qr_size}

---

##### `skew`<sup>Optional</sup> <a name="skew" id="@cdktf/provider-vault.mfaTotp.MfaTotpConfig.property.skew"></a>

```python
skew: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/mfa_totp#skew MfaTotp#skew}

---


