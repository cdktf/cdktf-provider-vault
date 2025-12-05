# `pkiSecretBackendCert` Submodule <a name="`pkiSecretBackendCert` Submodule" id="@cdktf/provider-vault.pkiSecretBackendCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCert <a name="PkiSecretBackendCert" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert vault_pki_secret_backend_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCert(
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
  common_name: str,
  name: str,
  alt_names: typing.List[str] = None,
  auto_renew: bool | IResolvable = None,
  cert_metadata: str = None,
  exclude_cn_from_sans: bool | IResolvable = None,
  format: str = None,
  id: str = None,
  ip_sans: typing.List[str] = None,
  issuer_ref: str = None,
  min_seconds_remaining: typing.Union[int, float] = None,
  namespace: str = None,
  not_after: str = None,
  other_sans: typing.List[str] = None,
  private_key_format: str = None,
  revoke: bool | IResolvable = None,
  revoke_with_key: bool | IResolvable = None,
  ttl: str = None,
  uri_sans: typing.List[str] = None,
  user_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.commonName">common_name</a></code> | <code>str</code> | CN of the certificate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.altNames">alt_names</a></code> | <code>typing.List[str]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.autoRenew">auto_renew</a></code> | <code>bool \| cdktf.IResolvable</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.certMetadata">cert_metadata</a></code> | <code>str</code> | A base 64 encoded value or an empty string to associate with the certificate's serial number. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>bool \| cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.format">format</a></code> | <code>str</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.issuerRef">issuer_ref</a></code> | <code>str</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.minSecondsRemaining">min_seconds_remaining</a></code> | <code>typing.Union[int, float]</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.notAfter">not_after</a></code> | <code>str</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.privateKeyFormat">private_key_format</a></code> | <code>str</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.revoke">revoke</a></code> | <code>bool \| cdktf.IResolvable</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.revokeWithKey">revoke_with_key</a></code> | <code>bool \| cdktf.IResolvable</code> | Revoke the certificate with private key method upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | List of alternative URIs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.userIds">user_ids</a></code> | <code>typing.List[str]</code> | List of Subject User IDs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.backend"></a>

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#backend PkiSecretBackendCert#backend}

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.commonName"></a>

- *Type:* str

CN of the certificate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#common_name PkiSecretBackendCert#common_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.name"></a>

- *Type:* str

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#name PkiSecretBackendCert#name}

---

##### `alt_names`<sup>Optional</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.altNames"></a>

- *Type:* typing.List[str]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#alt_names PkiSecretBackendCert#alt_names}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.autoRenew"></a>

- *Type:* bool | cdktf.IResolvable

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#auto_renew PkiSecretBackendCert#auto_renew}

---

##### `cert_metadata`<sup>Optional</sup> <a name="cert_metadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.certMetadata"></a>

- *Type:* str

A base 64 encoded value or an empty string to associate with the certificate's serial number.

The role's no_store_metadata must be set to false, otherwise an error is returned when specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#cert_metadata PkiSecretBackendCert#cert_metadata}

---

##### `exclude_cn_from_sans`<sup>Optional</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.excludeCnFromSans"></a>

- *Type:* bool | cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#exclude_cn_from_sans PkiSecretBackendCert#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.format"></a>

- *Type:* str

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#format PkiSecretBackendCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_sans`<sup>Optional</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ipSans"></a>

- *Type:* typing.List[str]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#ip_sans PkiSecretBackendCert#ip_sans}

---

##### `issuer_ref`<sup>Optional</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.issuerRef"></a>

- *Type:* str

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#issuer_ref PkiSecretBackendCert#issuer_ref}

---

##### `min_seconds_remaining`<sup>Optional</sup> <a name="min_seconds_remaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.minSecondsRemaining"></a>

- *Type:* typing.Union[int, float]

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#min_seconds_remaining PkiSecretBackendCert#min_seconds_remaining}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#namespace PkiSecretBackendCert#namespace}

---

##### `not_after`<sup>Optional</sup> <a name="not_after" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.notAfter"></a>

- *Type:* str

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#not_after PkiSecretBackendCert#not_after}

---

##### `other_sans`<sup>Optional</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.otherSans"></a>

- *Type:* typing.List[str]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#other_sans PkiSecretBackendCert#other_sans}

---

##### `private_key_format`<sup>Optional</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.privateKeyFormat"></a>

- *Type:* str

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#private_key_format PkiSecretBackendCert#private_key_format}

---

##### `revoke`<sup>Optional</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.revoke"></a>

- *Type:* bool | cdktf.IResolvable

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#revoke PkiSecretBackendCert#revoke}

