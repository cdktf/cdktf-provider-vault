# `vault_aws_auth_backend_role`

Refer to the Terraform Registory for docs: [`vault_aws_auth_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role).

# `awsAuthBackendRole` Submodule <a name="`awsAuthBackendRole` Submodule" id="@cdktf/provider-vault.awsAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRole <a name="AwsAuthBackendRole" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role vault_aws_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_role.AwsAuthBackendRole;

AwsAuthBackendRole.Builder.create(Construct scope, java.lang.String id)
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
//  .authType(java.lang.String)
//  .backend(java.lang.String)
//  .boundAccountIds(java.util.List<java.lang.String>)
//  .boundAmiIds(java.util.List<java.lang.String>)
//  .boundEc2InstanceIds(java.util.List<java.lang.String>)
//  .boundIamInstanceProfileArns(java.util.List<java.lang.String>)
//  .boundIamPrincipalArns(java.util.List<java.lang.String>)
//  .boundIamRoleArns(java.util.List<java.lang.String>)
//  .boundRegions(java.util.List<java.lang.String>)
//  .boundSubnetIds(java.util.List<java.lang.String>)
//  .boundVpcIds(java.util.List<java.lang.String>)
//  .disallowReauthentication(java.lang.Boolean)
//  .disallowReauthentication(IResolvable)
//  .id(java.lang.String)
//  .inferredAwsRegion(java.lang.String)
//  .inferredEntityType(java.lang.String)
//  .namespace(java.lang.String)
//  .resolveAwsUniqueIds(java.lang.Boolean)
//  .resolveAwsUniqueIds(IResolvable)
//  .roleTag(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean)
//  .tokenNoDefaultPolicy(IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.allowInstanceMigration">allowInstanceMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, allows migration of the underlying instance where the client resides. Use with caution. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.authType">authType</a></code> | <code>java.lang.String</code> | The auth type permitted for this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundAccountIds">boundAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances with this account ID in their identity document will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundAmiIds">boundAmiIds</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances using this AMI ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundEc2InstanceIds">boundEc2InstanceIds</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances that match this instance ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamInstanceProfileArns">boundIamInstanceProfileArns</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamPrincipalArns">boundIamPrincipalArns</a></code> | <code>java.util.List<java.lang.String></code> | The IAM principal that must be authenticated using the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamRoleArns">boundIamRoleArns</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances that match this IAM role ARN will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundRegions">boundRegions</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances in this region will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundSubnetIds">boundSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances associated with this subnet ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundVpcIds">boundVpcIds</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances associated with this VPC ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.disallowReauthentication">disallowReauthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, only allows a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.inferredAwsRegion">inferredAwsRegion</a></code> | <code>java.lang.String</code> | The region to search for the inferred entities in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.inferredEntityType">inferredEntityType</a></code> | <code>java.lang.String</code> | The type of inferencing Vault should do. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.resolveAwsUniqueIds">resolveAwsUniqueIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.roleTag">roleTag</a></code> | <code>java.lang.String</code> | The key of the tag on EC2 instance to use for role tags. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#role AwsAuthBackendRole#role}

---

##### `allowInstanceMigration`<sup>Optional</sup> <a name="allowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.allowInstanceMigration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, allows migration of the underlying instance where the client resides. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#allow_instance_migration AwsAuthBackendRole#allow_instance_migration}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.authType"></a>

- *Type:* java.lang.String

The auth type permitted for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#auth_type AwsAuthBackendRole#auth_type}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#backend AwsAuthBackendRole#backend}

---

##### `boundAccountIds`<sup>Optional</sup> <a name="boundAccountIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundAccountIds"></a>

- *Type:* java.util.List<java.lang.String>

Only EC2 instances with this account ID in their identity document will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_account_ids AwsAuthBackendRole#bound_account_ids}

---

##### `boundAmiIds`<sup>Optional</sup> <a name="boundAmiIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundAmiIds"></a>

- *Type:* java.util.List<java.lang.String>

Only EC2 instances using this AMI ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_ami_ids AwsAuthBackendRole#bound_ami_ids}

---

##### `boundEc2InstanceIds`<sup>Optional</sup> <a name="boundEc2InstanceIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundEc2InstanceIds"></a>

- *Type:* java.util.List<java.lang.String>

Only EC2 instances that match this instance ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_ec2_instance_ids AwsAuthBackendRole#bound_ec2_instance_ids}

---

##### `boundIamInstanceProfileArns`<sup>Optional</sup> <a name="boundIamInstanceProfileArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamInstanceProfileArns"></a>

- *Type:* java.util.List<java.lang.String>

Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_iam_instance_profile_arns AwsAuthBackendRole#bound_iam_instance_profile_arns}

---

##### `boundIamPrincipalArns`<sup>Optional</sup> <a name="boundIamPrincipalArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamPrincipalArns"></a>

- *Type:* java.util.List<java.lang.String>

The IAM principal that must be authenticated using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_iam_principal_arns AwsAuthBackendRole#bound_iam_principal_arns}

---

##### `boundIamRoleArns`<sup>Optional</sup> <a name="boundIamRoleArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamRoleArns"></a>

- *Type:* java.util.List<java.lang.String>

Only EC2 instances that match this IAM role ARN will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_iam_role_arns AwsAuthBackendRole#bound_iam_role_arns}

---

##### `boundRegions`<sup>Optional</sup> <a name="boundRegions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundRegions"></a>

- *Type:* java.util.List<java.lang.String>

Only EC2 instances in this region will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_regions AwsAuthBackendRole#bound_regions}

---

##### `boundSubnetIds`<sup>Optional</sup> <a name="boundSubnetIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundSubnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Only EC2 instances associated with this subnet ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_subnet_ids AwsAuthBackendRole#bound_subnet_ids}

---

##### `boundVpcIds`<sup>Optional</sup> <a name="boundVpcIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundVpcIds"></a>

- *Type:* java.util.List<java.lang.String>

Only EC2 instances associated with this VPC ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_vpc_ids AwsAuthBackendRole#bound_vpc_ids}

---

##### `disallowReauthentication`<sup>Optional</sup> <a name="disallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.disallowReauthentication"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, only allows a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#disallow_reauthentication AwsAuthBackendRole#disallow_reauthentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferredAwsRegion`<sup>Optional</sup> <a name="inferredAwsRegion" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.inferredAwsRegion"></a>

- *Type:* java.lang.String

The region to search for the inferred entities in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#inferred_aws_region AwsAuthBackendRole#inferred_aws_region}

---

##### `inferredEntityType`<sup>Optional</sup> <a name="inferredEntityType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.inferredEntityType"></a>

- *Type:* java.lang.String

The type of inferencing Vault should do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#inferred_entity_type AwsAuthBackendRole#inferred_entity_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#namespace AwsAuthBackendRole#namespace}

---

##### `resolveAwsUniqueIds`<sup>Optional</sup> <a name="resolveAwsUniqueIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.resolveAwsUniqueIds"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID.

When true, deleting a principal and recreating it with the same name won't automatically grant the new principal the same roles in Vault that the old principal had.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#resolve_aws_unique_ids AwsAuthBackendRole#resolve_aws_unique_ids}

---

##### `roleTag`<sup>Optional</sup> <a name="roleTag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.roleTag"></a>

- *Type:* java.lang.String

The key of the tag on EC2 instance to use for role tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#role_tag AwsAuthBackendRole#role_tag}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_bound_cidrs AwsAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_explicit_max_ttl AwsAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_max_ttl AwsAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_no_default_policy AwsAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_num_uses AwsAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_period AwsAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_policies AwsAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_ttl AwsAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_type AwsAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAllowInstanceMigration">resetAllowInstanceMigration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAccountIds">resetBoundAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAmiIds">resetBoundAmiIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundEc2InstanceIds">resetBoundEc2InstanceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamInstanceProfileArns">resetBoundIamInstanceProfileArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamPrincipalArns">resetBoundIamPrincipalArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamRoleArns">resetBoundIamRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundRegions">resetBoundRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundSubnetIds">resetBoundSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundVpcIds">resetBoundVpcIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetDisallowReauthentication">resetDisallowReauthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredAwsRegion">resetInferredAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredEntityType">resetInferredEntityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetResolveAwsUniqueIds">resetResolveAwsUniqueIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetRoleTag">resetRoleTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowInstanceMigration` <a name="resetAllowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAllowInstanceMigration"></a>

```java
public void resetAllowInstanceMigration()
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAuthType"></a>

```java
public void resetAuthType()
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetBoundAccountIds` <a name="resetBoundAccountIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAccountIds"></a>

```java
public void resetBoundAccountIds()
```

##### `resetBoundAmiIds` <a name="resetBoundAmiIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAmiIds"></a>

```java
public void resetBoundAmiIds()
```

##### `resetBoundEc2InstanceIds` <a name="resetBoundEc2InstanceIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundEc2InstanceIds"></a>

```java
public void resetBoundEc2InstanceIds()
```

##### `resetBoundIamInstanceProfileArns` <a name="resetBoundIamInstanceProfileArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamInstanceProfileArns"></a>

```java
public void resetBoundIamInstanceProfileArns()
```

##### `resetBoundIamPrincipalArns` <a name="resetBoundIamPrincipalArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamPrincipalArns"></a>

```java
public void resetBoundIamPrincipalArns()
```

##### `resetBoundIamRoleArns` <a name="resetBoundIamRoleArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamRoleArns"></a>

```java
public void resetBoundIamRoleArns()
```

##### `resetBoundRegions` <a name="resetBoundRegions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundRegions"></a>

```java
public void resetBoundRegions()
```

##### `resetBoundSubnetIds` <a name="resetBoundSubnetIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundSubnetIds"></a>

```java
public void resetBoundSubnetIds()
```

##### `resetBoundVpcIds` <a name="resetBoundVpcIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundVpcIds"></a>

```java
public void resetBoundVpcIds()
```

##### `resetDisallowReauthentication` <a name="resetDisallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetDisallowReauthentication"></a>

```java
public void resetDisallowReauthentication()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetInferredAwsRegion` <a name="resetInferredAwsRegion" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredAwsRegion"></a>

```java
public void resetInferredAwsRegion()
```

##### `resetInferredEntityType` <a name="resetInferredEntityType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredEntityType"></a>

```java
public void resetInferredEntityType()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetResolveAwsUniqueIds` <a name="resetResolveAwsUniqueIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetResolveAwsUniqueIds"></a>

```java
public void resetResolveAwsUniqueIds()
```

##### `resetRoleTag` <a name="resetRoleTag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetRoleTag"></a>

```java
public void resetRoleTag()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenType"></a>

```java
public void resetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_role.AwsAuthBackendRole;

AwsAuthBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_role.AwsAuthBackendRole;

AwsAuthBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_role.AwsAuthBackendRole;

AwsAuthBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigrationInput">allowInstanceMigrationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authTypeInput">authTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIdsInput">boundAccountIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIdsInput">boundAmiIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIdsInput">boundEc2InstanceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArnsInput">boundIamInstanceProfileArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArnsInput">boundIamPrincipalArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArnsInput">boundIamRoleArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegionsInput">boundRegionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIdsInput">boundSubnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIdsInput">boundVpcIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthenticationInput">disallowReauthenticationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegionInput">inferredAwsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityTypeInput">inferredEntityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIdsInput">resolveAwsUniqueIdsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTagInput">roleTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigration">allowInstanceMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authType">authType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIds">boundAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIds">boundAmiIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIds">boundEc2InstanceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArns">boundIamInstanceProfileArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArns">boundIamPrincipalArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArns">boundIamRoleArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegions">boundRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIds">boundSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIds">boundVpcIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthentication">disallowReauthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegion">inferredAwsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityType">inferredEntityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIds">resolveAwsUniqueIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTag">roleTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `allowInstanceMigrationInput`<sup>Optional</sup> <a name="allowInstanceMigrationInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigrationInput"></a>

```java
public java.lang.Object getAllowInstanceMigrationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authTypeInput"></a>

```java
public java.lang.String getAuthTypeInput();
```

- *Type:* java.lang.String

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `boundAccountIdsInput`<sup>Optional</sup> <a name="boundAccountIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIdsInput"></a>

```java
public java.util.List<java.lang.String> getBoundAccountIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundAmiIdsInput`<sup>Optional</sup> <a name="boundAmiIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIdsInput"></a>

```java
public java.util.List<java.lang.String> getBoundAmiIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundEc2InstanceIdsInput`<sup>Optional</sup> <a name="boundEc2InstanceIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIdsInput"></a>

```java
public java.util.List<java.lang.String> getBoundEc2InstanceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundIamInstanceProfileArnsInput`<sup>Optional</sup> <a name="boundIamInstanceProfileArnsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArnsInput"></a>

```java
public java.util.List<java.lang.String> getBoundIamInstanceProfileArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundIamPrincipalArnsInput`<sup>Optional</sup> <a name="boundIamPrincipalArnsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArnsInput"></a>

```java
public java.util.List<java.lang.String> getBoundIamPrincipalArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundIamRoleArnsInput`<sup>Optional</sup> <a name="boundIamRoleArnsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArnsInput"></a>

```java
public java.util.List<java.lang.String> getBoundIamRoleArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundRegionsInput`<sup>Optional</sup> <a name="boundRegionsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegionsInput"></a>

```java
public java.util.List<java.lang.String> getBoundRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundSubnetIdsInput`<sup>Optional</sup> <a name="boundSubnetIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getBoundSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundVpcIdsInput`<sup>Optional</sup> <a name="boundVpcIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIdsInput"></a>

```java
public java.util.List<java.lang.String> getBoundVpcIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowReauthenticationInput`<sup>Optional</sup> <a name="disallowReauthenticationInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthenticationInput"></a>

```java
public java.lang.Object getDisallowReauthenticationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inferredAwsRegionInput`<sup>Optional</sup> <a name="inferredAwsRegionInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegionInput"></a>

```java
public java.lang.String getInferredAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `inferredEntityTypeInput`<sup>Optional</sup> <a name="inferredEntityTypeInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityTypeInput"></a>

```java
public java.lang.String getInferredEntityTypeInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `resolveAwsUniqueIdsInput`<sup>Optional</sup> <a name="resolveAwsUniqueIdsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIdsInput"></a>

```java
public java.lang.Object getResolveAwsUniqueIdsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `roleTagInput`<sup>Optional</sup> <a name="roleTagInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTagInput"></a>

```java
public java.lang.String getRoleTagInput();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Object getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `allowInstanceMigration`<sup>Required</sup> <a name="allowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigration"></a>

```java
public java.lang.Object getAllowInstanceMigration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `boundAccountIds`<sup>Required</sup> <a name="boundAccountIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIds"></a>

```java
public java.util.List<java.lang.String> getBoundAccountIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundAmiIds`<sup>Required</sup> <a name="boundAmiIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIds"></a>

```java
public java.util.List<java.lang.String> getBoundAmiIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundEc2InstanceIds`<sup>Required</sup> <a name="boundEc2InstanceIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIds"></a>

```java
public java.util.List<java.lang.String> getBoundEc2InstanceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundIamInstanceProfileArns`<sup>Required</sup> <a name="boundIamInstanceProfileArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArns"></a>

```java
public java.util.List<java.lang.String> getBoundIamInstanceProfileArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundIamPrincipalArns`<sup>Required</sup> <a name="boundIamPrincipalArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArns"></a>

```java
public java.util.List<java.lang.String> getBoundIamPrincipalArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundIamRoleArns`<sup>Required</sup> <a name="boundIamRoleArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArns"></a>

```java
public java.util.List<java.lang.String> getBoundIamRoleArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundRegions`<sup>Required</sup> <a name="boundRegions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegions"></a>

```java
public java.util.List<java.lang.String> getBoundRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundSubnetIds`<sup>Required</sup> <a name="boundSubnetIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIds"></a>

```java
public java.util.List<java.lang.String> getBoundSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundVpcIds`<sup>Required</sup> <a name="boundVpcIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIds"></a>

```java
public java.util.List<java.lang.String> getBoundVpcIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disallowReauthentication`<sup>Required</sup> <a name="disallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthentication"></a>

```java
public java.lang.Object getDisallowReauthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inferredAwsRegion`<sup>Required</sup> <a name="inferredAwsRegion" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegion"></a>

```java
public java.lang.String getInferredAwsRegion();
```

- *Type:* java.lang.String

---

##### `inferredEntityType`<sup>Required</sup> <a name="inferredEntityType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityType"></a>

```java
public java.lang.String getInferredEntityType();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resolveAwsUniqueIds`<sup>Required</sup> <a name="resolveAwsUniqueIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIds"></a>

```java
public java.lang.Object getResolveAwsUniqueIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `roleTag`<sup>Required</sup> <a name="roleTag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTag"></a>

```java
public java.lang.String getRoleTag();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoleConfig <a name="AwsAuthBackendRoleConfig" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.aws_auth_backend_role.AwsAuthBackendRoleConfig;

AwsAuthBackendRoleConfig.builder()
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
//  .authType(java.lang.String)
//  .backend(java.lang.String)
//  .boundAccountIds(java.util.List<java.lang.String>)
//  .boundAmiIds(java.util.List<java.lang.String>)
//  .boundEc2InstanceIds(java.util.List<java.lang.String>)
//  .boundIamInstanceProfileArns(java.util.List<java.lang.String>)
//  .boundIamPrincipalArns(java.util.List<java.lang.String>)
//  .boundIamRoleArns(java.util.List<java.lang.String>)
//  .boundRegions(java.util.List<java.lang.String>)
//  .boundSubnetIds(java.util.List<java.lang.String>)
//  .boundVpcIds(java.util.List<java.lang.String>)
//  .disallowReauthentication(java.lang.Boolean)
//  .disallowReauthentication(IResolvable)
//  .id(java.lang.String)
//  .inferredAwsRegion(java.lang.String)
//  .inferredEntityType(java.lang.String)
//  .namespace(java.lang.String)
//  .resolveAwsUniqueIds(java.lang.Boolean)
//  .resolveAwsUniqueIds(IResolvable)
//  .roleTag(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean)
//  .tokenNoDefaultPolicy(IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.role">role</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.allowInstanceMigration">allowInstanceMigration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, allows migration of the underlying instance where the client resides. Use with caution. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.authType">authType</a></code> | <code>java.lang.String</code> | The auth type permitted for this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAccountIds">boundAccountIds</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances with this account ID in their identity document will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAmiIds">boundAmiIds</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances using this AMI ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundEc2InstanceIds">boundEc2InstanceIds</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances that match this instance ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamInstanceProfileArns">boundIamInstanceProfileArns</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamPrincipalArns">boundIamPrincipalArns</a></code> | <code>java.util.List<java.lang.String></code> | The IAM principal that must be authenticated using the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamRoleArns">boundIamRoleArns</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances that match this IAM role ARN will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundRegions">boundRegions</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances in this region will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundSubnetIds">boundSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances associated with this subnet ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundVpcIds">boundVpcIds</a></code> | <code>java.util.List<java.lang.String></code> | Only EC2 instances associated with this VPC ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.disallowReauthentication">disallowReauthentication</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, only allows a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredAwsRegion">inferredAwsRegion</a></code> | <code>java.lang.String</code> | The region to search for the inferred entities in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredEntityType">inferredEntityType</a></code> | <code>java.lang.String</code> | The type of inferencing Vault should do. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.resolveAwsUniqueIds">resolveAwsUniqueIds</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.roleTag">roleTag</a></code> | <code>java.lang.String</code> | The key of the tag on EC2 instance to use for role tags. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#role AwsAuthBackendRole#role}

---

##### `allowInstanceMigration`<sup>Optional</sup> <a name="allowInstanceMigration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.allowInstanceMigration"></a>

```java
public java.lang.Object getAllowInstanceMigration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, allows migration of the underlying instance where the client resides. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#allow_instance_migration AwsAuthBackendRole#allow_instance_migration}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.authType"></a>

```java
public java.lang.String getAuthType();
```

- *Type:* java.lang.String

The auth type permitted for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#auth_type AwsAuthBackendRole#auth_type}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#backend AwsAuthBackendRole#backend}

---

##### `boundAccountIds`<sup>Optional</sup> <a name="boundAccountIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAccountIds"></a>

```java
public java.util.List<java.lang.String> getBoundAccountIds();
```

- *Type:* java.util.List<java.lang.String>

Only EC2 instances with this account ID in their identity document will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_account_ids AwsAuthBackendRole#bound_account_ids}

---

##### `boundAmiIds`<sup>Optional</sup> <a name="boundAmiIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAmiIds"></a>

```java
public java.util.List<java.lang.String> getBoundAmiIds();
```

- *Type:* java.util.List<java.lang.String>

Only EC2 instances using this AMI ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_ami_ids AwsAuthBackendRole#bound_ami_ids}

---

##### `boundEc2InstanceIds`<sup>Optional</sup> <a name="boundEc2InstanceIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundEc2InstanceIds"></a>

```java
public java.util.List<java.lang.String> getBoundEc2InstanceIds();
```

- *Type:* java.util.List<java.lang.String>

Only EC2 instances that match this instance ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_ec2_instance_ids AwsAuthBackendRole#bound_ec2_instance_ids}

---

##### `boundIamInstanceProfileArns`<sup>Optional</sup> <a name="boundIamInstanceProfileArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamInstanceProfileArns"></a>

```java
public java.util.List<java.lang.String> getBoundIamInstanceProfileArns();
```

- *Type:* java.util.List<java.lang.String>

Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_iam_instance_profile_arns AwsAuthBackendRole#bound_iam_instance_profile_arns}

---

##### `boundIamPrincipalArns`<sup>Optional</sup> <a name="boundIamPrincipalArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamPrincipalArns"></a>

```java
public java.util.List<java.lang.String> getBoundIamPrincipalArns();
```

- *Type:* java.util.List<java.lang.String>

The IAM principal that must be authenticated using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_iam_principal_arns AwsAuthBackendRole#bound_iam_principal_arns}

---

##### `boundIamRoleArns`<sup>Optional</sup> <a name="boundIamRoleArns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamRoleArns"></a>

```java
public java.util.List<java.lang.String> getBoundIamRoleArns();
```

- *Type:* java.util.List<java.lang.String>

Only EC2 instances that match this IAM role ARN will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_iam_role_arns AwsAuthBackendRole#bound_iam_role_arns}

---

##### `boundRegions`<sup>Optional</sup> <a name="boundRegions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundRegions"></a>

```java
public java.util.List<java.lang.String> getBoundRegions();
```

- *Type:* java.util.List<java.lang.String>

Only EC2 instances in this region will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_regions AwsAuthBackendRole#bound_regions}

---

##### `boundSubnetIds`<sup>Optional</sup> <a name="boundSubnetIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundSubnetIds"></a>

```java
public java.util.List<java.lang.String> getBoundSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Only EC2 instances associated with this subnet ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_subnet_ids AwsAuthBackendRole#bound_subnet_ids}

---

##### `boundVpcIds`<sup>Optional</sup> <a name="boundVpcIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundVpcIds"></a>

```java
public java.util.List<java.lang.String> getBoundVpcIds();
```

- *Type:* java.util.List<java.lang.String>

Only EC2 instances associated with this VPC ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#bound_vpc_ids AwsAuthBackendRole#bound_vpc_ids}

---

##### `disallowReauthentication`<sup>Optional</sup> <a name="disallowReauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.disallowReauthentication"></a>

```java
public java.lang.Object getDisallowReauthentication();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, only allows a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#disallow_reauthentication AwsAuthBackendRole#disallow_reauthentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferredAwsRegion`<sup>Optional</sup> <a name="inferredAwsRegion" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredAwsRegion"></a>

```java
public java.lang.String getInferredAwsRegion();
```

- *Type:* java.lang.String

The region to search for the inferred entities in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#inferred_aws_region AwsAuthBackendRole#inferred_aws_region}

---

##### `inferredEntityType`<sup>Optional</sup> <a name="inferredEntityType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredEntityType"></a>

```java
public java.lang.String getInferredEntityType();
```

- *Type:* java.lang.String

The type of inferencing Vault should do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#inferred_entity_type AwsAuthBackendRole#inferred_entity_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#namespace AwsAuthBackendRole#namespace}

---

##### `resolveAwsUniqueIds`<sup>Optional</sup> <a name="resolveAwsUniqueIds" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.resolveAwsUniqueIds"></a>

```java
public java.lang.Object getResolveAwsUniqueIds();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID.

When true, deleting a principal and recreating it with the same name won't automatically grant the new principal the same roles in Vault that the old principal had.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#resolve_aws_unique_ids AwsAuthBackendRole#resolve_aws_unique_ids}

---

##### `roleTag`<sup>Optional</sup> <a name="roleTag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.roleTag"></a>

```java
public java.lang.String getRoleTag();
```

- *Type:* java.lang.String

The key of the tag on EC2 instance to use for role tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#role_tag AwsAuthBackendRole#role_tag}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_bound_cidrs AwsAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_explicit_max_ttl AwsAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_max_ttl AwsAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_no_default_policy AwsAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_num_uses AwsAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_period AwsAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_policies AwsAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_ttl AwsAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/aws_auth_backend_role#token_type AwsAuthBackendRole#token_type}

---



