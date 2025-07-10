# `dataVaultTransformDecode` Submodule <a name="`dataVaultTransformDecode` Submodule" id="@cdktf/provider-vault.dataVaultTransformDecode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformDecode <a name="DataVaultTransformDecode" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode vault_transform_decode}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_decode.DataVaultTransformDecode;

DataVaultTransformDecode.Builder.create(Construct scope, java.lang.String id)
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
    .roleName(java.lang.String)
//  .batchInput(IResolvable)
//  .batchInput(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .batchResults(IResolvable)
//  .batchResults(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .decodedValue(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .transformation(java.lang.String)
//  .tweak(java.lang.String)
//  .value(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items to be decoded in a single batch. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The result of decoding batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.decodedValue">decodedValue</a></code> | <code>java.lang.String</code> | The result of decoding a value. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.transformation">transformation</a></code> | <code>java.lang.String</code> | The transformation to perform. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.tweak">tweak</a></code> | <code>java.lang.String</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | The value in which to decode. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#path DataVaultTransformDecode#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#role_name DataVaultTransformDecode#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.batchInput"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items to be decoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#batch_input DataVaultTransformDecode#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.batchResults"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The result of decoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#batch_results DataVaultTransformDecode#batch_results}

---

##### `decodedValue`<sup>Optional</sup> <a name="decodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.decodedValue"></a>

- *Type:* java.lang.String

The result of decoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#decoded_value DataVaultTransformDecode#decoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#namespace DataVaultTransformDecode#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.transformation"></a>

- *Type:* java.lang.String

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#transformation DataVaultTransformDecode#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.tweak"></a>

- *Type:* java.lang.String

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#tweak DataVaultTransformDecode#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.Initializer.parameter.value"></a>

- *Type:* java.lang.String

The value in which to decode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#value DataVaultTransformDecode#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchResults">resetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetDecodedValue">resetDecodedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTransformation">resetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTweak">resetTweak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchInput"></a>

```java
public void resetBatchInput()
```

##### `resetBatchResults` <a name="resetBatchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetBatchResults"></a>

```java
public void resetBatchResults()
```

##### `resetDecodedValue` <a name="resetDecodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetDecodedValue"></a>

```java
public void resetDecodedValue()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTransformation` <a name="resetTransformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTransformation"></a>

```java
public void resetTransformation()
```

##### `resetTweak` <a name="resetTweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetTweak"></a>

```java
public void resetTweak()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.resetValue"></a>

```java
public void resetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultTransformDecode resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_decode.DataVaultTransformDecode;

DataVaultTransformDecode.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_decode.DataVaultTransformDecode;

DataVaultTransformDecode.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_decode.DataVaultTransformDecode;

DataVaultTransformDecode.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_decode.DataVaultTransformDecode;

DataVaultTransformDecode.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultTransformDecode.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultTransformDecode resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultTransformDecode to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultTransformDecode that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultTransformDecode to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInputInput">batchInputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResultsInput">batchResultsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValueInput">decodedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformationInput">transformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweakInput">tweakInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValue">decodedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformation">transformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweak">tweak</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInputInput"></a>

```java
public java.lang.Object getBatchInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `batchResultsInput`<sup>Optional</sup> <a name="batchResultsInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResultsInput"></a>

```java
public java.lang.Object getBatchResultsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `decodedValueInput`<sup>Optional</sup> <a name="decodedValueInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValueInput"></a>

```java
public java.lang.String getDecodedValueInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformationInput"></a>

```java
public java.lang.String getTransformationInput();
```

- *Type:* java.lang.String

---

##### `tweakInput`<sup>Optional</sup> <a name="tweakInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweakInput"></a>

```java
public java.lang.String getTweakInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchInput"></a>

```java
public java.lang.Object getBatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.batchResults"></a>

```java
public java.lang.Object getBatchResults();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

---

##### `decodedValue`<sup>Required</sup> <a name="decodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.decodedValue"></a>

```java
public java.lang.String getDecodedValue();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.transformation"></a>

```java
public java.lang.String getTransformation();
```

- *Type:* java.lang.String

---

##### `tweak`<sup>Required</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tweak"></a>

```java
public java.lang.String getTweak();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecode.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformDecodeConfig <a name="DataVaultTransformDecodeConfig" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_decode.DataVaultTransformDecodeConfig;

DataVaultTransformDecodeConfig.builder()
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
    .roleName(java.lang.String)
//  .batchInput(IResolvable)
//  .batchInput(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .batchResults(IResolvable)
//  .batchResults(java.util.List<java.util.Map<java.lang.String, java.lang.String>>)
//  .decodedValue(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .transformation(java.lang.String)
//  .tweak(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | Specifies a list of items to be decoded in a single batch. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>></code> | The result of decoding batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.decodedValue">decodedValue</a></code> | <code>java.lang.String</code> | The result of decoding a value. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.transformation">transformation</a></code> | <code>java.lang.String</code> | The transformation to perform. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.tweak">tweak</a></code> | <code>java.lang.String</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.value">value</a></code> | <code>java.lang.String</code> | The value in which to decode. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#path DataVaultTransformDecode#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#role_name DataVaultTransformDecode#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchInput"></a>

```java
public java.lang.Object getBatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

Specifies a list of items to be decoded in a single batch.

If this parameter is set, the top-level parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#batch_input DataVaultTransformDecode#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.batchResults"></a>

```java
public java.lang.Object getBatchResults();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.Map<java.lang.String, java.lang.String>>

The result of decoding batch_input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#batch_results DataVaultTransformDecode#batch_results}

---

##### `decodedValue`<sup>Optional</sup> <a name="decodedValue" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.decodedValue"></a>

```java
public java.lang.String getDecodedValue();
```

- *Type:* java.lang.String

The result of decoding a value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#decoded_value DataVaultTransformDecode#decoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#id DataVaultTransformDecode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#namespace DataVaultTransformDecode#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.transformation"></a>

```java
public java.lang.String getTransformation();
```

- *Type:* java.lang.String

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#transformation DataVaultTransformDecode#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.tweak"></a>

```java
public java.lang.String getTweak();
```

- *Type:* java.lang.String

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#tweak DataVaultTransformDecode#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformDecode.DataVaultTransformDecodeConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value in which to decode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/data-sources/transform_decode#value DataVaultTransformDecode#value}

---



