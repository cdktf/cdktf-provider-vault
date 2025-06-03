# `approleAuthBackendRoleSecretId` Submodule <a name="`approleAuthBackendRoleSecretId` Submodule" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendRoleSecretId <a name="ApproleAuthBackendRoleSecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role_secret_id.ApproleAuthBackendRoleSecretId;

ApproleAuthBackendRoleSecretId.Builder.create(Construct scope, java.lang.String id)
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
    .roleName(java.lang.String)
//  .backend(java.lang.String)
//  .cidrList(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .metadata(java.lang.String)
//  .namespace(java.lang.String)
//  .numUses(java.lang.Number)
//  .secretId(java.lang.String)
//  .ttl(java.lang.Number)
//  .withWrappedAccessor(java.lang.Boolean)
//  .withWrappedAccessor(IResolvable)
//  .wrappingTtl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.cidrList">cidrList</a></code> | <code>java.util.List<java.lang.String></code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.metadata">metadata</a></code> | <code>java.lang.String</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.numUses">numUses</a></code> | <code>java.lang.Number</code> | The number of uses for the secret-id. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | The SecretID to be managed. If not specified, Vault auto-generates one. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL duration of the SecretID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.withWrappedAccessor">withWrappedAccessor</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use the wrapped secret-id accessor as the id of this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.wrappingTtl">wrappingTtl</a></code> | <code>java.lang.String</code> | The TTL duration of the wrapped SecretID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#role_name ApproleAuthBackendRoleSecretId#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#backend ApproleAuthBackendRoleSecretId#backend}

---

##### `cidrList`<sup>Optional</sup> <a name="cidrList" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.cidrList"></a>

- *Type:* java.util.List<java.lang.String>

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#cidr_list ApproleAuthBackendRoleSecretId#cidr_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.metadata"></a>

- *Type:* java.lang.String

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#metadata ApproleAuthBackendRoleSecretId#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#namespace ApproleAuthBackendRoleSecretId#namespace}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.numUses"></a>

- *Type:* java.lang.Number

The number of uses for the secret-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#num_uses ApproleAuthBackendRoleSecretId#num_uses}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

The SecretID to be managed. If not specified, Vault auto-generates one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#secret_id ApproleAuthBackendRoleSecretId#secret_id}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

The TTL duration of the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#ttl ApproleAuthBackendRoleSecretId#ttl}

---

##### `withWrappedAccessor`<sup>Optional</sup> <a name="withWrappedAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.withWrappedAccessor"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use the wrapped secret-id accessor as the id of this resource.

If false, a fresh secret-id will be regenerated whenever the wrapping token is expired or invalidated through unwrapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#with_wrapped_accessor ApproleAuthBackendRoleSecretId#with_wrapped_accessor}

---

##### `wrappingTtl`<sup>Optional</sup> <a name="wrappingTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.Initializer.parameter.wrappingTtl"></a>

- *Type:* java.lang.String

The TTL duration of the wrapped SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#wrapping_ttl ApproleAuthBackendRoleSecretId#wrapping_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetCidrList">resetCidrList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetNumUses">resetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWithWrappedAccessor">resetWithWrappedAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWrappingTtl">resetWrappingTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetCidrList` <a name="resetCidrList" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetCidrList"></a>

```java
public void resetCidrList()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNumUses` <a name="resetNumUses" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetNumUses"></a>

```java
public void resetNumUses()
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetSecretId"></a>

```java
public void resetSecretId()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetWithWrappedAccessor` <a name="resetWithWrappedAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWithWrappedAccessor"></a>

```java
public void resetWithWrappedAccessor()
```

##### `resetWrappingTtl` <a name="resetWrappingTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.resetWrappingTtl"></a>

```java
public void resetWrappingTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApproleAuthBackendRoleSecretId resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role_secret_id.ApproleAuthBackendRoleSecretId;

ApproleAuthBackendRoleSecretId.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role_secret_id.ApproleAuthBackendRoleSecretId;

ApproleAuthBackendRoleSecretId.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role_secret_id.ApproleAuthBackendRoleSecretId;

ApproleAuthBackendRoleSecretId.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role_secret_id.ApproleAuthBackendRoleSecretId;

ApproleAuthBackendRoleSecretId.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApproleAuthBackendRoleSecretId.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApproleAuthBackendRoleSecretId resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApproleAuthBackendRoleSecretId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApproleAuthBackendRoleSecretId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApproleAuthBackendRoleSecretId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingAccessor">wrappingAccessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingToken">wrappingToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrListInput">cidrListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadataInput">metadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.numUsesInput">numUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessorInput">withWrappedAccessorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtlInput">wrappingTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrList">cidrList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadata">metadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.numUses">numUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessor">withWrappedAccessor</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtl">wrappingTtl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `wrappingAccessor`<sup>Required</sup> <a name="wrappingAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingAccessor"></a>

```java
public java.lang.String getWrappingAccessor();
```

- *Type:* java.lang.String

---

