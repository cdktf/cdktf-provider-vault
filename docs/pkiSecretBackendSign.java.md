# `vault_pki_secret_backend_sign`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_sign`](https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign).

# `pkiSecretBackendSign` Submodule <a name="`pkiSecretBackendSign` Submodule" id="@cdktf/provider-vault.pkiSecretBackendSign"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendSign <a name="PkiSecretBackendSign" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign vault_pki_secret_backend_sign}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_sign.PkiSecretBackendSign;

PkiSecretBackendSign.Builder.create(Construct scope, java.lang.String id)
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
    .backend(java.lang.String)
    .commonName(java.lang.String)
    .csr(java.lang.String)
    .name(java.lang.String)
//  .altNames(java.util.List<java.lang.String>)
//  .autoRenew(java.lang.Boolean)
//  .autoRenew(IResolvable)
//  .excludeCnFromSans(java.lang.Boolean)
//  .excludeCnFromSans(IResolvable)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .ipSans(java.util.List<java.lang.String>)
//  .issuerRef(java.lang.String)
//  .minSecondsRemaining(java.lang.Number)
//  .namespace(java.lang.String)
//  .otherSans(java.util.List<java.lang.String>)
//  .ttl(java.lang.String)
//  .uriSans(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.commonName">commonName</a></code> | <code>java.lang.String</code> | CN of intermediate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.csr">csr</a></code> | <code>java.lang.String</code> | The CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.altNames">altNames</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.excludeCnFromSans">excludeCnFromSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.format">format</a></code> | <code>java.lang.String</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#id PkiSecretBackendSign#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.ipSans">ipSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.minSecondsRemaining">minSecondsRemaining</a></code> | <code>java.lang.Number</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.otherSans">otherSans</a></code> | <code>java.util.List<java.lang.String></code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.uriSans">uriSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative URIs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#backend PkiSecretBackendSign#backend}

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.commonName"></a>

- *Type:* java.lang.String

CN of intermediate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#common_name PkiSecretBackendSign#common_name}

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.csr"></a>

- *Type:* java.lang.String

The CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#csr PkiSecretBackendSign#csr}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#name PkiSecretBackendSign#name}

---

##### `altNames`<sup>Optional</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.altNames"></a>

- *Type:* java.util.List<java.lang.String>

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#alt_names PkiSecretBackendSign#alt_names}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.autoRenew"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#auto_renew PkiSecretBackendSign#auto_renew}

---

##### `excludeCnFromSans`<sup>Optional</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.excludeCnFromSans"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#exclude_cn_from_sans PkiSecretBackendSign#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.format"></a>

- *Type:* java.lang.String

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#format PkiSecretBackendSign#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#id PkiSecretBackendSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSans`<sup>Optional</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.ipSans"></a>

- *Type:* java.util.List<java.lang.String>

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#ip_sans PkiSecretBackendSign#ip_sans}

---

##### `issuerRef`<sup>Optional</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.issuerRef"></a>

- *Type:* java.lang.String

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#issuer_ref PkiSecretBackendSign#issuer_ref}

---

##### `minSecondsRemaining`<sup>Optional</sup> <a name="minSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.minSecondsRemaining"></a>

- *Type:* java.lang.Number

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#min_seconds_remaining PkiSecretBackendSign#min_seconds_remaining}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#namespace PkiSecretBackendSign#namespace}

---

##### `otherSans`<sup>Optional</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.otherSans"></a>

- *Type:* java.util.List<java.lang.String>

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#other_sans PkiSecretBackendSign#other_sans}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#ttl PkiSecretBackendSign#ttl}

---

##### `uriSans`<sup>Optional</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.Initializer.parameter.uriSans"></a>

- *Type:* java.util.List<java.lang.String>

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#uri_sans PkiSecretBackendSign#uri_sans}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetAltNames">resetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetAutoRenew">resetAutoRenew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetExcludeCnFromSans">resetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetIpSans">resetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetIssuerRef">resetIssuerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetMinSecondsRemaining">resetMinSecondsRemaining</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetOtherSans">resetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetUriSans">resetUriSans</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAltNames` <a name="resetAltNames" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetAltNames"></a>

```java
public void resetAltNames()
```

##### `resetAutoRenew` <a name="resetAutoRenew" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetAutoRenew"></a>

```java
public void resetAutoRenew()
```

##### `resetExcludeCnFromSans` <a name="resetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetExcludeCnFromSans"></a>

