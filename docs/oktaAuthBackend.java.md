# `oktaAuthBackend` Submodule <a name="`oktaAuthBackend` Submodule" id="@cdktf/provider-vault.oktaAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OktaAuthBackend <a name="OktaAuthBackend" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend vault_okta_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackend;

OktaAuthBackend.Builder.create(Construct scope, java.lang.String id)
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
    .organization(java.lang.String)
//  .baseUrl(java.lang.String)
//  .bypassOktaMfa(java.lang.Boolean)
//  .bypassOktaMfa(IResolvable)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .group(IResolvable)
//  .group(java.util.List<OktaAuthBackendGroup>)
//  .id(java.lang.String)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .token(java.lang.String)
//  .ttl(java.lang.String)
//  .user(IResolvable)
//  .user(java.util.List<OktaAuthBackendUser>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | The Okta organization. This will be the first part of the url https://XXX.okta.com. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The Okta url. Examples: oktapreview.com, okta.com (default). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.bypassOktaMfa">bypassOktaMfa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, requests by Okta for a MFA check will be bypassed. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.group">group</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#group OktaAuthBackend#group}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#id OktaAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | Maximum duration after which authentication will be expired. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | The Okta API token. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Duration after which authentication will be expired. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.user">user</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#user OktaAuthBackend#user}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

The Okta organization. This will be the first part of the url https://XXX.okta.com.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#organization OktaAuthBackend#organization}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.baseUrl"></a>

- *Type:* java.lang.String

The Okta url. Examples: oktapreview.com, okta.com (default).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#base_url OktaAuthBackend#base_url}

---

##### `bypassOktaMfa`<sup>Optional</sup> <a name="bypassOktaMfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.bypassOktaMfa"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, requests by Okta for a MFA check will be bypassed.

This also disallows certain status checks on the account, such as whether the password is expired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#bypass_okta_mfa OktaAuthBackend#bypass_okta_mfa}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the auth backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#description OktaAuthBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.disableRemount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#disable_remount OktaAuthBackend#disable_remount}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.group"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#group OktaAuthBackend#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#id OktaAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.String

Maximum duration after which authentication will be expired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#max_ttl OktaAuthBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#namespace OktaAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.path"></a>

- *Type:* java.lang.String

path to mount the backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#path OktaAuthBackend#path}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.token"></a>

- *Type:* java.lang.String

The Okta API token.

This is required to query Okta for user group membership. If this is not supplied only locally configured groups will be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#token OktaAuthBackend#token}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Duration after which authentication will be expired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#ttl OktaAuthBackend#ttl}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.Initializer.parameter.user"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#user OktaAuthBackend#user}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBypassOktaMfa">resetBypassOktaMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetUser">resetUser</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putGroup` <a name="putGroup" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup"></a>

