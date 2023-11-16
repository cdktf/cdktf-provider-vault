# `vault_generic_endpoint`

Refer to the Terraform Registory for docs: [`vault_generic_endpoint`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint).

# `genericEndpoint` Submodule <a name="`genericEndpoint` Submodule" id="@cdktf/provider-vault.genericEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GenericEndpoint <a name="GenericEndpoint" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint vault_generic_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.generic_endpoint.GenericEndpoint;

GenericEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .dataJson(java.lang.String)
    .path(java.lang.String)
//  .disableDelete(java.lang.Boolean)
//  .disableDelete(IResolvable)
//  .disableRead(java.lang.Boolean)
//  .disableRead(IResolvable)
//  .id(java.lang.String)
//  .ignoreAbsentFields(java.lang.Boolean)
//  .ignoreAbsentFields(IResolvable)
//  .namespace(java.lang.String)
//  .writeFields(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.dataJson">dataJson</a></code> | <code>java.lang.String</code> | JSON-encoded data to write. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Full path where to the endpoint that will be written. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.disableDelete">disableDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Don't attempt to delete the path from Vault if true. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.disableRead">disableRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Don't attempt to read the path from Vault if true; drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#id GenericEndpoint#id}. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.ignoreAbsentFields">ignoreAbsentFields</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When reading, disregard fields not present in data_json. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.writeFields">writeFields</a></code> | <code>java.util.List<java.lang.String></code> | Top-level fields returned by write to persist in state. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.dataJson"></a>

- *Type:* java.lang.String

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#data_json GenericEndpoint#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Full path where to the endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#path GenericEndpoint#path}

---

##### `disableDelete`<sup>Optional</sup> <a name="disableDelete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.disableDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Don't attempt to delete the path from Vault if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#disable_delete GenericEndpoint#disable_delete}

---

##### `disableRead`<sup>Optional</sup> <a name="disableRead" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.disableRead"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Don't attempt to read the path from Vault if true; drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#disable_read GenericEndpoint#disable_read}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#id GenericEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreAbsentFields`<sup>Optional</sup> <a name="ignoreAbsentFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.ignoreAbsentFields"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When reading, disregard fields not present in data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#ignore_absent_fields GenericEndpoint#ignore_absent_fields}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#namespace GenericEndpoint#namespace}

---

##### `writeFields`<sup>Optional</sup> <a name="writeFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.Initializer.parameter.writeFields"></a>

- *Type:* java.util.List<java.lang.String>

Top-level fields returned by write to persist in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#write_fields GenericEndpoint#write_fields}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableDelete">resetDisableDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableRead">resetDisableRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetIgnoreAbsentFields">resetIgnoreAbsentFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetWriteFields">resetWriteFields</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetDisableDelete` <a name="resetDisableDelete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableDelete"></a>

```java
public void resetDisableDelete()
```

##### `resetDisableRead` <a name="resetDisableRead" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetDisableRead"></a>

```java
public void resetDisableRead()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreAbsentFields` <a name="resetIgnoreAbsentFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetIgnoreAbsentFields"></a>

```java
public void resetIgnoreAbsentFields()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetWriteFields` <a name="resetWriteFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.resetWriteFields"></a>

```java
public void resetWriteFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GenericEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.generic_endpoint.GenericEndpoint;

GenericEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.generic_endpoint.GenericEndpoint;

GenericEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.generic_endpoint.GenericEndpoint;

GenericEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.generic_endpoint.GenericEndpoint;

GenericEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GenericEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GenericEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GenericEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GenericEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GenericEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeData">writeData</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeDataJson">writeDataJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJsonInput">dataJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDeleteInput">disableDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableReadInput">disableReadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFieldsInput">ignoreAbsentFieldsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFieldsInput">writeFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJson">dataJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDelete">disableDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableRead">disableRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFields">ignoreAbsentFields</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFields">writeFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `writeData`<sup>Required</sup> <a name="writeData" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeData"></a>

```java
public StringMap getWriteData();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `writeDataJson`<sup>Required</sup> <a name="writeDataJson" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeDataJson"></a>

```java
public java.lang.String getWriteDataJson();
```

- *Type:* java.lang.String

---

##### `dataJsonInput`<sup>Optional</sup> <a name="dataJsonInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJsonInput"></a>

