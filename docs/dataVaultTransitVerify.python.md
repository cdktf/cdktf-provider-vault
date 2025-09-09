# `dataVaultTransitVerify` Submodule <a name="`dataVaultTransitVerify` Submodule" id="@cdktf/provider-vault.dataVaultTransitVerify"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitVerify <a name="DataVaultTransitVerify" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify vault_transit_verify}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_verify

dataVaultTransitVerify.DataVaultTransitVerify(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  path: str,
  batch_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  batch_results: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  cmac: str = None,
  context: str = None,
  hash_algorithm: str = None,
  hmac: str = None,
  id: str = None,
  input: str = None,
  mac_length: typing.Union[int, float] = None,
  marshaling_algorithm: str = None,
  namespace: str = None,
  prehashed: typing.Union[bool, IResolvable] = None,
  reference: str = None,
  salt_length: str = None,
  signature: str = None,
  signature_algorithm: str = None,
  signature_context: str = None,
  valid: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the name of the encryption key that was used to generate the signature or HMAC. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.path">path</a></code> | <code>str</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.batchInput">batch_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.batchResults">batch_results</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.cmac">cmac</a></code> | <code>str</code> | (Enterprise only) Specifies the signature output from the /transit/cmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.context">context</a></code> | <code>str</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | Specifies the hash algorithm to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.hmac">hmac</a></code> | <code>str</code> | Specifies the signature output from the /transit/hmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.input">input</a></code> | <code>str</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.macLength">mac_length</a></code> | <code>typing.Union[int, float]</code> | Specifies the MAC length used to generate a CMAC. The mac_length cannot be larger than the cipher's block size. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.marshalingAlgorithm">marshaling_algorithm</a></code> | <code>str</code> | Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.prehashed">prehashed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.reference">reference</a></code> | <code>str</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.saltLength">salt_length</a></code> | <code>str</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signature">signature</a></code> | <code>str</code> | Specifies the signature output from the /transit/sign function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | When using a RSA key, specifies the RSA signature algorithm to use for signature verification. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signatureContext">signature_context</a></code> | <code>str</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.valid">valid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether verification succeeded. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.name"></a>

- *Type:* str

Specifies the name of the encryption key that was used to generate the signature or HMAC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#name DataVaultTransitVerify#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.path"></a>

- *Type:* str

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#path DataVaultTransitVerify#path}

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.batchInput"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#batch_input DataVaultTransitVerify#batch_input}

---

##### `batch_results`<sup>Optional</sup> <a name="batch_results" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.batchResults"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#batch_results DataVaultTransitVerify#batch_results}

---

##### `cmac`<sup>Optional</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.cmac"></a>

- *Type:* str

(Enterprise only) Specifies the signature output from the /transit/cmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#cmac DataVaultTransitVerify#cmac}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.context"></a>

- *Type:* str

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#context DataVaultTransitVerify#context}

---

##### `hash_algorithm`<sup>Optional</sup> <a name="hash_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.hashAlgorithm"></a>

- *Type:* str

Specifies the hash algorithm to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#hash_algorithm DataVaultTransitVerify#hash_algorithm}

---

##### `hmac`<sup>Optional</sup> <a name="hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.hmac"></a>

- *Type:* str

Specifies the signature output from the /transit/hmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#hmac DataVaultTransitVerify#hmac}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.input"></a>

- *Type:* str

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#input DataVaultTransitVerify#input}

---

##### `mac_length`<sup>Optional</sup> <a name="mac_length" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.macLength"></a>

- *Type:* typing.Union[int, float]

Specifies the MAC length used to generate a CMAC. The mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#mac_length DataVaultTransitVerify#mac_length}

---

##### `marshaling_algorithm`<sup>Optional</sup> <a name="marshaling_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.marshalingAlgorithm"></a>

- *Type:* str

Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#marshaling_algorithm DataVaultTransitVerify#marshaling_algorithm}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#namespace DataVaultTransitVerify#namespace}

---

##### `prehashed`<sup>Optional</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.prehashed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#prehashed DataVaultTransitVerify#prehashed}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.reference"></a>

- *Type:* str

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#reference DataVaultTransitVerify#reference}

---

##### `salt_length`<sup>Optional</sup> <a name="salt_length" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.saltLength"></a>

- *Type:* str

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#salt_length DataVaultTransitVerify#salt_length}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signature"></a>

- *Type:* str

Specifies the signature output from the /transit/sign function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#signature DataVaultTransitVerify#signature}

---

##### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signatureAlgorithm"></a>

- *Type:* str

When using a RSA key, specifies the RSA signature algorithm to use for signature verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#signature_algorithm DataVaultTransitVerify#signature_algorithm}

---

##### `signature_context`<sup>Optional</sup> <a name="signature_context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signatureContext"></a>

- *Type:* str

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#signature_context DataVaultTransitVerify#signature_context}

---

##### `valid`<sup>Optional</sup> <a name="valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.valid"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether verification succeeded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#valid DataVaultTransitVerify#valid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchInput">reset_batch_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchResults">reset_batch_results</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetCmac">reset_cmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetContext">reset_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHashAlgorithm">reset_hash_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHmac">reset_hmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetInput">reset_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMacLength">reset_mac_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMarshalingAlgorithm">reset_marshaling_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetPrehashed">reset_prehashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetReference">reset_reference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSaltLength">reset_salt_length</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignature">reset_signature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureAlgorithm">reset_signature_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureContext">reset_signature_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetValid">reset_valid</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_batch_input` <a name="reset_batch_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchInput"></a>

```python
def reset_batch_input() -> None
```

##### `reset_batch_results` <a name="reset_batch_results" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchResults"></a>

```python
def reset_batch_results() -> None
```

##### `reset_cmac` <a name="reset_cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetCmac"></a>

```python
def reset_cmac() -> None
```

##### `reset_context` <a name="reset_context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetContext"></a>

```python
def reset_context() -> None
```

##### `reset_hash_algorithm` <a name="reset_hash_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHashAlgorithm"></a>

```python
def reset_hash_algorithm() -> None
```

##### `reset_hmac` <a name="reset_hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHmac"></a>

```python
def reset_hmac() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_input` <a name="reset_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetInput"></a>

```python
def reset_input() -> None
```

##### `reset_mac_length` <a name="reset_mac_length" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMacLength"></a>

```python
def reset_mac_length() -> None
```

##### `reset_marshaling_algorithm` <a name="reset_marshaling_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMarshalingAlgorithm"></a>

```python
def reset_marshaling_algorithm() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_prehashed` <a name="reset_prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetPrehashed"></a>

```python
def reset_prehashed() -> None
```

##### `reset_reference` <a name="reset_reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetReference"></a>

```python
def reset_reference() -> None
```

##### `reset_salt_length` <a name="reset_salt_length" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSaltLength"></a>

```python
def reset_salt_length() -> None
```

##### `reset_signature` <a name="reset_signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignature"></a>

```python
def reset_signature() -> None
```

##### `reset_signature_algorithm` <a name="reset_signature_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureAlgorithm"></a>

```python
def reset_signature_algorithm() -> None
```

##### `reset_signature_context` <a name="reset_signature_context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureContext"></a>

```python
def reset_signature_context() -> None
```

##### `reset_valid` <a name="reset_valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetValid"></a>

```python
def reset_valid() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataVaultTransitVerify resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_verify

dataVaultTransitVerify.DataVaultTransitVerify.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_verify

dataVaultTransitVerify.DataVaultTransitVerify.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_verify

dataVaultTransitVerify.DataVaultTransitVerify.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_verify

dataVaultTransitVerify.DataVaultTransitVerify.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataVaultTransitVerify resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataVaultTransitVerify to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataVaultTransitVerify that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitVerify to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInputInput">batch_input_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResultsInput">batch_results_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmacInput">cmac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.contextInput">context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithmInput">hash_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmacInput">hmac_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.inputInput">input_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.macLengthInput">mac_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithmInput">marshaling_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashedInput">prehashed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.referenceInput">reference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLengthInput">salt_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithmInput">signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContextInput">signature_context_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureInput">signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.validInput">valid_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInput">batch_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResults">batch_results</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmac">cmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.context">context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmac">hmac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.input">input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.macLength">mac_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithm">marshaling_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashed">prehashed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.reference">reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLength">salt_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContext">signature_context</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.valid">valid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `batch_input_input`<sup>Optional</sup> <a name="batch_input_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInputInput"></a>

```python
batch_input_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `batch_results_input`<sup>Optional</sup> <a name="batch_results_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResultsInput"></a>

```python
batch_results_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `cmac_input`<sup>Optional</sup> <a name="cmac_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmacInput"></a>

```python
cmac_input: str
```

- *Type:* str

---

##### `context_input`<sup>Optional</sup> <a name="context_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.contextInput"></a>

```python
context_input: str
```

- *Type:* str

---

##### `hash_algorithm_input`<sup>Optional</sup> <a name="hash_algorithm_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithmInput"></a>

```python
hash_algorithm_input: str
```

- *Type:* str

---

##### `hmac_input`<sup>Optional</sup> <a name="hmac_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmacInput"></a>

```python
hmac_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `input_input`<sup>Optional</sup> <a name="input_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.inputInput"></a>

```python
input_input: str
```

- *Type:* str

---

##### `mac_length_input`<sup>Optional</sup> <a name="mac_length_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.macLengthInput"></a>

```python
mac_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `marshaling_algorithm_input`<sup>Optional</sup> <a name="marshaling_algorithm_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithmInput"></a>

```python
marshaling_algorithm_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `prehashed_input`<sup>Optional</sup> <a name="prehashed_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashedInput"></a>

```python
prehashed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reference_input`<sup>Optional</sup> <a name="reference_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.referenceInput"></a>

```python
reference_input: str
```

- *Type:* str

---

##### `salt_length_input`<sup>Optional</sup> <a name="salt_length_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLengthInput"></a>

```python
salt_length_input: str
```

- *Type:* str

---

##### `signature_algorithm_input`<sup>Optional</sup> <a name="signature_algorithm_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithmInput"></a>

```python
signature_algorithm_input: str
```

- *Type:* str

---

##### `signature_context_input`<sup>Optional</sup> <a name="signature_context_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContextInput"></a>

```python
signature_context_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureInput"></a>

```python
signature_input: str
```

- *Type:* str

---

##### `valid_input`<sup>Optional</sup> <a name="valid_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.validInput"></a>

```python
valid_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `batch_input`<sup>Required</sup> <a name="batch_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInput"></a>

```python
batch_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `batch_results`<sup>Required</sup> <a name="batch_results" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResults"></a>

```python
batch_results: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

---

##### `cmac`<sup>Required</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmac"></a>

```python
cmac: str
```

- *Type:* str

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.context"></a>

```python
context: str
```

- *Type:* str

---

##### `hash_algorithm`<sup>Required</sup> <a name="hash_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithm"></a>

```python
hash_algorithm: str
```

- *Type:* str

---

##### `hmac`<sup>Required</sup> <a name="hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmac"></a>

```python
hmac: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.input"></a>

```python
input: str
```

- *Type:* str

---

##### `mac_length`<sup>Required</sup> <a name="mac_length" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.macLength"></a>

```python
mac_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `marshaling_algorithm`<sup>Required</sup> <a name="marshaling_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithm"></a>

```python
marshaling_algorithm: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `prehashed`<sup>Required</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashed"></a>

```python
prehashed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.reference"></a>

```python
reference: str
```

- *Type:* str

---

##### `salt_length`<sup>Required</sup> <a name="salt_length" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLength"></a>

```python
salt_length: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `signature_algorithm`<sup>Required</sup> <a name="signature_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

---

##### `signature_context`<sup>Required</sup> <a name="signature_context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContext"></a>

```python
signature_context: str
```

- *Type:* str

---

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.valid"></a>

```python
valid: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitVerifyConfig <a name="DataVaultTransitVerifyConfig" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_transit_verify

dataVaultTransitVerify.DataVaultTransitVerifyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  path: str,
  batch_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  batch_results: typing.Union[IResolvable, typing.List[typing.Mapping[str]]] = None,
  cmac: str = None,
  context: str = None,
  hash_algorithm: str = None,
  hmac: str = None,
  id: str = None,
  input: str = None,
  mac_length: typing.Union[int, float] = None,
  marshaling_algorithm: str = None,
  namespace: str = None,
  prehashed: typing.Union[bool, IResolvable] = None,
  reference: str = None,
  salt_length: str = None,
  signature: str = None,
  signature_algorithm: str = None,
  signature_context: str = None,
  valid: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.name">name</a></code> | <code>str</code> | Specifies the name of the encryption key that was used to generate the signature or HMAC. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.path">path</a></code> | <code>str</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchInput">batch_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchResults">batch_results</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]</code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.cmac">cmac</a></code> | <code>str</code> | (Enterprise only) Specifies the signature output from the /transit/cmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.context">context</a></code> | <code>str</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hashAlgorithm">hash_algorithm</a></code> | <code>str</code> | Specifies the hash algorithm to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hmac">hmac</a></code> | <code>str</code> | Specifies the signature output from the /transit/hmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.input">input</a></code> | <code>str</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.macLength">mac_length</a></code> | <code>typing.Union[int, float]</code> | Specifies the MAC length used to generate a CMAC. The mac_length cannot be larger than the cipher's block size. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.marshalingAlgorithm">marshaling_algorithm</a></code> | <code>str</code> | Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.prehashed">prehashed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.reference">reference</a></code> | <code>str</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.saltLength">salt_length</a></code> | <code>str</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signature">signature</a></code> | <code>str</code> | Specifies the signature output from the /transit/sign function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureAlgorithm">signature_algorithm</a></code> | <code>str</code> | When using a RSA key, specifies the RSA signature algorithm to use for signature verification. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureContext">signature_context</a></code> | <code>str</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.valid">valid</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Indicates whether verification succeeded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the name of the encryption key that was used to generate the signature or HMAC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#name DataVaultTransitVerify#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#path DataVaultTransitVerify#path}

