# `vault_aws_auth_backend_role_tag`

Refer to the Terraform Registory for docs: [`vault_aws_auth_backend_role_tag`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag).

# `awsAuthBackendRoleTag` Submodule <a name="`awsAuthBackendRoleTag` Submodule" id="@cdktf/provider-vault.awsAuthBackendRoleTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRoleTag <a name="AwsAuthBackendRoleTag" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag vault_aws_auth_backend_role_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_role_tag.AwsAuthBackendRoleTag;

AwsAuthBackendRoleTag.Builder.create(Construct scope, java.lang.String id)
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
//  .allowInstanceMigration(java.lang.Boolean)
//  .allowInstanceMigration(IResolvable)
//  .backend(java.lang.String)
//  .disallowReauthentication(java.lang.Boolean)
//  .disallowReauthentication(IResolvable)
//  .id(java.lang.String)
//  .instanceId(java.lang.String)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.allowInstanceMigration">allowInstanceMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows migration of the underlying instance where the client resides. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | AWS auth backend to read tags from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.disallowReauthentication">disallowReauthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only allow a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Instance ID for which this tag is intended. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | The maximum allowed lifetime of tokens issued using this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Policies to be associated with the tag. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#role AwsAuthBackendRoleTag#role}

---

##### `allowInstanceMigration`<sup>Optional</sup> <a name="allowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.allowInstanceMigration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows migration of the underlying instance where the client resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#allow_instance_migration AwsAuthBackendRoleTag#allow_instance_migration}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

AWS auth backend to read tags from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#backend AwsAuthBackendRoleTag#backend}

---

##### `disallowReauthentication`<sup>Optional</sup> <a name="disallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.disallowReauthentication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only allow a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#disallow_reauthentication AwsAuthBackendRoleTag#disallow_reauthentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Instance ID for which this tag is intended.

The created tag can only be used by the instance with the given ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#instance_id AwsAuthBackendRoleTag#instance_id}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.String

The maximum allowed lifetime of tokens issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#max_ttl AwsAuthBackendRoleTag#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#namespace AwsAuthBackendRoleTag#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

Policies to be associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#policies AwsAuthBackendRoleTag#policies}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetAllowInstanceMigration">resetAllowInstanceMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetDisallowReauthentication">resetDisallowReauthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowInstanceMigration` <a name="resetAllowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetAllowInstanceMigration"></a>

```java
public void resetAllowInstanceMigration()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetDisallowReauthentication` <a name="resetDisallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetDisallowReauthentication"></a>

```java
public void resetDisallowReauthentication()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.resetPolicies"></a>

```java
public void resetPolicies()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_role_tag.AwsAuthBackendRoleTag;

AwsAuthBackendRoleTag.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_role_tag.AwsAuthBackendRoleTag;

AwsAuthBackendRoleTag.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_role_tag.AwsAuthBackendRoleTag;

AwsAuthBackendRoleTag.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigrationInput">allowInstanceMigrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthenticationInput">disallowReauthenticationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigration">allowInstanceMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthentication">disallowReauthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `allowInstanceMigrationInput`<sup>Optional</sup> <a name="allowInstanceMigrationInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigrationInput"></a>

```java
public java.lang.Object getAllowInstanceMigrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `disallowReauthenticationInput`<sup>Optional</sup> <a name="disallowReauthenticationInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthenticationInput"></a>

```java
public java.lang.Object getDisallowReauthenticationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtlInput"></a>

```java
public java.lang.String getMaxTtlInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `allowInstanceMigration`<sup>Required</sup> <a name="allowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.allowInstanceMigration"></a>

```java
public java.lang.Object getAllowInstanceMigration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `disallowReauthentication`<sup>Required</sup> <a name="disallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.disallowReauthentication"></a>

```java
public java.lang.Object getDisallowReauthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTag.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoleTagConfig <a name="AwsAuthBackendRoleTagConfig" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_role_tag.AwsAuthBackendRoleTagConfig;

AwsAuthBackendRoleTagConfig.builder()
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
//  .allowInstanceMigration(java.lang.Boolean)
//  .allowInstanceMigration(IResolvable)
//  .backend(java.lang.String)
//  .disallowReauthentication(java.lang.Boolean)
//  .disallowReauthentication(IResolvable)
//  .id(java.lang.String)
//  .instanceId(java.lang.String)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.role">role</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.allowInstanceMigration">allowInstanceMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Allows migration of the underlying instance where the client resides. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | AWS auth backend to read tags from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.disallowReauthentication">disallowReauthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Only allow a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Instance ID for which this tag is intended. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | The maximum allowed lifetime of tokens issued using this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Policies to be associated with the tag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#role AwsAuthBackendRoleTag#role}

---

##### `allowInstanceMigration`<sup>Optional</sup> <a name="allowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.allowInstanceMigration"></a>

```java
public java.lang.Object getAllowInstanceMigration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Allows migration of the underlying instance where the client resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#allow_instance_migration AwsAuthBackendRoleTag#allow_instance_migration}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

AWS auth backend to read tags from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#backend AwsAuthBackendRoleTag#backend}

---

##### `disallowReauthentication`<sup>Optional</sup> <a name="disallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.disallowReauthentication"></a>

```java
public java.lang.Object getDisallowReauthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Only allow a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#disallow_reauthentication AwsAuthBackendRoleTag#disallow_reauthentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#id AwsAuthBackendRoleTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Instance ID for which this tag is intended.

The created tag can only be used by the instance with the given ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#instance_id AwsAuthBackendRoleTag#instance_id}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

The maximum allowed lifetime of tokens issued using this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#max_ttl AwsAuthBackendRoleTag#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#namespace AwsAuthBackendRoleTag#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.awsAuthBackendRoleTag.AwsAuthBackendRoleTagConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

Policies to be associated with the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/aws_auth_backend_role_tag#policies AwsAuthBackendRoleTag#policies}

---



