# `vault_aws_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_aws_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role).

# `awsSecretBackendRole` Submodule <a name="`awsSecretBackendRole` Submodule" id="@cdktf/provider-vault.awsSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackendRole <a name="AwsSecretBackendRole" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role vault_aws_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend_role.AwsSecretBackendRole;

AwsSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
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
    .credentialType(java.lang.String)
    .name(java.lang.String)
//  .defaultStsTtl(java.lang.Number)
//  .iamGroups(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maxStsTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .permissionsBoundaryArn(java.lang.String)
//  .policyArns(java.util.List<java.lang.String>)
//  .policyDocument(java.lang.String)
//  .roleArns(java.util.List<java.lang.String>)
//  .userPath(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The path of the AWS Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Role credential type. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.defaultStsTtl">defaultStsTtl</a></code> | <code>java.lang.Number</code> | The default TTL in seconds for STS credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.iamGroups">iamGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list of IAM group names. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.maxStsTtl">maxStsTtl</a></code> | <code>java.lang.Number</code> | The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS Permissions Boundary to attach to IAM users created in the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | ARN for an existing IAM policy the role should use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | IAM policy the role should use in JSON format. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.roleArns">roleArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.userPath">userPath</a></code> | <code>java.lang.String</code> | The path for the user name. Valid only when credential_type is iam_user. Default is /. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The path of the AWS Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#backend AwsSecretBackendRole#backend}

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.credentialType"></a>

- *Type:* java.lang.String

Role credential type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#credential_type AwsSecretBackendRole#credential_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#name AwsSecretBackendRole#name}

---

##### `defaultStsTtl`<sup>Optional</sup> <a name="defaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.defaultStsTtl"></a>

- *Type:* java.lang.Number

The default TTL in seconds for STS credentials.

When a TTL is not specified when STS credentials are requested, and a default TTL is specified on the role, then this default TTL will be used. Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#default_sts_ttl AwsSecretBackendRole#default_sts_ttl}

---

##### `iamGroups`<sup>Optional</sup> <a name="iamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.iamGroups"></a>

- *Type:* java.util.List<java.lang.String>

A list of IAM group names.

IAM users generated against this vault role will be added to these IAM Groups. For a credential type of assumed_role or federation_token, the policies sent to the corresponding AWS call (sts:AssumeRole or sts:GetFederation) will be the policies from each group in iam_groups combined with the policy_document and policy_arns parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#iam_groups AwsSecretBackendRole#iam_groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxStsTtl`<sup>Optional</sup> <a name="maxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.maxStsTtl"></a>

- *Type:* java.lang.Number

The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl).

Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#max_sts_ttl AwsSecretBackendRole#max_sts_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#namespace AwsSecretBackendRole#namespace}

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.permissionsBoundaryArn"></a>

- *Type:* java.lang.String

The ARN of the AWS Permissions Boundary to attach to IAM users created in the role.

Valid only when credential_type is iam_user. If not specified, then no permissions boundary policy will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#permissions_boundary_arn AwsSecretBackendRole#permissions_boundary_arn}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.policyArns"></a>

- *Type:* java.util.List<java.lang.String>

ARN for an existing IAM policy the role should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#policy_arns AwsSecretBackendRole#policy_arns}

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.policyDocument"></a>

- *Type:* java.lang.String

IAM policy the role should use in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#policy_document AwsSecretBackendRole#policy_document}

---

##### `roleArns`<sup>Optional</sup> <a name="roleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.roleArns"></a>

- *Type:* java.util.List<java.lang.String>

ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#role_arns AwsSecretBackendRole#role_arns}

---

##### `userPath`<sup>Optional</sup> <a name="userPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.userPath"></a>

- *Type:* java.lang.String

The path for the user name. Valid only when credential_type is iam_user. Default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#user_path AwsSecretBackendRole#user_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetDefaultStsTtl">resetDefaultStsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamGroups">resetIamGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetMaxStsTtl">resetMaxStsTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPermissionsBoundaryArn">resetPermissionsBoundaryArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyArns">resetPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyDocument">resetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetRoleArns">resetRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetUserPath">resetUserPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDefaultStsTtl` <a name="resetDefaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetDefaultStsTtl"></a>

