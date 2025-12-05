# `spiffeAuthBackendConfig` Submodule <a name="`spiffeAuthBackendConfig` Submodule" id="@cdktf/provider-vault.spiffeAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeAuthBackendConfig <a name="SpiffeAuthBackendConfig" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config vault_spiffe_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_config.SpiffeAuthBackendConfig;

SpiffeAuthBackendConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .profile(java.lang.String)
    .trustDomain(java.lang.String)
//  .audience(java.util.List<java.lang.String>)
//  .bundle(java.lang.String)
//  .deferBundleFetch(java.lang.Boolean|IResolvable)
//  .endpointRootCaTruststorePem(java.lang.String)
//  .endpointSpiffeId(java.lang.String)
//  .endpointUrl(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | The mechanism to fetch or embed the trust bundle to use. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.trustDomain">trustDomain</a></code> | <code>java.lang.String</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.audience">audience</a></code> | <code>java.util.List<java.lang.String></code> | A list of audience values allowed to match claims in JWT-SVIDs. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.bundle">bundle</a></code> | <code>java.lang.String</code> | When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format; |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.deferBundleFetch">deferBundleFetch</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Don't attempt to fetch a bundle immediately; only applies when profile != static. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointRootCaTruststorePem">endpointRootCaTruststorePem</a></code> | <code>java.lang.String</code> | PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointSpiffeId">endpointSpiffeId</a></code> | <code>java.lang.String</code> | The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#mount SpiffeAuthBackendConfig#mount}

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

The mechanism to fetch or embed the trust bundle to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#profile SpiffeAuthBackendConfig#profile}

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.trustDomain"></a>

- *Type:* java.lang.String

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#trust_domain SpiffeAuthBackendConfig#trust_domain}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.audience"></a>

- *Type:* java.util.List<java.lang.String>

A list of audience values allowed to match claims in JWT-SVIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#audience SpiffeAuthBackendConfig#audience}

---

##### `bundle`<sup>Optional</sup> <a name="bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.bundle"></a>

- *Type:* java.lang.String

When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format;