##### `wrappingToken`<sup>Required</sup> <a name="wrappingToken" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingToken"></a>

```java
public java.lang.String getWrappingToken();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `cidrListInput`<sup>Optional</sup> <a name="cidrListInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrListInput"></a>

```java
public java.util.List<java.lang.String> getCidrListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadataInput"></a>

```java
public java.lang.String getMetadataInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `numUsesInput`<sup>Optional</sup> <a name="numUsesInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.numUsesInput"></a>

```java
public java.lang.Number getNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `withWrappedAccessorInput`<sup>Optional</sup> <a name="withWrappedAccessorInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessorInput"></a>

```java
public java.lang.Object getWithWrappedAccessorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `wrappingTtlInput`<sup>Optional</sup> <a name="wrappingTtlInput" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtlInput"></a>

```java
public java.lang.String getWrappingTtlInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `cidrList`<sup>Required</sup> <a name="cidrList" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.cidrList"></a>

```java
public java.util.List<java.lang.String> getCidrList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `numUses`<sup>Required</sup> <a name="numUses" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.numUses"></a>

```java
public java.lang.Number getNumUses();
```

- *Type:* java.lang.Number

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `withWrappedAccessor`<sup>Required</sup> <a name="withWrappedAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.withWrappedAccessor"></a>

```java
public java.lang.Object getWithWrappedAccessor();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `wrappingTtl`<sup>Required</sup> <a name="wrappingTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.wrappingTtl"></a>

```java
public java.lang.String getWrappingTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretId.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendRoleSecretIdConfig <a name="ApproleAuthBackendRoleSecretIdConfig" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role_secret_id.ApproleAuthBackendRoleSecretIdConfig;

ApproleAuthBackendRoleSecretIdConfig.builder()
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
    .roleName(java.lang.String)
//  .backend(java.lang.String)
//  .cidrList(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .metadata(java.lang.String)
//  .namespace(java.lang.String)
//  .numUses(java.lang.Number)
//  .secretId(java.lang.String)
//  .ttl(java.lang.Number)
//  .withWrappedAccessor(java.lang.Boolean)
//  .withWrappedAccessor(IResolvable)
//  .wrappingTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.cidrList">cidrList</a></code> | <code>java.util.List<java.lang.String></code> | List of CIDR blocks that can log in using the SecretID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.metadata">metadata</a></code> | <code>java.lang.String</code> | JSON-encoded secret data to write. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.numUses">numUses</a></code> | <code>java.lang.Number</code> | The number of uses for the secret-id. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | The SecretID to be managed. If not specified, Vault auto-generates one. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | The TTL duration of the SecretID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.withWrappedAccessor">withWrappedAccessor</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use the wrapped secret-id accessor as the id of this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.wrappingTtl">wrappingTtl</a></code> | <code>java.lang.String</code> | The TTL duration of the wrapped SecretID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#role_name ApproleAuthBackendRoleSecretId#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#backend ApproleAuthBackendRoleSecretId#backend}

---

##### `cidrList`<sup>Optional</sup> <a name="cidrList" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.cidrList"></a>

```java
public java.util.List<java.lang.String> getCidrList();
```

- *Type:* java.util.List<java.lang.String>

List of CIDR blocks that can log in using the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#cidr_list ApproleAuthBackendRoleSecretId#cidr_list}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#id ApproleAuthBackendRoleSecretId#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.metadata"></a>

```java
public java.lang.String getMetadata();
```

- *Type:* java.lang.String

JSON-encoded secret data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#metadata ApproleAuthBackendRoleSecretId#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#namespace ApproleAuthBackendRoleSecretId#namespace}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.numUses"></a>

```java
public java.lang.Number getNumUses();
```

- *Type:* java.lang.Number

The number of uses for the secret-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#num_uses ApproleAuthBackendRoleSecretId#num_uses}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

The SecretID to be managed. If not specified, Vault auto-generates one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#secret_id ApproleAuthBackendRoleSecretId#secret_id}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

The TTL duration of the SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#ttl ApproleAuthBackendRoleSecretId#ttl}

---

##### `withWrappedAccessor`<sup>Optional</sup> <a name="withWrappedAccessor" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.withWrappedAccessor"></a>

```java
public java.lang.Object getWithWrappedAccessor();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use the wrapped secret-id accessor as the id of this resource.

If false, a fresh secret-id will be regenerated whenever the wrapping token is expired or invalidated through unwrapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#with_wrapped_accessor ApproleAuthBackendRoleSecretId#with_wrapped_accessor}

---

##### `wrappingTtl`<sup>Optional</sup> <a name="wrappingTtl" id="@cdktf/provider-vault.approleAuthBackendRoleSecretId.ApproleAuthBackendRoleSecretIdConfig.property.wrappingTtl"></a>

```java
public java.lang.String getWrappingTtl();
```

- *Type:* java.lang.String

The TTL duration of the wrapped SecretID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/approle_auth_backend_role_secret_id#wrapping_ttl ApproleAuthBackendRoleSecretId#wrapping_ttl}

---



