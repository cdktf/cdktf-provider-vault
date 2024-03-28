# `dataVaultPolicyDocument` Submodule <a name="`dataVaultPolicyDocument` Submodule" id="@cdktf/provider-vault.dataVaultPolicyDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultPolicyDocument <a name="DataVaultPolicyDocument" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document vault_policy_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocument;

DataVaultPolicyDocument.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .rule(IResolvable)
//  .rule(java.util.List<DataVaultPolicyDocumentRule>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>></code> | rule block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#namespace DataVaultPolicyDocument#namespace}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.Initializer.parameter.rule"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#rule DataVaultPolicyDocument#rule}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putRule` <a name="putRule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<DataVaultPolicyDocumentRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.resetRule"></a>

```java
public void resetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataVaultPolicyDocument resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocument;

DataVaultPolicyDocument.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocument;

DataVaultPolicyDocument.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocument;

DataVaultPolicyDocument.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocument;

DataVaultPolicyDocument.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataVaultPolicyDocument.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataVaultPolicyDocument resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataVaultPolicyDocument to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataVaultPolicyDocument that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataVaultPolicyDocument to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.hcl">hcl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList">DataVaultPolicyDocumentRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `hcl`<sup>Required</sup> <a name="hcl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.hcl"></a>

```java
public java.lang.String getHcl();
```

- *Type:* java.lang.String

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.rule"></a>

```java
public DataVaultPolicyDocumentRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList">DataVaultPolicyDocumentRuleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocument.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultPolicyDocumentConfig <a name="DataVaultPolicyDocumentConfig" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocumentConfig;

DataVaultPolicyDocumentConfig.builder()
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
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .rule(IResolvable)
//  .rule(java.util.List<DataVaultPolicyDocumentRule>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>></code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#id DataVaultPolicyDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#namespace DataVaultPolicyDocument#namespace}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentConfig.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#rule DataVaultPolicyDocument#rule}

---

### DataVaultPolicyDocumentRule <a name="DataVaultPolicyDocumentRule" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocumentRule;

DataVaultPolicyDocumentRule.builder()
    .capabilities(java.util.List<java.lang.String>)
    .path(java.lang.String)
//  .allowedParameter(IResolvable)
//  .allowedParameter(java.util.List<DataVaultPolicyDocumentRuleAllowedParameter>)
//  .deniedParameter(IResolvable)
//  .deniedParameter(java.util.List<DataVaultPolicyDocumentRuleDeniedParameter>)
//  .description(java.lang.String)
//  .maxWrappingTtl(java.lang.String)
//  .minWrappingTtl(java.lang.String)
//  .requiredParameters(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#capabilities DataVaultPolicyDocument#capabilities}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#path DataVaultPolicyDocument#path}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.allowedParameter">allowedParameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>></code> | allowed_parameter block. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.deniedParameter">deniedParameter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>></code> | denied_parameter block. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#description DataVaultPolicyDocument#description}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.maxWrappingTtl">maxWrappingTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#max_wrapping_ttl DataVaultPolicyDocument#max_wrapping_ttl}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.minWrappingTtl">minWrappingTtl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#min_wrapping_ttl DataVaultPolicyDocument#min_wrapping_ttl}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.requiredParameters">requiredParameters</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#required_parameters DataVaultPolicyDocument#required_parameters}. |

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#capabilities DataVaultPolicyDocument#capabilities}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#path DataVaultPolicyDocument#path}.

---

##### `allowedParameter`<sup>Optional</sup> <a name="allowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.allowedParameter"></a>

```java
public java.lang.Object getAllowedParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>>

allowed_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#allowed_parameter DataVaultPolicyDocument#allowed_parameter}

---

##### `deniedParameter`<sup>Optional</sup> <a name="deniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.deniedParameter"></a>

```java
public java.lang.Object getDeniedParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>>