when profile is 'static', either a bundle in SPIFFE format or PEM-encoded CA certificate(s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#bundle SpiffeAuthBackendConfig#bundle}

---

##### `deferBundleFetch`<sup>Optional</sup> <a name="deferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.deferBundleFetch"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Don't attempt to fetch a bundle immediately; only applies when profile != static.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#defer_bundle_fetch SpiffeAuthBackendConfig#defer_bundle_fetch}

---

##### `endpointRootCaTruststorePem`<sup>Optional</sup> <a name="endpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointRootCaTruststorePem"></a>

- *Type:* java.lang.String

PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_root_ca_truststore_pem SpiffeAuthBackendConfig#endpoint_root_ca_truststore_pem}

---

##### `endpointSpiffeId`<sup>Optional</sup> <a name="endpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointSpiffeId"></a>

- *Type:* java.lang.String

The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_spiffe_id SpiffeAuthBackendConfig#endpoint_spiffe_id}

---

##### `endpointUrl`<sup>Optional</sup> <a name="endpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointUrl"></a>

- *Type:* java.lang.String

The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_url SpiffeAuthBackendConfig#endpoint_url}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#namespace SpiffeAuthBackendConfig#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetAudience">resetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetBundle">resetBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetDeferBundleFetch">resetDeferBundleFetch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointRootCaTruststorePem">resetEndpointRootCaTruststorePem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointSpiffeId">resetEndpointSpiffeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointUrl">resetEndpointUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAudience` <a name="resetAudience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetAudience"></a>

```java
public void resetAudience()
```

##### `resetBundle` <a name="resetBundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetBundle"></a>

```java
public void resetBundle()
```

##### `resetDeferBundleFetch` <a name="resetDeferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetDeferBundleFetch"></a>

```java
public void resetDeferBundleFetch()
```

##### `resetEndpointRootCaTruststorePem` <a name="resetEndpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointRootCaTruststorePem"></a>

```java
public void resetEndpointRootCaTruststorePem()
```

##### `resetEndpointSpiffeId` <a name="resetEndpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointSpiffeId"></a>

```java
public void resetEndpointSpiffeId()
```

##### `resetEndpointUrl` <a name="resetEndpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointUrl"></a>

```java
public void resetEndpointUrl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_config.SpiffeAuthBackendConfig;

SpiffeAuthBackendConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_config.SpiffeAuthBackendConfig;

SpiffeAuthBackendConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_config.SpiffeAuthBackendConfig;

SpiffeAuthBackendConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_config.SpiffeAuthBackendConfig;

SpiffeAuthBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpiffeAuthBackendConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpiffeAuthBackendConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpiffeAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpiffeAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audienceInput">audienceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundleInput">bundleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetchInput">deferBundleFetchInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePemInput">endpointRootCaTruststorePemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeIdInput">endpointSpiffeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrlInput">endpointUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomainInput">trustDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audience">audience</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundle">bundle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetch">deferBundleFetch</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePem">endpointRootCaTruststorePem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeId">endpointSpiffeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomain">trustDomain</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audienceInput"></a>

```java
public java.util.List<java.lang.String> getAudienceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bundleInput`<sup>Optional</sup> <a name="bundleInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundleInput"></a>

```java
public java.lang.String getBundleInput();
```

- *Type:* java.lang.String

---

##### `deferBundleFetchInput`<sup>Optional</sup> <a name="deferBundleFetchInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetchInput"></a>

```java
public java.lang.Boolean|IResolvable getDeferBundleFetchInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `endpointRootCaTruststorePemInput`<sup>Optional</sup> <a name="endpointRootCaTruststorePemInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePemInput"></a>

```java
public java.lang.String getEndpointRootCaTruststorePemInput();
```

- *Type:* java.lang.String

---

##### `endpointSpiffeIdInput`<sup>Optional</sup> <a name="endpointSpiffeIdInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeIdInput"></a>

```java
public java.lang.String getEndpointSpiffeIdInput();
```

- *Type:* java.lang.String

---

##### `endpointUrlInput`<sup>Optional</sup> <a name="endpointUrlInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrlInput"></a>

```java
public java.lang.String getEndpointUrlInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `trustDomainInput`<sup>Optional</sup> <a name="trustDomainInput" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomainInput"></a>

```java
public java.lang.String getTrustDomainInput();
```

- *Type:* java.lang.String

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audience"></a>

```java
public java.util.List<java.lang.String> getAudience();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bundle`<sup>Required</sup> <a name="bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundle"></a>

```java
public java.lang.String getBundle();
```

- *Type:* java.lang.String

---

##### `deferBundleFetch`<sup>Required</sup> <a name="deferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetch"></a>

```java
public java.lang.Boolean|IResolvable getDeferBundleFetch();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `endpointRootCaTruststorePem`<sup>Required</sup> <a name="endpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePem"></a>

```java
public java.lang.String getEndpointRootCaTruststorePem();
```

- *Type:* java.lang.String

---

##### `endpointSpiffeId`<sup>Required</sup> <a name="endpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeId"></a>

```java
public java.lang.String getEndpointSpiffeId();
```

- *Type:* java.lang.String

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrl"></a>

```java
public java.lang.String getEndpointUrl();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomain"></a>

```java
public java.lang.String getTrustDomain();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeAuthBackendConfigConfig <a name="SpiffeAuthBackendConfigConfig" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_config.SpiffeAuthBackendConfigConfig;

SpiffeAuthBackendConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .profile(java.lang.String)
    .trustDomain(java.lang.String)
//  .audience(java.util.List<java.lang.String>)
//  .bundle(java.lang.String)
//  .deferBundleFetch(java.lang.Boolean|IResolvable)
//  .endpointRootCaTruststorePem(java.lang.String)
//  .endpointSpiffeId(java.lang.String)
//  .endpointUrl(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | The mechanism to fetch or embed the trust bundle to use. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.trustDomain">trustDomain</a></code> | <code>java.lang.String</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.audience">audience</a></code> | <code>java.util.List<java.lang.String></code> | A list of audience values allowed to match claims in JWT-SVIDs. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.bundle">bundle</a></code> | <code>java.lang.String</code> | When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format; |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.deferBundleFetch">deferBundleFetch</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Don't attempt to fetch a bundle immediately; only applies when profile != static. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointRootCaTruststorePem">endpointRootCaTruststorePem</a></code> | <code>java.lang.String</code> | PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointSpiffeId">endpointSpiffeId</a></code> | <code>java.lang.String</code> | The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointUrl">endpointUrl</a></code> | <code>java.lang.String</code> | The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#mount SpiffeAuthBackendConfig#mount}

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

The mechanism to fetch or embed the trust bundle to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#profile SpiffeAuthBackendConfig#profile}

---

##### `trustDomain`<sup>Required</sup> <a name="trustDomain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.trustDomain"></a>

```java
public java.lang.String getTrustDomain();
```

- *Type:* java.lang.String

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#trust_domain SpiffeAuthBackendConfig#trust_domain}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.audience"></a>

```java
public java.util.List<java.lang.String> getAudience();
```

- *Type:* java.util.List<java.lang.String>

A list of audience values allowed to match claims in JWT-SVIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#audience SpiffeAuthBackendConfig#audience}

---

##### `bundle`<sup>Optional</sup> <a name="bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.bundle"></a>

```java
public java.lang.String getBundle();
```

- *Type:* java.lang.String

When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format;

when profile is 'static', either a bundle in SPIFFE format or PEM-encoded CA certificate(s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#bundle SpiffeAuthBackendConfig#bundle}

---

##### `deferBundleFetch`<sup>Optional</sup> <a name="deferBundleFetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.deferBundleFetch"></a>

```java
public java.lang.Boolean|IResolvable getDeferBundleFetch();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Don't attempt to fetch a bundle immediately; only applies when profile != static.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#defer_bundle_fetch SpiffeAuthBackendConfig#defer_bundle_fetch}

---

##### `endpointRootCaTruststorePem`<sup>Optional</sup> <a name="endpointRootCaTruststorePem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointRootCaTruststorePem"></a>

```java
public java.lang.String getEndpointRootCaTruststorePem();
```

- *Type:* java.lang.String

PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_root_ca_truststore_pem SpiffeAuthBackendConfig#endpoint_root_ca_truststore_pem}

---

##### `endpointSpiffeId`<sup>Optional</sup> <a name="endpointSpiffeId" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointSpiffeId"></a>

```java
public java.lang.String getEndpointSpiffeId();
```

- *Type:* java.lang.String

The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_spiffe_id SpiffeAuthBackendConfig#endpoint_spiffe_id}

---

##### `endpointUrl`<sup>Optional</sup> <a name="endpointUrl" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointUrl"></a>

```java
public java.lang.String getEndpointUrl();
```

- *Type:* java.lang.String

The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_url SpiffeAuthBackendConfig#endpoint_url}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#namespace SpiffeAuthBackendConfig#namespace}

---