```java
public void resetExcludeCnFromSans()
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetId"></a>

```java
public void resetId()
```

##### `resetIpSans` <a name="resetIpSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetIpSans"></a>

```java
public void resetIpSans()
```

##### `resetIssuerRef` <a name="resetIssuerRef" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetIssuerRef"></a>

```java
public void resetIssuerRef()
```

##### `resetMinSecondsRemaining` <a name="resetMinSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetMinSecondsRemaining"></a>

```java
public void resetMinSecondsRemaining()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOtherSans` <a name="resetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetOtherSans"></a>

```java
public void resetOtherSans()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetUriSans` <a name="resetUriSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.resetUriSans"></a>

```java
public void resetUriSans()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_sign.PkiSecretBackendSign;

PkiSecretBackendSign.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_sign.PkiSecretBackendSign;

PkiSecretBackendSign.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_sign.PkiSecretBackendSign;

PkiSecretBackendSign.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.caChain">caChain</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.expiration">expiration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.issuingCa">issuingCa</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.renewPending">renewPending</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.serial">serial</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.altNamesInput">altNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.autoRenewInput">autoRenewInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.csrInput">csrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.excludeCnFromSansInput">excludeCnFromSansInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ipSansInput">ipSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.issuerRefInput">issuerRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.minSecondsRemainingInput">minSecondsRemainingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.otherSansInput">otherSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.uriSansInput">uriSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.altNames">altNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.csr">csr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ipSans">ipSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.minSecondsRemaining">minSecondsRemaining</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.otherSans">otherSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.uriSans">uriSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `caChain`<sup>Required</sup> <a name="caChain" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.caChain"></a>

```java
public java.util.List<java.lang.String> getCaChain();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.expiration"></a>

```java
public java.lang.Number getExpiration();
```

- *Type:* java.lang.Number

---

##### `issuingCa`<sup>Required</sup> <a name="issuingCa" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.issuingCa"></a>

```java
public java.lang.String getIssuingCa();
```

- *Type:* java.lang.String

---

##### `renewPending`<sup>Required</sup> <a name="renewPending" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.renewPending"></a>

```java
public IResolvable getRenewPending();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `serial`<sup>Required</sup> <a name="serial" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.serial"></a>

```java
public java.lang.String getSerial();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `altNamesInput`<sup>Optional</sup> <a name="altNamesInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.altNamesInput"></a>

```java
public java.util.List<java.lang.String> getAltNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoRenewInput`<sup>Optional</sup> <a name="autoRenewInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.autoRenewInput"></a>

```java
public java.lang.Object getAutoRenewInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `csrInput`<sup>Optional</sup> <a name="csrInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.csrInput"></a>

```java
public java.lang.String getCsrInput();
```

- *Type:* java.lang.String

---

##### `excludeCnFromSansInput`<sup>Optional</sup> <a name="excludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.excludeCnFromSansInput"></a>

```java
public java.lang.Object getExcludeCnFromSansInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipSansInput`<sup>Optional</sup> <a name="ipSansInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ipSansInput"></a>

```java
public java.util.List<java.lang.String> getIpSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerRefInput`<sup>Optional</sup> <a name="issuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.issuerRefInput"></a>

```java
public java.lang.String getIssuerRefInput();
```

- *Type:* java.lang.String

---

##### `minSecondsRemainingInput`<sup>Optional</sup> <a name="minSecondsRemainingInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.minSecondsRemainingInput"></a>

```java
public java.lang.Number getMinSecondsRemainingInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `otherSansInput`<sup>Optional</sup> <a name="otherSansInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.otherSansInput"></a>

```java
public java.util.List<java.lang.String> getOtherSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `uriSansInput`<sup>Optional</sup> <a name="uriSansInput" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.uriSansInput"></a>

```java
public java.util.List<java.lang.String> getUriSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `altNames`<sup>Required</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.altNames"></a>

```java
public java.util.List<java.lang.String> getAltNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `autoRenew`<sup>Required</sup> <a name="autoRenew" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.autoRenew"></a>

```java
public java.lang.Object getAutoRenew();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.csr"></a>

```java
public java.lang.String getCsr();
```

- *Type:* java.lang.String

---

##### `excludeCnFromSans`<sup>Required</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.excludeCnFromSans"></a>

```java
public java.lang.Object getExcludeCnFromSans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipSans`<sup>Required</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ipSans"></a>

```java
public java.util.List<java.lang.String> getIpSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.issuerRef"></a>

```java
public java.lang.String getIssuerRef();
```

- *Type:* java.lang.String

---

##### `minSecondsRemaining`<sup>Required</sup> <a name="minSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.minSecondsRemaining"></a>

