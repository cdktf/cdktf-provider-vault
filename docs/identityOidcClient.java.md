# `identityOidcClient` Submodule <a name="`identityOidcClient` Submodule" id="@cdktf/provider-vault.identityOidcClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcClient <a name="IdentityOidcClient" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client vault_identity_oidc_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_client.IdentityOidcClient;

IdentityOidcClient.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .accessTokenTtl(java.lang.Number)
//  .assignments(java.util.List<java.lang.String>)
//  .clientType(java.lang.String)
//  .id(java.lang.String)
//  .idTokenTtl(java.lang.Number)
//  .key(java.lang.String)
//  .namespace(java.lang.String)
//  .redirectUris(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.accessTokenTtl">accessTokenTtl</a></code> | <code>java.lang.Number</code> | The time-to-live for access tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.assignments">assignments</a></code> | <code>java.util.List<java.lang.String></code> | A list of assignment resources associated with the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.clientType">clientType</a></code> | <code>java.lang.String</code> | The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.idTokenTtl">idTokenTtl</a></code> | <code>java.lang.Number</code> | The time-to-live for ID tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | A reference to a named key resource in Vault. This cannot be modified after creation. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | Redirection URI values used by the client. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#name IdentityOidcClient#name}

---

##### `accessTokenTtl`<sup>Optional</sup> <a name="accessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.accessTokenTtl"></a>

- *Type:* java.lang.Number

The time-to-live for access tokens obtained by the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#access_token_ttl IdentityOidcClient#access_token_ttl}

---

##### `assignments`<sup>Optional</sup> <a name="assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.assignments"></a>

- *Type:* java.util.List<java.lang.String>

A list of assignment resources associated with the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#assignments IdentityOidcClient#assignments}

---

##### `clientType`<sup>Optional</sup> <a name="clientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.clientType"></a>

- *Type:* java.lang.String

The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#client_type IdentityOidcClient#client_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idTokenTtl`<sup>Optional</sup> <a name="idTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.idTokenTtl"></a>

- *Type:* java.lang.Number

The time-to-live for ID tokens obtained by the client.

The value should be less than the verification_ttl on the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#id_token_ttl IdentityOidcClient#id_token_ttl}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.key"></a>

- *Type:* java.lang.String

A reference to a named key resource in Vault. This cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#key IdentityOidcClient#key}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#namespace IdentityOidcClient#namespace}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.redirectUris"></a>

- *Type:* java.util.List<java.lang.String>

Redirection URI values used by the client.

One of these values must exactly match the redirect_uri parameter value used in each authentication request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#redirect_uris IdentityOidcClient#redirect_uris}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAccessTokenTtl">resetAccessTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAssignments">resetAssignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetClientType">resetClientType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetIdTokenTtl">resetIdTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetRedirectUris">resetRedirectUris</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAccessTokenTtl` <a name="resetAccessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAccessTokenTtl"></a>

```java
public void resetAccessTokenTtl()
```

##### `resetAssignments` <a name="resetAssignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAssignments"></a>

```java
public void resetAssignments()
```

##### `resetClientType` <a name="resetClientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetClientType"></a>

```java
public void resetClientType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetId"></a>

```java
public void resetId()
```

##### `resetIdTokenTtl` <a name="resetIdTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetIdTokenTtl"></a>

```java
public void resetIdTokenTtl()
```

##### `resetKey` <a name="resetKey" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetKey"></a>

```java
public void resetKey()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRedirectUris` <a name="resetRedirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetRedirectUris"></a>

```java
public void resetRedirectUris()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityOidcClient resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_client.IdentityOidcClient;

IdentityOidcClient.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_client.IdentityOidcClient;

IdentityOidcClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_client.IdentityOidcClient;

IdentityOidcClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_client.IdentityOidcClient;

IdentityOidcClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityOidcClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityOidcClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityOidcClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityOidcClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityOidcClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtlInput">accessTokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignmentsInput">assignmentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientTypeInput">clientTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtlInput">idTokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUrisInput">redirectUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtl">accessTokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignments">assignments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientType">clientType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtl">idTokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `accessTokenTtlInput`<sup>Optional</sup> <a name="accessTokenTtlInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtlInput"></a>