---

##### `revoke_with_key`<sup>Optional</sup> <a name="revoke_with_key" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.revokeWithKey"></a>

- *Type:* bool | cdktf.IResolvable

Revoke the certificate with private key method upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#revoke_with_key PkiSecretBackendCert#revoke_with_key}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.ttl"></a>

- *Type:* str

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#ttl PkiSecretBackendCert#ttl}

---

##### `uri_sans`<sup>Optional</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.uriSans"></a>

- *Type:* typing.List[str]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#uri_sans PkiSecretBackendCert#uri_sans}

---

##### `user_ids`<sup>Optional</sup> <a name="user_ids" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.Initializer.parameter.userIds"></a>

- *Type:* typing.List[str]

List of Subject User IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#user_ids PkiSecretBackendCert#user_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames">reset_alt_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew">reset_auto_renew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetCertMetadata">reset_cert_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans">reset_exclude_cn_from_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat">reset_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans">reset_ip_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIssuerRef">reset_issuer_ref</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining">reset_min_seconds_remaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNotAfter">reset_not_after</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans">reset_other_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat">reset_private_key_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke">reset_revoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevokeWithKey">reset_revoke_with_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans">reset_uri_sans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUserIds">reset_user_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_alt_names` <a name="reset_alt_names" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAltNames"></a>

```python
def reset_alt_names() -> None
```

##### `reset_auto_renew` <a name="reset_auto_renew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetAutoRenew"></a>

```python
def reset_auto_renew() -> None
```

##### `reset_cert_metadata` <a name="reset_cert_metadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetCertMetadata"></a>

```python
def reset_cert_metadata() -> None
```

##### `reset_exclude_cn_from_sans` <a name="reset_exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetExcludeCnFromSans"></a>

```python
def reset_exclude_cn_from_sans() -> None
```

##### `reset_format` <a name="reset_format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetFormat"></a>

```python
def reset_format() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_sans` <a name="reset_ip_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIpSans"></a>

```python
def reset_ip_sans() -> None
```

##### `reset_issuer_ref` <a name="reset_issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetIssuerRef"></a>

```python
def reset_issuer_ref() -> None
```

##### `reset_min_seconds_remaining` <a name="reset_min_seconds_remaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetMinSecondsRemaining"></a>

```python
def reset_min_seconds_remaining() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_not_after` <a name="reset_not_after" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetNotAfter"></a>

```python
def reset_not_after() -> None
```

##### `reset_other_sans` <a name="reset_other_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetOtherSans"></a>

```python
def reset_other_sans() -> None
```

##### `reset_private_key_format` <a name="reset_private_key_format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetPrivateKeyFormat"></a>

```python
def reset_private_key_format() -> None
```

##### `reset_revoke` <a name="reset_revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevoke"></a>

```python
def reset_revoke() -> None
```

##### `reset_revoke_with_key` <a name="reset_revoke_with_key" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetRevokeWithKey"></a>

```python
def reset_revoke_with_key() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_uri_sans` <a name="reset_uri_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUriSans"></a>

```python
def reset_uri_sans() -> None
```

##### `reset_user_ids` <a name="reset_user_ids" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.resetUserIds"></a>

```python
def reset_user_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendCert resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendCert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain">ca_chain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration">expiration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa">issuing_ca</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType">private_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending">renew_pending</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput">alt_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput">auto_renew_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certMetadataInput">cert_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput">exclude_cn_from_sans_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput">format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput">ip_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRefInput">issuer_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput">min_seconds_remaining_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.notAfterInput">not_after_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput">other_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput">private_key_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput">revoke_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeWithKeyInput">revoke_with_key_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput">uri_sans_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIdsInput">user_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames">alt_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew">auto_renew</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certMetadata">cert_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRef">issuer_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining">min_seconds_remaining</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.notAfter">not_after</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat">private_key_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke">revoke</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeWithKey">revoke_with_key</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIds">user_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `ca_chain`<sup>Required</sup> <a name="ca_chain" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.caChain"></a>

```python
ca_chain: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.expiration"></a>

```python
expiration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `issuing_ca`<sup>Required</sup> <a name="issuing_ca" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuingCa"></a>

```python
issuing_ca: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_type`<sup>Required</sup> <a name="private_key_type" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyType"></a>

```python
private_key_type: str
```

- *Type:* str

---

##### `renew_pending`<sup>Required</sup> <a name="renew_pending" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.renewPending"></a>

```python
renew_pending: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `alt_names_input`<sup>Optional</sup> <a name="alt_names_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNamesInput"></a>

