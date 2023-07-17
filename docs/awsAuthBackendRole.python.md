# `vault_aws_auth_backend_role`

Refer to the Terraform Registory for docs: [`vault_aws_auth_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role).

# `awsAuthBackendRole` Submodule <a name="`awsAuthBackendRole` Submodule" id="@cdktf/provider-vault.awsAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRole <a name="AwsAuthBackendRole" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role vault_aws_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role

awsAuthBackendRole.AwsAuthBackendRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role: str,
  allow_instance_migration: typing.Union[bool, IResolvable] = None,
  auth_type: str = None,
  backend: str = None,
  bound_account_ids: typing.List[str] = None,
  bound_ami_ids: typing.List[str] = None,
  bound_ec2_instance_ids: typing.List[str] = None,
  bound_iam_instance_profile_arns: typing.List[str] = None,
  bound_iam_principal_arns: typing.List[str] = None,
  bound_iam_role_arns: typing.List[str] = None,
  bound_regions: typing.List[str] = None,
  bound_subnet_ids: typing.List[str] = None,
  bound_vpc_ids: typing.List[str] = None,
  disallow_reauthentication: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inferred_aws_region: str = None,
  inferred_entity_type: str = None,
  namespace: str = None,
  resolve_aws_unique_ids: typing.Union[bool, IResolvable] = None,
  role_tag: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: typing.Union[bool, IResolvable] = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.role">role</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.allowInstanceMigration">allow_instance_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, allows migration of the underlying instance where the client resides. Use with caution. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | The auth type permitted for this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundAccountIds">bound_account_ids</a></code> | <code>typing.List[str]</code> | Only EC2 instances with this account ID in their identity document will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundAmiIds">bound_ami_ids</a></code> | <code>typing.List[str]</code> | Only EC2 instances using this AMI ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundEc2InstanceIds">bound_ec2_instance_ids</a></code> | <code>typing.List[str]</code> | Only EC2 instances that match this instance ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamInstanceProfileArns">bound_iam_instance_profile_arns</a></code> | <code>typing.List[str]</code> | Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamPrincipalArns">bound_iam_principal_arns</a></code> | <code>typing.List[str]</code> | The IAM principal that must be authenticated using the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamRoleArns">bound_iam_role_arns</a></code> | <code>typing.List[str]</code> | Only EC2 instances that match this IAM role ARN will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundRegions">bound_regions</a></code> | <code>typing.List[str]</code> | Only EC2 instances in this region will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundSubnetIds">bound_subnet_ids</a></code> | <code>typing.List[str]</code> | Only EC2 instances associated with this subnet ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundVpcIds">bound_vpc_ids</a></code> | <code>typing.List[str]</code> | Only EC2 instances associated with this VPC ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.disallowReauthentication">disallow_reauthentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, only allows a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.inferredAwsRegion">inferred_aws_region</a></code> | <code>str</code> | The region to search for the inferred entities in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.inferredEntityType">inferred_entity_type</a></code> | <code>str</code> | The type of inferencing Vault should do. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.resolveAwsUniqueIds">resolve_aws_unique_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.roleTag">role_tag</a></code> | <code>str</code> | The key of the tag on EC2 instance to use for role tags. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.role"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#role AwsAuthBackendRole#role}

---

##### `allow_instance_migration`<sup>Optional</sup> <a name="allow_instance_migration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.allowInstanceMigration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, allows migration of the underlying instance where the client resides. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#allow_instance_migration AwsAuthBackendRole#allow_instance_migration}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.authType"></a>

- *Type:* str

The auth type permitted for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#auth_type AwsAuthBackendRole#auth_type}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#backend AwsAuthBackendRole#backend}

---

##### `bound_account_ids`<sup>Optional</sup> <a name="bound_account_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundAccountIds"></a>

- *Type:* typing.List[str]

Only EC2 instances with this account ID in their identity document will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_account_ids AwsAuthBackendRole#bound_account_ids}

---

##### `bound_ami_ids`<sup>Optional</sup> <a name="bound_ami_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundAmiIds"></a>

- *Type:* typing.List[str]

Only EC2 instances using this AMI ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_ami_ids AwsAuthBackendRole#bound_ami_ids}

---

##### `bound_ec2_instance_ids`<sup>Optional</sup> <a name="bound_ec2_instance_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundEc2InstanceIds"></a>

- *Type:* typing.List[str]

Only EC2 instances that match this instance ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_ec2_instance_ids AwsAuthBackendRole#bound_ec2_instance_ids}

---

##### `bound_iam_instance_profile_arns`<sup>Optional</sup> <a name="bound_iam_instance_profile_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamInstanceProfileArns"></a>

- *Type:* typing.List[str]

Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_iam_instance_profile_arns AwsAuthBackendRole#bound_iam_instance_profile_arns}

---

##### `bound_iam_principal_arns`<sup>Optional</sup> <a name="bound_iam_principal_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamPrincipalArns"></a>

- *Type:* typing.List[str]

The IAM principal that must be authenticated using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_iam_principal_arns AwsAuthBackendRole#bound_iam_principal_arns}

---

##### `bound_iam_role_arns`<sup>Optional</sup> <a name="bound_iam_role_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundIamRoleArns"></a>

- *Type:* typing.List[str]

Only EC2 instances that match this IAM role ARN will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_iam_role_arns AwsAuthBackendRole#bound_iam_role_arns}

---

##### `bound_regions`<sup>Optional</sup> <a name="bound_regions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundRegions"></a>

- *Type:* typing.List[str]

Only EC2 instances in this region will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_regions AwsAuthBackendRole#bound_regions}

---

##### `bound_subnet_ids`<sup>Optional</sup> <a name="bound_subnet_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundSubnetIds"></a>

- *Type:* typing.List[str]

Only EC2 instances associated with this subnet ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_subnet_ids AwsAuthBackendRole#bound_subnet_ids}

---

##### `bound_vpc_ids`<sup>Optional</sup> <a name="bound_vpc_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.boundVpcIds"></a>

- *Type:* typing.List[str]

Only EC2 instances associated with this VPC ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_vpc_ids AwsAuthBackendRole#bound_vpc_ids}

---

##### `disallow_reauthentication`<sup>Optional</sup> <a name="disallow_reauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.disallowReauthentication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, only allows a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#disallow_reauthentication AwsAuthBackendRole#disallow_reauthentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferred_aws_region`<sup>Optional</sup> <a name="inferred_aws_region" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.inferredAwsRegion"></a>

- *Type:* str

The region to search for the inferred entities in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#inferred_aws_region AwsAuthBackendRole#inferred_aws_region}

---

##### `inferred_entity_type`<sup>Optional</sup> <a name="inferred_entity_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.inferredEntityType"></a>

- *Type:* str

The type of inferencing Vault should do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#inferred_entity_type AwsAuthBackendRole#inferred_entity_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#namespace AwsAuthBackendRole#namespace}

---

##### `resolve_aws_unique_ids`<sup>Optional</sup> <a name="resolve_aws_unique_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.resolveAwsUniqueIds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID.

When true, deleting a principal and recreating it with the same name won't automatically grant the new principal the same roles in Vault that the old principal had.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#resolve_aws_unique_ids AwsAuthBackendRole#resolve_aws_unique_ids}

---

##### `role_tag`<sup>Optional</sup> <a name="role_tag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.roleTag"></a>

- *Type:* str

The key of the tag on EC2 instance to use for role tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#role_tag AwsAuthBackendRole#role_tag}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_bound_cidrs AwsAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_explicit_max_ttl AwsAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_max_ttl AwsAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_no_default_policy AwsAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_num_uses AwsAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_period AwsAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_policies AwsAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_ttl AwsAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_type AwsAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAllowInstanceMigration">reset_allow_instance_migration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAccountIds">reset_bound_account_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAmiIds">reset_bound_ami_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundEc2InstanceIds">reset_bound_ec2_instance_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamInstanceProfileArns">reset_bound_iam_instance_profile_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamPrincipalArns">reset_bound_iam_principal_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamRoleArns">reset_bound_iam_role_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundRegions">reset_bound_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundSubnetIds">reset_bound_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundVpcIds">reset_bound_vpc_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetDisallowReauthentication">reset_disallow_reauthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredAwsRegion">reset_inferred_aws_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredEntityType">reset_inferred_entity_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetResolveAwsUniqueIds">reset_resolve_aws_unique_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetRoleTag">reset_role_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenBoundCidrs">reset_token_bound_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenExplicitMaxTtl">reset_token_explicit_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenMaxTtl">reset_token_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNoDefaultPolicy">reset_token_no_default_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNumUses">reset_token_num_uses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPeriod">reset_token_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPolicies">reset_token_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenTtl">reset_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenType">reset_token_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allow_instance_migration` <a name="reset_allow_instance_migration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAllowInstanceMigration"></a>

```python
def reset_allow_instance_migration() -> None
```

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_bound_account_ids` <a name="reset_bound_account_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAccountIds"></a>

```python
def reset_bound_account_ids() -> None
```

##### `reset_bound_ami_ids` <a name="reset_bound_ami_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundAmiIds"></a>

```python
def reset_bound_ami_ids() -> None
```

##### `reset_bound_ec2_instance_ids` <a name="reset_bound_ec2_instance_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundEc2InstanceIds"></a>

```python
def reset_bound_ec2_instance_ids() -> None
```

##### `reset_bound_iam_instance_profile_arns` <a name="reset_bound_iam_instance_profile_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamInstanceProfileArns"></a>

```python
def reset_bound_iam_instance_profile_arns() -> None
```

##### `reset_bound_iam_principal_arns` <a name="reset_bound_iam_principal_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamPrincipalArns"></a>

```python
def reset_bound_iam_principal_arns() -> None
```

##### `reset_bound_iam_role_arns` <a name="reset_bound_iam_role_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundIamRoleArns"></a>

```python
def reset_bound_iam_role_arns() -> None
```

##### `reset_bound_regions` <a name="reset_bound_regions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundRegions"></a>

```python
def reset_bound_regions() -> None
```

##### `reset_bound_subnet_ids` <a name="reset_bound_subnet_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundSubnetIds"></a>

```python
def reset_bound_subnet_ids() -> None
```

##### `reset_bound_vpc_ids` <a name="reset_bound_vpc_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetBoundVpcIds"></a>

```python
def reset_bound_vpc_ids() -> None
```

##### `reset_disallow_reauthentication` <a name="reset_disallow_reauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetDisallowReauthentication"></a>

```python
def reset_disallow_reauthentication() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_inferred_aws_region` <a name="reset_inferred_aws_region" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredAwsRegion"></a>

```python
def reset_inferred_aws_region() -> None
```

##### `reset_inferred_entity_type` <a name="reset_inferred_entity_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetInferredEntityType"></a>

```python
def reset_inferred_entity_type() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_resolve_aws_unique_ids` <a name="reset_resolve_aws_unique_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetResolveAwsUniqueIds"></a>

```python
def reset_resolve_aws_unique_ids() -> None
```

##### `reset_role_tag` <a name="reset_role_tag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetRoleTag"></a>

```python
def reset_role_tag() -> None
```

##### `reset_token_bound_cidrs` <a name="reset_token_bound_cidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenBoundCidrs"></a>

```python
def reset_token_bound_cidrs() -> None
```

##### `reset_token_explicit_max_ttl` <a name="reset_token_explicit_max_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```python
def reset_token_explicit_max_ttl() -> None
```

##### `reset_token_max_ttl` <a name="reset_token_max_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenMaxTtl"></a>

```python
def reset_token_max_ttl() -> None
```

##### `reset_token_no_default_policy` <a name="reset_token_no_default_policy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```python
def reset_token_no_default_policy() -> None
```

##### `reset_token_num_uses` <a name="reset_token_num_uses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenNumUses"></a>

```python
def reset_token_num_uses() -> None
```

##### `reset_token_period` <a name="reset_token_period" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPeriod"></a>

```python
def reset_token_period() -> None
```

##### `reset_token_policies` <a name="reset_token_policies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenPolicies"></a>

```python
def reset_token_policies() -> None
```

##### `reset_token_ttl` <a name="reset_token_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenTtl"></a>

```python
def reset_token_ttl() -> None
```

##### `reset_token_type` <a name="reset_token_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.resetTokenType"></a>

```python
def reset_token_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role

awsAuthBackendRole.AwsAuthBackendRole.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role

awsAuthBackendRole.AwsAuthBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role

awsAuthBackendRole.AwsAuthBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleId">role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigrationInput">allow_instance_migration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIdsInput">bound_account_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIdsInput">bound_ami_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIdsInput">bound_ec2_instance_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArnsInput">bound_iam_instance_profile_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArnsInput">bound_iam_principal_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArnsInput">bound_iam_role_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegionsInput">bound_regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIdsInput">bound_subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIdsInput">bound_vpc_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthenticationInput">disallow_reauthentication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegionInput">inferred_aws_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityTypeInput">inferred_entity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIdsInput">resolve_aws_unique_ids_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTagInput">role_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrsInput">token_bound_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtlInput">token_explicit_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtlInput">token_max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicyInput">token_no_default_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUsesInput">token_num_uses_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriodInput">token_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPoliciesInput">token_policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtlInput">token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTypeInput">token_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigration">allow_instance_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIds">bound_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIds">bound_ami_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIds">bound_ec2_instance_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArns">bound_iam_instance_profile_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArns">bound_iam_principal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArns">bound_iam_role_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegions">bound_regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIds">bound_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIds">bound_vpc_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthentication">disallow_reauthentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegion">inferred_aws_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityType">inferred_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIds">resolve_aws_unique_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTag">role_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenType">token_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role_id`<sup>Required</sup> <a name="role_id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleId"></a>

```python
role_id: str
```

- *Type:* str

---

##### `allow_instance_migration_input`<sup>Optional</sup> <a name="allow_instance_migration_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigrationInput"></a>

```python
allow_instance_migration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `bound_account_ids_input`<sup>Optional</sup> <a name="bound_account_ids_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIdsInput"></a>

```python
bound_account_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_ami_ids_input`<sup>Optional</sup> <a name="bound_ami_ids_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIdsInput"></a>

```python
bound_ami_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_ec2_instance_ids_input`<sup>Optional</sup> <a name="bound_ec2_instance_ids_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIdsInput"></a>

```python
bound_ec2_instance_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_iam_instance_profile_arns_input`<sup>Optional</sup> <a name="bound_iam_instance_profile_arns_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArnsInput"></a>

```python
bound_iam_instance_profile_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_iam_principal_arns_input`<sup>Optional</sup> <a name="bound_iam_principal_arns_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArnsInput"></a>

```python
bound_iam_principal_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_iam_role_arns_input`<sup>Optional</sup> <a name="bound_iam_role_arns_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArnsInput"></a>

```python
bound_iam_role_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_regions_input`<sup>Optional</sup> <a name="bound_regions_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegionsInput"></a>

```python
bound_regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_subnet_ids_input`<sup>Optional</sup> <a name="bound_subnet_ids_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIdsInput"></a>

```python
bound_subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_vpc_ids_input`<sup>Optional</sup> <a name="bound_vpc_ids_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIdsInput"></a>

```python
bound_vpc_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disallow_reauthentication_input`<sup>Optional</sup> <a name="disallow_reauthentication_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthenticationInput"></a>

```python
disallow_reauthentication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inferred_aws_region_input`<sup>Optional</sup> <a name="inferred_aws_region_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegionInput"></a>

```python
inferred_aws_region_input: str
```

- *Type:* str

---

##### `inferred_entity_type_input`<sup>Optional</sup> <a name="inferred_entity_type_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityTypeInput"></a>

```python
inferred_entity_type_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resolve_aws_unique_ids_input`<sup>Optional</sup> <a name="resolve_aws_unique_ids_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIdsInput"></a>

```python
resolve_aws_unique_ids_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `role_tag_input`<sup>Optional</sup> <a name="role_tag_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTagInput"></a>

```python
role_tag_input: str
```

- *Type:* str

---

##### `token_bound_cidrs_input`<sup>Optional</sup> <a name="token_bound_cidrs_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrsInput"></a>

```python
token_bound_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl_input`<sup>Optional</sup> <a name="token_explicit_max_ttl_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```python
token_explicit_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl_input`<sup>Optional</sup> <a name="token_max_ttl_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtlInput"></a>

```python
token_max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy_input`<sup>Optional</sup> <a name="token_no_default_policy_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```python
token_no_default_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses_input`<sup>Optional</sup> <a name="token_num_uses_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUsesInput"></a>

```python
token_num_uses_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period_input`<sup>Optional</sup> <a name="token_period_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriodInput"></a>

```python
token_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies_input`<sup>Optional</sup> <a name="token_policies_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPoliciesInput"></a>

```python
token_policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl_input`<sup>Optional</sup> <a name="token_ttl_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtlInput"></a>

```python
token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type_input`<sup>Optional</sup> <a name="token_type_input" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTypeInput"></a>

```python
token_type_input: str
```

- *Type:* str

---

##### `allow_instance_migration`<sup>Required</sup> <a name="allow_instance_migration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.allowInstanceMigration"></a>

```python
allow_instance_migration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `bound_account_ids`<sup>Required</sup> <a name="bound_account_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAccountIds"></a>

```python
bound_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_ami_ids`<sup>Required</sup> <a name="bound_ami_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundAmiIds"></a>

```python
bound_ami_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_ec2_instance_ids`<sup>Required</sup> <a name="bound_ec2_instance_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundEc2InstanceIds"></a>

```python
bound_ec2_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_iam_instance_profile_arns`<sup>Required</sup> <a name="bound_iam_instance_profile_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamInstanceProfileArns"></a>

```python
bound_iam_instance_profile_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_iam_principal_arns`<sup>Required</sup> <a name="bound_iam_principal_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamPrincipalArns"></a>

```python
bound_iam_principal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_iam_role_arns`<sup>Required</sup> <a name="bound_iam_role_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundIamRoleArns"></a>

```python
bound_iam_role_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_regions`<sup>Required</sup> <a name="bound_regions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundRegions"></a>

```python
bound_regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_subnet_ids`<sup>Required</sup> <a name="bound_subnet_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundSubnetIds"></a>

```python
bound_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_vpc_ids`<sup>Required</sup> <a name="bound_vpc_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.boundVpcIds"></a>

```python
bound_vpc_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disallow_reauthentication`<sup>Required</sup> <a name="disallow_reauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.disallowReauthentication"></a>

```python
disallow_reauthentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inferred_aws_region`<sup>Required</sup> <a name="inferred_aws_region" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredAwsRegion"></a>

```python
inferred_aws_region: str
```

- *Type:* str

---

##### `inferred_entity_type`<sup>Required</sup> <a name="inferred_entity_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.inferredEntityType"></a>

```python
inferred_entity_type: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resolve_aws_unique_ids`<sup>Required</sup> <a name="resolve_aws_unique_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.resolveAwsUniqueIds"></a>

```python
resolve_aws_unique_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `role_tag`<sup>Required</sup> <a name="role_tag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.roleTag"></a>

```python
role_tag: str
```

- *Type:* str

---

##### `token_bound_cidrs`<sup>Required</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_explicit_max_ttl`<sup>Required</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_max_ttl`<sup>Required</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_no_default_policy`<sup>Required</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_num_uses`<sup>Required</sup> <a name="token_num_uses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_period`<sup>Required</sup> <a name="token_period" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_policies`<sup>Required</sup> <a name="token_policies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `token_ttl`<sup>Required</sup> <a name="token_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_type`<sup>Required</sup> <a name="token_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoleConfig <a name="AwsAuthBackendRoleConfig" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_role

awsAuthBackendRole.AwsAuthBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role: str,
  allow_instance_migration: typing.Union[bool, IResolvable] = None,
  auth_type: str = None,
  backend: str = None,
  bound_account_ids: typing.List[str] = None,
  bound_ami_ids: typing.List[str] = None,
  bound_ec2_instance_ids: typing.List[str] = None,
  bound_iam_instance_profile_arns: typing.List[str] = None,
  bound_iam_principal_arns: typing.List[str] = None,
  bound_iam_role_arns: typing.List[str] = None,
  bound_regions: typing.List[str] = None,
  bound_subnet_ids: typing.List[str] = None,
  bound_vpc_ids: typing.List[str] = None,
  disallow_reauthentication: typing.Union[bool, IResolvable] = None,
  id: str = None,
  inferred_aws_region: str = None,
  inferred_entity_type: str = None,
  namespace: str = None,
  resolve_aws_unique_ids: typing.Union[bool, IResolvable] = None,
  role_tag: str = None,
  token_bound_cidrs: typing.List[str] = None,
  token_explicit_max_ttl: typing.Union[int, float] = None,
  token_max_ttl: typing.Union[int, float] = None,
  token_no_default_policy: typing.Union[bool, IResolvable] = None,
  token_num_uses: typing.Union[int, float] = None,
  token_period: typing.Union[int, float] = None,
  token_policies: typing.List[str] = None,
  token_ttl: typing.Union[int, float] = None,
  token_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.role">role</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.allowInstanceMigration">allow_instance_migration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, allows migration of the underlying instance where the client resides. Use with caution. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.authType">auth_type</a></code> | <code>str</code> | The auth type permitted for this role. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAccountIds">bound_account_ids</a></code> | <code>typing.List[str]</code> | Only EC2 instances with this account ID in their identity document will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAmiIds">bound_ami_ids</a></code> | <code>typing.List[str]</code> | Only EC2 instances using this AMI ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundEc2InstanceIds">bound_ec2_instance_ids</a></code> | <code>typing.List[str]</code> | Only EC2 instances that match this instance ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamInstanceProfileArns">bound_iam_instance_profile_arns</a></code> | <code>typing.List[str]</code> | Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamPrincipalArns">bound_iam_principal_arns</a></code> | <code>typing.List[str]</code> | The IAM principal that must be authenticated using the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamRoleArns">bound_iam_role_arns</a></code> | <code>typing.List[str]</code> | Only EC2 instances that match this IAM role ARN will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundRegions">bound_regions</a></code> | <code>typing.List[str]</code> | Only EC2 instances in this region will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundSubnetIds">bound_subnet_ids</a></code> | <code>typing.List[str]</code> | Only EC2 instances associated with this subnet ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundVpcIds">bound_vpc_ids</a></code> | <code>typing.List[str]</code> | Only EC2 instances associated with this VPC ID will be permitted to log in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.disallowReauthentication">disallow_reauthentication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When true, only allows a single token to be granted per instance ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredAwsRegion">inferred_aws_region</a></code> | <code>str</code> | The region to search for the inferred entities in. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredEntityType">inferred_entity_type</a></code> | <code>str</code> | The type of inferencing Vault should do. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.resolveAwsUniqueIds">resolve_aws_unique_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.roleTag">role_tag</a></code> | <code>str</code> | The key of the tag on EC2 instance to use for role tags. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenBoundCidrs">token_bound_cidrs</a></code> | <code>typing.List[str]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenExplicitMaxTtl">token_explicit_max_ttl</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenMaxTtl">token_max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNoDefaultPolicy">token_no_default_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNumUses">token_num_uses</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPeriod">token_period</a></code> | <code>typing.Union[int, float]</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPolicies">token_policies</a></code> | <code>typing.List[str]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenTtl">token_ttl</a></code> | <code>typing.Union[int, float]</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenType">token_type</a></code> | <code>str</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#role AwsAuthBackendRole#role}

---

##### `allow_instance_migration`<sup>Optional</sup> <a name="allow_instance_migration" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.allowInstanceMigration"></a>

```python
allow_instance_migration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, allows migration of the underlying instance where the client resides. Use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#allow_instance_migration AwsAuthBackendRole#allow_instance_migration}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

The auth type permitted for this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#auth_type AwsAuthBackendRole#auth_type}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#backend AwsAuthBackendRole#backend}

---

##### `bound_account_ids`<sup>Optional</sup> <a name="bound_account_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAccountIds"></a>

```python
bound_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

Only EC2 instances with this account ID in their identity document will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_account_ids AwsAuthBackendRole#bound_account_ids}

---

##### `bound_ami_ids`<sup>Optional</sup> <a name="bound_ami_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundAmiIds"></a>

```python
bound_ami_ids: typing.List[str]
```

- *Type:* typing.List[str]

Only EC2 instances using this AMI ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_ami_ids AwsAuthBackendRole#bound_ami_ids}

---

##### `bound_ec2_instance_ids`<sup>Optional</sup> <a name="bound_ec2_instance_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundEc2InstanceIds"></a>

```python
bound_ec2_instance_ids: typing.List[str]
```

- *Type:* typing.List[str]

Only EC2 instances that match this instance ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_ec2_instance_ids AwsAuthBackendRole#bound_ec2_instance_ids}

---

##### `bound_iam_instance_profile_arns`<sup>Optional</sup> <a name="bound_iam_instance_profile_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamInstanceProfileArns"></a>

```python
bound_iam_instance_profile_arns: typing.List[str]
```

- *Type:* typing.List[str]

Only EC2 instances associated with an IAM instance profile ARN that matches this value will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_iam_instance_profile_arns AwsAuthBackendRole#bound_iam_instance_profile_arns}

---

##### `bound_iam_principal_arns`<sup>Optional</sup> <a name="bound_iam_principal_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamPrincipalArns"></a>

```python
bound_iam_principal_arns: typing.List[str]
```

- *Type:* typing.List[str]

The IAM principal that must be authenticated using the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_iam_principal_arns AwsAuthBackendRole#bound_iam_principal_arns}

---

##### `bound_iam_role_arns`<sup>Optional</sup> <a name="bound_iam_role_arns" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundIamRoleArns"></a>

```python
bound_iam_role_arns: typing.List[str]
```

- *Type:* typing.List[str]

Only EC2 instances that match this IAM role ARN will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_iam_role_arns AwsAuthBackendRole#bound_iam_role_arns}

---

##### `bound_regions`<sup>Optional</sup> <a name="bound_regions" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundRegions"></a>

```python
bound_regions: typing.List[str]
```

- *Type:* typing.List[str]

Only EC2 instances in this region will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_regions AwsAuthBackendRole#bound_regions}

---

##### `bound_subnet_ids`<sup>Optional</sup> <a name="bound_subnet_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundSubnetIds"></a>

```python
bound_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Only EC2 instances associated with this subnet ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_subnet_ids AwsAuthBackendRole#bound_subnet_ids}

---

##### `bound_vpc_ids`<sup>Optional</sup> <a name="bound_vpc_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.boundVpcIds"></a>

```python
bound_vpc_ids: typing.List[str]
```

- *Type:* typing.List[str]

Only EC2 instances associated with this VPC ID will be permitted to log in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#bound_vpc_ids AwsAuthBackendRole#bound_vpc_ids}

---

##### `disallow_reauthentication`<sup>Optional</sup> <a name="disallow_reauthentication" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.disallowReauthentication"></a>

```python
disallow_reauthentication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When true, only allows a single token to be granted per instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#disallow_reauthentication AwsAuthBackendRole#disallow_reauthentication}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#id AwsAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferred_aws_region`<sup>Optional</sup> <a name="inferred_aws_region" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredAwsRegion"></a>

```python
inferred_aws_region: str
```

- *Type:* str

The region to search for the inferred entities in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#inferred_aws_region AwsAuthBackendRole#inferred_aws_region}

---

##### `inferred_entity_type`<sup>Optional</sup> <a name="inferred_entity_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.inferredEntityType"></a>

```python
inferred_entity_type: str
```

- *Type:* str

The type of inferencing Vault should do.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#inferred_entity_type AwsAuthBackendRole#inferred_entity_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#namespace AwsAuthBackendRole#namespace}

---

##### `resolve_aws_unique_ids`<sup>Optional</sup> <a name="resolve_aws_unique_ids" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.resolveAwsUniqueIds"></a>

```python
resolve_aws_unique_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether or not Vault should resolve the bound_iam_principal_arn to an AWS Unique ID.

When true, deleting a principal and recreating it with the same name won't automatically grant the new principal the same roles in Vault that the old principal had.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#resolve_aws_unique_ids AwsAuthBackendRole#resolve_aws_unique_ids}

---

##### `role_tag`<sup>Optional</sup> <a name="role_tag" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.roleTag"></a>

```python
role_tag: str
```

- *Type:* str

The key of the tag on EC2 instance to use for role tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#role_tag AwsAuthBackendRole#role_tag}

---

##### `token_bound_cidrs`<sup>Optional</sup> <a name="token_bound_cidrs" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```python
token_bound_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_bound_cidrs AwsAuthBackendRole#token_bound_cidrs}

---

##### `token_explicit_max_ttl`<sup>Optional</sup> <a name="token_explicit_max_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```python
token_explicit_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_explicit_max_ttl AwsAuthBackendRole#token_explicit_max_ttl}

---

##### `token_max_ttl`<sup>Optional</sup> <a name="token_max_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```python
token_max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_max_ttl AwsAuthBackendRole#token_max_ttl}

---

##### `token_no_default_policy`<sup>Optional</sup> <a name="token_no_default_policy" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```python
token_no_default_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_no_default_policy AwsAuthBackendRole#token_no_default_policy}

---

##### `token_num_uses`<sup>Optional</sup> <a name="token_num_uses" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenNumUses"></a>

```python
token_num_uses: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_num_uses AwsAuthBackendRole#token_num_uses}

---

##### `token_period`<sup>Optional</sup> <a name="token_period" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPeriod"></a>

```python
token_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_period AwsAuthBackendRole#token_period}

---

##### `token_policies`<sup>Optional</sup> <a name="token_policies" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenPolicies"></a>

```python
token_policies: typing.List[str]
```

- *Type:* typing.List[str]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_policies AwsAuthBackendRole#token_policies}

---

##### `token_ttl`<sup>Optional</sup> <a name="token_ttl" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenTtl"></a>

```python
token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_ttl AwsAuthBackendRole#token_ttl}

---

##### `token_type`<sup>Optional</sup> <a name="token_type" id="@cdktf/provider-vault.awsAuthBackendRole.AwsAuthBackendRoleConfig.property.tokenType"></a>

```python
token_type: str
```

- *Type:* str

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/resources/aws_auth_backend_role#token_type AwsAuthBackendRole#token_type}

---



