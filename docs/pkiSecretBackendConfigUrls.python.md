# `vault_pki_secret_backend_config_urls`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_config_urls`](https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls).

# `pkiSecretBackendConfigUrls` Submodule <a name="`pkiSecretBackendConfigUrls` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigUrls <a name="PkiSecretBackendConfigUrls" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls vault_pki_secret_backend_config_urls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_urls

pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls(
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
  crl_distribution_points: typing.List[str] = None,
  id: str = None,
  issuing_certificates: typing.List[str] = None,
  namespace: str = None,
  ocsp_servers: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.crlDistributionPoints">crl_distribution_points</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.issuingCertificates">issuing_certificates</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.ocspServers">ocsp_servers</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the OCSP Servers field. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.backend"></a>

- *Type:* str

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#backend PkiSecretBackendConfigUrls#backend}

---

##### `crl_distribution_points`<sup>Optional</sup> <a name="crl_distribution_points" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.crlDistributionPoints"></a>

- *Type:* typing.List[str]

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#crl_distribution_points PkiSecretBackendConfigUrls#crl_distribution_points}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuing_certificates`<sup>Optional</sup> <a name="issuing_certificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.issuingCertificates"></a>

- *Type:* typing.List[str]

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#issuing_certificates PkiSecretBackendConfigUrls#issuing_certificates}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#namespace PkiSecretBackendConfigUrls#namespace}

---

##### `ocsp_servers`<sup>Optional</sup> <a name="ocsp_servers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.Initializer.parameter.ocspServers"></a>

- *Type:* typing.List[str]

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#ocsp_servers PkiSecretBackendConfigUrls#ocsp_servers}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetCrlDistributionPoints">reset_crl_distribution_points</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetIssuingCertificates">reset_issuing_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOcspServers">reset_ocsp_servers</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_crl_distribution_points` <a name="reset_crl_distribution_points" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetCrlDistributionPoints"></a>

```python
def reset_crl_distribution_points() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuing_certificates` <a name="reset_issuing_certificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetIssuingCertificates"></a>

```python
def reset_issuing_certificates() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ocsp_servers` <a name="reset_ocsp_servers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.resetOcspServers"></a>

```python
def reset_ocsp_servers() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_urls

pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_urls

pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_urls

pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPointsInput">crl_distribution_points_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificatesInput">issuing_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServersInput">ocsp_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPoints">crl_distribution_points</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificates">issuing_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServers">ocsp_servers</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `crl_distribution_points_input`<sup>Optional</sup> <a name="crl_distribution_points_input" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPointsInput"></a>

```python
crl_distribution_points_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuing_certificates_input`<sup>Optional</sup> <a name="issuing_certificates_input" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificatesInput"></a>

```python
issuing_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `ocsp_servers_input`<sup>Optional</sup> <a name="ocsp_servers_input" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServersInput"></a>

```python
ocsp_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `crl_distribution_points`<sup>Required</sup> <a name="crl_distribution_points" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.crlDistributionPoints"></a>

```python
crl_distribution_points: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuing_certificates`<sup>Required</sup> <a name="issuing_certificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.issuingCertificates"></a>

```python
issuing_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `ocsp_servers`<sup>Required</sup> <a name="ocsp_servers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.ocspServers"></a>

```python
ocsp_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrls.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigUrlsConfig <a name="PkiSecretBackendConfigUrlsConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_config_urls

pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  crl_distribution_points: typing.List[str] = None,
  id: str = None,
  issuing_certificates: typing.List[str] = None,
  namespace: str = None,
  ocsp_servers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.backend">backend</a></code> | <code>str</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.crlDistributionPoints">crl_distribution_points</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.issuingCertificates">issuing_certificates</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.ocspServers">ocsp_servers</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the OCSP Servers field. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#backend PkiSecretBackendConfigUrls#backend}

---

##### `crl_distribution_points`<sup>Optional</sup> <a name="crl_distribution_points" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.crlDistributionPoints"></a>

```python
crl_distribution_points: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#crl_distribution_points PkiSecretBackendConfigUrls#crl_distribution_points}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#id PkiSecretBackendConfigUrls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuing_certificates`<sup>Optional</sup> <a name="issuing_certificates" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.issuingCertificates"></a>

```python
issuing_certificates: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#issuing_certificates PkiSecretBackendConfigUrls#issuing_certificates}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#namespace PkiSecretBackendConfigUrls#namespace}

---

##### `ocsp_servers`<sup>Optional</sup> <a name="ocsp_servers" id="@cdktf/provider-vault.pkiSecretBackendConfigUrls.PkiSecretBackendConfigUrlsConfig.property.ocspServers"></a>

```python
ocsp_servers: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/pki_secret_backend_config_urls#ocsp_servers PkiSecretBackendConfigUrls#ocsp_servers}

---