```python
alt_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_renew_input`<sup>Optional</sup> <a name="auto_renew_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenewInput"></a>

```python
auto_renew_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `cert_metadata_input`<sup>Optional</sup> <a name="cert_metadata_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certMetadataInput"></a>

```python
cert_metadata_input: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `exclude_cn_from_sans_input`<sup>Optional</sup> <a name="exclude_cn_from_sans_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSansInput"></a>

```python
exclude_cn_from_sans_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `format_input`<sup>Optional</sup> <a name="format_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.formatInput"></a>

```python
format_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_sans_input`<sup>Optional</sup> <a name="ip_sans_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSansInput"></a>

```python
ip_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_ref_input`<sup>Optional</sup> <a name="issuer_ref_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRefInput"></a>

```python
issuer_ref_input: str
```

- *Type:* str

---

##### `min_seconds_remaining_input`<sup>Optional</sup> <a name="min_seconds_remaining_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemainingInput"></a>

```python
min_seconds_remaining_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `not_after_input`<sup>Optional</sup> <a name="not_after_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.notAfterInput"></a>

```python
not_after_input: str
```

- *Type:* str

---

##### `other_sans_input`<sup>Optional</sup> <a name="other_sans_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSansInput"></a>

```python
other_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_key_format_input`<sup>Optional</sup> <a name="private_key_format_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormatInput"></a>

```python
private_key_format_input: str
```

- *Type:* str

---

##### `revoke_input`<sup>Optional</sup> <a name="revoke_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeInput"></a>

```python
revoke_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `revoke_with_key_input`<sup>Optional</sup> <a name="revoke_with_key_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeWithKeyInput"></a>

```python
revoke_with_key_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `uri_sans_input`<sup>Optional</sup> <a name="uri_sans_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSansInput"></a>

```python
uri_sans_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_ids_input`<sup>Optional</sup> <a name="user_ids_input" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIdsInput"></a>

```python
user_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `alt_names`<sup>Required</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.altNames"></a>

```python
alt_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_renew`<sup>Required</sup> <a name="auto_renew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.autoRenew"></a>

```python
auto_renew: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `cert_metadata`<sup>Required</sup> <a name="cert_metadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.certMetadata"></a>

```python
cert_metadata: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `exclude_cn_from_sans`<sup>Required</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.excludeCnFromSans"></a>

```python
exclude_cn_from_sans: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_sans`<sup>Required</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ipSans"></a>

```python
ip_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_ref`<sup>Required</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.issuerRef"></a>

```python
issuer_ref: str
```

- *Type:* str

---

##### `min_seconds_remaining`<sup>Required</sup> <a name="min_seconds_remaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.minSecondsRemaining"></a>

```python
min_seconds_remaining: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `not_after`<sup>Required</sup> <a name="not_after" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

---

##### `other_sans`<sup>Required</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.otherSans"></a>

```python
other_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_key_format`<sup>Required</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.privateKeyFormat"></a>

```python
private_key_format: str
```

- *Type:* str

---

##### `revoke`<sup>Required</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revoke"></a>

```python
revoke: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `revoke_with_key`<sup>Required</sup> <a name="revoke_with_key" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.revokeWithKey"></a>

```python
revoke_with_key: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `uri_sans`<sup>Required</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.uriSans"></a>

```python
uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_ids`<sup>Required</sup> <a name="user_ids" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.userIds"></a>