```java
public void putGroup(IResolvable OR java.util.List<OktaAuthBackendGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>>

---

##### `putUser` <a name="putUser" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser"></a>

```java
public void putUser(IResolvable OR java.util.List<OktaAuthBackendUser> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.putUser.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>>

---

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBaseUrl"></a>

```java
public void resetBaseUrl()
```

##### `resetBypassOktaMfa` <a name="resetBypassOktaMfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetBypassOktaMfa"></a>

```java
public void resetBypassOktaMfa()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetDisableRemount"></a>

```java
public void resetDisableRemount()
```

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetId"></a>

```java
public void resetId()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetPath"></a>

```java
public void resetPath()
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetToken"></a>

```java
public void resetToken()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.resetUser"></a>

```java
public void resetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackend;

OktaAuthBackend.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackend;

OktaAuthBackend.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackend;

OktaAuthBackend.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.group">group</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList">OktaAuthBackendGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.user">user</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList">OktaAuthBackendUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrlInput">baseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfaInput">bypassOktaMfaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.groupInput">groupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.userInput">userInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfa">bypassOktaMfa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.group"></a>

```java
public OktaAuthBackendGroupList getGroup();
```

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList">OktaAuthBackendGroupList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.user"></a>

```java
public OktaAuthBackendUserList getUser();
```

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList">OktaAuthBackendUserList</a>

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrlInput"></a>

```java
public java.lang.String getBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `bypassOktaMfaInput`<sup>Optional</sup> <a name="bypassOktaMfaInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfaInput"></a>

```java
public java.lang.Object getBypassOktaMfaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemountInput"></a>

```java
public java.lang.Object getDisableRemountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.groupInput"></a>

```java
public java.lang.Object getGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtlInput"></a>

```java
public java.lang.String getMaxTtlInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.userInput"></a>

```java
public java.lang.Object getUserInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>>

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

---

##### `bypassOktaMfa`<sup>Required</sup> <a name="bypassOktaMfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.bypassOktaMfa"></a>

```java
public java.lang.Object getBypassOktaMfa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackend.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OktaAuthBackendConfig <a name="OktaAuthBackendConfig" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackendConfig;

OktaAuthBackendConfig.builder()
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
    .organization(java.lang.String)
//  .baseUrl(java.lang.String)
//  .bypassOktaMfa(java.lang.Boolean)
//  .bypassOktaMfa(IResolvable)
//  .description(java.lang.String)
//  .disableRemount(java.lang.Boolean)
//  .disableRemount(IResolvable)
//  .group(IResolvable)
//  .group(java.util.List<OktaAuthBackendGroup>)
//  .id(java.lang.String)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .path(java.lang.String)
//  .token(java.lang.String)
//  .ttl(java.lang.String)
//  .user(IResolvable)
//  .user(java.util.List<OktaAuthBackendUser>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | The Okta organization. This will be the first part of the url https://XXX.okta.com. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.baseUrl">baseUrl</a></code> | <code>java.lang.String</code> | The Okta url. Examples: oktapreview.com, okta.com (default). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.bypassOktaMfa">bypassOktaMfa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, requests by Okta for a MFA check will be bypassed. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.group">group</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#group OktaAuthBackend#group}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#id OktaAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | Maximum duration after which authentication will be expired. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.path">path</a></code> | <code>java.lang.String</code> | path to mount the backend. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.token">token</a></code> | <code>java.lang.String</code> | The Okta API token. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Duration after which authentication will be expired. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.user">user</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#user OktaAuthBackend#user}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The Okta organization. This will be the first part of the url https://XXX.okta.com.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#organization OktaAuthBackend#organization}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.baseUrl"></a>

```java
public java.lang.String getBaseUrl();
```

- *Type:* java.lang.String

The Okta url. Examples: oktapreview.com, okta.com (default).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#base_url OktaAuthBackend#base_url}

---

##### `bypassOktaMfa`<sup>Optional</sup> <a name="bypassOktaMfa" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.bypassOktaMfa"></a>

```java
public java.lang.Object getBypassOktaMfa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, requests by Okta for a MFA check will be bypassed.

This also disallows certain status checks on the account, such as whether the password is expired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#bypass_okta_mfa OktaAuthBackend#bypass_okta_mfa}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the auth backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#description OktaAuthBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.disableRemount"></a>

```java
public java.lang.Object getDisableRemount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#disable_remount OktaAuthBackend#disable_remount}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.group"></a>

```java
public java.lang.Object getGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#group OktaAuthBackend#group}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#id OktaAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

Maximum duration after which authentication will be expired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#max_ttl OktaAuthBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#namespace OktaAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

path to mount the backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#path OktaAuthBackend#path}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

The Okta API token.

This is required to query Okta for user group membership. If this is not supplied only locally configured groups will be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#token OktaAuthBackend#token}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Duration after which authentication will be expired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#ttl OktaAuthBackend#ttl}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendConfig.property.user"></a>

```java
public java.lang.Object getUser();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#user OktaAuthBackend#user}.

---

### OktaAuthBackendGroup <a name="OktaAuthBackendGroup" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackendGroup;

OktaAuthBackendGroup.builder()
//  .groupName(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#group_name OktaAuthBackend#group_name}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#policies OktaAuthBackend#policies}. |

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#group_name OktaAuthBackend#group_name}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#policies OktaAuthBackend#policies}.

---

### OktaAuthBackendUser <a name="OktaAuthBackendUser" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackendUser;

OktaAuthBackendUser.builder()
//  .groups(java.util.List<java.lang.String>)
//  .policies(java.util.List<java.lang.String>)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#groups OktaAuthBackend#groups}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#policies OktaAuthBackend#policies}. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#username OktaAuthBackend#username}. |

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#groups OktaAuthBackend#groups}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#policies OktaAuthBackend#policies}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/okta_auth_backend#username OktaAuthBackend#username}.

---

## Classes <a name="Classes" id="Classes"></a>

### OktaAuthBackendGroupList <a name="OktaAuthBackendGroupList" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackendGroupList;

new OktaAuthBackendGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get"></a>

```java
public OktaAuthBackendGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a>>

---


### OktaAuthBackendGroupOutputReference <a name="OktaAuthBackendGroupOutputReference" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackendGroupOutputReference;

new OktaAuthBackendGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupName` <a name="resetGroupName" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetGroupName"></a>

```java
public void resetGroupName()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.resetPolicies"></a>

```java
public void resetPolicies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendGroup">OktaAuthBackendGroup</a> OR com.hashicorp.cdktf.IResolvable

---


### OktaAuthBackendUserList <a name="OktaAuthBackendUserList" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackendUserList;

new OktaAuthBackendUserList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get"></a>

```java
public OktaAuthBackendUserOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a>>

---


### OktaAuthBackendUserOutputReference <a name="OktaAuthBackendUserOutputReference" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.okta_auth_backend.OktaAuthBackendUserOutputReference;

new OktaAuthBackendUserOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroups` <a name="resetGroups" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetGroups"></a>

```java
public void resetGroups()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groupsInput">groupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groupsInput"></a>

```java
public java.util.List<java.lang.String> getGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUserOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.oktaAuthBackend.OktaAuthBackendUser">OktaAuthBackendUser</a> OR com.hashicorp.cdktf.IResolvable

---



