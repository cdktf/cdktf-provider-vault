# `transitSecretBackendKey` Submodule <a name="`transitSecretBackendKey` Submodule" id="@cdktf/provider-vault.transitSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransitSecretBackendKey <a name="TransitSecretBackendKey" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key vault_transit_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import transit_secret_backend_key

transitSecretBackendKey.TransitSecretBackendKey(
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
  name: str,
  allow_plaintext_backup: bool | IResolvable = None,
  auto_rotate_period: typing.Union[int, float] = None,
  convergent_encryption: bool | IResolvable = None,
  deletion_allowed: bool | IResolvable = None,
  derived: bool | IResolvable = None,
  exportable: bool | IResolvable = None,
  hybrid_key_type_ec: str = None,
  hybrid_key_type_pqc: str = None,
  id: str = None,
  key_size: typing.Union[int, float] = None,
  min_decryption_version: typing.Union[int, float] = None,
  min_encryption_version: typing.Union[int, float] = None,
  namespace: str = None,
  parameter_set: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The Transit secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the encryption key to create. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.allowPlaintextBackup">allow_plaintext_backup</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.autoRotatePeriod">auto_rotate_period</a></code> | <code>typing.Union[int, float]</code> | Amount of seconds the key should live before being automatically rotated. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.convergentEncryption">convergent_encryption</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.derived">derived</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies if key derivation is to be used. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.exportable">exportable</a></code> | <code>bool \| cdktf.IResolvable</code> | Enables keys to be exportable. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.hybridKeyTypeEc">hybrid_key_type_ec</a></code> | <code>str</code> | The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.hybridKeyTypePqc">hybrid_key_type_pqc</a></code> | <code>str</code> | The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | The key size in bytes for algorithms that allow variable key sizes. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minDecryptionVersion">min_decryption_version</a></code> | <code>typing.Union[int, float]</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minEncryptionVersion">min_encryption_version</a></code> | <code>typing.Union[int, float]</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.parameterSet">parameter_set</a></code> | <code>str</code> | The parameter set to use for ML-DSA. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.type">type</a></code> | <code>str</code> | Specifies the type of key to create. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.backend"></a>

- *Type:* str

The Transit secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#backend TransitSecretBackendKey#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.name"></a>

- *Type:* str

Name of the encryption key to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#name TransitSecretBackendKey#name}

---

##### `allow_plaintext_backup`<sup>Optional</sup> <a name="allow_plaintext_backup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.allowPlaintextBackup"></a>

- *Type:* bool | cdktf.IResolvable

If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}

---

##### `auto_rotate_period`<sup>Optional</sup> <a name="auto_rotate_period" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.autoRotatePeriod"></a>

- *Type:* typing.Union[int, float]

Amount of seconds the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}

---

##### `convergent_encryption`<sup>Optional</sup> <a name="convergent_encryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.convergentEncryption"></a>

- *Type:* bool | cdktf.IResolvable

Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext.

This requires derived to be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}

---

##### `deletion_allowed`<sup>Optional</sup> <a name="deletion_allowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.deletionAllowed"></a>

- *Type:* bool | cdktf.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.derived"></a>

- *Type:* bool | cdktf.IResolvable

Specifies if key derivation is to be used.

If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#derived TransitSecretBackendKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.exportable"></a>

- *Type:* bool | cdktf.IResolvable

Enables keys to be exportable.

This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}

---

##### `hybrid_key_type_ec`<sup>Optional</sup> <a name="hybrid_key_type_ec" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.hybridKeyTypeEc"></a>

- *Type:* str

The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#hybrid_key_type_ec TransitSecretBackendKey#hybrid_key_type_ec}

---

##### `hybrid_key_type_pqc`<sup>Optional</sup> <a name="hybrid_key_type_pqc" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.hybridKeyTypePqc"></a>

- *Type:* str

The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#hybrid_key_type_pqc TransitSecretBackendKey#hybrid_key_type_pqc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.keySize"></a>

- *Type:* typing.Union[int, float]

The key size in bytes for algorithms that allow variable key sizes.

Currently only applicable to HMAC; this value must be between 32 and 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#key_size TransitSecretBackendKey#key_size}

---

##### `min_decryption_version`<sup>Optional</sup> <a name="min_decryption_version" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minDecryptionVersion"></a>

- *Type:* typing.Union[int, float]

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}

---

##### `min_encryption_version`<sup>Optional</sup> <a name="min_encryption_version" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.minEncryptionVersion"></a>

- *Type:* typing.Union[int, float]

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}

---

##### `parameter_set`<sup>Optional</sup> <a name="parameter_set" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.parameterSet"></a>

- *Type:* str

The parameter set to use for ML-DSA.

