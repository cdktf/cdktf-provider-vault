# `dataVaultPkiSecretBackendConfigCmpv2` Submodule <a name="`dataVaultPkiSecretBackendConfigCmpv2` Submodule" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPkiSecretBackendConfigCmpv2 <a name="DataVaultPkiSecretBackendConfigCmpv2" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2 vault_pki_secret_backend_config_cmpv2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_cmpv2.DataVaultPkiSecretBackendConfigCmpv2;

DataVaultPkiSecretBackendConfigCmpv2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
//  .disabledValidations(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Path where PKI engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.disabledValidations">disabledValidations</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list of validations not to perform on CMPv2 messages. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#id DataVaultPkiSecretBackendConfigCmpv2#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Path where PKI engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#backend DataVaultPkiSecretBackendConfigCmpv2#backend}

---

##### `disabledValidations`<sup>Optional</sup> <a name="disabledValidations" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.disabledValidations"></a>

- *Type:* java.util.List<java.lang.String>

A comma-separated list of validations not to perform on CMPv2 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#disabled_validations DataVaultPkiSecretBackendConfigCmpv2#disabled_validations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#id DataVaultPkiSecretBackendConfigCmpv2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#namespace DataVaultPkiSecretBackendConfigCmpv2#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetDisabledValidations">resetDisabledValidations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDisabledValidations` <a name="resetDisabledValidations" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetDisabledValidations"></a>

```java
public void resetDisabledValidations()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_cmpv2.DataVaultPkiSecretBackendConfigCmpv2;

DataVaultPkiSecretBackendConfigCmpv2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_cmpv2.DataVaultPkiSecretBackendConfigCmpv2;

DataVaultPkiSecretBackendConfigCmpv2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_cmpv2.DataVaultPkiSecretBackendConfigCmpv2;

DataVaultPkiSecretBackendConfigCmpv2.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_cmpv2.DataVaultPkiSecretBackendConfigCmpv2;

DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultPkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultPkiSecretBackendConfigCmpv2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultPkiSecretBackendConfigCmpv2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPkiSecretBackendConfigCmpv2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.auditFields">auditFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList">DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enableSentinelParsing">enableSentinelParsing</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidationsInput">disabledValidationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidations">disabledValidations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `auditFields`<sup>Required</sup> <a name="auditFields" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.auditFields"></a>

```java
public java.util.List<java.lang.String> getAuditFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.authenticators"></a>

```java
public DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList getAuthenticators();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList">DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList</a>

---

##### `defaultPathPolicy`<sup>Required</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.defaultPathPolicy"></a>

```java
public java.lang.String getDefaultPathPolicy();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `enableSentinelParsing`<sup>Required</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.enableSentinelParsing"></a>

```java
public IResolvable getEnableSentinelParsing();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `disabledValidationsInput`<sup>Optional</sup> <a name="disabledValidationsInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidationsInput"></a>

```java
public java.util.List<java.lang.String> getDisabledValidationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `disabledValidations`<sup>Required</sup> <a name="disabledValidations" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.disabledValidations"></a>

```java
public java.util.List<java.lang.String> getDisabledValidations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPkiSecretBackendConfigCmpv2Authenticators <a name="DataVaultPkiSecretBackendConfigCmpv2Authenticators" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_cmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators;

DataVaultPkiSecretBackendConfigCmpv2Authenticators.builder()
    .build();
```


### DataVaultPkiSecretBackendConfigCmpv2Config <a name="DataVaultPkiSecretBackendConfigCmpv2Config" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_cmpv2.DataVaultPkiSecretBackendConfigCmpv2Config;

DataVaultPkiSecretBackendConfigCmpv2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
//  .disabledValidations(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.backend">backend</a></code> | <code>java.lang.String</code> | Path where PKI engine is mounted. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.disabledValidations">disabledValidations</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list of validations not to perform on CMPv2 messages. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#id DataVaultPkiSecretBackendConfigCmpv2#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Path where PKI engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#backend DataVaultPkiSecretBackendConfigCmpv2#backend}

---

##### `disabledValidations`<sup>Optional</sup> <a name="disabledValidations" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.disabledValidations"></a>

```java
public java.util.List<java.lang.String> getDisabledValidations();
```

- *Type:* java.util.List<java.lang.String>

A comma-separated list of validations not to perform on CMPv2 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#disabled_validations DataVaultPkiSecretBackendConfigCmpv2#disabled_validations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#id DataVaultPkiSecretBackendConfigCmpv2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Config.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/pki_secret_backend_config_cmpv2#namespace DataVaultPkiSecretBackendConfigCmpv2#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList <a name="DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_cmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList;

new DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.get"></a>

```java
public DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference <a name="DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_pki_secret_backend_config_cmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference;

new DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert">cert</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators">DataVaultPkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert"></a>

```java
public StringMap getCert();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue"></a>

```java
public DataVaultPkiSecretBackendConfigCmpv2Authenticators getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPkiSecretBackendConfigCmpv2.DataVaultPkiSecretBackendConfigCmpv2Authenticators">DataVaultPkiSecretBackendConfigCmpv2Authenticators</a>

---



