# `kvSecretV2` Submodule <a name="`kvSecretV2` Submodule" id="@cdktf/provider-vault.kvSecretV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KvSecretV2 <a name="KvSecretV2" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2 vault_kv_secret_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_v2.KvSecretV2;

KvSecretV2.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .cas(java.lang.Number)
//  .customMetadata(KvSecretV2CustomMetadata)
//  .dataJson(java.lang.String)
//  .dataJsonWo(java.lang.String)
//  .dataJsonWoVersion(java.lang.Number)
//  .deleteAllVersions(java.lang.Boolean)
//  .deleteAllVersions(IResolvable)
//  .disableRead(java.lang.Boolean)
//  .disableRead(IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Full name of the secret. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.cas">cas</a></code> | <code>java.lang.Number</code> | This flag is required if cas_required is set to true on either the secret or the engine's config. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.customMetadata">customMetadata</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | custom_metadata block. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dataJson">dataJson</a></code> | <code>java.lang.String</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dataJsonWo">dataJsonWo</a></code> | <code>java.lang.String</code> | Write-Only JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dataJsonWoVersion">dataJsonWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for write-only secret data. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.deleteAllVersions">deleteAllVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, permanently deletes all versions for the specified key. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.disableRead">disableRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, disables reading secret from Vault; note: drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#id KvSecretV2#id}. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An object that holds option settings. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#mount KvSecretV2#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Full name of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#name KvSecretV2#name}

---

##### `cas`<sup>Optional</sup> <a name="cas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.cas"></a>

- *Type:* java.lang.Number

This flag is required if cas_required is set to true on either the secret or the engine's config.

In order for a write to be successful, cas must be set to the current version of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#cas KvSecretV2#cas}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.customMetadata"></a>

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

custom_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#custom_metadata KvSecretV2#custom_metadata}

---

##### `dataJson`<sup>Optional</sup> <a name="dataJson" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dataJson"></a>

- *Type:* java.lang.String

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data_json KvSecretV2#data_json}

---

##### `dataJsonWo`<sup>Optional</sup> <a name="dataJsonWo" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dataJsonWo"></a>

- *Type:* java.lang.String

Write-Only JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data_json_wo KvSecretV2#data_json_wo}

---

##### `dataJsonWoVersion`<sup>Optional</sup> <a name="dataJsonWoVersion" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.dataJsonWoVersion"></a>

- *Type:* java.lang.Number

Version counter for write-only secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data_json_wo_version KvSecretV2#data_json_wo_version}

---

##### `deleteAllVersions`<sup>Optional</sup> <a name="deleteAllVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.deleteAllVersions"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, permanently deletes all versions for the specified key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#delete_all_versions KvSecretV2#delete_all_versions}

---

##### `disableRead`<sup>Optional</sup> <a name="disableRead" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.disableRead"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, disables reading secret from Vault; note: drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#disable_read KvSecretV2#disable_read}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#id KvSecretV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#namespace KvSecretV2#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.Initializer.parameter.options"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An object that holds option settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#options KvSecretV2#options}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata">putCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCas">resetCas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCustomMetadata">resetCustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJson">resetDataJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWo">resetDataJsonWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWoVersion">resetDataJsonWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDeleteAllVersions">resetDeleteAllVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDisableRead">resetDisableRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomMetadata` <a name="putCustomMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata"></a>

```java
public void putCustomMetadata(KvSecretV2CustomMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.putCustomMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---

##### `resetCas` <a name="resetCas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCas"></a>

```java
public void resetCas()
```

##### `resetCustomMetadata` <a name="resetCustomMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetCustomMetadata"></a>

```java
public void resetCustomMetadata()
```

##### `resetDataJson` <a name="resetDataJson" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJson"></a>

```java
public void resetDataJson()
```

##### `resetDataJsonWo` <a name="resetDataJsonWo" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWo"></a>

```java
public void resetDataJsonWo()
```

##### `resetDataJsonWoVersion` <a name="resetDataJsonWoVersion" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDataJsonWoVersion"></a>

```java
public void resetDataJsonWoVersion()
```

##### `resetDeleteAllVersions` <a name="resetDeleteAllVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDeleteAllVersions"></a>

```java
public void resetDeleteAllVersions()
```

##### `resetDisableRead` <a name="resetDisableRead" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetDisableRead"></a>

```java
public void resetDisableRead()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.resetOptions"></a>

