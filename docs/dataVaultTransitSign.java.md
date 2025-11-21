# `dataVaultTransitSign` Submodule <a name="`dataVaultTransitSign` Submodule" id="@cdktf/provider-vault.dataVaultTransitSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitSign <a name="DataVaultTransitSign" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign vault_transit_sign}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_sign.DataVaultTransitSign;

DataVaultTransitSign.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .path(java.lang.String)
//  .batchInput(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .batchResults(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .context(java.lang.String)
//  .hashAlgorithm(java.lang.String)
//  .id(java.lang.String)
//  .input(java.lang.String)
//  .keyVersion(java.lang.Number)
//  .marshalingAlgorithm(java.lang.String)
//  .namespace(java.lang.String)
//  .prehashed(java.lang.Boolean|IResolvable)
//  .reference(java.lang.String)
//  .saltLength(java.lang.String)
//  .signature(java.lang.String)
//  .signatureAlgorithm(java.lang.String)
//  .signatureContext(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the signing key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.context">context</a></code> | <code>java.lang.String</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the hash algorithm to use for supporting key types (notably, not including ed25519 which specifies its own hash algorithm). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#id DataVaultTransitSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.input">input</a></code> | <code>java.lang.String</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | The version of the key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.marshalingAlgorithm">marshalingAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the way in which the signature should be marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.prehashed">prehashed</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.reference">reference</a></code> | <code>java.lang.String</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.saltLength">saltLength</a></code> | <code>java.lang.String</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.signature">signature</a></code> | <code>java.lang.String</code> | The signature returned from Vault if using input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | When using a RSA key, specifies the RSA signature algorithm to use for signing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.signatureContext">signatureContext</a></code> | <code>java.lang.String</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the signing key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#name DataVaultTransitSign#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#path DataVaultTransitSign#path}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.batchInput"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#batch_input DataVaultTransitSign#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.batchResults"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#batch_results DataVaultTransitSign#batch_results}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.context"></a>

- *Type:* java.lang.String

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#context DataVaultTransitSign#context}

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="hashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.hashAlgorithm"></a>

- *Type:* java.lang.String