```java
public java.lang.Number getAccessTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `assignmentsInput`<sup>Optional</sup> <a name="assignmentsInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignmentsInput"></a>

```java
public java.util.List<java.lang.String> getAssignmentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientTypeInput`<sup>Optional</sup> <a name="clientTypeInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientTypeInput"></a>

```java
public java.lang.String getClientTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idTokenTtlInput`<sup>Optional</sup> <a name="idTokenTtlInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtlInput"></a>

```java
public java.lang.Number getIdTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `redirectUrisInput`<sup>Optional</sup> <a name="redirectUrisInput" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUrisInput"></a>

```java
public java.util.List<java.lang.String> getRedirectUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accessTokenTtl`<sup>Required</sup> <a name="accessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtl"></a>

```java
public java.lang.Number getAccessTokenTtl();
```

- *Type:* java.lang.Number

---

##### `assignments`<sup>Required</sup> <a name="assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignments"></a>

```java
public java.util.List<java.lang.String> getAssignments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientType`<sup>Required</sup> <a name="clientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientType"></a>

```java
public java.lang.String getClientType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idTokenTtl`<sup>Required</sup> <a name="idTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtl"></a>

```java
public java.lang.Number getIdTokenTtl();
```

- *Type:* java.lang.Number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `redirectUris`<sup>Required</sup> <a name="redirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcClientConfig <a name="IdentityOidcClientConfig" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_client.IdentityOidcClientConfig;

IdentityOidcClientConfig.builder()
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
    .name(java.lang.String)
//  .accessTokenTtl(java.lang.Number)
//  .assignments(java.util.List<java.lang.String>)
//  .clientType(java.lang.String)
//  .id(java.lang.String)
//  .idTokenTtl(java.lang.Number)
//  .key(java.lang.String)
//  .namespace(java.lang.String)
//  .redirectUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.accessTokenTtl">accessTokenTtl</a></code> | <code>java.lang.Number</code> | The time-to-live for access tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.assignments">assignments</a></code> | <code>java.util.List<java.lang.String></code> | A list of assignment resources associated with the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.clientType">clientType</a></code> | <code>java.lang.String</code> | The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.idTokenTtl">idTokenTtl</a></code> | <code>java.lang.Number</code> | The time-to-live for ID tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.key">key</a></code> | <code>java.lang.String</code> | A reference to a named key resource in Vault. This cannot be modified after creation. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.redirectUris">redirectUris</a></code> | <code>java.util.List<java.lang.String></code> | Redirection URI values used by the client. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#name IdentityOidcClient#name}

---

##### `accessTokenTtl`<sup>Optional</sup> <a name="accessTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.accessTokenTtl"></a>

```java
public java.lang.Number getAccessTokenTtl();
```

- *Type:* java.lang.Number

The time-to-live for access tokens obtained by the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#access_token_ttl IdentityOidcClient#access_token_ttl}

---

##### `assignments`<sup>Optional</sup> <a name="assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.assignments"></a>

```java
public java.util.List<java.lang.String> getAssignments();
```

- *Type:* java.util.List<java.lang.String>

A list of assignment resources associated with the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#assignments IdentityOidcClient#assignments}

---

##### `clientType`<sup>Optional</sup> <a name="clientType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.clientType"></a>

```java
public java.lang.String getClientType();
```

- *Type:* java.lang.String

The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#client_type IdentityOidcClient#client_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idTokenTtl`<sup>Optional</sup> <a name="idTokenTtl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.idTokenTtl"></a>

```java
public java.lang.Number getIdTokenTtl();
```

- *Type:* java.lang.Number

The time-to-live for ID tokens obtained by the client.

The value should be less than the verification_ttl on the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#id_token_ttl IdentityOidcClient#id_token_ttl}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

A reference to a named key resource in Vault. This cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#key IdentityOidcClient#key}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#namespace IdentityOidcClient#namespace}

---

##### `redirectUris`<sup>Optional</sup> <a name="redirectUris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.redirectUris"></a>

```java
public java.util.List<java.lang.String> getRedirectUris();
```

- *Type:* java.util.List<java.lang.String>

Redirection URI values used by the client.

One of these values must exactly match the redirect_uri parameter value used in each authentication request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/identity_oidc_client#redirect_uris IdentityOidcClient#redirect_uris}

---