denied_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#denied_parameter DataVaultPolicyDocument#denied_parameter}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#description DataVaultPolicyDocument#description}.

---

##### `maxWrappingTtl`<sup>Optional</sup> <a name="maxWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.maxWrappingTtl"></a>

```java
public java.lang.String getMaxWrappingTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#max_wrapping_ttl DataVaultPolicyDocument#max_wrapping_ttl}.

---

##### `minWrappingTtl`<sup>Optional</sup> <a name="minWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.minWrappingTtl"></a>

```java
public java.lang.String getMinWrappingTtl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#min_wrapping_ttl DataVaultPolicyDocument#min_wrapping_ttl}.

---

##### `requiredParameters`<sup>Optional</sup> <a name="requiredParameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule.property.requiredParameters"></a>

```java
public java.util.List<java.lang.String> getRequiredParameters();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#required_parameters DataVaultPolicyDocument#required_parameters}.

---

### DataVaultPolicyDocumentRuleAllowedParameter <a name="DataVaultPolicyDocumentRuleAllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocumentRuleAllowedParameter;

DataVaultPolicyDocumentRuleAllowedParameter.builder()
    .key(java.lang.String)
    .value(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}.

---

### DataVaultPolicyDocumentRuleDeniedParameter <a name="DataVaultPolicyDocumentRuleDeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocumentRuleDeniedParameter;

DataVaultPolicyDocumentRuleDeniedParameter.builder()
    .key(java.lang.String)
    .value(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#key DataVaultPolicyDocument#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/data-sources/policy_document#value DataVaultPolicyDocument#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataVaultPolicyDocumentRuleAllowedParameterList <a name="DataVaultPolicyDocumentRuleAllowedParameterList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocumentRuleAllowedParameterList;

new DataVaultPolicyDocumentRuleAllowedParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get"></a>

```java
public DataVaultPolicyDocumentRuleAllowedParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>>

---


### DataVaultPolicyDocumentRuleAllowedParameterOutputReference <a name="DataVaultPolicyDocumentRuleAllowedParameterOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocumentRuleAllowedParameterOutputReference;

new DataVaultPolicyDocumentRuleAllowedParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>

---


### DataVaultPolicyDocumentRuleDeniedParameterList <a name="DataVaultPolicyDocumentRuleDeniedParameterList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocumentRuleDeniedParameterList;

new DataVaultPolicyDocumentRuleDeniedParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get"></a>

```java
public DataVaultPolicyDocumentRuleDeniedParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>>

---


### DataVaultPolicyDocumentRuleDeniedParameterOutputReference <a name="DataVaultPolicyDocumentRuleDeniedParameterOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocumentRuleDeniedParameterOutputReference;

new DataVaultPolicyDocumentRuleDeniedParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.valueInput">valueInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.value">value</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.valueInput"></a>

```java
public java.util.List<java.lang.String> getValueInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.value"></a>

```java
public java.util.List<java.lang.String> getValue();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>

---


### DataVaultPolicyDocumentRuleList <a name="DataVaultPolicyDocumentRuleList" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocumentRuleList;

new DataVaultPolicyDocumentRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get"></a>

```java
public DataVaultPolicyDocumentRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>>

---


### DataVaultPolicyDocumentRuleOutputReference <a name="DataVaultPolicyDocumentRuleOutputReference" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.data_vault_policy_document.DataVaultPolicyDocumentRuleOutputReference;

new DataVaultPolicyDocumentRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter">putAllowedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter">putDeniedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetAllowedParameter">resetAllowedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDeniedParameter">resetDeniedParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMaxWrappingTtl">resetMaxWrappingTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMinWrappingTtl">resetMinWrappingTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetRequiredParameters">resetRequiredParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedParameter` <a name="putAllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter"></a>

