# `vault_kv_secret_backend_v2`

Refer to the Terraform Registory for docs: [`vault_kv_secret_backend_v2`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2).

# `kvSecretBackendV2` Submodule <a name="`kvSecretBackendV2` Submodule" id="@cdktf/provider-vault.kvSecretBackendV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KvSecretBackendV2 <a name="KvSecretBackendV2" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2 vault_kv_secret_backend_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_backend_v2.KvSecretBackendV2;

KvSecretBackendV2.Builder.create(Construct scope, java.lang.String id)
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
    .mount(java.lang.String)
//  .casRequired(java.lang.Boolean)
//  .casRequired(IResolvable)
//  .deleteVersionAfter(java.lang.Number)
//  .id(java.lang.String)
//  .maxVersions(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.casRequired">casRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, all keys will require the cas parameter to be set on all write requests. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.deleteVersionAfter">deleteVersionAfter</a></code> | <code>java.lang.Number</code> | If set, specifies the length of time before a version is deleted. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#id KvSecretBackendV2#id}. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.maxVersions">maxVersions</a></code> | <code>java.lang.Number</code> | The number of versions to keep per key. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#mount KvSecretBackendV2#mount}

---

##### `casRequired`<sup>Optional</sup> <a name="casRequired" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.casRequired"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, all keys will require the cas parameter to be set on all write requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#cas_required KvSecretBackendV2#cas_required}

---

##### `deleteVersionAfter`<sup>Optional</sup> <a name="deleteVersionAfter" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.deleteVersionAfter"></a>

- *Type:* java.lang.Number

If set, specifies the length of time before a version is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#delete_version_after KvSecretBackendV2#delete_version_after}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#id KvSecretBackendV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxVersions`<sup>Optional</sup> <a name="maxVersions" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.maxVersions"></a>

- *Type:* java.lang.Number

The number of versions to keep per key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#max_versions KvSecretBackendV2#max_versions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#namespace KvSecretBackendV2#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetCasRequired">resetCasRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetDeleteVersionAfter">resetDeleteVersionAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetMaxVersions">resetMaxVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetCasRequired` <a name="resetCasRequired" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetCasRequired"></a>

```java
public void resetCasRequired()
```

##### `resetDeleteVersionAfter` <a name="resetDeleteVersionAfter" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetDeleteVersionAfter"></a>

```java
public void resetDeleteVersionAfter()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetId"></a>

```java
public void resetId()
```

##### `resetMaxVersions` <a name="resetMaxVersions" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetMaxVersions"></a>

```java
public void resetMaxVersions()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KvSecretBackendV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_backend_v2.KvSecretBackendV2;

KvSecretBackendV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_backend_v2.KvSecretBackendV2;

KvSecretBackendV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_backend_v2.KvSecretBackendV2;

KvSecretBackendV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_backend_v2.KvSecretBackendV2;

KvSecretBackendV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KvSecretBackendV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KvSecretBackendV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KvSecretBackendV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KvSecretBackendV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KvSecretBackendV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequiredInput">casRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfterInput">deleteVersionAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersionsInput">maxVersionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequired">casRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfter">deleteVersionAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersions">maxVersions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `casRequiredInput`<sup>Optional</sup> <a name="casRequiredInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequiredInput"></a>

```java
public java.lang.Object getCasRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteVersionAfterInput`<sup>Optional</sup> <a name="deleteVersionAfterInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfterInput"></a>

```java
public java.lang.Number getDeleteVersionAfterInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxVersionsInput`<sup>Optional</sup> <a name="maxVersionsInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersionsInput"></a>

```java
public java.lang.Number getMaxVersionsInput();
```

- *Type:* java.lang.Number

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `casRequired`<sup>Required</sup> <a name="casRequired" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.casRequired"></a>

```java
public java.lang.Object getCasRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `deleteVersionAfter`<sup>Required</sup> <a name="deleteVersionAfter" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.deleteVersionAfter"></a>

```java
public java.lang.Number getDeleteVersionAfter();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxVersions`<sup>Required</sup> <a name="maxVersions" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.maxVersions"></a>

```java
public java.lang.Number getMaxVersions();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KvSecretBackendV2Config <a name="KvSecretBackendV2Config" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_backend_v2.KvSecretBackendV2Config;

KvSecretBackendV2Config.builder()
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
    .mount(java.lang.String)
//  .casRequired(java.lang.Boolean)
//  .casRequired(IResolvable)
//  .deleteVersionAfter(java.lang.Number)
//  .id(java.lang.String)
//  .maxVersions(java.lang.Number)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.casRequired">casRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, all keys will require the cas parameter to be set on all write requests. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.deleteVersionAfter">deleteVersionAfter</a></code> | <code>java.lang.Number</code> | If set, specifies the length of time before a version is deleted. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#id KvSecretBackendV2#id}. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.maxVersions">maxVersions</a></code> | <code>java.lang.Number</code> | The number of versions to keep per key. |
| <code><a href="#@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#mount KvSecretBackendV2#mount}

---

##### `casRequired`<sup>Optional</sup> <a name="casRequired" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.casRequired"></a>

```java
public java.lang.Object getCasRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, all keys will require the cas parameter to be set on all write requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#cas_required KvSecretBackendV2#cas_required}

---

##### `deleteVersionAfter`<sup>Optional</sup> <a name="deleteVersionAfter" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.deleteVersionAfter"></a>

```java
public java.lang.Number getDeleteVersionAfter();
```

- *Type:* java.lang.Number

If set, specifies the length of time before a version is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#delete_version_after KvSecretBackendV2#delete_version_after}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#id KvSecretBackendV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxVersions`<sup>Optional</sup> <a name="maxVersions" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.maxVersions"></a>

```java
public java.lang.Number getMaxVersions();
```

- *Type:* java.lang.Number

The number of versions to keep per key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#max_versions KvSecretBackendV2#max_versions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretBackendV2.KvSecretBackendV2Config.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/kv_secret_backend_v2#namespace KvSecretBackendV2#namespace}

---