---

##### `batch_input`<sup>Optional</sup> <a name="batch_input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchInput"></a>

```python
batch_input: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#batch_input DataVaultTransitVerify#batch_input}

---

##### `batch_results`<sup>Optional</sup> <a name="batch_results" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchResults"></a>

```python
batch_results: typing.Union[IResolvable, typing.List[typing.Mapping[str]]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[typing.Mapping[str]]]

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#batch_results DataVaultTransitVerify#batch_results}

---

##### `cmac`<sup>Optional</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.cmac"></a>

```python
cmac: str
```

- *Type:* str

(Enterprise only) Specifies the signature output from the /transit/cmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#cmac DataVaultTransitVerify#cmac}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.context"></a>

```python
context: str
```

- *Type:* str

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#context DataVaultTransitVerify#context}

---

##### `hash_algorithm`<sup>Optional</sup> <a name="hash_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hashAlgorithm"></a>

```python
hash_algorithm: str
```

- *Type:* str

Specifies the hash algorithm to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#hash_algorithm DataVaultTransitVerify#hash_algorithm}

---

##### `hmac`<sup>Optional</sup> <a name="hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hmac"></a>

```python
hmac: str
```

- *Type:* str

Specifies the signature output from the /transit/hmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#hmac DataVaultTransitVerify#hmac}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.input"></a>

