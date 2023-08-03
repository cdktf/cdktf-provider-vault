# `vault_mongodbatlas_secret_role`

Refer to the Terraform Registory for docs: [`vault_mongodbatlas_secret_role`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role).

# `mongodbatlasSecretRole` Submodule <a name="`mongodbatlasSecretRole` Submodule" id="@cdktf/provider-vault.mongodbatlasSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MongodbatlasSecretRole <a name="MongodbatlasSecretRole" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role vault_mongodbatlas_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.mongodbatlas_secret_role.MongodbatlasSecretRole;

MongodbatlasSecretRole.Builder.create(Construct scope, java.lang.String id)
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
    .mount(java.lang.String)
    .name(java.lang.String)
    .roles(java.util.List<java.lang.String>)
//  .cidrBlocks(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .organizationId(java.lang.String)
//  .projectId(java.lang.String)
//  .projectRoles(java.util.List<java.lang.String>)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where MongoDB Atlas secret backend is mounted. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | List of roles that the API Key needs to have. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Whitelist entry in CIDR notation to be added for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | IP address to be added to the whitelist for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.organizationId">organizationId</a></code> | <code>java.lang.String</code> | ID for the organization to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | ID for the project to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.projectRoles">projectRoles</a></code> | <code>java.util.List<java.lang.String></code> | Roles assigned when an org API key is assigned to a project API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Duration in seconds after which the issued credential should expire. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where MongoDB Atlas secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#mount MongodbatlasSecretRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#name MongodbatlasSecretRole#name}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.roles"></a>

- *Type:* java.util.List<java.lang.String>

List of roles that the API Key needs to have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#roles MongodbatlasSecretRole#roles}

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.cidrBlocks"></a>

- *Type:* java.util.List<java.lang.String>

Whitelist entry in CIDR notation to be added for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#cidr_blocks MongodbatlasSecretRole#cidr_blocks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.ipAddresses"></a>

- *Type:* java.util.List<java.lang.String>

IP address to be added to the whitelist for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#ip_addresses MongodbatlasSecretRole#ip_addresses}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.String

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#max_ttl MongodbatlasSecretRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#namespace MongodbatlasSecretRole#namespace}

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.organizationId"></a>

- *Type:* java.lang.String

ID for the organization to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#organization_id MongodbatlasSecretRole#organization_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

ID for the project to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#project_id MongodbatlasSecretRole#project_id}

---

##### `projectRoles`<sup>Optional</sup> <a name="projectRoles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.projectRoles"></a>

- *Type:* java.util.List<java.lang.String>

Roles assigned when an org API key is assigned to a project API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#project_roles MongodbatlasSecretRole#project_roles}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Duration in seconds after which the issued credential should expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#ttl MongodbatlasSecretRole#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOrganizationId">resetOrganizationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectRoles">resetProjectRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetCidrBlocks"></a>

```java
public void resetCidrBlocks()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetIpAddresses"></a>

```java
public void resetIpAddresses()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOrganizationId` <a name="resetOrganizationId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetOrganizationId"></a>

```java
public void resetOrganizationId()
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetProjectRoles` <a name="resetProjectRoles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetProjectRoles"></a>

```java
public void resetProjectRoles()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.mongodbatlas_secret_role.MongodbatlasSecretRole;

MongodbatlasSecretRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.mongodbatlas_secret_role.MongodbatlasSecretRole;

MongodbatlasSecretRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.mongodbatlas_secret_role.MongodbatlasSecretRole;

MongodbatlasSecretRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddressesInput">ipAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationIdInput">organizationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRolesInput">projectRolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.rolesInput">rolesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRoles">projectRoles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocksInput"></a>

```java
public java.util.List<java.lang.String> getCidrBlocksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtlInput"></a>

```java
public java.lang.String getMaxTtlInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `organizationIdInput`<sup>Optional</sup> <a name="organizationIdInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationIdInput"></a>

```java
public java.lang.String getOrganizationIdInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `projectRolesInput`<sup>Optional</sup> <a name="projectRolesInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRolesInput"></a>

```java
public java.util.List<java.lang.String> getProjectRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.rolesInput"></a>

```java
public java.util.List<java.lang.String> getRolesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.cidrBlocks"></a>

```java
public java.util.List<java.lang.String> getCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `projectRoles`<sup>Required</sup> <a name="projectRoles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.projectRoles"></a>

```java
public java.util.List<java.lang.String> getProjectRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MongodbatlasSecretRoleConfig <a name="MongodbatlasSecretRoleConfig" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.mongodbatlas_secret_role.MongodbatlasSecretRoleConfig;

MongodbatlasSecretRoleConfig.builder()
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
    .mount(java.lang.String)
    .name(java.lang.String)
    .roles(java.util.List<java.lang.String>)
//  .cidrBlocks(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .organizationId(java.lang.String)
//  .projectId(java.lang.String)
//  .projectRoles(java.util.List<java.lang.String>)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where MongoDB Atlas secret backend is mounted. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.roles">roles</a></code> | <code>java.util.List<java.lang.String></code> | List of roles that the API Key needs to have. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.cidrBlocks">cidrBlocks</a></code> | <code>java.util.List<java.lang.String></code> | Whitelist entry in CIDR notation to be added for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | IP address to be added to the whitelist for the API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | The maximum allowed lifetime of credentials issued using this role. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.organizationId">organizationId</a></code> | <code>java.lang.String</code> | ID for the organization to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | ID for the project to which the target API Key belongs. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectRoles">projectRoles</a></code> | <code>java.util.List<java.lang.String></code> | Roles assigned when an org API key is assigned to a project API key. |
| <code><a href="#@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Duration in seconds after which the issued credential should expire. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where MongoDB Atlas secret backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#mount MongodbatlasSecretRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#name MongodbatlasSecretRole#name}

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.roles"></a>

```java
public java.util.List<java.lang.String> getRoles();
```

- *Type:* java.util.List<java.lang.String>

List of roles that the API Key needs to have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#roles MongodbatlasSecretRole#roles}

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.cidrBlocks"></a>

```java
public java.util.List<java.lang.String> getCidrBlocks();
```

- *Type:* java.util.List<java.lang.String>

Whitelist entry in CIDR notation to be added for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#cidr_blocks MongodbatlasSecretRole#cidr_blocks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#id MongodbatlasSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

IP address to be added to the whitelist for the API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#ip_addresses MongodbatlasSecretRole#ip_addresses}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

The maximum allowed lifetime of credentials issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#max_ttl MongodbatlasSecretRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#namespace MongodbatlasSecretRole#namespace}

---

##### `organizationId`<sup>Optional</sup> <a name="organizationId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.organizationId"></a>

```java
public java.lang.String getOrganizationId();
```

- *Type:* java.lang.String

ID for the organization to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#organization_id MongodbatlasSecretRole#organization_id}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

ID for the project to which the target API Key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#project_id MongodbatlasSecretRole#project_id}

---

##### `projectRoles`<sup>Optional</sup> <a name="projectRoles" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.projectRoles"></a>

```java
public java.util.List<java.lang.String> getProjectRoles();
```

- *Type:* java.util.List<java.lang.String>

Roles assigned when an org API key is assigned to a project API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#project_roles MongodbatlasSecretRole#project_roles}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.mongodbatlasSecretRole.MongodbatlasSecretRoleConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Duration in seconds after which the issued credential should expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/mongodbatlas_secret_role#ttl MongodbatlasSecretRole#ttl}

---