```java
public void resetDefaultStsTtl()
```

##### `resetIamGroups` <a name="resetIamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamGroups"></a>

```java
public void resetIamGroups()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetMaxStsTtl` <a name="resetMaxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetMaxStsTtl"></a>

```java
public void resetMaxStsTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPermissionsBoundaryArn` <a name="resetPermissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPermissionsBoundaryArn"></a>

```java
public void resetPermissionsBoundaryArn()
```

##### `resetPolicyArns` <a name="resetPolicyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyArns"></a>

```java
public void resetPolicyArns()
```

##### `resetPolicyDocument` <a name="resetPolicyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyDocument"></a>

```java
public void resetPolicyDocument()
```

##### `resetRoleArns` <a name="resetRoleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetRoleArns"></a>

```java
public void resetRoleArns()
```

##### `resetUserPath` <a name="resetUserPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetUserPath"></a>

```java
public void resetUserPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend_role.AwsSecretBackendRole;

AwsSecretBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend_role.AwsSecretBackendRole;

AwsSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend_role.AwsSecretBackendRole;

AwsSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtlInput">defaultStsTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroupsInput">iamGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtlInput">maxStsTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArnInput">permissionsBoundaryArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArnsInput">policyArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocumentInput">policyDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArnsInput">roleArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPathInput">userPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtl">defaultStsTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroups">iamGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtl">maxStsTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArns">roleArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPath">userPath</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `defaultStsTtlInput`<sup>Optional</sup> <a name="defaultStsTtlInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtlInput"></a>

```java
public java.lang.Number getDefaultStsTtlInput();
```

- *Type:* java.lang.Number

---

##### `iamGroupsInput`<sup>Optional</sup> <a name="iamGroupsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroupsInput"></a>

```java
public java.util.List<java.lang.String> getIamGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxStsTtlInput`<sup>Optional</sup> <a name="maxStsTtlInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtlInput"></a>

```java
public java.lang.Number getMaxStsTtlInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `permissionsBoundaryArnInput`<sup>Optional</sup> <a name="permissionsBoundaryArnInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArnInput"></a>

```java
public java.lang.String getPermissionsBoundaryArnInput();
```

- *Type:* java.lang.String

---

##### `policyArnsInput`<sup>Optional</sup> <a name="policyArnsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArnsInput"></a>

```java
public java.util.List<java.lang.String> getPolicyArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyDocumentInput`<sup>Optional</sup> <a name="policyDocumentInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocumentInput"></a>

```java
public java.lang.String getPolicyDocumentInput();
```

- *Type:* java.lang.String

---

##### `roleArnsInput`<sup>Optional</sup> <a name="roleArnsInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArnsInput"></a>

```java
public java.util.List<java.lang.String> getRoleArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userPathInput`<sup>Optional</sup> <a name="userPathInput" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPathInput"></a>

```java
public java.lang.String getUserPathInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `defaultStsTtl`<sup>Required</sup> <a name="defaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtl"></a>

```java
public java.lang.Number getDefaultStsTtl();
```

- *Type:* java.lang.Number

---

##### `iamGroups`<sup>Required</sup> <a name="iamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroups"></a>

```java
public java.util.List<java.lang.String> getIamGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxStsTtl`<sup>Required</sup> <a name="maxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtl"></a>

```java
public java.lang.Number getMaxStsTtl();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `permissionsBoundaryArn`<sup>Required</sup> <a name="permissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArn"></a>

```java
public java.lang.String getPermissionsBoundaryArn();
```

- *Type:* java.lang.String

---

##### `policyArns`<sup>Required</sup> <a name="policyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyDocument`<sup>Required</sup> <a name="policyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

---

##### `roleArns`<sup>Required</sup> <a name="roleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArns"></a>

```java
public java.util.List<java.lang.String> getRoleArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `userPath`<sup>Required</sup> <a name="userPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPath"></a>

```java
public java.lang.String getUserPath();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendRoleConfig <a name="AwsSecretBackendRoleConfig" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_secret_backend_role.AwsSecretBackendRoleConfig;

AwsSecretBackendRoleConfig.builder()
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
    .credentialType(java.lang.String)
    .name(java.lang.String)