```java
public void resetOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KvSecretV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_v2.KvSecretV2;

KvSecretV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_v2.KvSecretV2;

KvSecretV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_v2.KvSecretV2;

KvSecretV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_v2.KvSecretV2;

KvSecretV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),KvSecretV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a KvSecretV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the KvSecretV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing KvSecretV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the KvSecretV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadata">customMetadata</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference">KvSecretV2CustomMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.data">data</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.casInput">casInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadataInput">customMetadataInput</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonInput">dataJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoInput">dataJsonWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersionInput">dataJsonWoVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersionsInput">deleteAllVersionsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableReadInput">disableReadInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cas">cas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJson">dataJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWo">dataJsonWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersion">dataJsonWoVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersions">deleteAllVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableRead">disableRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customMetadata`<sup>Required</sup> <a name="customMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadata"></a>

```java
public KvSecretV2CustomMetadataOutputReference getCustomMetadata();
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference">KvSecretV2CustomMetadataOutputReference</a>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.data"></a>

```java
public StringMap getData();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `casInput`<sup>Optional</sup> <a name="casInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.casInput"></a>

```java
public java.lang.Number getCasInput();
```

- *Type:* java.lang.Number

---

##### `customMetadataInput`<sup>Optional</sup> <a name="customMetadataInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.customMetadataInput"></a>

```java
public KvSecretV2CustomMetadata getCustomMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---

##### `dataJsonInput`<sup>Optional</sup> <a name="dataJsonInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonInput"></a>

```java
public java.lang.String getDataJsonInput();
```

- *Type:* java.lang.String

---

##### `dataJsonWoInput`<sup>Optional</sup> <a name="dataJsonWoInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoInput"></a>

```java
public java.lang.String getDataJsonWoInput();
```

- *Type:* java.lang.String

---

##### `dataJsonWoVersionInput`<sup>Optional</sup> <a name="dataJsonWoVersionInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersionInput"></a>

```java
public java.lang.Number getDataJsonWoVersionInput();
```

- *Type:* java.lang.Number

---

##### `deleteAllVersionsInput`<sup>Optional</sup> <a name="deleteAllVersionsInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersionsInput"></a>

```java
public java.lang.Object getDeleteAllVersionsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableReadInput`<sup>Optional</sup> <a name="disableReadInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableReadInput"></a>

```java
public java.lang.Object getDisableReadInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cas`<sup>Required</sup> <a name="cas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.cas"></a>

```java
public java.lang.Number getCas();
```

- *Type:* java.lang.Number

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJson"></a>

```java
public java.lang.String getDataJson();
```

- *Type:* java.lang.String

---

##### `dataJsonWo`<sup>Required</sup> <a name="dataJsonWo" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWo"></a>

```java
public java.lang.String getDataJsonWo();
```

- *Type:* java.lang.String

---

##### `dataJsonWoVersion`<sup>Required</sup> <a name="dataJsonWoVersion" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.dataJsonWoVersion"></a>

```java
public java.lang.Number getDataJsonWoVersion();
```

- *Type:* java.lang.Number

---

##### `deleteAllVersions`<sup>Required</sup> <a name="deleteAllVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.deleteAllVersions"></a>

```java
public java.lang.Object getDeleteAllVersions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableRead`<sup>Required</sup> <a name="disableRead" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.disableRead"></a>

```java
public java.lang.Object getDisableRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KvSecretV2Config <a name="KvSecretV2Config" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_v2.KvSecretV2Config;

KvSecretV2Config.builder()
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
    .name(java.lang.String)
