# `vault_terraform_cloud_secret_backend`

Refer to the Terraform Registory for docs: [`vault_terraform_cloud_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend).

# `terraformCloudSecretBackend` Submodule <a name="`terraformCloudSecretBackend` Submodule" id="@cdktf/provider-vault.terraformCloudSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformCloudSecretBackend <a name="TerraformCloudSecretBackend" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend vault_terraform_cloud_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.terraform_cloud_secret_backend.TerraformCloudSecretBackend;

TerraformCloudSecretBackend.Builder.create(Construct scope, java.lang.String id)
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
//  .address(java.lang.String)
//  .backend(java.lang.String)
//  .basePath(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .id(java.lang.String)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | Specifies the address of the Terraform Cloud instance, provided as "host:port" like "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the Vault Terraform Cloud mount to configure. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.basePath">basePath</a></code> | <code>java.lang.String</code> | Specifies the base path for the Terraform Cloud or Enterprise API. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#id TerraformCloudSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Specifies the Terraform Cloud access token to use. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.address"></a>

- *Type:* java.lang.String

Specifies the address of the Terraform Cloud instance, provided as "host:port" like "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#address TerraformCloudSecretBackend#address}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the Vault Terraform Cloud mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#backend TerraformCloudSecretBackend#backend}

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.basePath"></a>

- *Type:* java.lang.String

Specifies the base path for the Terraform Cloud or Enterprise API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#base_path TerraformCloudSecretBackend#base_path}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#default_lease_ttl_seconds TerraformCloudSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#description TerraformCloudSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#disable_remount TerraformCloudSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#id TerraformCloudSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#max_lease_ttl_seconds TerraformCloudSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#namespace TerraformCloudSecretBackend#namespace}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Specifies the Terraform Cloud access token to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#token TerraformCloudSecretBackend#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetBasePath">resetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetBasePath` <a name="resetBasePath" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetBasePath"></a>

```java
public void resetBasePath()
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```java
public void resetDefaultLeaseTtlSeconds()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetId"></a>

```java
public void resetId()
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetMaxLeaseTtlSeconds"></a>

```java
public void resetMaxLeaseTtlSeconds()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.terraform_cloud_secret_backend.TerraformCloudSecretBackend;

TerraformCloudSecretBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.terraform_cloud_secret_backend.TerraformCloudSecretBackend;

TerraformCloudSecretBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.terraform_cloud_secret_backend.TerraformCloudSecretBackend;

TerraformCloudSecretBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.basePathInput">basePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.basePath">basePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `basePathInput`<sup>Optional</sup> <a name="basePathInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.basePathInput"></a>

```java
public java.lang.String getBasePathInput();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getDefaultLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.disableRemountInput"></a>

```java
public java.lang.Object getDisableRemountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```java
public java.lang.Number getMaxLeaseTtlSecondsInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.basePath"></a>

```java
public java.lang.String getBasePath();
```

- *Type:* java.lang.String

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TerraformCloudSecretBackendConfig <a name="TerraformCloudSecretBackendConfig" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.terraform_cloud_secret_backend.TerraformCloudSecretBackendConfig;

TerraformCloudSecretBackendConfig.builder()
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
//  .address(java.lang.String)
//  .backend(java.lang.String)
//  .basePath(java.lang.String)
//  .defaultLeaseTtlSeconds(java.lang.Number)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .id(java.lang.String)
//  .maxLeaseTtlSeconds(java.lang.Number)
//  .namespace(java.lang.String)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.address">address</a></code> | <code>java.lang.String</code> | Specifies the address of the Terraform Cloud instance, provided as "host:port" like "127.0.0.1:8500". |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the Vault Terraform Cloud mount to configure. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.basePath">basePath</a></code> | <code>java.lang.String</code> | Specifies the base path for the Terraform Cloud or Enterprise API. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#id TerraformCloudSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>java.lang.Number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.token">token</a></code> | <code>java.lang.String</code> | Specifies the Terraform Cloud access token to use. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

Specifies the address of the Terraform Cloud instance, provided as "host:port" like "127.0.0.1:8500".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#address TerraformCloudSecretBackend#address}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the Vault Terraform Cloud mount to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#backend TerraformCloudSecretBackend#backend}

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.basePath"></a>

```java
public java.lang.String getBasePath();
```

- *Type:* java.lang.String

Specifies the base path for the Terraform Cloud or Enterprise API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#base_path TerraformCloudSecretBackend#base_path}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```java
public java.lang.Number getDefaultLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#default_lease_ttl_seconds TerraformCloudSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#description TerraformCloudSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#disable_remount TerraformCloudSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#id TerraformCloudSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```java
public java.lang.Number getMaxLeaseTtlSeconds();
```

- *Type:* java.lang.Number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#max_lease_ttl_seconds TerraformCloudSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#namespace TerraformCloudSecretBackend#namespace}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.terraformCloudSecretBackend.TerraformCloudSecretBackendConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Specifies the Terraform Cloud access token to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_backend#token TerraformCloudSecretBackend#token}

---



