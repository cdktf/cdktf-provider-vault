# `dataVaultTransitVerify` Submodule <a name="`dataVaultTransitVerify` Submodule" id="@cdktf/provider-vault.dataVaultTransitVerify"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitVerify <a name="DataVaultTransitVerify" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify vault_transit_verify}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_verify.DataVaultTransitVerify;

DataVaultTransitVerify.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .path(java.lang.String)
//  .batchInput(IResolvable)
//  .batchInput(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .batchResults(IResolvable)
//  .batchResults(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .cmac(java.lang.String)
//  .context(java.lang.String)
//  .hashAlgorithm(java.lang.String)
//  .hmac(java.lang.String)
//  .id(java.lang.String)
//  .input(java.lang.String)
//  .marshalingAlgorithm(java.lang.String)
//  .namespace(java.lang.String)
//  .prehashed(java.lang.Boolean)
//  .prehashed(IResolvable)
//  .reference(java.lang.String)
//  .saltLength(java.lang.String)
//  .signature(java.lang.String)
//  .signatureAlgorithm(java.lang.String)
//  .signatureContext(java.lang.String)
//  .valid(java.lang.Boolean)
//  .valid(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the encryption key that was used to generate the signature or HMAC. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.cmac">cmac</a></code> | <code>java.lang.String</code> | (Enterprise only) Specifies the signature output from the /transit/cmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.context">context</a></code> | <code>java.lang.String</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the hash algorithm to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.hmac">hmac</a></code> | <code>java.lang.String</code> | Specifies the signature output from the /transit/hmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.input">input</a></code> | <code>java.lang.String</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.marshalingAlgorithm">marshalingAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.prehashed">prehashed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.reference">reference</a></code> | <code>java.lang.String</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.saltLength">saltLength</a></code> | <code>java.lang.String</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signature">signature</a></code> | <code>java.lang.String</code> | Specifies the signature output from the /transit/sign function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | When using a RSA key, specifies the RSA signature algorithm to use for signature verification. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signatureContext">signatureContext</a></code> | <code>java.lang.String</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.valid">valid</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether verification succeeded. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the encryption key that was used to generate the signature or HMAC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#name DataVaultTransitVerify#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#path DataVaultTransitVerify#path}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.batchInput"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#batch_input DataVaultTransitVerify#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.batchResults"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#batch_results DataVaultTransitVerify#batch_results}

---

##### `cmac`<sup>Optional</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.cmac"></a>

- *Type:* java.lang.String

(Enterprise only) Specifies the signature output from the /transit/cmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#cmac DataVaultTransitVerify#cmac}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.context"></a>

- *Type:* java.lang.String

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#context DataVaultTransitVerify#context}

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="hashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.hashAlgorithm"></a>

- *Type:* java.lang.String

Specifies the hash algorithm to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#hash_algorithm DataVaultTransitVerify#hash_algorithm}

---

##### `hmac`<sup>Optional</sup> <a name="hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.hmac"></a>

- *Type:* java.lang.String

Specifies the signature output from the /transit/hmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#hmac DataVaultTransitVerify#hmac}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.input"></a>

- *Type:* java.lang.String

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#input DataVaultTransitVerify#input}

---

##### `marshalingAlgorithm`<sup>Optional</sup> <a name="marshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.marshalingAlgorithm"></a>

- *Type:* java.lang.String

Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#marshaling_algorithm DataVaultTransitVerify#marshaling_algorithm}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#namespace DataVaultTransitVerify#namespace}

---

##### `prehashed`<sup>Optional</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.prehashed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#prehashed DataVaultTransitVerify#prehashed}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.reference"></a>

- *Type:* java.lang.String

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#reference DataVaultTransitVerify#reference}

---

##### `saltLength`<sup>Optional</sup> <a name="saltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.saltLength"></a>

- *Type:* java.lang.String

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#salt_length DataVaultTransitVerify#salt_length}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signature"></a>

- *Type:* java.lang.String

Specifies the signature output from the /transit/sign function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#signature DataVaultTransitVerify#signature}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signatureAlgorithm"></a>

- *Type:* java.lang.String

When using a RSA key, specifies the RSA signature algorithm to use for signature verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#signature_algorithm DataVaultTransitVerify#signature_algorithm}

---

##### `signatureContext`<sup>Optional</sup> <a name="signatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.signatureContext"></a>

- *Type:* java.lang.String

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#signature_context DataVaultTransitVerify#signature_context}

---