//  .cas(java.lang.Number)
//  .customMetadata(KvSecretV2CustomMetadata)
//  .dataJson(java.lang.String)
//  .dataJsonWo(java.lang.String)
//  .dataJsonWoVersion(java.lang.Number)
//  .deleteAllVersions(java.lang.Boolean)
//  .deleteAllVersions(IResolvable)
//  .disableRead(java.lang.Boolean)
//  .disableRead(IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where KV-V2 engine is mounted. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Full name of the secret. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.cas">cas</a></code> | <code>java.lang.Number</code> | This flag is required if cas_required is set to true on either the secret or the engine's config. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.customMetadata">customMetadata</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | custom_metadata block. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJson">dataJson</a></code> | <code>java.lang.String</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWo">dataJsonWo</a></code> | <code>java.lang.String</code> | Write-Only JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWoVersion">dataJsonWoVersion</a></code> | <code>java.lang.Number</code> | Version counter for write-only secret data. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.deleteAllVersions">deleteAllVersions</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, permanently deletes all versions for the specified key. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.disableRead">disableRead</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set to true, disables reading secret from Vault; note: drift won't be detected. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#id KvSecretV2#id}. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An object that holds option settings. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where KV-V2 engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#mount KvSecretV2#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Full name of the secret.

For a nested secret, the name is the nested path excluding the mount and data prefix. For example, for a secret at 'kvv2/data/foo/bar/baz', the name is 'foo/bar/baz'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#name KvSecretV2#name}

---

##### `cas`<sup>Optional</sup> <a name="cas" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.cas"></a>

```java
public java.lang.Number getCas();
```

- *Type:* java.lang.Number

This flag is required if cas_required is set to true on either the secret or the engine's config.

In order for a write to be successful, cas must be set to the current version of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#cas KvSecretV2#cas}

---

##### `customMetadata`<sup>Optional</sup> <a name="customMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.customMetadata"></a>

```java
public KvSecretV2CustomMetadata getCustomMetadata();
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

custom_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#custom_metadata KvSecretV2#custom_metadata}

---

##### `dataJson`<sup>Optional</sup> <a name="dataJson" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJson"></a>

```java
public java.lang.String getDataJson();
```

- *Type:* java.lang.String

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data_json KvSecretV2#data_json}

---

##### `dataJsonWo`<sup>Optional</sup> <a name="dataJsonWo" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWo"></a>

```java
public java.lang.String getDataJsonWo();
```

- *Type:* java.lang.String

Write-Only JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data_json_wo KvSecretV2#data_json_wo}

---

##### `dataJsonWoVersion`<sup>Optional</sup> <a name="dataJsonWoVersion" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.dataJsonWoVersion"></a>

```java
public java.lang.Number getDataJsonWoVersion();
```

- *Type:* java.lang.Number

Version counter for write-only secret data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data_json_wo_version KvSecretV2#data_json_wo_version}

---

##### `deleteAllVersions`<sup>Optional</sup> <a name="deleteAllVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.deleteAllVersions"></a>

```java
public java.lang.Object getDeleteAllVersions();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, permanently deletes all versions for the specified key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#delete_all_versions KvSecretV2#delete_all_versions}

---

##### `disableRead`<sup>Optional</sup> <a name="disableRead" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.disableRead"></a>

