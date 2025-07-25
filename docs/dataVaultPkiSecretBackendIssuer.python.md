# `dataVaultPkiSecretBackendIssuer` Submodule <a name="`dataVaultPkiSecretBackendIssuer` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendIssuer <a name="DataVaultPkiSecretBackendIssuer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_pki_secret_backend_issuer

dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer(
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
  issuer_ref: str,
  disable_critical_extension_checks: typing.Union[bool, IResolvable] = None,
  disable_name_checks: typing.Union[bool, IResolvable] = None,
  disable_name_constraint_checks: typing.Union[bool, IResolvable] = None,
  disable_path_length_checks: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.issuerRef">issuer_ref</a></code> | <code>str</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.disableCriticalExtensionChecks">disable_critical_extension_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.disableNameChecks">disable_name_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.disableNameConstraintChecks">disable_name_constraint_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.disablePathLengthChecks">disable_path_length_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.backend"></a>

- *Type:* str

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#backend DataVaultPkiSecretBackendIssuer#backend}

---

##### `issuer_ref`<sup>Required</sup> <a name="issuer_ref" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.issuerRef"></a>

- *Type:* str

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#issuer_ref DataVaultPkiSecretBackendIssuer#issuer_ref}

---

##### `disable_critical_extension_checks`<sup>Optional</sup> <a name="disable_critical_extension_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.disableCriticalExtensionChecks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#disable_critical_extension_checks DataVaultPkiSecretBackendIssuer#disable_critical_extension_checks}

---

##### `disable_name_checks`<sup>Optional</sup> <a name="disable_name_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.disableNameChecks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#disable_name_checks DataVaultPkiSecretBackendIssuer#disable_name_checks}

---

##### `disable_name_constraint_checks`<sup>Optional</sup> <a name="disable_name_constraint_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.disableNameConstraintChecks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#disable_name_constraint_checks DataVaultPkiSecretBackendIssuer#disable_name_constraint_checks}

---

##### `disable_path_length_checks`<sup>Optional</sup> <a name="disable_path_length_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.disablePathLengthChecks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#disable_path_length_checks DataVaultPkiSecretBackendIssuer#disable_path_length_checks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#namespace DataVaultPkiSecretBackendIssuer#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableCriticalExtensionChecks">reset_disable_critical_extension_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameChecks">reset_disable_name_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameConstraintChecks">reset_disable_name_constraint_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisablePathLengthChecks">reset_disable_path_length_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_disable_critical_extension_checks` <a name="reset_disable_critical_extension_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableCriticalExtensionChecks"></a>

```python
def reset_disable_critical_extension_checks() -> None
```

##### `reset_disable_name_checks` <a name="reset_disable_name_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameChecks"></a>

```python
def reset_disable_name_checks() -> None
```

##### `reset_disable_name_constraint_checks` <a name="reset_disable_name_constraint_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisableNameConstraintChecks"></a>

```python
def reset_disable_name_constraint_checks() -> None
```

##### `reset_disable_path_length_checks` <a name="reset_disable_path_length_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetDisablePathLengthChecks"></a>

```python
def reset_disable_path_length_checks() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_pki_secret_backend_issuer

dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_pki_secret_backend_issuer

dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_pki_secret_backend_issuer

dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_pki_secret_backend_issuer

dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultPkiSecretBackendIssuer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultPkiSecretBackendIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.caChain">ca_chain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerId">issuer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerName">issuer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.leafNotAfterBehavior">leaf_not_after_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.manualChain">manual_chain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.usage">usage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecksInput">disable_critical_extension_checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecksInput">disable_name_checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecksInput">disable_name_constraint_checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecksInput">disable_path_length_checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRefInput">issuer_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecks">disable_critical_extension_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecks">disable_name_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecks">disable_name_constraint_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecks">disable_path_length_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRef">issuer_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ca_chain`<sup>Required</sup> <a name="ca_chain" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.caChain"></a>

```python
ca_chain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `issuer_id`<sup>Required</sup> <a name="issuer_id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerId"></a>

```python
issuer_id: str
```

- *Type:* str

---

##### `issuer_name`<sup>Required</sup> <a name="issuer_name" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerName"></a>

```python
issuer_name: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `leaf_not_after_behavior`<sup>Required</sup> <a name="leaf_not_after_behavior" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.leafNotAfterBehavior"></a>

```python
leaf_not_after_behavior: str
```

- *Type:* str

---

##### `manual_chain`<sup>Required</sup> <a name="manual_chain" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.manualChain"></a>

```python
manual_chain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.usage"></a>

```python
usage: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `disable_critical_extension_checks_input`<sup>Optional</sup> <a name="disable_critical_extension_checks_input" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecksInput"></a>

```python
disable_critical_extension_checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_name_checks_input`<sup>Optional</sup> <a name="disable_name_checks_input" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecksInput"></a>

```python
disable_name_checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_name_constraint_checks_input`<sup>Optional</sup> <a name="disable_name_constraint_checks_input" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecksInput"></a>

```python
disable_name_constraint_checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_path_length_checks_input`<sup>Optional</sup> <a name="disable_path_length_checks_input" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecksInput"></a>

```python
disable_path_length_checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_ref_input`<sup>Optional</sup> <a name="issuer_ref_input" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRefInput"></a>

```python
issuer_ref_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `disable_critical_extension_checks`<sup>Required</sup> <a name="disable_critical_extension_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableCriticalExtensionChecks"></a>

```python
disable_critical_extension_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_name_checks`<sup>Required</sup> <a name="disable_name_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameChecks"></a>

```python
disable_name_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_name_constraint_checks`<sup>Required</sup> <a name="disable_name_constraint_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disableNameConstraintChecks"></a>

```python
disable_name_constraint_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_path_length_checks`<sup>Required</sup> <a name="disable_path_length_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.disablePathLengthChecks"></a>

```python
disable_path_length_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer_ref`<sup>Required</sup> <a name="issuer_ref" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.issuerRef"></a>

```python
issuer_ref: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendIssuerConfig <a name="DataVaultPkiSecretBackendIssuerConfig" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_pki_secret_backend_issuer

dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  issuer_ref: str,
  disable_critical_extension_checks: typing.Union[bool, IResolvable] = None,
  disable_name_checks: typing.Union[bool, IResolvable] = None,
  disable_name_constraint_checks: typing.Union[bool, IResolvable] = None,
  disable_path_length_checks: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.backend">backend</a></code> | <code>str</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.issuerRef">issuer_ref</a></code> | <code>str</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableCriticalExtensionChecks">disable_critical_extension_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameChecks">disable_name_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameConstraintChecks">disable_name_constraint_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disablePathLengthChecks">disable_path_length_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#backend DataVaultPkiSecretBackendIssuer#backend}

---

##### `issuer_ref`<sup>Required</sup> <a name="issuer_ref" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.issuerRef"></a>

```python
issuer_ref: str
```

- *Type:* str

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#issuer_ref DataVaultPkiSecretBackendIssuer#issuer_ref}

---

##### `disable_critical_extension_checks`<sup>Optional</sup> <a name="disable_critical_extension_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableCriticalExtensionChecks"></a>

```python
disable_critical_extension_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#disable_critical_extension_checks DataVaultPkiSecretBackendIssuer#disable_critical_extension_checks}

---

##### `disable_name_checks`<sup>Optional</sup> <a name="disable_name_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameChecks"></a>

```python
disable_name_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#disable_name_checks DataVaultPkiSecretBackendIssuer#disable_name_checks}

---

##### `disable_name_constraint_checks`<sup>Optional</sup> <a name="disable_name_constraint_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disableNameConstraintChecks"></a>

```python
disable_name_constraint_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#disable_name_constraint_checks DataVaultPkiSecretBackendIssuer#disable_name_constraint_checks}

---

##### `disable_path_length_checks`<sup>Optional</sup> <a name="disable_path_length_checks" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.disablePathLengthChecks"></a>

```python
disable_path_length_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#disable_path_length_checks DataVaultPkiSecretBackendIssuer#disable_path_length_checks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#id DataVaultPkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendIssuer.DataVaultPkiSecretBackendIssuerConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/pki_secret_backend_issuer#namespace DataVaultPkiSecretBackendIssuer#namespace}

---



