# `awsAuthBackendClient` Submodule <a name="`awsAuthBackendClient` Submodule" id="@cdktf/provider-vault.awsAuthBackendClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendClient <a name="AwsAuthBackendClient" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client vault_aws_auth_backend_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_client

awsAuthBackendClient.AwsAuthBackendClient(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_key: str = None,
  backend: str = None,
  ec2_endpoint: str = None,
  iam_endpoint: str = None,
  iam_server_id_header_value: str = None,
  id: str = None,
  identity_token_audience: str = None,
  identity_token_ttl: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  namespace: str = None,
  role_arn: str = None,
  secret_key: str = None,
  sts_endpoint: str = None,
  sts_region: str = None,
  use_sts_region_from_client: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.accessKey">access_key</a></code> | <code>str</code> | AWS Access key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.ec2Endpoint">ec2_endpoint</a></code> | <code>str</code> | URL to override the default generated endpoint for making AWS EC2 API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.iamEndpoint">iam_endpoint</a></code> | <code>str</code> | URL to override the default generated endpoint for making AWS IAM API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.iamServerIdHeaderValue">iam_server_id_header_value</a></code> | <code>str</code> | The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.identityTokenAudience">identity_token_audience</a></code> | <code>str</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.identityTokenTtl">identity_token_ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Number of max retries the client should use for recoverable errors. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Role ARN to assume for plugin identity token federation. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.secretKey">secret_key</a></code> | <code>str</code> | AWS Secret key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.stsEndpoint">sts_endpoint</a></code> | <code>str</code> | URL to override the default generated endpoint for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.stsRegion">sts_region</a></code> | <code>str</code> | Region to override the default region for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.useStsRegionFromClient">use_sts_region_from_client</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, will override sts_region and use the region from the client request's header. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.accessKey"></a>

- *Type:* str

AWS Access key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#access_key AwsAuthBackendClient#access_key}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#backend AwsAuthBackendClient#backend}

---

##### `ec2_endpoint`<sup>Optional</sup> <a name="ec2_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.ec2Endpoint"></a>

- *Type:* str

URL to override the default generated endpoint for making AWS EC2 API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#ec2_endpoint AwsAuthBackendClient#ec2_endpoint}

---

##### `iam_endpoint`<sup>Optional</sup> <a name="iam_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.iamEndpoint"></a>

- *Type:* str

URL to override the default generated endpoint for making AWS IAM API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#iam_endpoint AwsAuthBackendClient#iam_endpoint}

---

##### `iam_server_id_header_value`<sup>Optional</sup> <a name="iam_server_id_header_value" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.iamServerIdHeaderValue"></a>

- *Type:* str

The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#iam_server_id_header_value AwsAuthBackendClient#iam_server_id_header_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_audience`<sup>Optional</sup> <a name="identity_token_audience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.identityTokenAudience"></a>

- *Type:* str

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#identity_token_audience AwsAuthBackendClient#identity_token_audience}

---

##### `identity_token_ttl`<sup>Optional</sup> <a name="identity_token_ttl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.identityTokenTtl"></a>

- *Type:* typing.Union[int, float]

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#identity_token_ttl AwsAuthBackendClient#identity_token_ttl}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Number of max retries the client should use for recoverable errors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#max_retries AwsAuthBackendClient#max_retries}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#namespace AwsAuthBackendClient#namespace}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.roleArn"></a>

- *Type:* str

Role ARN to assume for plugin identity token federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#role_arn AwsAuthBackendClient#role_arn}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.secretKey"></a>

- *Type:* str

AWS Secret key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#secret_key AwsAuthBackendClient#secret_key}

---

##### `sts_endpoint`<sup>Optional</sup> <a name="sts_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.stsEndpoint"></a>

- *Type:* str

URL to override the default generated endpoint for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#sts_endpoint AwsAuthBackendClient#sts_endpoint}

---

##### `sts_region`<sup>Optional</sup> <a name="sts_region" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.stsRegion"></a>

- *Type:* str

Region to override the default region for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#sts_region AwsAuthBackendClient#sts_region}

---

##### `use_sts_region_from_client`<sup>Optional</sup> <a name="use_sts_region_from_client" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.Initializer.parameter.useStsRegionFromClient"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, will override sts_region and use the region from the client request's header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#use_sts_region_from_client AwsAuthBackendClient#use_sts_region_from_client}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey">reset_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint">reset_ec2_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint">reset_iam_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue">reset_iam_server_id_header_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenAudience">reset_identity_token_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenTtl">reset_identity_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey">reset_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint">reset_sts_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion">reset_sts_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetUseStsRegionFromClient">reset_use_sts_region_from_client</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_access_key` <a name="reset_access_key" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetAccessKey"></a>

```python
def reset_access_key() -> None
```

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_ec2_endpoint` <a name="reset_ec2_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetEc2Endpoint"></a>

```python
def reset_ec2_endpoint() -> None
```

##### `reset_iam_endpoint` <a name="reset_iam_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamEndpoint"></a>

```python
def reset_iam_endpoint() -> None
```

##### `reset_iam_server_id_header_value` <a name="reset_iam_server_id_header_value" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIamServerIdHeaderValue"></a>

```python
def reset_iam_server_id_header_value() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_token_audience` <a name="reset_identity_token_audience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenAudience"></a>

```python
def reset_identity_token_audience() -> None
```

##### `reset_identity_token_ttl` <a name="reset_identity_token_ttl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetIdentityTokenTtl"></a>

```python
def reset_identity_token_ttl() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_secret_key` <a name="reset_secret_key" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetSecretKey"></a>

```python
def reset_secret_key() -> None
```

##### `reset_sts_endpoint` <a name="reset_sts_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsEndpoint"></a>

```python
def reset_sts_endpoint() -> None
```

##### `reset_sts_region` <a name="reset_sts_region" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetStsRegion"></a>

```python
def reset_sts_region() -> None
```

##### `reset_use_sts_region_from_client` <a name="reset_use_sts_region_from_client" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.resetUseStsRegionFromClient"></a>

```python
def reset_use_sts_region_from_client() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AwsAuthBackendClient resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_client

awsAuthBackendClient.AwsAuthBackendClient.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_client

awsAuthBackendClient.AwsAuthBackendClient.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_client

awsAuthBackendClient.AwsAuthBackendClient.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_client

awsAuthBackendClient.AwsAuthBackendClient.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AwsAuthBackendClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsAuthBackendClient to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsAuthBackendClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput">ec2_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput">iam_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput">iam_server_id_header_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudienceInput">identity_token_audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtlInput">identity_token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput">secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput">sts_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput">sts_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClientInput">use_sts_region_from_client_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint">ec2_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint">iam_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue">iam_server_id_header_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudience">identity_token_audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtl">identity_token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint">sts_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion">sts_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClient">use_sts_region_from_client</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `ec2_endpoint_input`<sup>Optional</sup> <a name="ec2_endpoint_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2EndpointInput"></a>

```python
ec2_endpoint_input: str
```

- *Type:* str

---

##### `iam_endpoint_input`<sup>Optional</sup> <a name="iam_endpoint_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpointInput"></a>

```python
iam_endpoint_input: str
```

- *Type:* str

---

##### `iam_server_id_header_value_input`<sup>Optional</sup> <a name="iam_server_id_header_value_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValueInput"></a>

```python
iam_server_id_header_value_input: str
```

- *Type:* str

---

##### `identity_token_audience_input`<sup>Optional</sup> <a name="identity_token_audience_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudienceInput"></a>

```python
identity_token_audience_input: str
```

- *Type:* str

---

##### `identity_token_ttl_input`<sup>Optional</sup> <a name="identity_token_ttl_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtlInput"></a>

```python
identity_token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `secret_key_input`<sup>Optional</sup> <a name="secret_key_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKeyInput"></a>

```python
secret_key_input: str
```

- *Type:* str

---

##### `sts_endpoint_input`<sup>Optional</sup> <a name="sts_endpoint_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpointInput"></a>

```python
sts_endpoint_input: str
```

- *Type:* str

---

##### `sts_region_input`<sup>Optional</sup> <a name="sts_region_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegionInput"></a>

```python
sts_region_input: str
```

- *Type:* str

---

##### `use_sts_region_from_client_input`<sup>Optional</sup> <a name="use_sts_region_from_client_input" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClientInput"></a>

```python
use_sts_region_from_client_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `ec2_endpoint`<sup>Required</sup> <a name="ec2_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.ec2Endpoint"></a>

```python
ec2_endpoint: str
```

- *Type:* str

---

##### `iam_endpoint`<sup>Required</sup> <a name="iam_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamEndpoint"></a>

```python
iam_endpoint: str
```

- *Type:* str

---

##### `iam_server_id_header_value`<sup>Required</sup> <a name="iam_server_id_header_value" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.iamServerIdHeaderValue"></a>

```python
iam_server_id_header_value: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity_token_audience`<sup>Required</sup> <a name="identity_token_audience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenAudience"></a>

```python
identity_token_audience: str
```

- *Type:* str

---

##### `identity_token_ttl`<sup>Required</sup> <a name="identity_token_ttl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.identityTokenTtl"></a>

```python
identity_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_retries`<sup>Required</sup> <a name="max_retries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `sts_endpoint`<sup>Required</sup> <a name="sts_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsEndpoint"></a>

```python
sts_endpoint: str
```

- *Type:* str

---

##### `sts_region`<sup>Required</sup> <a name="sts_region" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.stsRegion"></a>

```python
sts_region: str
```

- *Type:* str

---

##### `use_sts_region_from_client`<sup>Required</sup> <a name="use_sts_region_from_client" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.useStsRegionFromClient"></a>

```python
use_sts_region_from_client: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClient.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendClientConfig <a name="AwsAuthBackendClientConfig" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_client

awsAuthBackendClient.AwsAuthBackendClientConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_key: str = None,
  backend: str = None,
  ec2_endpoint: str = None,
  iam_endpoint: str = None,
  iam_server_id_header_value: str = None,
  id: str = None,
  identity_token_audience: str = None,
  identity_token_ttl: typing.Union[int, float] = None,
  max_retries: typing.Union[int, float] = None,
  namespace: str = None,
  role_arn: str = None,
  secret_key: str = None,
  sts_endpoint: str = None,
  sts_region: str = None,
  use_sts_region_from_client: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey">access_key</a></code> | <code>str</code> | AWS Access key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint">ec2_endpoint</a></code> | <code>str</code> | URL to override the default generated endpoint for making AWS EC2 API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint">iam_endpoint</a></code> | <code>str</code> | URL to override the default generated endpoint for making AWS IAM API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue">iam_server_id_header_value</a></code> | <code>str</code> | The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenAudience">identity_token_audience</a></code> | <code>str</code> | The audience claim value. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenTtl">identity_token_ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL of generated identity tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Number of max retries the client should use for recoverable errors. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Role ARN to assume for plugin identity token federation. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey">secret_key</a></code> | <code>str</code> | AWS Secret key with permissions to query AWS APIs. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint">sts_endpoint</a></code> | <code>str</code> | URL to override the default generated endpoint for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion">sts_region</a></code> | <code>str</code> | Region to override the default region for making AWS STS API calls. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.useStsRegionFromClient">use_sts_region_from_client</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, will override sts_region and use the region from the client request's header. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

AWS Access key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#access_key AwsAuthBackendClient#access_key}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#backend AwsAuthBackendClient#backend}

---

##### `ec2_endpoint`<sup>Optional</sup> <a name="ec2_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.ec2Endpoint"></a>

```python
ec2_endpoint: str
```

- *Type:* str

URL to override the default generated endpoint for making AWS EC2 API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#ec2_endpoint AwsAuthBackendClient#ec2_endpoint}

---

##### `iam_endpoint`<sup>Optional</sup> <a name="iam_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamEndpoint"></a>

```python
iam_endpoint: str
```

- *Type:* str

URL to override the default generated endpoint for making AWS IAM API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#iam_endpoint AwsAuthBackendClient#iam_endpoint}

---

##### `iam_server_id_header_value`<sup>Optional</sup> <a name="iam_server_id_header_value" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.iamServerIdHeaderValue"></a>

```python
iam_server_id_header_value: str
```

- *Type:* str

The value to require in the X-Vault-AWS-IAM-Server-ID header as part of GetCallerIdentity requests that are used in the iam auth method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#iam_server_id_header_value AwsAuthBackendClient#iam_server_id_header_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#id AwsAuthBackendClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_token_audience`<sup>Optional</sup> <a name="identity_token_audience" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenAudience"></a>

```python
identity_token_audience: str
```

- *Type:* str

The audience claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#identity_token_audience AwsAuthBackendClient#identity_token_audience}

---

##### `identity_token_ttl`<sup>Optional</sup> <a name="identity_token_ttl" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.identityTokenTtl"></a>

```python
identity_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL of generated identity tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#identity_token_ttl AwsAuthBackendClient#identity_token_ttl}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of max retries the client should use for recoverable errors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#max_retries AwsAuthBackendClient#max_retries}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#namespace AwsAuthBackendClient#namespace}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Role ARN to assume for plugin identity token federation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#role_arn AwsAuthBackendClient#role_arn}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

AWS Secret key with permissions to query AWS APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#secret_key AwsAuthBackendClient#secret_key}

---

##### `sts_endpoint`<sup>Optional</sup> <a name="sts_endpoint" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsEndpoint"></a>

```python
sts_endpoint: str
```

- *Type:* str

URL to override the default generated endpoint for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#sts_endpoint AwsAuthBackendClient#sts_endpoint}

---

##### `sts_region`<sup>Optional</sup> <a name="sts_region" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.stsRegion"></a>

```python
sts_region: str
```

- *Type:* str

Region to override the default region for making AWS STS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#sts_region AwsAuthBackendClient#sts_region}

---

##### `use_sts_region_from_client`<sup>Optional</sup> <a name="use_sts_region_from_client" id="@cdktf/provider-vault.awsAuthBackendClient.AwsAuthBackendClientConfig.property.useStsRegionFromClient"></a>

```python
use_sts_region_from_client: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, will override sts_region and use the region from the client request's header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_client#use_sts_region_from_client AwsAuthBackendClient#use_sts_region_from_client}

---