```python
user_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCertConfig <a name="PkiSecretBackendCertConfig" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_cert

pkiSecretBackendCert.PkiSecretBackendCertConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  common_name: str,
  name: str,
  alt_names: typing.List[str] = None,
  auto_renew: bool | IResolvable = None,
  cert_metadata: str = None,
  exclude_cn_from_sans: bool | IResolvable = None,
  format: str = None,
  id: str = None,
  ip_sans: typing.List[str] = None,
  issuer_ref: str = None,
  min_seconds_remaining: typing.Union[int, float] = None,
  namespace: str = None,
  not_after: str = None,
  other_sans: typing.List[str] = None,
  private_key_format: str = None,
  revoke: bool | IResolvable = None,
  revoke_with_key: bool | IResolvable = None,
  ttl: str = None,
  uri_sans: typing.List[str] = None,
  user_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend">backend</a></code> | <code>str</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName">common_name</a></code> | <code>str</code> | CN of the certificate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name">name</a></code> | <code>str</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames">alt_names</a></code> | <code>typing.List[str]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew">auto_renew</a></code> | <code>bool \| cdktf.IResolvable</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.certMetadata">cert_metadata</a></code> | <code>str</code> | A base 64 encoded value or an empty string to associate with the certificate's serial number. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans">exclude_cn_from_sans</a></code> | <code>bool \| cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format">format</a></code> | <code>str</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans">ip_sans</a></code> | <code>typing.List[str]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.issuerRef">issuer_ref</a></code> | <code>str</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining">min_seconds_remaining</a></code> | <code>typing.Union[int, float]</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.notAfter">not_after</a></code> | <code>str</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans">other_sans</a></code> | <code>typing.List[str]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat">private_key_format</a></code> | <code>str</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke">revoke</a></code> | <code>bool \| cdktf.IResolvable</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revokeWithKey">revoke_with_key</a></code> | <code>bool \| cdktf.IResolvable</code> | Revoke the certificate with private key method upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl">ttl</a></code> | <code>str</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans">uri_sans</a></code> | <code>typing.List[str]</code> | List of alternative URIs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.userIds">user_ids</a></code> | <code>typing.List[str]</code> | List of Subject User IDs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#backend PkiSecretBackendCert#backend}

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

CN of the certificate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#common_name PkiSecretBackendCert#common_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#name PkiSecretBackendCert#name}

---

##### `alt_names`<sup>Optional</sup> <a name="alt_names" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.altNames"></a>

```python
alt_names: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#alt_names PkiSecretBackendCert#alt_names}

---

##### `auto_renew`<sup>Optional</sup> <a name="auto_renew" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.autoRenew"></a>

```python
auto_renew: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#auto_renew PkiSecretBackendCert#auto_renew}

---

##### `cert_metadata`<sup>Optional</sup> <a name="cert_metadata" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.certMetadata"></a>

```python
cert_metadata: str
```

- *Type:* str

A base 64 encoded value or an empty string to associate with the certificate's serial number.

The role's no_store_metadata must be set to false, otherwise an error is returned when specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#cert_metadata PkiSecretBackendCert#cert_metadata}

---

##### `exclude_cn_from_sans`<sup>Optional</sup> <a name="exclude_cn_from_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.excludeCnFromSans"></a>

```python
exclude_cn_from_sans: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#exclude_cn_from_sans PkiSecretBackendCert#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.format"></a>

```python
format: str
```

- *Type:* str

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#format PkiSecretBackendCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#id PkiSecretBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_sans`<sup>Optional</sup> <a name="ip_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ipSans"></a>

```python
ip_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#ip_sans PkiSecretBackendCert#ip_sans}

---

##### `issuer_ref`<sup>Optional</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.issuerRef"></a>

```python
issuer_ref: str
```

- *Type:* str

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#issuer_ref PkiSecretBackendCert#issuer_ref}

---

##### `min_seconds_remaining`<sup>Optional</sup> <a name="min_seconds_remaining" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.minSecondsRemaining"></a>

```python
min_seconds_remaining: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#min_seconds_remaining PkiSecretBackendCert#min_seconds_remaining}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#namespace PkiSecretBackendCert#namespace}

---

##### `not_after`<sup>Optional</sup> <a name="not_after" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.notAfter"></a>

```python
not_after: str
```

- *Type:* str

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#not_after PkiSecretBackendCert#not_after}

---

##### `other_sans`<sup>Optional</sup> <a name="other_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.otherSans"></a>

```python
other_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#other_sans PkiSecretBackendCert#other_sans}

---

##### `private_key_format`<sup>Optional</sup> <a name="private_key_format" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.privateKeyFormat"></a>

```python
private_key_format: str
```

- *Type:* str

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#private_key_format PkiSecretBackendCert#private_key_format}

---

##### `revoke`<sup>Optional</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revoke"></a>

```python
revoke: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#revoke PkiSecretBackendCert#revoke}

---

##### `revoke_with_key`<sup>Optional</sup> <a name="revoke_with_key" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.revokeWithKey"></a>

```python
revoke_with_key: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Revoke the certificate with private key method upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#revoke_with_key PkiSecretBackendCert#revoke_with_key}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#ttl PkiSecretBackendCert#ttl}

---

##### `uri_sans`<sup>Optional</sup> <a name="uri_sans" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.uriSans"></a>

```python
uri_sans: typing.List[str]
```

- *Type:* typing.List[str]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#uri_sans PkiSecretBackendCert#uri_sans}

---

##### `user_ids`<sup>Optional</sup> <a name="user_ids" id="@cdktf/provider-vault.pkiSecretBackendCert.PkiSecretBackendCertConfig.property.userIds"></a>

```python
user_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of Subject User IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_cert#user_ids PkiSecretBackendCert#user_ids}

---



