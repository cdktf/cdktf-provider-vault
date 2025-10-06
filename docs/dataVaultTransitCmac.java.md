# `dataVaultTransitCmac` Submodule <a name="`dataVaultTransitCmac` Submodule" id="@cdktf/provider-vault.dataVaultTransitCmac"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransitCmac <a name="DataVaultTransitCmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac vault_transit_cmac}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_cmac.DataVaultTransitCmac;

DataVaultTransitCmac.Builder.create(Construct scope, java.lang.String id)
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
//  .cmac(java.lang.String)
//  .id(java.lang.String)
//  .input(java.lang.String)
//  .keyVersion(java.lang.Number)
//  .macLength(java.lang.Number)
//  .namespace(java.lang.String)
//  .urlMacLength(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the CMAC key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.cmac">cmac</a></code> | <code>java.lang.String</code> | The CMAC returned from Vault if using input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.input">input</a></code> | <code>java.lang.String</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | The version of the key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.macLength">macLength</a></code> | <code>java.lang.Number</code> | Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.urlMacLength">urlMacLength</a></code> | <code>java.lang.Number</code> | Specifies the MAC length to use (URL parameter). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the CMAC key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#name DataVaultTransitCmac#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#path DataVaultTransitCmac#path}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.batchInput"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#batch_input DataVaultTransitCmac#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.batchResults"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#batch_results DataVaultTransitCmac#batch_results}

---

##### `cmac`<sup>Optional</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.cmac"></a>

- *Type:* java.lang.String

The CMAC returned from Vault if using input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#cmac DataVaultTransitCmac#cmac}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.input"></a>

- *Type:* java.lang.String

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#input DataVaultTransitCmac#input}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.keyVersion"></a>

- *Type:* java.lang.Number

The version of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#key_version DataVaultTransitCmac#key_version}

---

##### `macLength`<sup>Optional</sup> <a name="macLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.macLength"></a>

- *Type:* java.lang.Number

Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#mac_length DataVaultTransitCmac#mac_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#namespace DataVaultTransitCmac#namespace}

---

##### `urlMacLength`<sup>Optional</sup> <a name="urlMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.Initializer.parameter.urlMacLength"></a>

- *Type:* java.lang.Number

Specifies the MAC length to use (URL parameter).

If provided, this value overrides mac_length. The url_mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#url_mac_length DataVaultTransitCmac#url_mac_length}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchResults">resetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetCmac">resetCmac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetMacLength">resetMacLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetUrlMacLength">resetUrlMacLength</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchInput"></a>

```java
public void resetBatchInput()
```

##### `resetBatchResults` <a name="resetBatchResults" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetBatchResults"></a>

```java
public void resetBatchResults()
```

##### `resetCmac` <a name="resetCmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetCmac"></a>

```java
public void resetCmac()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetId"></a>

```java
public void resetId()
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetInput"></a>

```java
public void resetInput()
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetKeyVersion"></a>

```java
public void resetKeyVersion()
```

##### `resetMacLength` <a name="resetMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetMacLength"></a>

```java
public void resetMacLength()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetUrlMacLength` <a name="resetUrlMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.resetUrlMacLength"></a>

```java
public void resetUrlMacLength()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransitCmac resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_cmac.DataVaultTransitCmac;

DataVaultTransitCmac.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_cmac.DataVaultTransitCmac;

DataVaultTransitCmac.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_cmac.DataVaultTransitCmac;

DataVaultTransitCmac.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_cmac.DataVaultTransitCmac;

DataVaultTransitCmac.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultTransitCmac.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultTransitCmac resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultTransitCmac to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultTransitCmac that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransitCmac to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInputInput">batchInputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResultsInput">batchResultsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmacInput">cmacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.inputInput">inputInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersionInput">keyVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLengthInput">macLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLengthInput">urlMacLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmac">cmac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.input">input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLength">macLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLength">urlMacLength</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInputInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `batchResultsInput`<sup>Optional</sup> <a name="batchResultsInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResultsInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchResultsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `cmacInput`<sup>Optional</sup> <a name="cmacInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmacInput"></a>