Required for ML-DSA and hybrid keys.  Valid values for ML-DSA are `44`, `65`, and `87`. Valid values for SLH-DSA are `slh-dsa-sha2-128s`, `slh-dsa-shake-128s`, `slh-dsa-sha2-128f`, `slh-dsa-shake-128`, `slh-dsa-sha2-192s`, `slh-dsa-shake-192s`, `slh-dsa-sha2-192f`, `slh-dsa-shake-192f`, `slh-dsa-sha2-256s`, `slh-dsa-shake-256s`, `slh-dsa-sha2-256f`, and `slh-dsa-shake-256f`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#parameter_set TransitSecretBackendKey#parameter_set}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.Initializer.parameter.type"></a>

- *Type:* str

Specifies the type of key to create.

The currently-supported types are: `aes128-gcm96`, `aes256-gcm96` (default), `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `hmac`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `managed_key`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`, `ml-dsa`, `hybrid`, and `slh-dsa`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#type TransitSecretBackendKey#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup">reset_allow_plaintext_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod">reset_auto_rotate_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption">reset_convergent_encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed">reset_deletion_allowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived">reset_derived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable">reset_exportable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypeEc">reset_hybrid_key_type_ec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypePqc">reset_hybrid_key_type_pqc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetKeySize">reset_key_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion">reset_min_decryption_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion">reset_min_encryption_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetParameterSet">reset_parameter_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_allow_plaintext_backup` <a name="reset_allow_plaintext_backup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAllowPlaintextBackup"></a>

```python
def reset_allow_plaintext_backup() -> None
```

##### `reset_auto_rotate_period` <a name="reset_auto_rotate_period" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetAutoRotatePeriod"></a>

```python
def reset_auto_rotate_period() -> None
```

##### `reset_convergent_encryption` <a name="reset_convergent_encryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetConvergentEncryption"></a>

```python
def reset_convergent_encryption() -> None
```

##### `reset_deletion_allowed` <a name="reset_deletion_allowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDeletionAllowed"></a>

```python
def reset_deletion_allowed() -> None
```

##### `reset_derived` <a name="reset_derived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetDerived"></a>

```python
def reset_derived() -> None
```

##### `reset_exportable` <a name="reset_exportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetExportable"></a>

```python
def reset_exportable() -> None
```

##### `reset_hybrid_key_type_ec` <a name="reset_hybrid_key_type_ec" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypeEc"></a>

```python
def reset_hybrid_key_type_ec() -> None
```

##### `reset_hybrid_key_type_pqc` <a name="reset_hybrid_key_type_pqc" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetHybridKeyTypePqc"></a>

```python
def reset_hybrid_key_type_pqc() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_size` <a name="reset_key_size" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetKeySize"></a>

```python
def reset_key_size() -> None
```

##### `reset_min_decryption_version` <a name="reset_min_decryption_version" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinDecryptionVersion"></a>

```python
def reset_min_decryption_version() -> None
```

##### `reset_min_encryption_version` <a name="reset_min_encryption_version" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetMinEncryptionVersion"></a>

```python
def reset_min_encryption_version() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_parameter_set` <a name="reset_parameter_set" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetParameterSet"></a>

```python
def reset_parameter_set() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TransitSecretBackendKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import transit_secret_backend_key

transitSecretBackendKey.TransitSecretBackendKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import transit_secret_backend_key

transitSecretBackendKey.TransitSecretBackendKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import transit_secret_backend_key

transitSecretBackendKey.TransitSecretBackendKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import transit_secret_backend_key

transitSecretBackendKey.TransitSecretBackendKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TransitSecretBackendKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TransitSecretBackendKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TransitSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransitSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys">keys</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion">latest_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion">min_available_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption">supports_decryption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation">supports_derivation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption">supports_encryption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning">supports_signing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput">allow_plaintext_backup_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput">auto_rotate_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput">convergent_encryption_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput">deletion_allowed_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput">derived_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput">exportable_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEcInput">hybrid_key_type_ec_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqcInput">hybrid_key_type_pqc_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySizeInput">key_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput">min_decryption_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput">min_encryption_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSetInput">parameter_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup">allow_plaintext_backup</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod">auto_rotate_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption">convergent_encryption</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived">derived</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable">exportable</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEc">hybrid_key_type_ec</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqc">hybrid_key_type_pqc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion">min_decryption_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion">min_encryption_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSet">parameter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keys"></a>

```python
keys: StringMapList
```

- *Type:* cdktf.StringMapList

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.latestVersion"></a>

```python
latest_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_available_version`<sup>Required</sup> <a name="min_available_version" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minAvailableVersion"></a>

```python
min_available_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `supports_decryption`<sup>Required</sup> <a name="supports_decryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDecryption"></a>

