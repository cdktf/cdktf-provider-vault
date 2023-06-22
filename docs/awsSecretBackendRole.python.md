# `vault_aws_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_aws_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role).

# `awsSecretBackendRole` Submodule <a name="`awsSecretBackendRole` Submodule" id="@cdktf/provider-vault.awsSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackendRole <a name="AwsSecretBackendRole" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role vault_aws_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_role

awsSecretBackendRole.AwsSecretBackendRole(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  credential_type: str,
  name: str,
  default_sts_ttl: typing.Union[int, float] = None,
  iam_groups: typing.List[str] = None,
  id: str = None,
  max_sts_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  permissions_boundary_arn: str = None,
  policy_arns: typing.List[str] = None,
  policy_document: str = None,
  role_arns: typing.List[str] = None,
  user_path: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path of the AWS Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.credentialType">credential_type</a></code> | <code>str</code> | Role credential type. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>str</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.defaultStsTtl">default_sts_ttl</a></code> | <code>typing.Union[int, float]</code> | The default TTL in seconds for STS credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.iamGroups">iam_groups</a></code> | <code>typing.List[str]</code> | A list of IAM group names. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.maxStsTtl">max_sts_ttl</a></code> | <code>typing.Union[int, float]</code> | The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.permissionsBoundaryArn">permissions_boundary_arn</a></code> | <code>str</code> | The ARN of the AWS Permissions Boundary to attach to IAM users created in the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.policyArns">policy_arns</a></code> | <code>typing.List[str]</code> | ARN for an existing IAM policy the role should use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.policyDocument">policy_document</a></code> | <code>str</code> | IAM policy the role should use in JSON format. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.roleArns">role_arns</a></code> | <code>typing.List[str]</code> | ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.userPath">user_path</a></code> | <code>str</code> | The path for the user name. Valid only when credential_type is iam_user. Default is /. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* str

The path of the AWS Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#backend AwsSecretBackendRole#backend}

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.credentialType"></a>

- *Type:* str

Role credential type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#credential_type AwsSecretBackendRole#credential_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* str

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#name AwsSecretBackendRole#name}

---

##### `default_sts_ttl`<sup>Optional</sup> <a name="default_sts_ttl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.defaultStsTtl"></a>

- *Type:* typing.Union[int, float]

The default TTL in seconds for STS credentials.

When a TTL is not specified when STS credentials are requested, and a default TTL is specified on the role, then this default TTL will be used. Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#default_sts_ttl AwsSecretBackendRole#default_sts_ttl}

---

##### `iam_groups`<sup>Optional</sup> <a name="iam_groups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.iamGroups"></a>

- *Type:* typing.List[str]

A list of IAM group names.

IAM users generated against this vault role will be added to these IAM Groups. For a credential type of assumed_role or federation_token, the policies sent to the corresponding AWS call (sts:AssumeRole or sts:GetFederation) will be the policies from each group in iam_groups combined with the policy_document and policy_arns parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#iam_groups AwsSecretBackendRole#iam_groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_sts_ttl`<sup>Optional</sup> <a name="max_sts_ttl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.maxStsTtl"></a>

- *Type:* typing.Union[int, float]

The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl).

Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#max_sts_ttl AwsSecretBackendRole#max_sts_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#namespace AwsSecretBackendRole#namespace}

---

##### `permissions_boundary_arn`<sup>Optional</sup> <a name="permissions_boundary_arn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.permissionsBoundaryArn"></a>

- *Type:* str

The ARN of the AWS Permissions Boundary to attach to IAM users created in the role.

Valid only when credential_type is iam_user. If not specified, then no permissions boundary policy will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#permissions_boundary_arn AwsSecretBackendRole#permissions_boundary_arn}

---

##### `policy_arns`<sup>Optional</sup> <a name="policy_arns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.policyArns"></a>

- *Type:* typing.List[str]

ARN for an existing IAM policy the role should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#policy_arns AwsSecretBackendRole#policy_arns}

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.policyDocument"></a>

- *Type:* str

IAM policy the role should use in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#policy_document AwsSecretBackendRole#policy_document}

---

##### `role_arns`<sup>Optional</sup> <a name="role_arns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.roleArns"></a>

- *Type:* typing.List[str]

ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#role_arns AwsSecretBackendRole#role_arns}

---

##### `user_path`<sup>Optional</sup> <a name="user_path" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.Initializer.parameter.userPath"></a>

