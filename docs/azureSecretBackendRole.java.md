# `azureSecretBackendRole` Submodule <a name="`azureSecretBackendRole` Submodule" id="@cdktf/provider-vault.azureSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzureSecretBackendRole <a name="AzureSecretBackendRole" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role vault_azure_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRole;

AzureSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
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
    .role(java.lang.String)
//  .applicationObjectId(java.lang.String)
//  .azureGroups(IResolvable)
//  .azureGroups(java.util.List<AzureSecretBackendRoleAzureGroups>)
//  .azureRoles(IResolvable)
//  .azureRoles(java.util.List<AzureSecretBackendRoleAzureRoles>)
//  .backend(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .permanentlyDelete(java.lang.Boolean)
//  .permanentlyDelete(IResolvable)
//  .signInAudience(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Name of the role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.applicationObjectId">applicationObjectId</a></code> | <code>java.lang.String</code> | Application Object ID for an existing service principal that will be used instead of creating dynamic service principals. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.azureGroups">azureGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>></code> | azure_groups block. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.azureRoles">azureRoles</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>></code> | azure_roles block. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.permanentlyDelete">permanentlyDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the applications and service principals created by Vault will be permanently deleted when the corresponding leases expire. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | Specifies the security principal types that are allowed to sign in to the application. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Comma-separated strings of Azure tags to attach to an application. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Name of the role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#role AzureSecretBackendRole#role}

---

##### `applicationObjectId`<sup>Optional</sup> <a name="applicationObjectId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.applicationObjectId"></a>

- *Type:* java.lang.String

Application Object ID for an existing service principal that will be used instead of creating dynamic service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#application_object_id AzureSecretBackendRole#application_object_id}

---

##### `azureGroups`<sup>Optional</sup> <a name="azureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.azureGroups"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>>

azure_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#azure_groups AzureSecretBackendRole#azure_groups}

---

##### `azureRoles`<sup>Optional</sup> <a name="azureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.azureRoles"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>>

azure_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#azure_roles AzureSecretBackendRole#azure_roles}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#backend AzureSecretBackendRole#backend}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#description AzureSecretBackendRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#max_ttl AzureSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#namespace AzureSecretBackendRole#namespace}

---

##### `permanentlyDelete`<sup>Optional</sup> <a name="permanentlyDelete" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.permanentlyDelete"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the applications and service principals created by Vault will be permanently deleted when the corresponding leases expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#permanently_delete AzureSecretBackendRole#permanently_delete}

---

##### `signInAudience`<sup>Optional</sup> <a name="signInAudience" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.signInAudience"></a>

- *Type:* java.lang.String

Specifies the security principal types that are allowed to sign in to the application.

Valid values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount, PersonalMicrosoftAccount

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#sign_in_audience AzureSecretBackendRole#sign_in_audience}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Comma-separated strings of Azure tags to attach to an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#tags AzureSecretBackendRole#tags}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#ttl AzureSecretBackendRole#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups">putAzureGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles">putAzureRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetApplicationObjectId">resetApplicationObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureGroups">resetAzureGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureRoles">resetAzureRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetPermanentlyDelete">resetPermanentlyDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetSignInAudience">resetSignInAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureGroups` <a name="putAzureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups"></a>

