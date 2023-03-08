# `identityOidcProvider` Submodule <a name="`identityOidcProvider` Submodule" id="@cdktf/provider-vault.identityOidcProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcProvider <a name="IdentityOidcProvider" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider vault_identity_oidc_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_provider.IdentityOidcProvider;

IdentityOidcProvider.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowedClientIds(java.util.List<java.lang.String>)
//  .httpsEnabled(java.lang.Boolean)
//  .httpsEnabled(IResolvable)
//  .id(java.lang.String)
//  .issuerHost(java.lang.String)
//  .namespace(java.lang.String)
//  .scopesSupported(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the provider. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.allowedClientIds">allowedClientIds</a></code> | <code>java.util.List<java.lang.String></code> | The client IDs that are permitted to use the provider. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.httpsEnabled">httpsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true if the issuer endpoint uses HTTPS. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#id IdentityOidcProvider#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.issuerHost">issuerHost</a></code> | <code>java.lang.String</code> | The host for the issuer. Can be either host or host:port. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.scopesSupported">scopesSupported</a></code> | <code>java.util.List<java.lang.String></code> | The scopes available for requesting on the provider. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#name IdentityOidcProvider#name}

---

##### `allowedClientIds`<sup>Optional</sup> <a name="allowedClientIds" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.allowedClientIds"></a>

- *Type:* java.util.List<java.lang.String>

The client IDs that are permitted to use the provider.

If empty, no clients are allowed. If "*", all clients are allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#allowed_client_ids IdentityOidcProvider#allowed_client_ids}

---

##### `httpsEnabled`<sup>Optional</sup> <a name="httpsEnabled" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.httpsEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true if the issuer endpoint uses HTTPS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#https_enabled IdentityOidcProvider#https_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#id IdentityOidcProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerHost`<sup>Optional</sup> <a name="issuerHost" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.issuerHost"></a>

- *Type:* java.lang.String

The host for the issuer. Can be either host or host:port.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#issuer_host IdentityOidcProvider#issuer_host}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#namespace IdentityOidcProvider#namespace}

---

##### `scopesSupported`<sup>Optional</sup> <a name="scopesSupported" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.scopesSupported"></a>

- *Type:* java.util.List<java.lang.String>

The scopes available for requesting on the provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#scopes_supported IdentityOidcProvider#scopes_supported}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetAllowedClientIds">resetAllowedClientIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetHttpsEnabled">resetHttpsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetIssuerHost">resetIssuerHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetScopesSupported">resetScopesSupported</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowedClientIds` <a name="resetAllowedClientIds" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetAllowedClientIds"></a>

```java
public void resetAllowedClientIds()
```

##### `resetHttpsEnabled` <a name="resetHttpsEnabled" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetHttpsEnabled"></a>

```java
public void resetHttpsEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetId"></a>

```java
public void resetId()
```

##### `resetIssuerHost` <a name="resetIssuerHost" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetIssuerHost"></a>

```java
public void resetIssuerHost()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetScopesSupported` <a name="resetScopesSupported" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetScopesSupported"></a>

```java
public void resetScopesSupported()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_provider.IdentityOidcProvider;

IdentityOidcProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_provider.IdentityOidcProvider;

IdentityOidcProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_provider.IdentityOidcProvider;

IdentityOidcProvider.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.allowedClientIdsInput">allowedClientIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.httpsEnabledInput">httpsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuerHostInput">issuerHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.scopesSupportedInput">scopesSupportedInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.allowedClientIds">allowedClientIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.httpsEnabled">httpsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuerHost">issuerHost</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.scopesSupported">scopesSupported</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `allowedClientIdsInput`<sup>Optional</sup> <a name="allowedClientIdsInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.allowedClientIdsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpsEnabledInput`<sup>Optional</sup> <a name="httpsEnabledInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.httpsEnabledInput"></a>

```java
public java.lang.Object getHttpsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerHostInput`<sup>Optional</sup> <a name="issuerHostInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuerHostInput"></a>

```java
public java.lang.String getIssuerHostInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `scopesSupportedInput`<sup>Optional</sup> <a name="scopesSupportedInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.scopesSupportedInput"></a>

```java
public java.util.List<java.lang.String> getScopesSupportedInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedClientIds`<sup>Required</sup> <a name="allowedClientIds" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.allowedClientIds"></a>

```java
public java.util.List<java.lang.String> getAllowedClientIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `httpsEnabled`<sup>Required</sup> <a name="httpsEnabled" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.httpsEnabled"></a>

```java
public java.lang.Object getHttpsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuerHost`<sup>Required</sup> <a name="issuerHost" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuerHost"></a>

```java
public java.lang.String getIssuerHost();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `scopesSupported`<sup>Required</sup> <a name="scopesSupported" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.scopesSupported"></a>

```java
public java.util.List<java.lang.String> getScopesSupported();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcProviderConfig <a name="IdentityOidcProviderConfig" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_oidc_provider.IdentityOidcProviderConfig;

IdentityOidcProviderConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowedClientIds(java.util.List<java.lang.String>)
//  .httpsEnabled(java.lang.Boolean)
//  .httpsEnabled(IResolvable)
//  .id(java.lang.String)
//  .issuerHost(java.lang.String)
//  .namespace(java.lang.String)
//  .scopesSupported(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the provider. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.allowedClientIds">allowedClientIds</a></code> | <code>java.util.List<java.lang.String></code> | The client IDs that are permitted to use the provider. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.httpsEnabled">httpsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true if the issuer endpoint uses HTTPS. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#id IdentityOidcProvider#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.issuerHost">issuerHost</a></code> | <code>java.lang.String</code> | The host for the issuer. Can be either host or host:port. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.scopesSupported">scopesSupported</a></code> | <code>java.util.List<java.lang.String></code> | The scopes available for requesting on the provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#name IdentityOidcProvider#name}

---

##### `allowedClientIds`<sup>Optional</sup> <a name="allowedClientIds" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.allowedClientIds"></a>

```java
public java.util.List<java.lang.String> getAllowedClientIds();
```

- *Type:* java.util.List<java.lang.String>

The client IDs that are permitted to use the provider.

If empty, no clients are allowed. If "*", all clients are allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#allowed_client_ids IdentityOidcProvider#allowed_client_ids}

---

##### `httpsEnabled`<sup>Optional</sup> <a name="httpsEnabled" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.httpsEnabled"></a>

```java
public java.lang.Object getHttpsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true if the issuer endpoint uses HTTPS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#https_enabled IdentityOidcProvider#https_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#id IdentityOidcProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerHost`<sup>Optional</sup> <a name="issuerHost" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.issuerHost"></a>

```java
public java.lang.String getIssuerHost();
```

- *Type:* java.lang.String

The host for the issuer. Can be either host or host:port.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#issuer_host IdentityOidcProvider#issuer_host}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#namespace IdentityOidcProvider#namespace}

---

##### `scopesSupported`<sup>Optional</sup> <a name="scopesSupported" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.scopesSupported"></a>

```java
public java.util.List<java.lang.String> getScopesSupported();
```

- *Type:* java.util.List<java.lang.String>

The scopes available for requesting on the provider.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/identity_oidc_provider#scopes_supported IdentityOidcProvider#scopes_supported}

---


