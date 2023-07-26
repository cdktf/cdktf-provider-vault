# `vault_pki_secret_backend_config_issuers`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_config_issuers`](https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers).

# `pkiSecretBackendConfigIssuers` Submodule <a name="`pkiSecretBackendConfigIssuers` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigIssuers <a name="PkiSecretBackendConfigIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers vault_pki_secret_backend_config_issuers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_issuers

pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers(
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
  default: str = None,
  default_follows_latest_issuer: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.default">default</a></code> | <code>str</code> | Specifies the default issuer by ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.defaultFollowsLatestIssuer">default_follows_latest_issuer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether a root creation or an issuer import operation updates the default issuer to the newly added issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#id PkiSecretBackendConfigIssuers#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.backend"></a>

- *Type:* str

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#backend PkiSecretBackendConfigIssuers#backend}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.default"></a>

- *Type:* str

Specifies the default issuer by ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#default PkiSecretBackendConfigIssuers#default}

---

##### `default_follows_latest_issuer`<sup>Optional</sup> <a name="default_follows_latest_issuer" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.defaultFollowsLatestIssuer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether a root creation or an issuer import operation updates the default issuer to the newly added issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#default_follows_latest_issuer PkiSecretBackendConfigIssuers#default_follows_latest_issuer}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#id PkiSecretBackendConfigIssuers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#namespace PkiSecretBackendConfigIssuers#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetDefaultFollowsLatestIssuer">reset_default_follows_latest_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_default` <a name="reset_default" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_default_follows_latest_issuer` <a name="reset_default_follows_latest_issuer" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetDefaultFollowsLatestIssuer"></a>

```python
def reset_default_follows_latest_issuer() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_issuers

pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_issuers

pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_issuers

pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultFollowsLatestIssuerInput">default_follows_latest_issuer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultFollowsLatestIssuer">default_follows_latest_issuer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `default_follows_latest_issuer_input`<sup>Optional</sup> <a name="default_follows_latest_issuer_input" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultFollowsLatestIssuerInput"></a>

```python
default_follows_latest_issuer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `default_follows_latest_issuer`<sup>Required</sup> <a name="default_follows_latest_issuer" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.defaultFollowsLatestIssuer"></a>

```python
default_follows_latest_issuer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigIssuersConfig <a name="PkiSecretBackendConfigIssuersConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_issuers

pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  default: str = None,
  default_follows_latest_issuer: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.backend">backend</a></code> | <code>str</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.default">default</a></code> | <code>str</code> | Specifies the default issuer by ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.defaultFollowsLatestIssuer">default_follows_latest_issuer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether a root creation or an issuer import operation updates the default issuer to the newly added issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#id PkiSecretBackendConfigIssuers#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#backend PkiSecretBackendConfigIssuers#backend}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.default"></a>

```python
default: str
```

- *Type:* str

Specifies the default issuer by ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#default PkiSecretBackendConfigIssuers#default}

---

##### `default_follows_latest_issuer`<sup>Optional</sup> <a name="default_follows_latest_issuer" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.defaultFollowsLatestIssuer"></a>

```python
default_follows_latest_issuer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether a root creation or an issuer import operation updates the default issuer to the newly added issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#default_follows_latest_issuer PkiSecretBackendConfigIssuers#default_follows_latest_issuer}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#id PkiSecretBackendConfigIssuers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigIssuers.PkiSecretBackendConfigIssuersConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/pki_secret_backend_config_issuers#namespace PkiSecretBackendConfigIssuers#namespace}

---