```python
supports_decryption: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `supports_derivation`<sup>Required</sup> <a name="supports_derivation" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsDerivation"></a>

```python
supports_derivation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `supports_encryption`<sup>Required</sup> <a name="supports_encryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsEncryption"></a>

```python
supports_encryption: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `supports_signing`<sup>Required</sup> <a name="supports_signing" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.supportsSigning"></a>

```python
supports_signing: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `allow_plaintext_backup_input`<sup>Optional</sup> <a name="allow_plaintext_backup_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackupInput"></a>

```python
allow_plaintext_backup_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `auto_rotate_period_input`<sup>Optional</sup> <a name="auto_rotate_period_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriodInput"></a>

```python
auto_rotate_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `convergent_encryption_input`<sup>Optional</sup> <a name="convergent_encryption_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryptionInput"></a>

```python
convergent_encryption_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `deletion_allowed_input`<sup>Optional</sup> <a name="deletion_allowed_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowedInput"></a>

```python
deletion_allowed_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `derived_input`<sup>Optional</sup> <a name="derived_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derivedInput"></a>

```python
derived_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `exportable_input`<sup>Optional</sup> <a name="exportable_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportableInput"></a>

```python
exportable_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `hybrid_key_type_ec_input`<sup>Optional</sup> <a name="hybrid_key_type_ec_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEcInput"></a>

```python
hybrid_key_type_ec_input: str
```

- *Type:* str

---

##### `hybrid_key_type_pqc_input`<sup>Optional</sup> <a name="hybrid_key_type_pqc_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqcInput"></a>

```python
hybrid_key_type_pqc_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_size_input`<sup>Optional</sup> <a name="key_size_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySizeInput"></a>

```python
key_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_decryption_version_input`<sup>Optional</sup> <a name="min_decryption_version_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersionInput"></a>

```python
min_decryption_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_encryption_version_input`<sup>Optional</sup> <a name="min_encryption_version_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersionInput"></a>

```python
min_encryption_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `parameter_set_input`<sup>Optional</sup> <a name="parameter_set_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSetInput"></a>

```python
parameter_set_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `allow_plaintext_backup`<sup>Required</sup> <a name="allow_plaintext_backup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.allowPlaintextBackup"></a>

```python
allow_plaintext_backup: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `auto_rotate_period`<sup>Required</sup> <a name="auto_rotate_period" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.autoRotatePeriod"></a>

```python
auto_rotate_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `convergent_encryption`<sup>Required</sup> <a name="convergent_encryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.convergentEncryption"></a>

```python
convergent_encryption: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `deletion_allowed`<sup>Required</sup> <a name="deletion_allowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.deletionAllowed"></a>

```python
deletion_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `derived`<sup>Required</sup> <a name="derived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.derived"></a>

```python
derived: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `exportable`<sup>Required</sup> <a name="exportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.exportable"></a>

```python
exportable: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `hybrid_key_type_ec`<sup>Required</sup> <a name="hybrid_key_type_ec" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypeEc"></a>

```python
hybrid_key_type_ec: str
```

- *Type:* str

---

##### `hybrid_key_type_pqc`<sup>Required</sup> <a name="hybrid_key_type_pqc" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.hybridKeyTypePqc"></a>

```python
hybrid_key_type_pqc: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_size`<sup>Required</sup> <a name="key_size" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_decryption_version`<sup>Required</sup> <a name="min_decryption_version" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minDecryptionVersion"></a>

```python
min_decryption_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_encryption_version`<sup>Required</sup> <a name="min_encryption_version" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.minEncryptionVersion"></a>

```python
min_encryption_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `parameter_set`<sup>Required</sup> <a name="parameter_set" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.parameterSet"></a>