```java
public java.lang.String getCmacInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.inputInput"></a>

```java
public java.lang.String getInputInput();
```

- *Type:* java.lang.String

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersionInput"></a>

```java
public java.lang.Number getKeyVersionInput();
```

- *Type:* java.lang.Number

---

##### `macLengthInput`<sup>Optional</sup> <a name="macLengthInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLengthInput"></a>

```java
public java.lang.Number getMacLengthInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `urlMacLengthInput`<sup>Optional</sup> <a name="urlMacLengthInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLengthInput"></a>

```java
public java.lang.Number getUrlMacLengthInput();
```

- *Type:* java.lang.Number

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.batchResults"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchResults();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `cmac`<sup>Required</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.cmac"></a>

```java
public java.lang.String getCmac();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.keyVersion"></a>

```java
public java.lang.Number getKeyVersion();
```

- *Type:* java.lang.Number

---

##### `macLength`<sup>Required</sup> <a name="macLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.macLength"></a>

```java
public java.lang.Number getMacLength();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `urlMacLength`<sup>Required</sup> <a name="urlMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.urlMacLength"></a>

```java
public java.lang.Number getUrlMacLength();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmac.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransitCmacConfig <a name="DataVaultTransitCmacConfig" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transit_cmac.DataVaultTransitCmacConfig;

DataVaultTransitCmacConfig.builder()
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
//  .cmac(java.lang.String)
//  .id(java.lang.String)
//  .input(java.lang.String)
//  .keyVersion(java.lang.Number)
//  .macLength(java.lang.Number)
//  .namespace(java.lang.String)
//  .urlMacLength(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the CMAC key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.path">path</a></code> | <code>java.lang.String</code> | The Transit secret backend the key belongs to. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items for processing. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The results returned from Vault if using batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.cmac">cmac</a></code> | <code>java.lang.String</code> | The CMAC returned from Vault if using input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.input">input</a></code> | <code>java.lang.String</code> | Specifies the base64 encoded input data. One of input or batch_input must be supplied. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | The version of the key to use. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.macLength">macLength</a></code> | <code>java.lang.Number</code> | Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.urlMacLength">urlMacLength</a></code> | <code>java.lang.Number</code> | Specifies the MAC length to use (URL parameter). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the CMAC key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#name DataVaultTransitCmac#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The Transit secret backend the key belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#path DataVaultTransitCmac#path}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchInput"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items for processing.

When this parameter is set, any supplied 'input' or 'context' parameters will be ignored. Responses are returned in the 'batch_results' array component of the 'data' element of the response. Any batch output will preserve the order of the batch input. If the input data value of an item is invalid, the corresponding item in the 'batch_results' will have the key 'error' with a value describing the error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#batch_input DataVaultTransitCmac#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.batchResults"></a>

```java
public IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>> getBatchResults();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The results returned from Vault if using batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#batch_results DataVaultTransitCmac#batch_results}

---

##### `cmac`<sup>Optional</sup> <a name="cmac" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.cmac"></a>

```java
public java.lang.String getCmac();
```

- *Type:* java.lang.String

The CMAC returned from Vault if using input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#cmac DataVaultTransitCmac#cmac}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#id DataVaultTransitCmac#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.input"></a>

```java
public java.lang.String getInput();
```

- *Type:* java.lang.String

Specifies the base64 encoded input data. One of input or batch_input must be supplied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#input DataVaultTransitCmac#input}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.keyVersion"></a>

```java
public java.lang.Number getKeyVersion();
```

- *Type:* java.lang.Number

The version of the key to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#key_version DataVaultTransitCmac#key_version}

---

##### `macLength`<sup>Optional</sup> <a name="macLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.macLength"></a>

```java
public java.lang.Number getMacLength();
```

- *Type:* java.lang.Number

Specifies the MAC length to use (POST body parameter). The mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#mac_length DataVaultTransitCmac#mac_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#namespace DataVaultTransitCmac#namespace}

---

##### `urlMacLength`<sup>Optional</sup> <a name="urlMacLength" id="@cdktf/provider-vault.dataVaultTransitCmac.DataVaultTransitCmacConfig.property.urlMacLength"></a>

```java
public java.lang.Number getUrlMacLength();
```

- *Type:* java.lang.Number

Specifies the MAC length to use (URL parameter).

If provided, this value overrides mac_length. The url_mac_length cannot be larger than the cipher's block size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/data-sources/transit_cmac#url_mac_length DataVaultTransitCmac#url_mac_length}

---