- *Type:* str

The path for the user name. Valid only when credential_type is iam_user. Default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#user_path AwsSecretBackendRole#user_path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetDefaultStsTtl">reset_default_sts_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamGroups">reset_iam_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetMaxStsTtl">reset_max_sts_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPermissionsBoundaryArn">reset_permissions_boundary_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyArns">reset_policy_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyDocument">reset_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetRoleArns">reset_role_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetUserPath">reset_user_path</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_default_sts_ttl` <a name="reset_default_sts_ttl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetDefaultStsTtl"></a>

```python
def reset_default_sts_ttl() -> None
```

##### `reset_iam_groups` <a name="reset_iam_groups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetIamGroups"></a>

```python
def reset_iam_groups() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_sts_ttl` <a name="reset_max_sts_ttl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetMaxStsTtl"></a>

```python
def reset_max_sts_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_permissions_boundary_arn` <a name="reset_permissions_boundary_arn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPermissionsBoundaryArn"></a>

```python
def reset_permissions_boundary_arn() -> None
```

##### `reset_policy_arns` <a name="reset_policy_arns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyArns"></a>

```python
def reset_policy_arns() -> None
```

##### `reset_policy_document` <a name="reset_policy_document" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetPolicyDocument"></a>

```python
def reset_policy_document() -> None
```

##### `reset_role_arns` <a name="reset_role_arns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetRoleArns"></a>

```python
def reset_role_arns() -> None
```

##### `reset_user_path` <a name="reset_user_path" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.resetUserPath"></a>

```python
def reset_user_path() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_role

awsSecretBackendRole.AwsSecretBackendRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_role

awsSecretBackendRole.AwsSecretBackendRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_role

awsSecretBackendRole.AwsSecretBackendRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtlInput">default_sts_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroupsInput">iam_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtlInput">max_sts_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArnInput">permissions_boundary_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArnsInput">policy_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArnsInput">role_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPathInput">user_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtl">default_sts_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroups">iam_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtl">max_sts_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArn">permissions_boundary_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArns">policy_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArns">role_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPath">user_path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `default_sts_ttl_input`<sup>Optional</sup> <a name="default_sts_ttl_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtlInput"></a>

```python
default_sts_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iam_groups_input`<sup>Optional</sup> <a name="iam_groups_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroupsInput"></a>

```python
iam_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_sts_ttl_input`<sup>Optional</sup> <a name="max_sts_ttl_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtlInput"></a>

```python
max_sts_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `permissions_boundary_arn_input`<sup>Optional</sup> <a name="permissions_boundary_arn_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArnInput"></a>

```python
permissions_boundary_arn_input: str
```

- *Type:* str

---

##### `policy_arns_input`<sup>Optional</sup> <a name="policy_arns_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArnsInput"></a>

```python
policy_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `role_arns_input`<sup>Optional</sup> <a name="role_arns_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArnsInput"></a>

```python
role_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_path_input`<sup>Optional</sup> <a name="user_path_input" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPathInput"></a>

```python
user_path_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `default_sts_ttl`<sup>Required</sup> <a name="default_sts_ttl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.defaultStsTtl"></a>

```python
default_sts_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iam_groups`<sup>Required</sup> <a name="iam_groups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.iamGroups"></a>

```python
iam_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_sts_ttl`<sup>Required</sup> <a name="max_sts_ttl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.maxStsTtl"></a>

```python
max_sts_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `permissions_boundary_arn`<sup>Required</sup> <a name="permissions_boundary_arn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.permissionsBoundaryArn"></a>

```python
permissions_boundary_arn: str
```

- *Type:* str

---

##### `policy_arns`<sup>Required</sup> <a name="policy_arns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyArns"></a>

```python
policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `role_arns`<sup>Required</sup> <a name="role_arns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.roleArns"></a>

```python
role_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_path`<sup>Required</sup> <a name="user_path" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.userPath"></a>