```java
public java.lang.Object getDisableRead();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set to true, disables reading secret from Vault; note: drift won't be detected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#disable_read KvSecretV2#disable_read}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#id KvSecretV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#namespace KvSecretV2#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2Config.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An object that holds option settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#options KvSecretV2#options}

---

### KvSecretV2CustomMetadata <a name="KvSecretV2CustomMetadata" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_v2.KvSecretV2CustomMetadata;

KvSecretV2CustomMetadata.builder()
//  .casRequired(java.lang.Boolean)
//  .casRequired(IResolvable)
//  .data(java.util.Map<java.lang.String, java.lang.String>)
//  .deleteVersionAfter(java.lang.Number)
//  .maxVersions(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.casRequired">casRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, all keys will require the cas parameter to be set on all write requests. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.data">data</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of arbitrary string to string valued user-provided metadata meant to describe the secret. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.deleteVersionAfter">deleteVersionAfter</a></code> | <code>java.lang.Number</code> | If set, specifies the length of time before a version is deleted. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.maxVersions">maxVersions</a></code> | <code>java.lang.Number</code> | The number of versions to keep per key. |

---

##### `casRequired`<sup>Optional</sup> <a name="casRequired" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.casRequired"></a>

```java
public java.lang.Object getCasRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, all keys will require the cas parameter to be set on all write requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#cas_required KvSecretV2#cas_required}

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.data"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getData();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of arbitrary string to string valued user-provided metadata meant to describe the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#data KvSecretV2#data}

---

##### `deleteVersionAfter`<sup>Optional</sup> <a name="deleteVersionAfter" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.deleteVersionAfter"></a>

```java
public java.lang.Number getDeleteVersionAfter();
```

- *Type:* java.lang.Number

If set, specifies the length of time before a version is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#delete_version_after KvSecretV2#delete_version_after}

---

##### `maxVersions`<sup>Optional</sup> <a name="maxVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata.property.maxVersions"></a>

```java
public java.lang.Number getMaxVersions();
```

- *Type:* java.lang.Number

The number of versions to keep per key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/kv_secret_v2#max_versions KvSecretV2#max_versions}

---

## Classes <a name="Classes" id="Classes"></a>

### KvSecretV2CustomMetadataOutputReference <a name="KvSecretV2CustomMetadataOutputReference" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.kv_secret_v2.KvSecretV2CustomMetadataOutputReference;

new KvSecretV2CustomMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetCasRequired">resetCasRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetData">resetData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetDeleteVersionAfter">resetDeleteVersionAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetMaxVersions">resetMaxVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCasRequired` <a name="resetCasRequired" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetCasRequired"></a>

```java
public void resetCasRequired()
```

##### `resetData` <a name="resetData" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetData"></a>

```java
public void resetData()
```

##### `resetDeleteVersionAfter` <a name="resetDeleteVersionAfter" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetDeleteVersionAfter"></a>

```java
public void resetDeleteVersionAfter()
```

##### `resetMaxVersions` <a name="resetMaxVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.resetMaxVersions"></a>

```java
public void resetMaxVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequiredInput">casRequiredInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.dataInput">dataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfterInput">deleteVersionAfterInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersionsInput">maxVersionsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequired">casRequired</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.data">data</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfter">deleteVersionAfter</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersions">maxVersions</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `casRequiredInput`<sup>Optional</sup> <a name="casRequiredInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequiredInput"></a>

```java
public java.lang.Object getCasRequiredInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.dataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deleteVersionAfterInput`<sup>Optional</sup> <a name="deleteVersionAfterInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfterInput"></a>

```java
public java.lang.Number getDeleteVersionAfterInput();
```

- *Type:* java.lang.Number

---

##### `maxVersionsInput`<sup>Optional</sup> <a name="maxVersionsInput" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersionsInput"></a>

```java
public java.lang.Number getMaxVersionsInput();
```

- *Type:* java.lang.Number

---

##### `casRequired`<sup>Required</sup> <a name="casRequired" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.casRequired"></a>

```java
public java.lang.Object getCasRequired();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.data"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getData();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deleteVersionAfter`<sup>Required</sup> <a name="deleteVersionAfter" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.deleteVersionAfter"></a>

```java
public java.lang.Number getDeleteVersionAfter();
```

- *Type:* java.lang.Number

---

##### `maxVersions`<sup>Required</sup> <a name="maxVersions" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.maxVersions"></a>

```java
public java.lang.Number getMaxVersions();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadataOutputReference.property.internalValue"></a>

```java
public KvSecretV2CustomMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.kvSecretV2.KvSecretV2CustomMetadata">KvSecretV2CustomMetadata</a>

---