##### `valid`<sup>Optional</sup> <a name="valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.Initializer.parameter.valid"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether verification succeeded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#valid DataVaultTransitVerify#valid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchResults">resetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetCmac">resetCmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHashAlgorithm">resetHashAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHmac">resetHmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMarshalingAlgorithm">resetMarshalingAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetPrehashed">resetPrehashed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetReference">resetReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSaltLength">resetSaltLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignature">resetSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureAlgorithm">resetSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureContext">resetSignatureContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetValid">resetValid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchInput"></a>

```java
public void resetBatchInput()
```

##### `resetBatchResults` <a name="resetBatchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetBatchResults"></a>

```java
public void resetBatchResults()
```

##### `resetCmac` <a name="resetCmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetCmac"></a>

```java
public void resetCmac()
```

##### `resetContext` <a name="resetContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetContext"></a>

```java
public void resetContext()
```

##### `resetHashAlgorithm` <a name="resetHashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHashAlgorithm"></a>

```java
public void resetHashAlgorithm()
```

##### `resetHmac` <a name="resetHmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetHmac"></a>

```java
public void resetHmac()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetId"></a>

```java
public void resetId()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetInput"></a>

```java
public void resetInput()
```

##### `resetMarshalingAlgorithm` <a name="resetMarshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetMarshalingAlgorithm"></a>

```java
public void resetMarshalingAlgorithm()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPrehashed` <a name="resetPrehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetPrehashed"></a>

```java
public void resetPrehashed()
```

##### `resetReference` <a name="resetReference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetReference"></a>

```java
public void resetReference()
```

##### `resetSaltLength` <a name="resetSaltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSaltLength"></a>

```java
public void resetSaltLength()
```

##### `resetSignature` <a name="resetSignature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignature"></a>

```java
public void resetSignature()
```

##### `resetSignatureAlgorithm` <a name="resetSignatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureAlgorithm"></a>

```java
public void resetSignatureAlgorithm()
```

##### `resetSignatureContext` <a name="resetSignatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetSignatureContext"></a>

```java
public void resetSignatureContext()
```

##### `resetValid` <a name="resetValid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.resetValid"></a>

```java
public void resetValid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitVerify resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_verify.DataVaultTransitVerify;

DataVaultTransitVerify.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_verify.DataVaultTransitVerify;

DataVaultTransitVerify.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_verify.DataVaultTransitVerify;

DataVaultTransitVerify.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_verify.DataVaultTransitVerify;

DataVaultTransitVerify.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultTransitVerify.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultTransitVerify resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultTransitVerify to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultTransitVerify that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitVerify to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInputInput">batchInputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResultsInput">batchResultsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmacInput">cmacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.contextInput">contextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithmInput">hashAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmacInput">hmacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.inputInput">inputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithmInput">marshalingAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashedInput">prehashedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.referenceInput">referenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLengthInput">saltLengthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithmInput">signatureAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContextInput">signatureContextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureInput">signatureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.validInput">validInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmac">cmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.context">context</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmac">hmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.input">input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithm">marshalingAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashed">prehashed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.reference">reference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLength">saltLength</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signature">signature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContext">signatureContext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.valid">valid</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInputInput"></a>

```java
public java.lang.Object getBatchInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `batchResultsInput`<sup>Optional</sup> <a name="batchResultsInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResultsInput"></a>

```java
public java.lang.Object getBatchResultsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `cmacInput`<sup>Optional</sup> <a name="cmacInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmacInput"></a>

```java
public java.lang.String getCmacInput();
```

- *Type:* java.lang.String

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.contextInput"></a>

```java
public java.lang.String getContextInput();
```

- *Type:* java.lang.String

---

##### `hashAlgorithmInput`<sup>Optional</sup> <a name="hashAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithmInput"></a>

```java
public java.lang.String getHashAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `hmacInput`<sup>Optional</sup> <a name="hmacInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmacInput"></a>

```java
public java.lang.String getHmacInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.inputInput"></a>

```java
public java.lang.String getInputInput();
```

- *Type:* java.lang.String

---

##### `marshalingAlgorithmInput`<sup>Optional</sup> <a name="marshalingAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithmInput"></a>

```java
public java.lang.String getMarshalingAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `prehashedInput`<sup>Optional</sup> <a name="prehashedInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashedInput"></a>

