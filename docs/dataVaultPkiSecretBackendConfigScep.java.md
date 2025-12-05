# `dataVaultPkiSecretBackendConfigScep` Submodule <a name="`dataVaultPkiSecretBackendConfigScep` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendConfigScep <a name="DataVaultPkiSecretBackendConfigScep" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep vault_pki_secret_backend_config_scep}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScep;

DataVaultPkiSecretBackendConfigScep.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
//  .id(java.lang.String)
//  .logLevel(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Path where PKI engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#id DataVaultPkiSecretBackendConfigScep#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.logLevel">logLevel</a></code> | <code>java.lang.String</code> | The level of logging verbosity, affects only SCEP logs on this mount. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Path where PKI engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#backend DataVaultPkiSecretBackendConfigScep#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#id DataVaultPkiSecretBackendConfigScep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.logLevel"></a>

- *Type:* java.lang.String

The level of logging verbosity, affects only SCEP logs on this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#log_level DataVaultPkiSecretBackendConfigScep#log_level}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#namespace DataVaultPkiSecretBackendConfigScep#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetId"></a>

```java
public void resetId()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScep;

DataVaultPkiSecretBackendConfigScep.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScep;

DataVaultPkiSecretBackendConfigScep.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScep;

DataVaultPkiSecretBackendConfigScep.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScep;

DataVaultPkiSecretBackendConfigScep.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultPkiSecretBackendConfigScep.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigScep resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultPkiSecretBackendConfigScep to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultPkiSecretBackendConfigScep that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendConfigScep to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedDigestAlgorithms">allowedDigestAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms">allowedEncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList">DataVaultPkiSecretBackendConfigScepAuthenticatorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.externalValidation">externalValidation</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList">DataVaultPkiSecretBackendConfigScepExternalValidationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.restrictCaChainToIssuer">restrictCaChainToIssuer</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `allowedDigestAlgorithms`<sup>Required</sup> <a name="allowedDigestAlgorithms" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedDigestAlgorithms"></a>

```java
public java.util.List<java.lang.String> getAllowedDigestAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEncryptionAlgorithms`<sup>Required</sup> <a name="allowedEncryptionAlgorithms" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.allowedEncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getAllowedEncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.authenticators"></a>

```java
public DataVaultPkiSecretBackendConfigScepAuthenticatorsList getAuthenticators();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList">DataVaultPkiSecretBackendConfigScepAuthenticatorsList</a>

---

##### `defaultPathPolicy`<sup>Required</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.defaultPathPolicy"></a>

```java
public java.lang.String getDefaultPathPolicy();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `externalValidation`<sup>Required</sup> <a name="externalValidation" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.externalValidation"></a>

```java
public DataVaultPkiSecretBackendConfigScepExternalValidationList getExternalValidation();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList">DataVaultPkiSecretBackendConfigScepExternalValidationList</a>

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `restrictCaChainToIssuer`<sup>Required</sup> <a name="restrictCaChainToIssuer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.restrictCaChainToIssuer"></a>

```java
public IResolvable getRestrictCaChainToIssuer();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScep.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendConfigScepAuthenticators <a name="DataVaultPkiSecretBackendConfigScepAuthenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScepAuthenticators;

DataVaultPkiSecretBackendConfigScepAuthenticators.builder()
    .build();
```


### DataVaultPkiSecretBackendConfigScepConfig <a name="DataVaultPkiSecretBackendConfigScepConfig" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScepConfig;

DataVaultPkiSecretBackendConfigScepConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
//  .id(java.lang.String)
//  .logLevel(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Path where PKI engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#id DataVaultPkiSecretBackendConfigScep#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | The level of logging verbosity, affects only SCEP logs on this mount. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Path where PKI engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#backend DataVaultPkiSecretBackendConfigScep#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#id DataVaultPkiSecretBackendConfigScep#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

The level of logging verbosity, affects only SCEP logs on this mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#log_level DataVaultPkiSecretBackendConfigScep#log_level}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/data-sources/pki_secret_backend_config_scep#namespace DataVaultPkiSecretBackendConfigScep#namespace}

---

### DataVaultPkiSecretBackendConfigScepExternalValidation <a name="DataVaultPkiSecretBackendConfigScepExternalValidation" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScepExternalValidation;

DataVaultPkiSecretBackendConfigScepExternalValidation.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataVaultPkiSecretBackendConfigScepAuthenticatorsList <a name="DataVaultPkiSecretBackendConfigScepAuthenticatorsList" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList;

new DataVaultPkiSecretBackendConfigScepAuthenticatorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.get"></a>

```java
public DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference <a name="DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference;

new DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert">cert</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep">scep</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators">DataVaultPkiSecretBackendConfigScepAuthenticators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.cert"></a>

```java
public StringMap getCert();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `scep`<sup>Required</sup> <a name="scep" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.scep"></a>

```java
public StringMap getScep();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticatorsOutputReference.property.internalValue"></a>

```java
public DataVaultPkiSecretBackendConfigScepAuthenticators getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepAuthenticators">DataVaultPkiSecretBackendConfigScepAuthenticators</a>

---


### DataVaultPkiSecretBackendConfigScepExternalValidationList <a name="DataVaultPkiSecretBackendConfigScepExternalValidationList" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScepExternalValidationList;

new DataVaultPkiSecretBackendConfigScepExternalValidationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.get"></a>

```java
public DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference <a name="DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_scep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference;

new DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.intune">intune</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation">DataVaultPkiSecretBackendConfigScepExternalValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intune`<sup>Required</sup> <a name="intune" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.intune"></a>

```java
public StringMap getIntune();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidationOutputReference.property.internalValue"></a>

```java
public DataVaultPkiSecretBackendConfigScepExternalValidation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigScep.DataVaultPkiSecretBackendConfigScepExternalValidation">DataVaultPkiSecretBackendConfigScepExternalValidation</a>

---