```java
public void putAllowedParameter(IResolvable OR java.util.List<DataVaultPolicyDocumentRuleAllowedParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putAllowedParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>>

---

##### `putDeniedParameter` <a name="putDeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter"></a>

```java
public void putDeniedParameter(IResolvable OR java.util.List<DataVaultPolicyDocumentRuleDeniedParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.putDeniedParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>>

---

##### `resetAllowedParameter` <a name="resetAllowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetAllowedParameter"></a>

```java
public void resetAllowedParameter()
```

##### `resetDeniedParameter` <a name="resetDeniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDeniedParameter"></a>

```java
public void resetDeniedParameter()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMaxWrappingTtl` <a name="resetMaxWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMaxWrappingTtl"></a>

```java
public void resetMaxWrappingTtl()
```

##### `resetMinWrappingTtl` <a name="resetMinWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetMinWrappingTtl"></a>

```java
public void resetMinWrappingTtl()
```

##### `resetRequiredParameters` <a name="resetRequiredParameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.resetRequiredParameters"></a>

```java
public void resetRequiredParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameter">allowedParameter</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList">DataVaultPolicyDocumentRuleAllowedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameter">deniedParameter</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList">DataVaultPolicyDocumentRuleDeniedParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameterInput">allowedParameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilitiesInput">capabilitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameterInput">deniedParameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtlInput">maxWrappingTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtlInput">minWrappingTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParametersInput">requiredParametersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilities">capabilities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtl">maxWrappingTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtl">minWrappingTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParameters">requiredParameters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedParameter`<sup>Required</sup> <a name="allowedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameter"></a>

```java
public DataVaultPolicyDocumentRuleAllowedParameterList getAllowedParameter();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameterList">DataVaultPolicyDocumentRuleAllowedParameterList</a>

---

##### `deniedParameter`<sup>Required</sup> <a name="deniedParameter" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameter"></a>

```java
public DataVaultPolicyDocumentRuleDeniedParameterList getDeniedParameter();
```

- *Type:* <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameterList">DataVaultPolicyDocumentRuleDeniedParameterList</a>

---

##### `allowedParameterInput`<sup>Optional</sup> <a name="allowedParameterInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.allowedParameterInput"></a>

```java
public java.lang.Object getAllowedParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleAllowedParameter">DataVaultPolicyDocumentRuleAllowedParameter</a>>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilitiesInput"></a>

```java
public java.util.List<java.lang.String> getCapabilitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedParameterInput`<sup>Optional</sup> <a name="deniedParameterInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.deniedParameterInput"></a>

```java
public java.lang.Object getDeniedParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleDeniedParameter">DataVaultPolicyDocumentRuleDeniedParameter</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `maxWrappingTtlInput`<sup>Optional</sup> <a name="maxWrappingTtlInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtlInput"></a>

```java
public java.lang.String getMaxWrappingTtlInput();
```

- *Type:* java.lang.String

---

##### `minWrappingTtlInput`<sup>Optional</sup> <a name="minWrappingTtlInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtlInput"></a>

```java
public java.lang.String getMinWrappingTtlInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `requiredParametersInput`<sup>Optional</sup> <a name="requiredParametersInput" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParametersInput"></a>

```java
public java.util.List<java.lang.String> getRequiredParametersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.capabilities"></a>

```java
public java.util.List<java.lang.String> getCapabilities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `maxWrappingTtl`<sup>Required</sup> <a name="maxWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.maxWrappingTtl"></a>

```java
public java.lang.String getMaxWrappingTtl();
```

- *Type:* java.lang.String

---

##### `minWrappingTtl`<sup>Required</sup> <a name="minWrappingTtl" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.minWrappingTtl"></a>

```java
public java.lang.String getMinWrappingTtl();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `requiredParameters`<sup>Required</sup> <a name="requiredParameters" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.requiredParameters"></a>

```java
public java.util.List<java.lang.String> getRequiredParameters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.dataVaultPolicyDocument.DataVaultPolicyDocumentRule">DataVaultPolicyDocumentRule</a>

---