```java
public java.lang.Object getPrehashedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `referenceInput`<sup>Optional</sup> <a name="referenceInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.referenceInput"></a>

```java
public java.lang.String getReferenceInput();
```

- *Type:* java.lang.String

---

##### `saltLengthInput`<sup>Optional</sup> <a name="saltLengthInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLengthInput"></a>

```java
public java.lang.String getSaltLengthInput();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithmInput`<sup>Optional</sup> <a name="signatureAlgorithmInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithmInput"></a>

```java
public java.lang.String getSignatureAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `signatureContextInput`<sup>Optional</sup> <a name="signatureContextInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContextInput"></a>

```java
public java.lang.String getSignatureContextInput();
```

- *Type:* java.lang.String

---

##### `signatureInput`<sup>Optional</sup> <a name="signatureInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureInput"></a>

```java
public java.lang.String getSignatureInput();
```

- *Type:* java.lang.String

---

##### `validInput`<sup>Optional</sup> <a name="validInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.validInput"></a>

```java
public java.lang.Object getValidInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchInput"></a>

```java
public java.lang.Object getBatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.batchResults"></a>

```java
public java.lang.Object getBatchResults();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `cmac`<sup>Required</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.cmac"></a>

```java
public java.lang.String getCmac();
```

- *Type:* java.lang.String

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

---

##### `hashAlgorithm`<sup>Required</sup> <a name="hashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hashAlgorithm"></a>

```java
public java.lang.String getHashAlgorithm();
```

- *Type:* java.lang.String

---

##### `hmac`<sup>Required</sup> <a name="hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.hmac"></a>

```java
public java.lang.String getHmac();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

---

##### `marshalingAlgorithm`<sup>Required</sup> <a name="marshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.marshalingAlgorithm"></a>

```java
public java.lang.String getMarshalingAlgorithm();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `prehashed`<sup>Required</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.prehashed"></a>

```java
public java.lang.Object getPrehashed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reference`<sup>Required</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.reference"></a>

```java
public java.lang.String getReference();
```

- *Type:* java.lang.String

---

##### `saltLength`<sup>Required</sup> <a name="saltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.saltLength"></a>

```java
public java.lang.String getSaltLength();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `signatureContext`<sup>Required</sup> <a name="signatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.signatureContext"></a>

```java
public java.lang.String getSignatureContext();
```

- *Type:* java.lang.String

---

##### `valid`<sup>Required</sup> <a name="valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.valid"></a>

```java
public java.lang.Object getValid();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerify.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitVerifyConfig <a name="DataVaultTransitVerifyConfig" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_verify.DataVaultTransitVerifyConfig;

DataVaultTransitVerifyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .path(java.lang.String)
//  .batchInput(IResolvable)
//  .batchInput(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .batchResults(IResolvable)
//  .batchResults(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .cmac(java.lang.String)
//  .context(java.lang.String)
//  .hashAlgorithm(java.lang.String)
//  .hmac(java.lang.String)
//  .id(java.lang.String)
//  .input(java.lang.String)
//  .marshalingAlgorithm(java.lang.String)
//  .namespace(java.lang.String)
//  .prehashed(java.lang.Boolean)
//  .prehashed(IResolvable)
//  .reference(java.lang.String)
//  .saltLength(java.lang.String)
//  .signature(java.lang.String)
//  .signatureAlgorithm(java.lang.String)
//  .signatureContext(java.lang.String)
//  .valid(java.lang.Boolean)
//  .valid(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the encryption key that was used to generate the signature or HMAC. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.path">path</a></code> | <code>java.lang.String</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.cmac">cmac</a></code> | <code>java.lang.String</code> | (Enterprise only) Specifies the signature output from the /transit/cmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.context">context</a></code> | <code>java.lang.String</code> | Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hashAlgorithm">hashAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the hash algorithm to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hmac">hmac</a></code> | <code>java.lang.String</code> | Specifies the signature output from the /transit/hmac function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.input">input</a></code> | <code>java.lang.String</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.marshalingAlgorithm">marshalingAlgorithm</a></code> | <code>java.lang.String</code> | Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.prehashed">prehashed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true when the input is already hashed. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.reference">reference</a></code> | <code>java.lang.String</code> | A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.saltLength">saltLength</a></code> | <code>java.lang.String</code> | The salt length used to sign. This currently only applies to the RSA PSS signature scheme. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signature">signature</a></code> | <code>java.lang.String</code> | Specifies the signature output from the /transit/sign function. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | When using a RSA key, specifies the RSA signature algorithm to use for signature verification. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureContext">signatureContext</a></code> | <code>java.lang.String</code> | Base64 encoded context for Ed25519ctx and Ed25519ph signatures. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.valid">valid</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether verification succeeded. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the encryption key that was used to generate the signature or HMAC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#name DataVaultTransitVerify#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#path DataVaultTransitVerify#path}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchInput"></a>

```java
public java.lang.Object getBatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#batch_input DataVaultTransitVerify#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.batchResults"></a>