```python
input: str
```

- *Type:* str

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#input DataVaultTransitVerify#input}

---

##### `mac_length`<sup>Optional</sup> <a name="mac_length" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.macLength"></a>

```python
mac_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the MAC length used to generate a CMAC. The mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#mac_length DataVaultTransitVerify#mac_length}

---

##### `marshaling_algorithm`<sup>Optional</sup> <a name="marshaling_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.marshalingAlgorithm"></a>

```python
marshaling_algorithm: str
```

- *Type:* str

Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#marshaling_algorithm DataVaultTransitVerify#marshaling_algorithm}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#namespace DataVaultTransitVerify#namespace}

---

##### `prehashed`<sup>Optional</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.prehashed"></a>

```python
prehashed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#prehashed DataVaultTransitVerify#prehashed}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.reference"></a>

```python
reference: str
```

- *Type:* str

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#reference DataVaultTransitVerify#reference}

---

##### `salt_length`<sup>Optional</sup> <a name="salt_length" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.saltLength"></a>

```python
salt_length: str
```

- *Type:* str

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#salt_length DataVaultTransitVerify#salt_length}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signature"></a>

```python
signature: str
```

- *Type:* str

Specifies the signature output from the /transit/sign function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#signature DataVaultTransitVerify#signature}

---

##### `signature_algorithm`<sup>Optional</sup> <a name="signature_algorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureAlgorithm"></a>

```python
signature_algorithm: str
```

- *Type:* str

When using a RSA key, specifies the RSA signature algorithm to use for signature verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#signature_algorithm DataVaultTransitVerify#signature_algorithm}

---

##### `signature_context`<sup>Optional</sup> <a name="signature_context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureContext"></a>

```python
signature_context: str
```

- *Type:* str

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#signature_context DataVaultTransitVerify#signature_context}

---

##### `valid`<sup>Optional</sup> <a name="valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.valid"></a>

```python
valid: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Indicates whether verification succeeded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_verify#valid DataVaultTransitVerify#valid}

---



