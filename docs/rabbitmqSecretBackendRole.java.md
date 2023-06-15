# `vault_rabbitmq_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_rabbitmq_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role).

# `rabbitmqSecretBackendRole` Submodule <a name="`rabbitmqSecretBackendRole` Submodule" id="@cdktf/provider-vault.rabbitmqSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RabbitmqSecretBackendRole <a name="RabbitmqSecretBackendRole" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role vault_rabbitmq_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRole;

RabbitmqSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
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
    .backend(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .tags(java.lang.String)
//  .vhost(IResolvable)
//  .vhost(java.util.List<RabbitmqSecretBackendRoleVhost>)
//  .vhostTopic(IResolvable)
//  .vhostTopic(java.util.List<RabbitmqSecretBackendRoleVhostTopic>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The path of the Rabbitmq Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.tags">tags</a></code> | <code>java.lang.String</code> | Specifies a comma-separated RabbitMQ management tags. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.vhost">vhost</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>></code> | vhost block. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.vhostTopic">vhostTopic</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>></code> | vhost_topic block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The path of the Rabbitmq Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#backend RabbitmqSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#name RabbitmqSecretBackendRole#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#namespace RabbitmqSecretBackendRole#namespace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.tags"></a>

- *Type:* java.lang.String

Specifies a comma-separated RabbitMQ management tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#tags RabbitmqSecretBackendRole#tags}

---

##### `vhost`<sup>Optional</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.vhost"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>>

vhost block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}

---

##### `vhostTopic`<sup>Optional</sup> <a name="vhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.Initializer.parameter.vhostTopic"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>>

vhost_topic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#vhost_topic RabbitmqSecretBackendRole#vhost_topic}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost">putVhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic">putVhostTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhost">resetVhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhostTopic">resetVhostTopic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putVhost` <a name="putVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost"></a>

