# `data_vault_transform_encode`

Refer to the Terraform Registory for docs: [`data_vault_transform_encode`](https://www.terraform.io/docs/providers/vault/d/transform_encode).

# `dataVaultTransformEncode` Submodule <a name="`dataVaultTransformEncode` Submodule" id="@cdktf/provider-vault.dataVaultTransformEncode"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultTransformEncode <a name="DataVaultTransformEncode" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/d/transform_encode vault_transform_encode}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_encode.DataVaultTransformEncode;

DataVaultTransformEncode.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
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
//  .batchInput(java.util.Map<java.lang.String, java.lang.String>)
//  .batchResults(IResolvable)
//  .batchResults(java.util.Map<java.lang.String, java.lang.String>)
//  .encodedValue(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .transformation(java.lang.String)
//  .tweak(java.lang.String)
//  .value(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String></code> | Specifies a list of items to be encoded in a single batch. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String></code> | The result of encoding batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.encodedValue">encodedValue</a></code> | <code>java.lang.String</code> | The result of encoding a value. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#id DataVaultTransformEncode#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.transformation">transformation</a></code> | <code>java.lang.String</code> | The transformation to perform. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.tweak">tweak</a></code> | <code>java.lang.String</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | The value in which to encode. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#path DataVaultTransformEncode#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#role_name DataVaultTransformEncode#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.batchInput"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String>

Specifies a list of items to be encoded in a single batch.

If this parameter is set, the parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#batch_input DataVaultTransformEncode#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.batchResults"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String>

The result of encoding batch_input.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#batch_results DataVaultTransformEncode#batch_results}

---

##### `encodedValue`<sup>Optional</sup> <a name="encodedValue" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.encodedValue"></a>

- *Type:* java.lang.String

The result of encoding a value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#encoded_value DataVaultTransformEncode#encoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#id DataVaultTransformEncode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#namespace DataVaultTransformEncode#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.transformation"></a>

- *Type:* java.lang.String

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#transformation DataVaultTransformEncode#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.tweak"></a>

- *Type:* java.lang.String

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#tweak DataVaultTransformEncode#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.Initializer.parameter.value"></a>

- *Type:* java.lang.String

The value in which to encode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#value DataVaultTransformEncode#value}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchInput">resetBatchInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchResults">resetBatchResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetEncodedValue">resetEncodedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTransformation">resetTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTweak">resetTweak</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetValue">resetValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBatchInput` <a name="resetBatchInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchInput"></a>

```java
public void resetBatchInput()
```

##### `resetBatchResults` <a name="resetBatchResults" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetBatchResults"></a>

```java
public void resetBatchResults()
```

##### `resetEncodedValue` <a name="resetEncodedValue" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetEncodedValue"></a>

```java
public void resetEncodedValue()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTransformation` <a name="resetTransformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTransformation"></a>

```java
public void resetTransformation()
```

##### `resetTweak` <a name="resetTweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetTweak"></a>

```java
public void resetTweak()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.resetValue"></a>

```java
public void resetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_encode.DataVaultTransformEncode;

DataVaultTransformEncode.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_encode.DataVaultTransformEncode;

DataVaultTransformEncode.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_encode.DataVaultTransformEncode;

DataVaultTransformEncode.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInputInput">batchInputInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResultsInput">batchResultsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValueInput">encodedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformationInput">transformationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweakInput">tweakInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValue">encodedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformation">transformation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweak">tweak</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `batchInputInput`<sup>Optional</sup> <a name="batchInputInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInputInput"></a>

```java
public java.lang.Object getBatchInputInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String>

---

##### `batchResultsInput`<sup>Optional</sup> <a name="batchResultsInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResultsInput"></a>

```java
public java.lang.Object getBatchResultsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String>

---

##### `encodedValueInput`<sup>Optional</sup> <a name="encodedValueInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValueInput"></a>

```java
public java.lang.String getEncodedValueInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformationInput"></a>

```java
public java.lang.String getTransformationInput();
```

- *Type:* java.lang.String

---

##### `tweakInput`<sup>Optional</sup> <a name="tweakInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweakInput"></a>

```java
public java.lang.String getTweakInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `batchInput`<sup>Required</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchInput"></a>

```java
public java.lang.Object getBatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String>

---

##### `batchResults`<sup>Required</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.batchResults"></a>

```java
public java.lang.Object getBatchResults();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String>

---

##### `encodedValue`<sup>Required</sup> <a name="encodedValue" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.encodedValue"></a>

```java
public java.lang.String getEncodedValue();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.transformation"></a>

```java
public java.lang.String getTransformation();
```

- *Type:* java.lang.String

---

##### `tweak`<sup>Required</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tweak"></a>

```java
public java.lang.String getTweak();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncode.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultTransformEncodeConfig <a name="DataVaultTransformEncodeConfig" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_transform_encode.DataVaultTransformEncodeConfig;

DataVaultTransformEncodeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
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
//  .batchInput(java.util.Map<java.lang.String, java.lang.String>)
//  .batchResults(IResolvable)
//  .batchResults(java.util.Map<java.lang.String, java.lang.String>)
//  .encodedValue(java.lang.String)
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
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path to backend from which to retrieve data. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchInput">batchInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String></code> | Specifies a list of items to be encoded in a single batch. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchResults">batchResults</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String></code> | The result of encoding batch_input. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.encodedValue">encodedValue</a></code> | <code>java.lang.String</code> | The result of encoding a value. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#id DataVaultTransformEncode#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.transformation">transformation</a></code> | <code>java.lang.String</code> | The transformation to perform. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.tweak">tweak</a></code> | <code>java.lang.String</code> | The tweak value to use. Only applicable for FPE transformations. |
| <code><a href="#@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.value">value</a></code> | <code>java.lang.String</code> | The value in which to encode. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path to backend from which to retrieve data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#path DataVaultTransformEncode#path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

The name of the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#role_name DataVaultTransformEncode#role_name}

---

##### `batchInput`<sup>Optional</sup> <a name="batchInput" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchInput"></a>

```java
public java.lang.Object getBatchInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String>

Specifies a list of items to be encoded in a single batch.

If this parameter is set, the parameters 'value', 'transformation' and 'tweak' will be ignored. Each batch item within the list can specify these parameters instead.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#batch_input DataVaultTransformEncode#batch_input}

---

##### `batchResults`<sup>Optional</sup> <a name="batchResults" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.batchResults"></a>

```java
public java.lang.Object getBatchResults();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.Map<java.lang.String, java.lang.String>

The result of encoding batch_input.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#batch_results DataVaultTransformEncode#batch_results}

---

##### `encodedValue`<sup>Optional</sup> <a name="encodedValue" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.encodedValue"></a>

```java
public java.lang.String getEncodedValue();
```

- *Type:* java.lang.String

The result of encoding a value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#encoded_value DataVaultTransformEncode#encoded_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#id DataVaultTransformEncode#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#namespace DataVaultTransformEncode#namespace}

---

##### `transformation`<sup>Optional</sup> <a name="transformation" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.transformation"></a>

```java
public java.lang.String getTransformation();
```

- *Type:* java.lang.String

The transformation to perform.

If no value is provided and the role contains a single transformation, this value will be inferred from the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#transformation DataVaultTransformEncode#transformation}

---

##### `tweak`<sup>Optional</sup> <a name="tweak" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.tweak"></a>

```java
public java.lang.String getTweak();
```

- *Type:* java.lang.String

The tweak value to use. Only applicable for FPE transformations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#tweak DataVaultTransformEncode#tweak}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-vault.dataVaultTransformEncode.DataVaultTransformEncodeConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value in which to encode.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/transform_encode#value DataVaultTransformEncode#value}

---



