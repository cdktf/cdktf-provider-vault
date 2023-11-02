# `vault_ssh_secret_backend_ca`

Refer to the Terraform Registory for docs: [`vault_ssh_secret_backend_ca`](https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca).

# `sshSecretBackendCa` Submodule <a name="`sshSecretBackendCa` Submodule" id="@cdktf/provider-vault.sshSecretBackendCa"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SshSecretBackendCa <a name="SshSecretBackendCa" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca vault_ssh_secret_backend_ca}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ssh_secret_backend_ca

sshSecretBackendCa.SshSecretBackendCa(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str = None,
  generate_signing_key: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  private_key: str = None,
  public_key: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path of the SSH Secret Backend where the CA should be configured. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.generateSigningKey">generate_signing_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Vault should generate the signing key pair internally. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#id SshSecretBackendCa#id}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Private key part the SSH CA key pair; required if generate_signing_key is false. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.publicKey">public_key</a></code> | <code>str</code> | Public key part the SSH CA key pair; required if generate_signing_key is false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.backend"></a>

- *Type:* str

The path of the SSH Secret Backend where the CA should be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#backend SshSecretBackendCa#backend}

---

##### `generate_signing_key`<sup>Optional</sup> <a name="generate_signing_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.generateSigningKey"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Vault should generate the signing key pair internally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#generate_signing_key SshSecretBackendCa#generate_signing_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#id SshSecretBackendCa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#namespace SshSecretBackendCa#namespace}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.privateKey"></a>

- *Type:* str

Private key part the SSH CA key pair; required if generate_signing_key is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#private_key SshSecretBackendCa#private_key}

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.Initializer.parameter.publicKey"></a>

- *Type:* str

Public key part the SSH CA key pair; required if generate_signing_key is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#public_key SshSecretBackendCa#public_key}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetGenerateSigningKey">reset_generate_signing_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPublicKey">reset_public_key</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_generate_signing_key` <a name="reset_generate_signing_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetGenerateSigningKey"></a>

```python
def reset_generate_signing_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_public_key` <a name="reset_public_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.resetPublicKey"></a>

```python
def reset_public_key() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SshSecretBackendCa resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import ssh_secret_backend_ca

sshSecretBackendCa.SshSecretBackendCa.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import ssh_secret_backend_ca

sshSecretBackendCa.SshSecretBackendCa.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import ssh_secret_backend_ca

sshSecretBackendCa.SshSecretBackendCa.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import ssh_secret_backend_ca

sshSecretBackendCa.SshSecretBackendCa.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SshSecretBackendCa resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SshSecretBackendCa to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SshSecretBackendCa that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SshSecretBackendCa to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKeyInput">generate_signing_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKeyInput">public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKey">generate_signing_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `generate_signing_key_input`<sup>Optional</sup> <a name="generate_signing_key_input" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKeyInput"></a>

```python
generate_signing_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `public_key_input`<sup>Optional</sup> <a name="public_key_input" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKeyInput"></a>

```python
public_key_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `generate_signing_key`<sup>Required</sup> <a name="generate_signing_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.generateSigningKey"></a>

```python
generate_signing_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCa.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SshSecretBackendCaConfig <a name="SshSecretBackendCaConfig" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ssh_secret_backend_ca

sshSecretBackendCa.SshSecretBackendCaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str = None,
  generate_signing_key: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  private_key: str = None,
  public_key: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.backend">backend</a></code> | <code>str</code> | The path of the SSH Secret Backend where the CA should be configured. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.generateSigningKey">generate_signing_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Vault should generate the signing key pair internally. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#id SshSecretBackendCa#id}. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.privateKey">private_key</a></code> | <code>str</code> | Private key part the SSH CA key pair; required if generate_signing_key is false. |
| <code><a href="#@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.publicKey">public_key</a></code> | <code>str</code> | Public key part the SSH CA key pair; required if generate_signing_key is false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path of the SSH Secret Backend where the CA should be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#backend SshSecretBackendCa#backend}

---

##### `generate_signing_key`<sup>Optional</sup> <a name="generate_signing_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.generateSigningKey"></a>

```python
generate_signing_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Vault should generate the signing key pair internally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#generate_signing_key SshSecretBackendCa#generate_signing_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#id SshSecretBackendCa#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#namespace SshSecretBackendCa#namespace}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Private key part the SSH CA key pair; required if generate_signing_key is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#private_key SshSecretBackendCa#private_key}

---

##### `public_key`<sup>Optional</sup> <a name="public_key" id="@cdktf/provider-vault.sshSecretBackendCa.SshSecretBackendCaConfig.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

Public key part the SSH CA key pair; required if generate_signing_key is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/ssh_secret_backend_ca#public_key SshSecretBackendCa#public_key}

---



