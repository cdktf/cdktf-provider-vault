# `vault_rabbitmq_secret_backend`

Refer to the Terraform Registory for docs: [`vault_rabbitmq_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend).

# `rabbitmqSecretBackend` Submodule <a name="`rabbitmqSecretBackend` Submodule" id="@cdktf/provider-vault.rabbitmqSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RabbitmqSecretBackend <a name="RabbitmqSecretBackend" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend vault_rabbitmq_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend.RabbitmqSecretBackend;

RabbitmqSecretBackend.Builder.create(Construct scope, java.lang.String id)
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
    .connectionUri(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .id(java.lang.String)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .passwordPolicy(java.lang.String)
//  .path(java.lang.String)
//  .usernameTemplate(java.lang.String)
//  .verifyConnection(java.lang.Boolean)
//  .verifyConnection(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.connectionUri">connectionUri</a></code> | <code>java.lang.String</code> | Specifies the RabbitMQ connection URI. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | Specifies the RabbitMQ management administrator password. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | Specifies the RabbitMQ management administrator username. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The path of the RabbitMQ Secret Backend where the connection should be configured. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.verifyConnection">verifyConnection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to verify connection URI, username, and password. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.connectionUri"></a>

- *Type:* java.lang.String

Specifies the RabbitMQ connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#connection_uri RabbitmqSecretBackend#connection_uri}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.password"></a>

- *Type:* java.lang.String

Specifies the RabbitMQ management administrator password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#password RabbitmqSecretBackend#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.username"></a>

- *Type:* java.lang.String

Specifies the RabbitMQ management administrator username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#username RabbitmqSecretBackend#username}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#default_lease_ttl_seconds RabbitmqSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#description RabbitmqSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#disable_remount RabbitmqSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#max_lease_ttl_seconds RabbitmqSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#namespace RabbitmqSecretBackend#namespace}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.passwordPolicy"></a>

- *Type:* java.lang.String

Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#password_policy RabbitmqSecretBackend#password_policy}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The path of the RabbitMQ Secret Backend where the connection should be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#path RabbitmqSecretBackend#path}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.usernameTemplate"></a>

- *Type:* java.lang.String

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#username_template RabbitmqSecretBackend#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.verifyConnection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to verify connection URI, username, and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#verify_connection RabbitmqSecretBackend#verify_connection}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```java
public void resetDefaultLeaseTtlSeconds()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetId"></a>

```java
public void resetId()
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetMaxLeaseTtlSeconds"></a>

```java
public void resetMaxLeaseTtlSeconds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPasswordPolicy"></a>

```java
public void resetPasswordPolicy()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPath"></a>

```java
public void resetPath()
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetUsernameTemplate"></a>

```java
public void resetUsernameTemplate()
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetVerifyConnection"></a>

```java
public void resetVerifyConnection()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend.RabbitmqSecretBackend;

RabbitmqSecretBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend.RabbitmqSecretBackend;

RabbitmqSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend.RabbitmqSecretBackend;

RabbitmqSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUriInput">connectionUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUri">connectionUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnection">verifyConnection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionUriInput`<sup>Optional</sup> <a name="connectionUriInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUriInput"></a>

```java
public java.lang.String getConnectionUriInput();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getDefaultLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemountInput"></a>

```java
public java.lang.Object getDisableRemountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getMaxLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicyInput"></a>

```java
public java.lang.String getPasswordPolicyInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplateInput"></a>

```java
public java.lang.String getUsernameTemplateInput();
```

- *Type:* java.lang.String

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnectionInput"></a>

```java
public java.lang.Object getVerifyConnectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUri"></a>

```java
public java.lang.String getConnectionUri();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnection"></a>

```java
public java.lang.Object getVerifyConnection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RabbitmqSecretBackendConfig <a name="RabbitmqSecretBackendConfig" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.rabbitmq_secret_backend.RabbitmqSecretBackendConfig;

RabbitmqSecretBackendConfig.builder()
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
    .connectionUri(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .id(java.lang.String)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .passwordPolicy(java.lang.String)
//  .path(java.lang.String)
//  .usernameTemplate(java.lang.String)
//  .verifyConnection(java.lang.Boolean)
//  .verifyConnection(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connectionUri">connectionUri</a></code> | <code>java.lang.String</code> | Specifies the RabbitMQ connection URI. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.password">password</a></code> | <code>java.lang.String</code> | Specifies the RabbitMQ management administrator password. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.username">username</a></code> | <code>java.lang.String</code> | Specifies the RabbitMQ management administrator username. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | The path of the RabbitMQ Secret Backend where the connection should be configured. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>java.lang.String</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.verifyConnection">verifyConnection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to verify connection URI, username, and password. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connectionUri"></a>

```java
public java.lang.String getConnectionUri();
```

- *Type:* java.lang.String

Specifies the RabbitMQ connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#connection_uri RabbitmqSecretBackend#connection_uri}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Specifies the RabbitMQ management administrator password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#password RabbitmqSecretBackend#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Specifies the RabbitMQ management administrator username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#username RabbitmqSecretBackend#username}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#default_lease_ttl_seconds RabbitmqSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#description RabbitmqSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#disable_remount RabbitmqSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#max_lease_ttl_seconds RabbitmqSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#namespace RabbitmqSecretBackend#namespace}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#password_policy RabbitmqSecretBackend#password_policy}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The path of the RabbitMQ Secret Backend where the connection should be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#path RabbitmqSecretBackend#path}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.usernameTemplate"></a>

```java
public java.lang.String getUsernameTemplate();
```

- *Type:* java.lang.String

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#username_template RabbitmqSecretBackend#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.verifyConnection"></a>

```java
public java.lang.Object getVerifyConnection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to verify connection URI, username, and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/rabbitmq_secret_backend#verify_connection RabbitmqSecretBackend#verify_connection}

---