//  .defaultStsTtl(java.lang.Number)
//  .iamGroups(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maxStsTtl(java.lang.Number)
//  .namespace(java.lang.String)
//  .permissionsBoundaryArn(java.lang.String)
//  .policyArns(java.util.List<java.lang.String>)
//  .policyDocument(java.lang.String)
//  .roleArns(java.util.List<java.lang.String>)
//  .userPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The path of the AWS Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Role credential type. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.defaultStsTtl">defaultStsTtl</a></code> | <code>java.lang.Number</code> | The default TTL in seconds for STS credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamGroups">iamGroups</a></code> | <code>java.util.List<java.lang.String></code> | A list of IAM group names. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.maxStsTtl">maxStsTtl</a></code> | <code>java.lang.Number</code> | The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.permissionsBoundaryArn">permissionsBoundaryArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS Permissions Boundary to attach to IAM users created in the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | ARN for an existing IAM policy the role should use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyDocument">policyDocument</a></code> | <code>java.lang.String</code> | IAM policy the role should use in JSON format. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.roleArns">roleArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.userPath">userPath</a></code> | <code>java.lang.String</code> | The path for the user name. Valid only when credential_type is iam_user. Default is /. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The path of the AWS Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#backend AwsSecretBackendRole#backend}

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Role credential type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#credential_type AwsSecretBackendRole#credential_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#name AwsSecretBackendRole#name}

---

##### `defaultStsTtl`<sup>Optional</sup> <a name="defaultStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.defaultStsTtl"></a>

```java
public java.lang.Number getDefaultStsTtl();
```

- *Type:* java.lang.Number

The default TTL in seconds for STS credentials.

When a TTL is not specified when STS credentials are requested, and a default TTL is specified on the role, then this default TTL will be used. Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#default_sts_ttl AwsSecretBackendRole#default_sts_ttl}

---

##### `iamGroups`<sup>Optional</sup> <a name="iamGroups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamGroups"></a>

```java
public java.util.List<java.lang.String> getIamGroups();
```

- *Type:* java.util.List<java.lang.String>

A list of IAM group names.

IAM users generated against this vault role will be added to these IAM Groups. For a credential type of assumed_role or federation_token, the policies sent to the corresponding AWS call (sts:AssumeRole or sts:GetFederation) will be the policies from each group in iam_groups combined with the policy_document and policy_arns parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#iam_groups AwsSecretBackendRole#iam_groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxStsTtl`<sup>Optional</sup> <a name="maxStsTtl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.maxStsTtl"></a>

```java
public java.lang.Number getMaxStsTtl();
```

- *Type:* java.lang.Number

The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl).

Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#max_sts_ttl AwsSecretBackendRole#max_sts_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#namespace AwsSecretBackendRole#namespace}

---

##### `permissionsBoundaryArn`<sup>Optional</sup> <a name="permissionsBoundaryArn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.permissionsBoundaryArn"></a>

```java
public java.lang.String getPermissionsBoundaryArn();
```

- *Type:* java.lang.String

The ARN of the AWS Permissions Boundary to attach to IAM users created in the role.

Valid only when credential_type is iam_user. If not specified, then no permissions boundary policy will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#permissions_boundary_arn AwsSecretBackendRole#permissions_boundary_arn}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

ARN for an existing IAM policy the role should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#policy_arns AwsSecretBackendRole#policy_arns}

---

##### `policyDocument`<sup>Optional</sup> <a name="policyDocument" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyDocument"></a>

```java
public java.lang.String getPolicyDocument();
```

- *Type:* java.lang.String

IAM policy the role should use in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#policy_document AwsSecretBackendRole#policy_document}

---

##### `roleArns`<sup>Optional</sup> <a name="roleArns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.roleArns"></a>

```java
public java.util.List<java.lang.String> getRoleArns();
```

- *Type:* java.util.List<java.lang.String>

ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#role_arns AwsSecretBackendRole#role_arns}

---

##### `userPath`<sup>Optional</sup> <a name="userPath" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.userPath"></a>

```java
public java.lang.String getUserPath();
```

- *Type:* java.lang.String

The path for the user name. Valid only when credential_type is iam_user. Default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#user_path AwsSecretBackendRole#user_path}

---



