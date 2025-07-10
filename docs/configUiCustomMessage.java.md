# `configUiCustomMessage` Submodule <a name="`configUiCustomMessage` Submodule" id="@cdktf/provider-vault.configUiCustomMessage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigUiCustomMessage <a name="ConfigUiCustomMessage" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message vault_config_ui_custom_message}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.config_ui_custom_message.ConfigUiCustomMessage;

ConfigUiCustomMessage.Builder.create(Construct scope, java.lang.String id)
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
    .messageBase64(java.lang.String)
    .startTime(java.lang.String)
    .title(java.lang.String)
//  .authenticated(java.lang.Boolean)
//  .authenticated(IResolvable)
//  .endTime(java.lang.String)
//  .link(ConfigUiCustomMessageLink)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.messageBase64">messageBase64</a></code> | <code>java.lang.String</code> | The base64-encoded content of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.startTime">startTime</a></code> | <code>java.lang.String</code> | The starting time of the active period of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | The title of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.authenticated">authenticated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A flag indicating whether the custom message is displayed pre-login (false) or post-login (true). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.endTime">endTime</a></code> | <code>java.lang.String</code> | The ending time of the active period of the custom message. Can be omitted for non-expiring message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.link">link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | link block. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map containing additional options for the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The display type of custom message. Allowed values are banner and modal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `messageBase64`<sup>Required</sup> <a name="messageBase64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.messageBase64"></a>

- *Type:* java.lang.String

The base64-encoded content of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#message_base64 ConfigUiCustomMessage#message_base64}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.startTime"></a>

- *Type:* java.lang.String

The starting time of the active period of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#start_time ConfigUiCustomMessage#start_time}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.title"></a>

- *Type:* java.lang.String

The title of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

##### `authenticated`<sup>Optional</sup> <a name="authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.authenticated"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A flag indicating whether the custom message is displayed pre-login (false) or post-login (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#authenticated ConfigUiCustomMessage#authenticated}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.endTime"></a>

- *Type:* java.lang.String

The ending time of the active period of the custom message. Can be omitted for non-expiring message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#end_time ConfigUiCustomMessage#end_time}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.link"></a>

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#link ConfigUiCustomMessage#link}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#namespace ConfigUiCustomMessage#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.options"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map containing additional options for the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#options ConfigUiCustomMessage#options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The display type of custom message. Allowed values are banner and modal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#type ConfigUiCustomMessage#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink">putLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetAuthenticated">resetAuthenticated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetLink">resetLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLink` <a name="putLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink"></a>

```java
public void putLink(ConfigUiCustomMessageLink value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.putLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---

##### `resetAuthenticated` <a name="resetAuthenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetAuthenticated"></a>

```java
public void resetAuthenticated()
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetLink` <a name="resetLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetLink"></a>

```java
public void resetLink()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.config_ui_custom_message.ConfigUiCustomMessage;

ConfigUiCustomMessage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.config_ui_custom_message.ConfigUiCustomMessage;

ConfigUiCustomMessage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.config_ui_custom_message.ConfigUiCustomMessage;

ConfigUiCustomMessage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.config_ui_custom_message.ConfigUiCustomMessage;

ConfigUiCustomMessage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConfigUiCustomMessage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ConfigUiCustomMessage resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConfigUiCustomMessage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConfigUiCustomMessage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ConfigUiCustomMessage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.link">link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference">ConfigUiCustomMessageLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticatedInput">authenticatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.linkInput">linkInput</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64Input">messageBase64Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticated">authenticated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64">messageBase64</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `link`<sup>Required</sup> <a name="link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.link"></a>

```java
public ConfigUiCustomMessageLinkOutputReference getLink();
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference">ConfigUiCustomMessageLinkOutputReference</a>

---

##### `authenticatedInput`<sup>Optional</sup> <a name="authenticatedInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticatedInput"></a>

```java
public java.lang.Object getAuthenticatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `linkInput`<sup>Optional</sup> <a name="linkInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.linkInput"></a>