```java
public void putVhost(IResolvable OR java.util.List<RabbitmqSecretBackendRoleVhost> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhost.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>>

---

##### `putVhostTopic` <a name="putVhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic"></a>

```java
public void putVhostTopic(IResolvable OR java.util.List<RabbitmqSecretBackendRoleVhostTopic> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.putVhostTopic.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetTags"></a>

```java
public void resetTags()
```

##### `resetVhost` <a name="resetVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhost"></a>

```java
public void resetVhost()
```

##### `resetVhostTopic` <a name="resetVhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.resetVhostTopic"></a>

```java
public void resetVhostTopic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRole;

RabbitmqSecretBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRole;

RabbitmqSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRole;

RabbitmqSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhost">vhost</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList">RabbitmqSecretBackendRoleVhostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopic">vhostTopic</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList">RabbitmqSecretBackendRoleVhostTopicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tagsInput">tagsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostInput">vhostInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopicInput">vhostTopicInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tags">tags</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vhost`<sup>Required</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhost"></a>

```java
public RabbitmqSecretBackendRoleVhostList getVhost();
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList">RabbitmqSecretBackendRoleVhostList</a>

---

##### `vhostTopic`<sup>Required</sup> <a name="vhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopic"></a>

```java
public RabbitmqSecretBackendRoleVhostTopicList getVhostTopic();
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList">RabbitmqSecretBackendRoleVhostTopicList</a>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tagsInput"></a>

```java
public java.lang.String getTagsInput();
```

- *Type:* java.lang.String

---

##### `vhostInput`<sup>Optional</sup> <a name="vhostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostInput"></a>

```java
public java.lang.Object getVhostInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>>

---

##### `vhostTopicInput`<sup>Optional</sup> <a name="vhostTopicInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.vhostTopicInput"></a>

```java
public java.lang.Object getVhostTopicInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RabbitmqSecretBackendRoleConfig <a name="RabbitmqSecretBackendRoleConfig" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRoleConfig;

RabbitmqSecretBackendRoleConfig.builder()
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
    .backend(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .tags(java.lang.String)
//  .vhost(IResolvable)
//  .vhost(java.util.List<RabbitmqSecretBackendRoleVhost>)
//  .vhostTopic(IResolvable)
//  .vhostTopic(java.util.List<RabbitmqSecretBackendRoleVhostTopic>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The path of the Rabbitmq Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.tags">tags</a></code> | <code>java.lang.String</code> | Specifies a comma-separated RabbitMQ management tags. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhost">vhost</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>></code> | vhost block. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhostTopic">vhostTopic</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>></code> | vhost_topic block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The path of the Rabbitmq Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#backend RabbitmqSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#name RabbitmqSecretBackendRole#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#id RabbitmqSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#namespace RabbitmqSecretBackendRole#namespace}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.tags"></a>

```java
public java.lang.String getTags();
```

- *Type:* java.lang.String

Specifies a comma-separated RabbitMQ management tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#tags RabbitmqSecretBackendRole#tags}

---

##### `vhost`<sup>Optional</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhost"></a>

```java
public java.lang.Object getVhost();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>>

vhost block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}

---

##### `vhostTopic`<sup>Optional</sup> <a name="vhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleConfig.property.vhostTopic"></a>

```java
public java.lang.Object getVhostTopic();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>>

vhost_topic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#vhost_topic RabbitmqSecretBackendRole#vhost_topic}

---

### RabbitmqSecretBackendRoleVhost <a name="RabbitmqSecretBackendRoleVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRoleVhost;

RabbitmqSecretBackendRoleVhost.builder()
    .configure(java.lang.String)
    .host(java.lang.String)
    .read(java.lang.String)
    .write(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.configure">configure</a></code> | <code>java.lang.String</code> | The configure permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.host">host</a></code> | <code>java.lang.String</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.read">read</a></code> | <code>java.lang.String</code> | The read permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.write">write</a></code> | <code>java.lang.String</code> | The write permissions for this vhost. |

---

##### `configure`<sup>Required</sup> <a name="configure" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.configure"></a>

```java
public java.lang.String getConfigure();
```

- *Type:* java.lang.String

The configure permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#configure RabbitmqSecretBackendRole#configure}

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#host RabbitmqSecretBackendRole#host}

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

The read permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#read RabbitmqSecretBackendRole#read}

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost.property.write"></a>

```java
public java.lang.String getWrite();
```

- *Type:* java.lang.String

The write permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#write RabbitmqSecretBackendRole#write}

---

### RabbitmqSecretBackendRoleVhostTopic <a name="RabbitmqSecretBackendRoleVhostTopic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRoleVhostTopic;

RabbitmqSecretBackendRoleVhostTopic.builder()
    .host(java.lang.String)
//  .vhost(IResolvable)
//  .vhost(java.util.List<RabbitmqSecretBackendRoleVhostTopicVhost>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.host">host</a></code> | <code>java.lang.String</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.vhost">vhost</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>></code> | vhost block. |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#host RabbitmqSecretBackendRole#host}

---

##### `vhost`<sup>Optional</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic.property.vhost"></a>

```java
public java.lang.Object getVhost();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>>

vhost block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#vhost RabbitmqSecretBackendRole#vhost}

---

### RabbitmqSecretBackendRoleVhostTopicVhost <a name="RabbitmqSecretBackendRoleVhostTopicVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRoleVhostTopicVhost;

RabbitmqSecretBackendRoleVhostTopicVhost.builder()
    .read(java.lang.String)
    .topic(java.lang.String)
    .write(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.read">read</a></code> | <code>java.lang.String</code> | The read permissions for this vhost. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.topic">topic</a></code> | <code>java.lang.String</code> | The vhost to set permissions for. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.write">write</a></code> | <code>java.lang.String</code> | The write permissions for this vhost. |

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

The read permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#read RabbitmqSecretBackendRole#read}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

The vhost to set permissions for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#topic RabbitmqSecretBackendRole#topic}

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost.property.write"></a>

```java
public java.lang.String getWrite();
```

- *Type:* java.lang.String

The write permissions for this vhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend_role#write RabbitmqSecretBackendRole#write}

---

## Classes <a name="Classes" id="Classes"></a>

### RabbitmqSecretBackendRoleVhostList <a name="RabbitmqSecretBackendRoleVhostList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRoleVhostList;

new RabbitmqSecretBackendRoleVhostList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get"></a>

```java
public RabbitmqSecretBackendRoleVhostOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>>

---


### RabbitmqSecretBackendRoleVhostOutputReference <a name="RabbitmqSecretBackendRoleVhostOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRoleVhostOutputReference;

new RabbitmqSecretBackendRoleVhostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configureInput">configureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.writeInput">writeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configure">configure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.write">write</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configureInput`<sup>Optional</sup> <a name="configureInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configureInput"></a>

```java
public java.lang.String getConfigureInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.writeInput"></a>

```java
public java.lang.String getWriteInput();
```

- *Type:* java.lang.String

---

##### `configure`<sup>Required</sup> <a name="configure" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.configure"></a>

```java
public java.lang.String getConfigure();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.write"></a>

```java
public java.lang.String getWrite();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhost">RabbitmqSecretBackendRoleVhost</a>

---


### RabbitmqSecretBackendRoleVhostTopicList <a name="RabbitmqSecretBackendRoleVhostTopicList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRoleVhostTopicList;

new RabbitmqSecretBackendRoleVhostTopicList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get"></a>

```java
public RabbitmqSecretBackendRoleVhostTopicOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>>

---


### RabbitmqSecretBackendRoleVhostTopicOutputReference <a name="RabbitmqSecretBackendRoleVhostTopicOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRoleVhostTopicOutputReference;

new RabbitmqSecretBackendRoleVhostTopicOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost">putVhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resetVhost">resetVhost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVhost` <a name="putVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost"></a>

```java
public void putVhost(IResolvable OR java.util.List<RabbitmqSecretBackendRoleVhostTopicVhost> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.putVhost.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>>

---

##### `resetVhost` <a name="resetVhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.resetVhost"></a>

```java
public void resetVhost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhost">vhost</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList">RabbitmqSecretBackendRoleVhostTopicVhostList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhostInput">vhostInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vhost`<sup>Required</sup> <a name="vhost" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhost"></a>

```java
public RabbitmqSecretBackendRoleVhostTopicVhostList getVhost();
```

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList">RabbitmqSecretBackendRoleVhostTopicVhostList</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `vhostInput`<sup>Optional</sup> <a name="vhostInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.vhostInput"></a>

```java
public java.lang.Object getVhostInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopic">RabbitmqSecretBackendRoleVhostTopic</a>

---


### RabbitmqSecretBackendRoleVhostTopicVhostList <a name="RabbitmqSecretBackendRoleVhostTopicVhostList" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRoleVhostTopicVhostList;

new RabbitmqSecretBackendRoleVhostTopicVhostList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get"></a>

```java
public RabbitmqSecretBackendRoleVhostTopicVhostOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>>

---


### RabbitmqSecretBackendRoleVhostTopicVhostOutputReference <a name="RabbitmqSecretBackendRoleVhostTopicVhostOutputReference" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend_role.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference;

new RabbitmqSecretBackendRoleVhostTopicVhostOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.writeInput">writeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.write">write</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `writeInput`<sup>Optional</sup> <a name="writeInput" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.writeInput"></a>

```java
public java.lang.String getWriteInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.write"></a>

```java
public java.lang.String getWrite();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhostOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.rabbitmqSecretBackendRole.RabbitmqSecretBackendRoleVhostTopicVhost">RabbitmqSecretBackendRoleVhostTopicVhost</a>

---



