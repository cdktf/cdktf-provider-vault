# `dataVaultPkiSecretBackendCertMetadata` Submodule <a name="`dataVaultPkiSecretBackendCertMetadata` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendCertMetadata <a name="DataVaultPkiSecretBackendCertMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata vault_pki_secret_backend_cert_metadata}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_cert_metadata.DataVaultPkiSecretBackendCertMetadata;

DataVaultPkiSecretBackendCertMetadata.Builder.create(Construct scope, java.lang.String id)
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
    .path(java.lang.String)
    .serial(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.serial">serial</a></code> | <code>java.lang.String</code> | Specifies the serial of the certificate whose metadata to read. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#id DataVaultPkiSecretBackendCertMetadata#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#path DataVaultPkiSecretBackendCertMetadata#path}

---

##### `serial`<sup>Required</sup> <a name="serial" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.serial"></a>

- *Type:* java.lang.String

Specifies the serial of the certificate whose metadata to read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#serial DataVaultPkiSecretBackendCertMetadata#serial}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#id DataVaultPkiSecretBackendCertMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#namespace DataVaultPkiSecretBackendCertMetadata#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendCertMetadata resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_cert_metadata.DataVaultPkiSecretBackendCertMetadata;

DataVaultPkiSecretBackendCertMetadata.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_cert_metadata.DataVaultPkiSecretBackendCertMetadata;

DataVaultPkiSecretBackendCertMetadata.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_cert_metadata.DataVaultPkiSecretBackendCertMetadata;

DataVaultPkiSecretBackendCertMetadata.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_cert_metadata.DataVaultPkiSecretBackendCertMetadata;

DataVaultPkiSecretBackendCertMetadata.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultPkiSecretBackendCertMetadata.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendCertMetadata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultPkiSecretBackendCertMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultPkiSecretBackendCertMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendCertMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.certMetadata">certMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.issuerId">issuerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.serialInput">serialInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.serial">serial</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `certMetadata`<sup>Required</sup> <a name="certMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.certMetadata"></a>

```java
public java.lang.String getCertMetadata();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.issuerId"></a>

```java
public java.lang.String getIssuerId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `serialInput`<sup>Optional</sup> <a name="serialInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.serialInput"></a>

```java
public java.lang.String getSerialInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `serial`<sup>Required</sup> <a name="serial" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.serial"></a>

```java
public java.lang.String getSerial();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadata.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendCertMetadataConfig <a name="DataVaultPkiSecretBackendCertMetadataConfig" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_cert_metadata.DataVaultPkiSecretBackendCertMetadataConfig;

DataVaultPkiSecretBackendCertMetadataConfig.builder()
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
    .path(java.lang.String)
    .serial(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.path">path</a></code> | <code>java.lang.String</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.serial">serial</a></code> | <code>java.lang.String</code> | Specifies the serial of the certificate whose metadata to read. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#id DataVaultPkiSecretBackendCertMetadata#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#path DataVaultPkiSecretBackendCertMetadata#path}

---

##### `serial`<sup>Required</sup> <a name="serial" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.serial"></a>

```java
public java.lang.String getSerial();
```

- *Type:* java.lang.String

Specifies the serial of the certificate whose metadata to read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#serial DataVaultPkiSecretBackendCertMetadata#serial}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#id DataVaultPkiSecretBackendCertMetadata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendCertMetadata.DataVaultPkiSecretBackendCertMetadataConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_cert_metadata#namespace DataVaultPkiSecretBackendCertMetadata#namespace}

---