```java
public ConfigUiCustomMessageLink getLinkInput();
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---

##### `messageBase64Input`<sup>Optional</sup> <a name="messageBase64Input" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64Input"></a>

```java
public java.lang.String getMessageBase64Input();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `authenticated`<sup>Required</sup> <a name="authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.authenticated"></a>

```java
public java.lang.Object getAuthenticated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `messageBase64`<sup>Required</sup> <a name="messageBase64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.messageBase64"></a>

```java
public java.lang.String getMessageBase64();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigUiCustomMessageConfig <a name="ConfigUiCustomMessageConfig" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.config_ui_custom_message.ConfigUiCustomMessageConfig;

ConfigUiCustomMessageConfig.builder()
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
    .messageBase64(java.lang.String)
    .startTime(java.lang.String)
    .title(java.lang.String)
//  .authenticated(java.lang.Boolean)
//  .authenticated(IResolvable)
//  .endTime(java.lang.String)
//  .link(ConfigUiCustomMessageLink)
//  .namespace(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.messageBase64">messageBase64</a></code> | <code>java.lang.String</code> | The base64-encoded content of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The starting time of the active period of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.title">title</a></code> | <code>java.lang.String</code> | The title of the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.authenticated">authenticated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | A flag indicating whether the custom message is displayed pre-login (false) or post-login (true). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The ending time of the active period of the custom message. Can be omitted for non-expiring message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.link">link</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | link block. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map containing additional options for the custom message. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.type">type</a></code> | <code>java.lang.String</code> | The display type of custom message. Allowed values are banner and modal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `messageBase64`<sup>Required</sup> <a name="messageBase64" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.messageBase64"></a>

```java
public java.lang.String getMessageBase64();
```

- *Type:* java.lang.String

The base64-encoded content of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#message_base64 ConfigUiCustomMessage#message_base64}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The starting time of the active period of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#start_time ConfigUiCustomMessage#start_time}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

##### `authenticated`<sup>Optional</sup> <a name="authenticated" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.authenticated"></a>

```java
public java.lang.Object getAuthenticated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

A flag indicating whether the custom message is displayed pre-login (false) or post-login (true).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#authenticated ConfigUiCustomMessage#authenticated}

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The ending time of the active period of the custom message. Can be omitted for non-expiring message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#end_time ConfigUiCustomMessage#end_time}

---

##### `link`<sup>Optional</sup> <a name="link" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.link"></a>

```java
public ConfigUiCustomMessageLink getLink();
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#link ConfigUiCustomMessage#link}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#namespace ConfigUiCustomMessage#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map containing additional options for the custom message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#options ConfigUiCustomMessage#options}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The display type of custom message. Allowed values are banner and modal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#type ConfigUiCustomMessage#type}

---

### ConfigUiCustomMessageLink <a name="ConfigUiCustomMessageLink" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.config_ui_custom_message.ConfigUiCustomMessageLink;

ConfigUiCustomMessageLink.builder()
    .href(java.lang.String)
    .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.href">href</a></code> | <code>java.lang.String</code> | The URL of the hyperlink. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.title">title</a></code> | <code>java.lang.String</code> | The title of the hyperlink. |

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.href"></a>

```java
public java.lang.String getHref();
```

- *Type:* java.lang.String

The URL of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#href ConfigUiCustomMessage#href}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

The title of the hyperlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/config_ui_custom_message#title ConfigUiCustomMessage#title}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigUiCustomMessageLinkOutputReference <a name="ConfigUiCustomMessageLinkOutputReference" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.config_ui_custom_message.ConfigUiCustomMessageLinkOutputReference;

new ConfigUiCustomMessageLinkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.hrefInput">hrefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.href">href</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hrefInput`<sup>Optional</sup> <a name="hrefInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.hrefInput"></a>

```java
public java.lang.String getHrefInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `href`<sup>Required</sup> <a name="href" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.href"></a>

```java
public java.lang.String getHref();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLinkOutputReference.property.internalValue"></a>

```java
public ConfigUiCustomMessageLink getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.configUiCustomMessage.ConfigUiCustomMessageLink">ConfigUiCustomMessageLink</a>

---