Specifies the hash algorithm to use for supporting key types (notably, not including ed25519 which specifies its own hash algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#hash_algorithm DataVaultTransitSign#hash_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#id DataVaultTransitSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.input"></a>

- *Type:* java.lang.String

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#input DataVaultTransitSign#input}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.keyVersion"></a>

- *Type:* java.lang.Number

The version of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#key_version DataVaultTransitSign#key_version}

---

##### `marshalingAlgorithm`<sup>Optional</sup> <a name="marshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.marshalingAlgorithm"></a>

- *Type:* java.lang.String

Specifies the way in which the signature should be marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#marshaling_algorithm DataVaultTransitSign#marshaling_algorithm}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#namespace DataVaultTransitSign#namespace}

---

##### `prehashed`<sup>Optional</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.prehashed"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#prehashed DataVaultTransitSign#prehashed}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.reference"></a>

- *Type:* java.lang.String

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#reference DataVaultTransitSign#reference}

---

##### `saltLength`<sup>Optional</sup> <a name="saltLength" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.saltLength"></a>

- *Type:* java.lang.String

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#salt_length DataVaultTransitSign#salt_length}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.signature"></a>

- *Type:* java.lang.String

The signature returned from Vault if using input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#signature DataVaultTransitSign#signature}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.signatureAlgorithm"></a>

- *Type:* java.lang.String

When using a RSA key, specifies the RSA signature algorithm to use for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#signature_algorithm DataVaultTransitSign#signature_algorithm}

---

##### `signatureContext`<sup>Optional</sup> <a name="signatureContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.Initializer.parameter.signatureContext"></a>

- *Type:* java.lang.String

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#signature_context DataVaultTransitSign#signature_context}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchResults">resetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetHashAlgorithm">resetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetMarshalingAlgorithm">resetMarshalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetPrehashed">resetPrehashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetReference">resetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSaltLength">resetSaltLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignature">resetSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureContext">resetSignatureContext</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchInput"></a>

```java
public void resetBatchInput()
```

##### `resetBatchResults` <a name="resetBatchResults" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetBatchResults"></a>

```java
public void resetBatchResults()
```

##### `resetContext` <a name="resetContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetContext"></a>

```java
public void resetContext()
```

##### `resetHashAlgorithm` <a name="resetHashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetHashAlgorithm"></a>

```java
public void resetHashAlgorithm()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetId"></a>

```java
public void resetId()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetInput"></a>

```java
public void resetInput()
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetKeyVersion"></a>

```java
public void resetKeyVersion()
```

##### `resetMarshalingAlgorithm` <a name="resetMarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetMarshalingAlgorithm"></a>

```java
public void resetMarshalingAlgorithm()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPrehashed` <a name="resetPrehashed" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetPrehashed"></a>

```java
public void resetPrehashed()
```

##### `resetReference` <a name="resetReference" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetReference"></a>

```java
public void resetReference()
```

##### `resetSaltLength` <a name="resetSaltLength" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSaltLength"></a>

```java
public void resetSaltLength()
```

##### `resetSignature` <a name="resetSignature" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignature"></a>

```java
public void resetSignature()
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureAlgorithm"></a>

```java
public void resetSignatureAlgorithm()
```

##### `resetSignatureContext` <a name="resetSignatureContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.resetSignatureContext"></a>

```java
public void resetSignatureContext()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitSign resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_sign.DataVaultTransitSign;

DataVaultTransitSign.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_sign.DataVaultTransitSign;

DataVaultTransitSign.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_sign.DataVaultTransitSign;

DataVaultTransitSign.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_sign.DataVaultTransitSign;

DataVaultTransitSign.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultTransitSign.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultTransitSign resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultTransitSign to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultTransitSign that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitSign to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInputInput">batchInputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResultsInput">batchResultsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.contextInput">contextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithmInput">hashAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.inputInput">inputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersionInput">keyVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithmInput">marshalingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashedInput">prehashedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.referenceInput">referenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLengthInput">saltLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContextInput">signatureContextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureInput">signatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.input">input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithm">marshalingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashed">prehashed</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.reference">reference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLength">saltLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signature">signature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContext">signatureContext</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInputInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `batchResultsInput`<sup>Optional</sup> <a name="batchResultsInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResultsInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchResultsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.contextInput"></a>

```java
public java.lang.String getContextInput();
```

- *Type:* java.lang.String

---

##### `hashAlgorithmInput`<sup>Optional</sup> <a name="hashAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithmInput"></a>

```java
public java.lang.String getHashAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.inputInput"></a>

```java
public java.lang.String getInputInput();
```

- *Type:* java.lang.String

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersionInput"></a>

```java
public java.lang.Number getKeyVersionInput();
```

- *Type:* java.lang.Number

---

##### `marshalingAlgorithmInput`<sup>Optional</sup> <a name="marshalingAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithmInput"></a>

```java
public java.lang.String getMarshalingAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `prehashedInput`<sup>Optional</sup> <a name="prehashedInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashedInput"></a>

```java
public java.lang.Boolean|IResolvable getPrehashedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `referenceInput`<sup>Optional</sup> <a name="referenceInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.referenceInput"></a>

```java
public java.lang.String getReferenceInput();
```

- *Type:* java.lang.String

---

##### `saltLengthInput`<sup>Optional</sup> <a name="saltLengthInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLengthInput"></a>

```java
public java.lang.String getSaltLengthInput();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithmInput"></a>

```java
public java.lang.String getSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `signatureContextInput`<sup>Optional</sup> <a name="signatureContextInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContextInput"></a>

```java
public java.lang.String getSignatureContextInput();
```

- *Type:* java.lang.String

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureInput"></a>

```java
public java.lang.String getSignatureInput();
```

- *Type:* java.lang.String

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.batchResults"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchResults();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.hashAlgorithm"></a>

```java
public java.lang.String getHashAlgorithm();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.keyVersion"></a>

```java
public java.lang.Number getKeyVersion();
```

- *Type:* java.lang.Number

---

##### `marshalingAlgorithm`<sup>Required</sup> <a name="marshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.marshalingAlgorithm"></a>

```java
public java.lang.String getMarshalingAlgorithm();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `prehashed`<sup>Required</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.prehashed"></a>

```java
public java.lang.Boolean|IResolvable getPrehashed();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.reference"></a>

```java
public java.lang.String getReference();
```

- *Type:* java.lang.String

---

##### `saltLength`<sup>Required</sup> <a name="saltLength" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.saltLength"></a>

```java
public java.lang.String getSaltLength();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `signatureContext`<sup>Required</sup> <a name="signatureContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.signatureContext"></a>

```java
public java.lang.String getSignatureContext();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSign.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitSignConfig <a name="DataVaultTransitSignConfig" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_sign.DataVaultTransitSignConfig;

DataVaultTransitSignConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .path(java.lang.String)
//  .batchInput(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .batchResults(IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .context(java.lang.String)
//  .hashAlgorithm(java.lang.String)
//  .id(java.lang.String)
//  .input(java.lang.String)
//  .keyVersion(java.lang.Number)
//  .marshalingAlgorithm(java.lang.String)
//  .namespace(java.lang.String)
//  .prehashed(java.lang.Boolean|IResolvable)
//  .reference(java.lang.String)
//  .saltLength(java.lang.String)
//  .signature(java.lang.String)
//  .signatureAlgorithm(java.lang.String)
//  .signatureContext(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the signing key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.path">path</a></code> | <code>java.lang.String</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.context">context</a></code> | <code>java.lang.String</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the hash algorithm to use for supporting key types (notably, not including ed25519 which specifies its own hash algorithm). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#id DataVaultTransitSign#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.input">input</a></code> | <code>java.lang.String</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | The version of the key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.marshalingAlgorithm">marshalingAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the way in which the signature should be marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.prehashed">prehashed</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.reference">reference</a></code> | <code>java.lang.String</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.saltLength">saltLength</a></code> | <code>java.lang.String</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signature">signature</a></code> | <code>java.lang.String</code> | The signature returned from Vault if using input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | When using a RSA key, specifies the RSA signature algorithm to use for signing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureContext">signatureContext</a></code> | <code>java.lang.String</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the signing key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#name DataVaultTransitSign#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#path DataVaultTransitSign#path}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#batch_input DataVaultTransitSign#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.batchResults"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchResults();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#batch_results DataVaultTransitSign#batch_results}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#context DataVaultTransitSign#context}

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="hashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.hashAlgorithm"></a>

```java
public java.lang.String getHashAlgorithm();
```

- *Type:* java.lang.String

Specifies the hash algorithm to use for supporting key types (notably, not including ed25519 which specifies its own hash algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#hash_algorithm DataVaultTransitSign#hash_algorithm}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#id DataVaultTransitSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#input DataVaultTransitSign#input}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.keyVersion"></a>

```java
public java.lang.Number getKeyVersion();
```

- *Type:* java.lang.Number

The version of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#key_version DataVaultTransitSign#key_version}

---

##### `marshalingAlgorithm`<sup>Optional</sup> <a name="marshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.marshalingAlgorithm"></a>

```java
public java.lang.String getMarshalingAlgorithm();
```

- *Type:* java.lang.String

Specifies the way in which the signature should be marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#marshaling_algorithm DataVaultTransitSign#marshaling_algorithm}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#namespace DataVaultTransitSign#namespace}

---

##### `prehashed`<sup>Optional</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.prehashed"></a>

```java
public java.lang.Boolean|IResolvable getPrehashed();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#prehashed DataVaultTransitSign#prehashed}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.reference"></a>

```java
public java.lang.String getReference();
```

- *Type:* java.lang.String

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#reference DataVaultTransitSign#reference}

---

##### `saltLength`<sup>Optional</sup> <a name="saltLength" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.saltLength"></a>

```java
public java.lang.String getSaltLength();
```

- *Type:* java.lang.String

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#salt_length DataVaultTransitSign#salt_length}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

The signature returned from Vault if using input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#signature DataVaultTransitSign#signature}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

When using a RSA key, specifies the RSA signature algorithm to use for signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#signature_algorithm DataVaultTransitSign#signature_algorithm}

---

##### `signatureContext`<sup>Optional</sup> <a name="signatureContext" id="@cdktf/provider-vault.dataVaultTransitSign.DataVaultTransitSignConfig.property.signatureContext"></a>

```java
public java.lang.String getSignatureContext();
```

- *Type:* java.lang.String

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.5.0/docs/data-sources/transit_sign#signature_context DataVaultTransitSign#signature_context}

---