```java
public void putAzureGroups(IResolvable OR java.util.List<AzureSecretBackendRoleAzureGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureGroups.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>>

---

##### `putAzureRoles` <a name="putAzureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles"></a>

```java
public void putAzureRoles(IResolvable OR java.util.List<AzureSecretBackendRoleAzureRoles> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.putAzureRoles.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>>

---

##### `resetApplicationObjectId` <a name="resetApplicationObjectId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetApplicationObjectId"></a>

```java
public void resetApplicationObjectId()
```

##### `resetAzureGroups` <a name="resetAzureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureGroups"></a>

```java
public void resetAzureGroups()
```

##### `resetAzureRoles` <a name="resetAzureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetAzureRoles"></a>

```java
public void resetAzureRoles()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPermanentlyDelete` <a name="resetPermanentlyDelete" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetPermanentlyDelete"></a>

```java
public void resetPermanentlyDelete()
```

##### `resetSignInAudience` <a name="resetSignInAudience" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetSignInAudience"></a>

```java
public void resetSignInAudience()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTags"></a>

```java
public void resetTags()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AzureSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRole;

AzureSecretBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRole;

AzureSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRole;

AzureSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRole;

AzureSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AzureSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AzureSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AzureSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AzureSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AzureSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroups">azureGroups</a></code> | <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList">AzureSecretBackendRoleAzureGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRoles">azureRoles</a></code> | <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList">AzureSecretBackendRoleAzureRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectIdInput">applicationObjectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroupsInput">azureGroupsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRolesInput">azureRolesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.permanentlyDeleteInput">permanentlyDeleteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.signInAudienceInput">signInAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectId">applicationObjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.permanentlyDelete">permanentlyDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `azureGroups`<sup>Required</sup> <a name="azureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroups"></a>

```java
public AzureSecretBackendRoleAzureGroupsList getAzureGroups();
```

- *Type:* <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList">AzureSecretBackendRoleAzureGroupsList</a>

---

##### `azureRoles`<sup>Required</sup> <a name="azureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRoles"></a>

```java
public AzureSecretBackendRoleAzureRolesList getAzureRoles();
```

- *Type:* <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList">AzureSecretBackendRoleAzureRolesList</a>

---

##### `applicationObjectIdInput`<sup>Optional</sup> <a name="applicationObjectIdInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectIdInput"></a>

```java
public java.lang.String getApplicationObjectIdInput();
```

- *Type:* java.lang.String

---

##### `azureGroupsInput`<sup>Optional</sup> <a name="azureGroupsInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureGroupsInput"></a>

```java
public java.lang.Object getAzureGroupsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>>

---

##### `azureRolesInput`<sup>Optional</sup> <a name="azureRolesInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.azureRolesInput"></a>

```java
public java.lang.Object getAzureRolesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtlInput"></a>

```java
public java.lang.String getMaxTtlInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `permanentlyDeleteInput`<sup>Optional</sup> <a name="permanentlyDeleteInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.permanentlyDeleteInput"></a>

```java
public java.lang.Object getPermanentlyDeleteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `signInAudienceInput`<sup>Optional</sup> <a name="signInAudienceInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.signInAudienceInput"></a>

```java
public java.lang.String getSignInAudienceInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `applicationObjectId`<sup>Required</sup> <a name="applicationObjectId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.applicationObjectId"></a>

```java
public java.lang.String getApplicationObjectId();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `permanentlyDelete`<sup>Required</sup> <a name="permanentlyDelete" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.permanentlyDelete"></a>

```java
public java.lang.Object getPermanentlyDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `signInAudience`<sup>Required</sup> <a name="signInAudience" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.signInAudience"></a>

```java
public java.lang.String getSignInAudience();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AzureSecretBackendRoleAzureGroups <a name="AzureSecretBackendRoleAzureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRoleAzureGroups;

AzureSecretBackendRoleAzureGroups.builder()
    .groupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.property.groupName">groupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#group_name AzureSecretBackendRole#group_name}. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#group_name AzureSecretBackendRole#group_name}.

---

### AzureSecretBackendRoleAzureRoles <a name="AzureSecretBackendRoleAzureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRoleAzureRoles;

AzureSecretBackendRoleAzureRoles.builder()
    .scope(java.lang.String)
//  .roleId(java.lang.String)
//  .roleName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#scope AzureSecretBackendRole#scope}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleId">roleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#role_id AzureSecretBackendRole#role_id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#role_name AzureSecretBackendRole#role_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#scope AzureSecretBackendRole#scope}.

---

##### `roleId`<sup>Optional</sup> <a name="roleId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#role_id AzureSecretBackendRole#role_id}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#role_name AzureSecretBackendRole#role_name}.

---

### AzureSecretBackendRoleConfig <a name="AzureSecretBackendRoleConfig" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRoleConfig;

AzureSecretBackendRoleConfig.builder()
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
    .role(java.lang.String)
//  .applicationObjectId(java.lang.String)
//  .azureGroups(IResolvable)
//  .azureGroups(java.util.List<AzureSecretBackendRoleAzureGroups>)
//  .azureRoles(IResolvable)
//  .azureRoles(java.util.List<AzureSecretBackendRoleAzureRoles>)
//  .backend(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .permanentlyDelete(java.lang.Boolean)
//  .permanentlyDelete(IResolvable)
//  .signInAudience(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.role">role</a></code> | <code>java.lang.String</code> | Name of the role to create. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.applicationObjectId">applicationObjectId</a></code> | <code>java.lang.String</code> | Application Object ID for an existing service principal that will be used instead of creating dynamic service principals. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureGroups">azureGroups</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>></code> | azure_groups block. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureRoles">azureRoles</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>></code> | azure_roles block. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.permanentlyDelete">permanentlyDelete</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether the applications and service principals created by Vault will be permanently deleted when the corresponding leases expire. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.signInAudience">signInAudience</a></code> | <code>java.lang.String</code> | Specifies the security principal types that are allowed to sign in to the application. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Comma-separated strings of Azure tags to attach to an application. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Human-friendly description of the mount for the backend. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the role to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#role AzureSecretBackendRole#role}

---

##### `applicationObjectId`<sup>Optional</sup> <a name="applicationObjectId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.applicationObjectId"></a>

```java
public java.lang.String getApplicationObjectId();
```

- *Type:* java.lang.String

Application Object ID for an existing service principal that will be used instead of creating dynamic service principals.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#application_object_id AzureSecretBackendRole#application_object_id}

---

##### `azureGroups`<sup>Optional</sup> <a name="azureGroups" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureGroups"></a>

```java
public java.lang.Object getAzureGroups();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>>

azure_groups block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#azure_groups AzureSecretBackendRole#azure_groups}

---

##### `azureRoles`<sup>Optional</sup> <a name="azureRoles" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.azureRoles"></a>

```java
public java.lang.Object getAzureRoles();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>>

azure_roles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#azure_roles AzureSecretBackendRole#azure_roles}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#backend AzureSecretBackendRole#backend}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#description AzureSecretBackendRole#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#max_ttl AzureSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#namespace AzureSecretBackendRole#namespace}

---

##### `permanentlyDelete`<sup>Optional</sup> <a name="permanentlyDelete" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.permanentlyDelete"></a>

```java
public java.lang.Object getPermanentlyDelete();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether the applications and service principals created by Vault will be permanently deleted when the corresponding leases expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#permanently_delete AzureSecretBackendRole#permanently_delete}

---

##### `signInAudience`<sup>Optional</sup> <a name="signInAudience" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.signInAudience"></a>

```java
public java.lang.String getSignInAudience();
```

- *Type:* java.lang.String

Specifies the security principal types that are allowed to sign in to the application.

Valid values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount, PersonalMicrosoftAccount

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#sign_in_audience AzureSecretBackendRole#sign_in_audience}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Comma-separated strings of Azure tags to attach to an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#tags AzureSecretBackendRole#tags}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/azure_secret_backend_role#ttl AzureSecretBackendRole#ttl}

---

## Classes <a name="Classes" id="Classes"></a>

### AzureSecretBackendRoleAzureGroupsList <a name="AzureSecretBackendRoleAzureGroupsList" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRoleAzureGroupsList;

new AzureSecretBackendRoleAzureGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get"></a>

```java
public AzureSecretBackendRoleAzureGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>>

---


### AzureSecretBackendRoleAzureGroupsOutputReference <a name="AzureSecretBackendRoleAzureGroupsOutputReference" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRoleAzureGroupsOutputReference;

new AzureSecretBackendRoleAzureGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.objectId">objectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.objectId"></a>

```java
public java.lang.String getObjectId();
```

- *Type:* java.lang.String

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupNameInput"></a>

```java
public java.lang.String getGroupNameInput();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroupsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureGroups">AzureSecretBackendRoleAzureGroups</a>

---


### AzureSecretBackendRoleAzureRolesList <a name="AzureSecretBackendRoleAzureRolesList" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRoleAzureRolesList;

new AzureSecretBackendRoleAzureRolesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get"></a>

```java
public AzureSecretBackendRoleAzureRolesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>>

---


### AzureSecretBackendRoleAzureRolesOutputReference <a name="AzureSecretBackendRoleAzureRolesOutputReference" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.azure_secret_backend_role.AzureSecretBackendRoleAzureRolesOutputReference;

new AzureSecretBackendRoleAzureRolesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleId">resetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleName">resetRoleName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleId` <a name="resetRoleId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleId"></a>

```java
public void resetRoleId()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.resetRoleName"></a>

```java
public void resetRoleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleIdInput">roleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleIdInput"></a>

```java
public java.lang.String getRoleIdInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRolesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.azureSecretBackendRole.AzureSecretBackendRoleAzureRoles">AzureSecretBackendRoleAzureRoles</a>

---