```java
public java.lang.String getDataJsonInput();
```

- *Type:* java.lang.String

---

##### `disableDeleteInput`<sup>Optional</sup> <a name="disableDeleteInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDeleteInput"></a>

```java
public java.lang.Object getDisableDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableReadInput`<sup>Optional</sup> <a name="disableReadInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableReadInput"></a>

```java
public java.lang.Object getDisableReadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreAbsentFieldsInput`<sup>Optional</sup> <a name="ignoreAbsentFieldsInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFieldsInput"></a>

```java
public java.lang.Object getIgnoreAbsentFieldsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `writeFieldsInput`<sup>Optional</sup> <a name="writeFieldsInput" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFieldsInput"></a>

```java
public java.util.List<java.lang.String> getWriteFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.dataJson"></a>

```java
public java.lang.String getDataJson();
```

- *Type:* java.lang.String

---

##### `disableDelete`<sup>Required</sup> <a name="disableDelete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableDelete"></a>

```java
public java.lang.Object getDisableDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableRead`<sup>Required</sup> <a name="disableRead" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.disableRead"></a>

```java
public java.lang.Object getDisableRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreAbsentFields`<sup>Required</sup> <a name="ignoreAbsentFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.ignoreAbsentFields"></a>

```java
public java.lang.Object getIgnoreAbsentFields();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `writeFields`<sup>Required</sup> <a name="writeFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.writeFields"></a>

```java
public java.util.List<java.lang.String> getWriteFields();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.genericEndpoint.GenericEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GenericEndpointConfig <a name="GenericEndpointConfig" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.generic_endpoint.GenericEndpointConfig;

GenericEndpointConfig.builder()
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
    .dataJson(java.lang.String)
    .path(java.lang.String)
//  .disableDelete(java.lang.Boolean)
//  .disableDelete(IResolvable)
//  .disableRead(java.lang.Boolean)
//  .disableRead(IResolvable)
//  .id(java.lang.String)
//  .ignoreAbsentFields(java.lang.Boolean)
//  .ignoreAbsentFields(IResolvable)
//  .namespace(java.lang.String)
//  .writeFields(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dataJson">dataJson</a></code> | <code>java.lang.String</code> | JSON-encoded data to write. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.path">path</a></code> | <code>java.lang.String</code> | Full path where to the endpoint that will be written. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableDelete">disableDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Don't attempt to delete the path from Vault if true. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableRead">disableRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Don't attempt to read the path from Vault if true; drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#id GenericEndpoint#id}. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.ignoreAbsentFields">ignoreAbsentFields</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When reading, disregard fields not present in data_json. |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.writeFields">writeFields</a></code> | <code>java.util.List<java.lang.String></code> | Top-level fields returned by write to persist in state. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.dataJson"></a>

```java
public java.lang.String getDataJson();
```

- *Type:* java.lang.String

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#data_json GenericEndpoint#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Full path where to the endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#path GenericEndpoint#path}

---

##### `disableDelete`<sup>Optional</sup> <a name="disableDelete" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableDelete"></a>

```java
public java.lang.Object getDisableDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Don't attempt to delete the path from Vault if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#disable_delete GenericEndpoint#disable_delete}

---

##### `disableRead`<sup>Optional</sup> <a name="disableRead" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.disableRead"></a>

```java
public java.lang.Object getDisableRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Don't attempt to read the path from Vault if true; drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#disable_read GenericEndpoint#disable_read}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#id GenericEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreAbsentFields`<sup>Optional</sup> <a name="ignoreAbsentFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.ignoreAbsentFields"></a>

```java
public java.lang.Object getIgnoreAbsentFields();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When reading, disregard fields not present in data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#ignore_absent_fields GenericEndpoint#ignore_absent_fields}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#namespace GenericEndpoint#namespace}

---

##### `writeFields`<sup>Optional</sup> <a name="writeFields" id="@cdktf/provider-vault.genericEndpoint.GenericEndpointConfig.property.writeFields"></a>

```java
public java.util.List<java.lang.String> getWriteFields();
```

- *Type:* java.util.List<java.lang.String>

Top-level fields returned by write to persist in state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/generic_endpoint#write_fields GenericEndpoint#write_fields}

---



