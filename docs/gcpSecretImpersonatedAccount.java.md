# `gcpSecretImpersonatedAccount` Submodule <a name="`gcpSecretImpersonatedAccount` Submodule" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretImpersonatedAccount <a name="GcpSecretImpersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account vault_gcp_secret_impersonated_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_secret_impersonated_account.GcpSecretImpersonatedAccount;

GcpSecretImpersonatedAccount.Builder.create(Construct scope, java.lang.String id)
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
    .impersonatedAccount(java.lang.String)
    .serviceAccountEmail(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .tokenScopes(java.util.List<java.lang.String>)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.impersonatedAccount">impersonatedAccount</a></code> | <code>java.lang.String</code> | Name of the Impersonated Account to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Email of the GCP service account. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.tokenScopes">tokenScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only). |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Time to live. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#backend GcpSecretImpersonatedAccount#backend}

---

##### `impersonatedAccount`<sup>Required</sup> <a name="impersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.impersonatedAccount"></a>

- *Type:* java.lang.String

Name of the Impersonated Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#impersonated_account GcpSecretImpersonatedAccount#impersonated_account}

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.serviceAccountEmail"></a>

- *Type:* java.lang.String

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#service_account_email GcpSecretImpersonatedAccount#service_account_email}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#namespace GcpSecretImpersonatedAccount#namespace}

---

##### `tokenScopes`<sup>Optional</sup> <a name="tokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.tokenScopes"></a>

- *Type:* java.util.List<java.lang.String>

List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#token_scopes GcpSecretImpersonatedAccount#token_scopes}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#ttl GcpSecretImpersonatedAccount#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTokenScopes">resetTokenScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTokenScopes` <a name="resetTokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTokenScopes"></a>

```java
public void resetTokenScopes()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GcpSecretImpersonatedAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_secret_impersonated_account.GcpSecretImpersonatedAccount;

GcpSecretImpersonatedAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_secret_impersonated_account.GcpSecretImpersonatedAccount;

GcpSecretImpersonatedAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_secret_impersonated_account.GcpSecretImpersonatedAccount;

GcpSecretImpersonatedAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_secret_impersonated_account.GcpSecretImpersonatedAccount;

GcpSecretImpersonatedAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GcpSecretImpersonatedAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GcpSecretImpersonatedAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GcpSecretImpersonatedAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GcpSecretImpersonatedAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GcpSecretImpersonatedAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountProject">serviceAccountProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccountInput">impersonatedAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopesInput">tokenScopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccount">impersonatedAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopes">tokenScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `serviceAccountProject`<sup>Required</sup> <a name="serviceAccountProject" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountProject"></a>

```java
public java.lang.String getServiceAccountProject();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `impersonatedAccountInput`<sup>Optional</sup> <a name="impersonatedAccountInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccountInput"></a>

```java
public java.lang.String getImpersonatedAccountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmailInput"></a>

```java
public java.lang.String getServiceAccountEmailInput();
```

- *Type:* java.lang.String

---

##### `tokenScopesInput`<sup>Optional</sup> <a name="tokenScopesInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopesInput"></a>

```java
public java.util.List<java.lang.String> getTokenScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `impersonatedAccount`<sup>Required</sup> <a name="impersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccount"></a>

```java
public java.lang.String getImpersonatedAccount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

---

##### `tokenScopes`<sup>Required</sup> <a name="tokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopes"></a>

```java
public java.util.List<java.lang.String> getTokenScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretImpersonatedAccountConfig <a name="GcpSecretImpersonatedAccountConfig" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.gcp_secret_impersonated_account.GcpSecretImpersonatedAccountConfig;

GcpSecretImpersonatedAccountConfig.builder()
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
    .impersonatedAccount(java.lang.String)
    .serviceAccountEmail(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .tokenScopes(java.util.List<java.lang.String>)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.impersonatedAccount">impersonatedAccount</a></code> | <code>java.lang.String</code> | Name of the Impersonated Account to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>java.lang.String</code> | Email of the GCP service account. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.tokenScopes">tokenScopes</a></code> | <code>java.util.List<java.lang.String></code> | List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only). |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Time to live. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#backend GcpSecretImpersonatedAccount#backend}

---

##### `impersonatedAccount`<sup>Required</sup> <a name="impersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.impersonatedAccount"></a>

```java
public java.lang.String getImpersonatedAccount();
```

- *Type:* java.lang.String

Name of the Impersonated Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#impersonated_account GcpSecretImpersonatedAccount#impersonated_account}

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.serviceAccountEmail"></a>

```java
public java.lang.String getServiceAccountEmail();
```

- *Type:* java.lang.String

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#service_account_email GcpSecretImpersonatedAccount#service_account_email}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#namespace GcpSecretImpersonatedAccount#namespace}

---

##### `tokenScopes`<sup>Optional</sup> <a name="tokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.tokenScopes"></a>

```java
public java.util.List<java.lang.String> getTokenScopes();
```

- *Type:* java.util.List<java.lang.String>

List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#token_scopes GcpSecretImpersonatedAccount#token_scopes}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/gcp_secret_impersonated_account#ttl GcpSecretImpersonatedAccount#ttl}

---