```java
public java.lang.Object getBatchResults();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#batch_results DataVaultTransitVerify#batch_results}

---

##### `cmac`<sup>Optional</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.cmac"></a>

```java
public java.lang.String getCmac();
```

- *Type:* java.lang.String

(Enterprise only) Specifies the signature output from the /transit/cmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#cmac DataVaultTransitVerify#cmac}

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.context"></a>

```java
public java.lang.String getContext();
```

- *Type:* java.lang.String

Base64 encoded context for key derivation. Required if key derivation is enabled; currently only available with ed25519 keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#context DataVaultTransitVerify#context}

---

##### `hashAlgorithm`<sup>Optional</sup> <a name="hashAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hashAlgorithm"></a>

```java
public java.lang.String getHashAlgorithm();
```

- *Type:* java.lang.String

Specifies the hash algorithm to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#hash_algorithm DataVaultTransitVerify#hash_algorithm}

---

##### `hmac`<sup>Optional</sup> <a name="hmac" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.hmac"></a>

```java
public java.lang.String getHmac();
```

- *Type:* java.lang.String

Specifies the signature output from the /transit/hmac function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#hmac DataVaultTransitVerify#hmac}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#id DataVaultTransitVerify#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#input DataVaultTransitVerify#input}

---

##### `marshalingAlgorithm`<sup>Optional</sup> <a name="marshalingAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.marshalingAlgorithm"></a>

```java
public java.lang.String getMarshalingAlgorithm();
```

- *Type:* java.lang.String

Specifies the way in which the signature was originally marshaled. This currently only applies to ECDSA keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#marshaling_algorithm DataVaultTransitVerify#marshaling_algorithm}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#namespace DataVaultTransitVerify#namespace}

---

##### `prehashed`<sup>Optional</sup> <a name="prehashed" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.prehashed"></a>

```java
public java.lang.Object getPrehashed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true when the input is already hashed.

If the key type is rsa-2048, rsa-3072 or rsa-4096, then the algorithm used to hash the input should be indicated by the hash_algorithm parameter. Just as the value to sign should be the base64-encoded representation of the exact binary data you want signed, when set, input is expected to be base64-encoded binary hashed data, not hex-formatted. (As an example, on the command line, you could generate a suitable input via openssl dgst -sha256 -binary | base64.)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#prehashed DataVaultTransitVerify#prehashed}

---

##### `reference`<sup>Optional</sup> <a name="reference" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.reference"></a>

```java
public java.lang.String getReference();
```

- *Type:* java.lang.String

A user-supplied string that will be present in the reference field on the corresponding batch_results item in the response, to assist in understanding which result corresponds to a particular input.

Only valid on batch requests when using ‘batch_input’ below.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#reference DataVaultTransitVerify#reference}

---

##### `saltLength`<sup>Optional</sup> <a name="saltLength" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.saltLength"></a>

```java
public java.lang.String getSaltLength();
```

- *Type:* java.lang.String

The salt length used to sign. This currently only applies to the RSA PSS signature scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#salt_length DataVaultTransitVerify#salt_length}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

Specifies the signature output from the /transit/sign function.

One of the following arguments must be supplied signature, hmac or cmac.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#signature DataVaultTransitVerify#signature}

---

##### `signatureAlgorithm`<sup>Optional</sup> <a name="signatureAlgorithm" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

When using a RSA key, specifies the RSA signature algorithm to use for signature verification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#signature_algorithm DataVaultTransitVerify#signature_algorithm}

---

##### `signatureContext`<sup>Optional</sup> <a name="signatureContext" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.signatureContext"></a>

```java
public java.lang.String getSignatureContext();
```

- *Type:* java.lang.String

Base64 encoded context for Ed25519ctx and Ed25519ph signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#signature_context DataVaultTransitVerify#signature_context}

---

##### `valid`<sup>Optional</sup> <a name="valid" id="@cdktf/provider-vault.dataVaultTransitVerify.DataVaultTransitVerifyConfig.property.valid"></a>

```java
public java.lang.Object getValid();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether verification succeeded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/data-sources/transit_verify#valid DataVaultTransitVerify#valid}

---