```python
parameter_set: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TransitSecretBackendKeyConfig <a name="TransitSecretBackendKeyConfig" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import transit_secret_backend_key

transitSecretBackendKey.TransitSecretBackendKeyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backend: str,
  name: str,
  allow_plaintext_backup: bool | IResolvable = None,
  auto_rotate_period: typing.Union[int, float] = None,
  convergent_encryption: bool | IResolvable = None,
  deletion_allowed: bool | IResolvable = None,
  derived: bool | IResolvable = None,
  exportable: bool | IResolvable = None,
  hybrid_key_type_ec: str = None,
  hybrid_key_type_pqc: str = None,
  id: str = None,
  key_size: typing.Union[int, float] = None,
  min_decryption_version: typing.Union[int, float] = None,
  min_encryption_version: typing.Union[int, float] = None,
  namespace: str = None,
  parameter_set: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend">backend</a></code> | <code>str</code> | The Transit secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name">name</a></code> | <code>str</code> | Name of the encryption key to create. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup">allow_plaintext_backup</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod">auto_rotate_period</a></code> | <code>typing.Union[int, float]</code> | Amount of seconds the key should live before being automatically rotated. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption">convergent_encryption</a></code> | <code>bool \| cdktf.IResolvable</code> | Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed">deletion_allowed</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies if the key is allowed to be deleted. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived">derived</a></code> | <code>bool \| cdktf.IResolvable</code> | Specifies if key derivation is to be used. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable">exportable</a></code> | <code>bool \| cdktf.IResolvable</code> | Enables keys to be exportable. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypeEc">hybrid_key_type_ec</a></code> | <code>str</code> | The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypePqc">hybrid_key_type_pqc</a></code> | <code>str</code> | The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | The key size in bytes for algorithms that allow variable key sizes. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion">min_decryption_version</a></code> | <code>typing.Union[int, float]</code> | Minimum key version to use for decryption. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion">min_encryption_version</a></code> | <code>typing.Union[int, float]</code> | Minimum key version to use for encryption. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.parameterSet">parameter_set</a></code> | <code>str</code> | The parameter set to use for ML-DSA. |
| <code><a href="#@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type">type</a></code> | <code>str</code> | Specifies the type of key to create. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The Transit secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#backend TransitSecretBackendKey#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the encryption key to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#name TransitSecretBackendKey#name}

---

##### `allow_plaintext_backup`<sup>Optional</sup> <a name="allow_plaintext_backup" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.allowPlaintextBackup"></a>

```python
allow_plaintext_backup: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}

---

##### `auto_rotate_period`<sup>Optional</sup> <a name="auto_rotate_period" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.autoRotatePeriod"></a>

```python
auto_rotate_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of seconds the key should live before being automatically rotated.

A value of 0 disables automatic rotation for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}

---

##### `convergent_encryption`<sup>Optional</sup> <a name="convergent_encryption" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.convergentEncryption"></a>

```python
convergent_encryption: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext.

This requires derived to be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}

---

##### `deletion_allowed`<sup>Optional</sup> <a name="deletion_allowed" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.deletionAllowed"></a>

```python
deletion_allowed: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Specifies if the key is allowed to be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}

---

##### `derived`<sup>Optional</sup> <a name="derived" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.derived"></a>

```python
derived: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Specifies if key derivation is to be used.

If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#derived TransitSecretBackendKey#derived}

---

##### `exportable`<sup>Optional</sup> <a name="exportable" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.exportable"></a>

```python
exportable: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Enables keys to be exportable.

This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}

---

##### `hybrid_key_type_ec`<sup>Optional</sup> <a name="hybrid_key_type_ec" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypeEc"></a>

```python
hybrid_key_type_ec: str
```

- *Type:* str

The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#hybrid_key_type_ec TransitSecretBackendKey#hybrid_key_type_ec}

---

##### `hybrid_key_type_pqc`<sup>Optional</sup> <a name="hybrid_key_type_pqc" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.hybridKeyTypePqc"></a>

```python
hybrid_key_type_pqc: str
```

- *Type:* str

The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#hybrid_key_type_pqc TransitSecretBackendKey#hybrid_key_type_pqc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The key size in bytes for algorithms that allow variable key sizes.

Currently only applicable to HMAC; this value must be between 32 and 512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#key_size TransitSecretBackendKey#key_size}

---

##### `min_decryption_version`<sup>Optional</sup> <a name="min_decryption_version" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minDecryptionVersion"></a>

```python
min_decryption_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum key version to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}

---

##### `min_encryption_version`<sup>Optional</sup> <a name="min_encryption_version" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.minEncryptionVersion"></a>

```python
min_encryption_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum key version to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}

---

##### `parameter_set`<sup>Optional</sup> <a name="parameter_set" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.parameterSet"></a>

```python
parameter_set: str
```

- *Type:* str

The parameter set to use for ML-DSA.

Required for ML-DSA and hybrid keys.  Valid values for ML-DSA are `44`, `65`, and `87`. Valid values for SLH-DSA are `slh-dsa-sha2-128s`, `slh-dsa-shake-128s`, `slh-dsa-sha2-128f`, `slh-dsa-shake-128`, `slh-dsa-sha2-192s`, `slh-dsa-shake-192s`, `slh-dsa-sha2-192f`, `slh-dsa-shake-192f`, `slh-dsa-sha2-256s`, `slh-dsa-shake-256s`, `slh-dsa-sha2-256f`, and `slh-dsa-shake-256f`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#parameter_set TransitSecretBackendKey#parameter_set}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.transitSecretBackendKey.TransitSecretBackendKeyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Specifies the type of key to create.

The currently-supported types are: `aes128-gcm96`, `aes256-gcm96` (default), `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `hmac`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `managed_key`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`, `ml-dsa`, `hybrid`, and `slh-dsa`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/transit_secret_backend_key#type TransitSecretBackendKey#type}

---