```python
user_path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendRoleConfig <a name="AwsSecretBackendRoleConfig" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend_role

awsSecretBackendRole.AwsSecretBackendRoleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  credential_type: str,
  name: str,
  default_sts_ttl: typing.Union[int, float] = None,
  iam_groups: typing.List[str] = None,
  id: str = None,
  max_sts_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  permissions_boundary_arn: str = None,
  policy_arns: typing.List[str] = None,
  policy_document: str = None,
  role_arns: typing.List[str] = None,
  user_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.backend">backend</a></code> | <code>str</code> | The path of the AWS Secret Backend the role belongs to. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.credentialType">credential_type</a></code> | <code>str</code> | Role credential type. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.name">name</a></code> | <code>str</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.defaultStsTtl">default_sts_ttl</a></code> | <code>typing.Union[int, float]</code> | The default TTL in seconds for STS credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamGroups">iam_groups</a></code> | <code>typing.List[str]</code> | A list of IAM group names. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.maxStsTtl">max_sts_ttl</a></code> | <code>typing.Union[int, float]</code> | The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.permissionsBoundaryArn">permissions_boundary_arn</a></code> | <code>str</code> | The ARN of the AWS Permissions Boundary to attach to IAM users created in the role. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyArns">policy_arns</a></code> | <code>typing.List[str]</code> | ARN for an existing IAM policy the role should use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyDocument">policy_document</a></code> | <code>str</code> | IAM policy the role should use in JSON format. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.roleArns">role_arns</a></code> | <code>typing.List[str]</code> | ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.userPath">user_path</a></code> | <code>str</code> | The path for the user name. Valid only when credential_type is iam_user. Default is /. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path of the AWS Secret Backend the role belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#backend AwsSecretBackendRole#backend}

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

Role credential type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#credential_type AwsSecretBackendRole#credential_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#name AwsSecretBackendRole#name}

---

##### `default_sts_ttl`<sup>Optional</sup> <a name="default_sts_ttl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.defaultStsTtl"></a>

```python
default_sts_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The default TTL in seconds for STS credentials.

When a TTL is not specified when STS credentials are requested, and a default TTL is specified on the role, then this default TTL will be used. Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#default_sts_ttl AwsSecretBackendRole#default_sts_ttl}

---

##### `iam_groups`<sup>Optional</sup> <a name="iam_groups" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.iamGroups"></a>

```python
iam_groups: typing.List[str]
```

- *Type:* typing.List[str]

A list of IAM group names.

IAM users generated against this vault role will be added to these IAM Groups. For a credential type of assumed_role or federation_token, the policies sent to the corresponding AWS call (sts:AssumeRole or sts:GetFederation) will be the policies from each group in iam_groups combined with the policy_document and policy_arns parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#iam_groups AwsSecretBackendRole#iam_groups}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#id AwsSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_sts_ttl`<sup>Optional</sup> <a name="max_sts_ttl" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.maxStsTtl"></a>

```python
max_sts_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The max allowed TTL in seconds for STS credentials (credentials TTL are capped to max_sts_ttl).

Valid only when credential_type is one of assumed_role or federation_token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#max_sts_ttl AwsSecretBackendRole#max_sts_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#namespace AwsSecretBackendRole#namespace}

---

##### `permissions_boundary_arn`<sup>Optional</sup> <a name="permissions_boundary_arn" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.permissionsBoundaryArn"></a>

```python
permissions_boundary_arn: str
```

- *Type:* str

The ARN of the AWS Permissions Boundary to attach to IAM users created in the role.

Valid only when credential_type is iam_user. If not specified, then no permissions boundary policy will be attached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#permissions_boundary_arn AwsSecretBackendRole#permissions_boundary_arn}

---

##### `policy_arns`<sup>Optional</sup> <a name="policy_arns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyArns"></a>

```python
policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

ARN for an existing IAM policy the role should use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#policy_arns AwsSecretBackendRole#policy_arns}

---

##### `policy_document`<sup>Optional</sup> <a name="policy_document" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

IAM policy the role should use in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#policy_document AwsSecretBackendRole#policy_document}

---

##### `role_arns`<sup>Optional</sup> <a name="role_arns" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.roleArns"></a>

```python
role_arns: typing.List[str]
```

- *Type:* typing.List[str]

ARNs of AWS roles allowed to be assumed. Only valid when credential_type is 'assumed_role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#role_arns AwsSecretBackendRole#role_arns}

---

##### `user_path`<sup>Optional</sup> <a name="user_path" id="@cdktf/provider-vault.awsSecretBackendRole.AwsSecretBackendRoleConfig.property.userPath"></a>

```python
user_path: str
```

- *Type:* str

The path for the user name. Valid only when credential_type is iam_user. Default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_secret_backend_role#user_path AwsSecretBackendRole#user_path}

---



