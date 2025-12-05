# `azureSecretBackendStaticRole` Submodule <a name="`azureSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.azureSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackendStaticRole <a name="AzureSecretBackendStaticRole" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role vault_azure_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_static_role.AzureSecretBackendStaticRole;

AzureSecretBackendStaticRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationObjectId(java.lang.String)
    .backend(java.lang.String)
    .role(java.lang.String)
//  .clientSecret(java.lang.String)
//  .expiration(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .secretId(java.lang.String)
//  .skipImportRotation(java.lang.Boolean|IResolvable)
//  .ttl(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.applicationObjectId">applicationObjectId</a></code> | <code>java.lang.String</code> | Application object ID for an existing service principal that is managed by the static role. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The path where the Azure secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Name of the static role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The plaintext secret value of the credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.expiration">expiration</a></code> | <code>java.lang.String</code> | A future expiration time for the imported credential, in RFC3339 format. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string key/value pairs that will be stored as metadata on the secret. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | The secret ID of the Azure password credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.skipImportRotation">skipImportRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, skip rotation of the client secret on import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Timespan of 1 year (31536000) or more during which the role credentials are valid. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationObjectId`<sup>Required</sup> <a name="applicationObjectId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.applicationObjectId"></a>

- *Type:* java.lang.String

Application object ID for an existing service principal that is managed by the static role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#application_object_id AzureSecretBackendStaticRole#application_object_id}

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The path where the Azure secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#backend AzureSecretBackendStaticRole#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Name of the static role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#role AzureSecretBackendStaticRole#role}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.clientSecret"></a>

- *Type:* java.lang.String

The plaintext secret value of the credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#client_secret AzureSecretBackendStaticRole#client_secret}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.expiration"></a>

- *Type:* java.lang.String

A future expiration time for the imported credential, in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#expiration AzureSecretBackendStaticRole#expiration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string key/value pairs that will be stored as metadata on the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#metadata AzureSecretBackendStaticRole#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#namespace AzureSecretBackendStaticRole#namespace}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

The secret ID of the Azure password credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#secret_id AzureSecretBackendStaticRole#secret_id}

---

##### `skipImportRotation`<sup>Optional</sup> <a name="skipImportRotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.skipImportRotation"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, skip rotation of the client secret on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#skip_import_rotation AzureSecretBackendStaticRole#skip_import_rotation}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Timespan of 1 year (31536000) or more during which the role credentials are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#ttl AzureSecretBackendStaticRole#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSkipImportRotation">resetSkipImportRotation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetExpiration"></a>

```java
public void resetExpiration()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSecretId"></a>

```java
public void resetSecretId()
```

##### `resetSkipImportRotation` <a name="resetSkipImportRotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetSkipImportRotation"></a>

```java
public void resetSkipImportRotation()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzureSecretBackendStaticRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_static_role.AzureSecretBackendStaticRole;

AzureSecretBackendStaticRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_static_role.AzureSecretBackendStaticRole;

AzureSecretBackendStaticRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_static_role.AzureSecretBackendStaticRole;

AzureSecretBackendStaticRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_static_role.AzureSecretBackendStaticRole;

AzureSecretBackendStaticRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AzureSecretBackendStaticRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AzureSecretBackendStaticRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AzureSecretBackendStaticRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AzureSecretBackendStaticRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AzureSecretBackendStaticRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectIdInput">applicationObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expirationInput">expirationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotationInput">skipImportRotationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectId">applicationObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expiration">expiration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotation">skipImportRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `applicationObjectIdInput`<sup>Optional</sup> <a name="applicationObjectIdInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectIdInput"></a>

```java
public java.lang.String getApplicationObjectIdInput();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expirationInput"></a>

```java
public java.lang.String getExpirationInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `skipImportRotationInput`<sup>Optional</sup> <a name="skipImportRotationInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotationInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipImportRotationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `applicationObjectId`<sup>Required</sup> <a name="applicationObjectId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.applicationObjectId"></a>

```java
public java.lang.String getApplicationObjectId();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `skipImportRotation`<sup>Required</sup> <a name="skipImportRotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.skipImportRotation"></a>

```java
public java.lang.Boolean|IResolvable getSkipImportRotation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendStaticRoleConfig <a name="AzureSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_static_role.AzureSecretBackendStaticRoleConfig;

AzureSecretBackendStaticRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationObjectId(java.lang.String)
    .backend(java.lang.String)
    .role(java.lang.String)
//  .clientSecret(java.lang.String)
//  .expiration(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .secretId(java.lang.String)
//  .skipImportRotation(java.lang.Boolean|IResolvable)
//  .ttl(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.applicationObjectId">applicationObjectId</a></code> | <code>java.lang.String</code> | Application object ID for an existing service principal that is managed by the static role. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The path where the Azure secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.role">role</a></code> | <code>java.lang.String</code> | Name of the static role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The plaintext secret value of the credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.expiration">expiration</a></code> | <code>java.lang.String</code> | A future expiration time for the imported credential, in RFC3339 format. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string key/value pairs that will be stored as metadata on the secret. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The secret ID of the Azure password credential you want to import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.skipImportRotation">skipImportRotation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, skip rotation of the client secret on import. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Timespan of 1 year (31536000) or more during which the role credentials are valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationObjectId`<sup>Required</sup> <a name="applicationObjectId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.applicationObjectId"></a>

```java
public java.lang.String getApplicationObjectId();
```

- *Type:* java.lang.String

Application object ID for an existing service principal that is managed by the static role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#application_object_id AzureSecretBackendStaticRole#application_object_id}

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The path where the Azure secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#backend AzureSecretBackendStaticRole#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the static role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#role AzureSecretBackendStaticRole#role}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The plaintext secret value of the credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#client_secret AzureSecretBackendStaticRole#client_secret}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.expiration"></a>

```java
public java.lang.String getExpiration();
```

- *Type:* java.lang.String

A future expiration time for the imported credential, in RFC3339 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#expiration AzureSecretBackendStaticRole#expiration}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string key/value pairs that will be stored as metadata on the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#metadata AzureSecretBackendStaticRole#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#namespace AzureSecretBackendStaticRole#namespace}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The secret ID of the Azure password credential you want to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#secret_id AzureSecretBackendStaticRole#secret_id}

---

##### `skipImportRotation`<sup>Optional</sup> <a name="skipImportRotation" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.skipImportRotation"></a>

```java
public java.lang.Boolean|IResolvable getSkipImportRotation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, skip rotation of the client secret on import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#skip_import_rotation AzureSecretBackendStaticRole#skip_import_rotation}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendStaticRole.AzureSecretBackendStaticRoleConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Timespan of 1 year (31536000) or more during which the role credentials are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/azure_secret_backend_static_role#ttl AzureSecretBackendStaticRole#ttl}

---