```java
public java.lang.Number getMinSecondsRemaining();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `otherSans`<sup>Required</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.otherSans"></a>

```java
public java.util.List<java.lang.String> getOtherSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `uriSans`<sup>Required</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.uriSans"></a>

```java
public java.util.List<java.lang.String> getUriSans();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSign.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendSignConfig <a name="PkiSecretBackendSignConfig" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_sign.PkiSecretBackendSignConfig;

PkiSecretBackendSignConfig.builder()
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
    .backend(java.lang.String)
    .commonName(java.lang.String)
    .csr(java.lang.String)
    .name(java.lang.String)
//  .altNames(java.util.List<java.lang.String>)
//  .autoRenew(java.lang.Boolean)
//  .autoRenew(IResolvable)
//  .excludeCnFromSans(java.lang.Boolean)
//  .excludeCnFromSans(IResolvable)
//  .format(java.lang.String)
//  .id(java.lang.String)
//  .ipSans(java.util.List<java.lang.String>)
//  .issuerRef(java.lang.String)
//  .minSecondsRemaining(java.lang.Number)
//  .namespace(java.lang.String)
//  .otherSans(java.util.List<java.lang.String>)
//  .ttl(java.lang.String)
//  .uriSans(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.commonName">commonName</a></code> | <code>java.lang.String</code> | CN of intermediate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.csr">csr</a></code> | <code>java.lang.String</code> | The CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the role to create the certificate against. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.altNames">altNames</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.autoRenew">autoRenew</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.format">format</a></code> | <code>java.lang.String</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#id PkiSecretBackendSign#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.ipSans">ipSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.minSecondsRemaining">minSecondsRemaining</a></code> | <code>java.lang.Number</code> | Generate a new certificate when the expiration is within this number of seconds. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.otherSans">otherSans</a></code> | <code>java.util.List<java.lang.String></code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.uriSans">uriSans</a></code> | <code>java.util.List<java.lang.String></code> | List of alternative URIs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#backend PkiSecretBackendSign#backend}

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

CN of intermediate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#common_name PkiSecretBackendSign#common_name}

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.csr"></a>

```java
public java.lang.String getCsr();
```

- *Type:* java.lang.String

The CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#csr PkiSecretBackendSign#csr}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the role to create the certificate against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#name PkiSecretBackendSign#name}

---

##### `altNames`<sup>Optional</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.altNames"></a>

```java
public java.util.List<java.lang.String> getAltNames();
```

- *Type:* java.util.List<java.lang.String>

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#alt_names PkiSecretBackendSign#alt_names}

---

##### `autoRenew`<sup>Optional</sup> <a name="autoRenew" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.autoRenew"></a>

```java
public java.lang.Object getAutoRenew();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If enabled, a new certificate will be generated if the expiration is within min_seconds_remaining.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#auto_renew PkiSecretBackendSign#auto_renew}

---

##### `excludeCnFromSans`<sup>Optional</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.excludeCnFromSans"></a>

```java
public java.lang.Object getExcludeCnFromSans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#exclude_cn_from_sans PkiSecretBackendSign#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#format PkiSecretBackendSign#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#id PkiSecretBackendSign#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSans`<sup>Optional</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.ipSans"></a>

```java
public java.util.List<java.lang.String> getIpSans();
```

- *Type:* java.util.List<java.lang.String>

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#ip_sans PkiSecretBackendSign#ip_sans}

---

##### `issuerRef`<sup>Optional</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.issuerRef"></a>

```java
public java.lang.String getIssuerRef();
```

- *Type:* java.lang.String

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#issuer_ref PkiSecretBackendSign#issuer_ref}

---

##### `minSecondsRemaining`<sup>Optional</sup> <a name="minSecondsRemaining" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.minSecondsRemaining"></a>

```java
public java.lang.Number getMinSecondsRemaining();
```

- *Type:* java.lang.Number

Generate a new certificate when the expiration is within this number of seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#min_seconds_remaining PkiSecretBackendSign#min_seconds_remaining}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#namespace PkiSecretBackendSign#namespace}

---

##### `otherSans`<sup>Optional</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.otherSans"></a>

```java
public java.util.List<java.lang.String> getOtherSans();
```

- *Type:* java.util.List<java.lang.String>

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#other_sans PkiSecretBackendSign#other_sans}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#ttl PkiSecretBackendSign#ttl}

---

##### `uriSans`<sup>Optional</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendSign.PkiSecretBackendSignConfig.property.uriSans"></a>

```java
public java.util.List<java.lang.String> getUriSans();
```

- *Type:* java.util.List<java.lang.String>

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/pki_secret_backend_sign#uri_sans PkiSecretBackendSign#uri_sans}

---



