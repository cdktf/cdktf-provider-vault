# `awsSecretBackend` Submodule <a name="`awsSecretBackend` Submodule" id="@cdktf/provider-vault.awsSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsSecretBackend <a name="AwsSecretBackend" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend vault_aws_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend

awsSecretBackend.AwsSecretBackend(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_key: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  iam_endpoint: str = None,
  id: str = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  path: str = None,
  region: str = None,
  secret_key: str = None,
  sts_endpoint: str = None,
  username_template: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.accessKey">access_key</a></code> | <code>str</code> | The AWS Access Key ID to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.iamEndpoint">iam_endpoint</a></code> | <code>str</code> | Specifies a custom HTTP IAM endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#id AwsSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.region">region</a></code> | <code>str</code> | The AWS region to make API calls against. Defaults to us-east-1. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.secretKey">secret_key</a></code> | <code>str</code> | The AWS Secret Access Key to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.stsEndpoint">sts_endpoint</a></code> | <code>str</code> | Specifies a custom HTTP STS endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.usernameTemplate">username_template</a></code> | <code>str</code> | Template describing how dynamic usernames are generated. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.accessKey"></a>

- *Type:* str

The AWS Access Key ID to use when generating new credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#access_key AwsSecretBackend#access_key}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.defaultLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#default_lease_ttl_seconds AwsSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.description"></a>

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#description AwsSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.disableRemount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#disable_remount AwsSecretBackend#disable_remount}

---

##### `iam_endpoint`<sup>Optional</sup> <a name="iam_endpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.iamEndpoint"></a>

- *Type:* str

Specifies a custom HTTP IAM endpoint to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#iam_endpoint AwsSecretBackend#iam_endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#id AwsSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.maxLeaseTtlSeconds"></a>

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#max_lease_ttl_seconds AwsSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#namespace AwsSecretBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.path"></a>

- *Type:* str

Path to mount the backend at.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#path AwsSecretBackend#path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.region"></a>

- *Type:* str

The AWS region to make API calls against. Defaults to us-east-1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#region AwsSecretBackend#region}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.secretKey"></a>

- *Type:* str

The AWS Secret Access Key to use when generating new credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#secret_key AwsSecretBackend#secret_key}

---

##### `sts_endpoint`<sup>Optional</sup> <a name="sts_endpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.stsEndpoint"></a>

- *Type:* str

Specifies a custom HTTP STS endpoint to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#sts_endpoint AwsSecretBackend#sts_endpoint}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.Initializer.parameter.usernameTemplate"></a>

- *Type:* str

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#username_template AwsSecretBackend#username_template}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAccessKey">reset_access_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDefaultLeaseTtlSeconds">reset_default_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIamEndpoint">reset_iam_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetMaxLeaseTtlSeconds">reset_max_lease_ttl_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetSecretKey">reset_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsEndpoint">reset_sts_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetUsernameTemplate">reset_username_template</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_access_key` <a name="reset_access_key" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetAccessKey"></a>

```python
def reset_access_key() -> None
```

##### `reset_default_lease_ttl_seconds` <a name="reset_default_lease_ttl_seconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```python
def reset_default_lease_ttl_seconds() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_iam_endpoint` <a name="reset_iam_endpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetIamEndpoint"></a>

```python
def reset_iam_endpoint() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_lease_ttl_seconds` <a name="reset_max_lease_ttl_seconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetMaxLeaseTtlSeconds"></a>

```python
def reset_max_lease_ttl_seconds() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_key` <a name="reset_secret_key" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetSecretKey"></a>

```python
def reset_secret_key() -> None
```

##### `reset_sts_endpoint` <a name="reset_sts_endpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetStsEndpoint"></a>

```python
def reset_sts_endpoint() -> None
```

##### `reset_username_template` <a name="reset_username_template" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.resetUsernameTemplate"></a>

```python
def reset_username_template() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend

awsSecretBackend.AwsSecretBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend

awsSecretBackend.AwsSecretBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend

awsSecretBackend.AwsSecretBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSecondsInput">default_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpointInput">iam_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSecondsInput">max_lease_ttl_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKeyInput">secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpointInput">sts_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplateInput">username_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpoint">iam_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpoint">sts_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplate">username_template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds_input`<sup>Optional</sup> <a name="default_lease_ttl_seconds_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```python
default_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemountInput"></a>

```python
disable_remount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iam_endpoint_input`<sup>Optional</sup> <a name="iam_endpoint_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpointInput"></a>

```python
iam_endpoint_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_lease_ttl_seconds_input`<sup>Optional</sup> <a name="max_lease_ttl_seconds_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```python
max_lease_ttl_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_key_input`<sup>Optional</sup> <a name="secret_key_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKeyInput"></a>

```python
secret_key_input: str
```

- *Type:* str

---

##### `sts_endpoint_input`<sup>Optional</sup> <a name="sts_endpoint_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpointInput"></a>

```python
sts_endpoint_input: str
```

- *Type:* str

---

##### `username_template_input`<sup>Optional</sup> <a name="username_template_input" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplateInput"></a>

```python
username_template_input: str
```

- *Type:* str

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `default_lease_ttl_seconds`<sup>Required</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iam_endpoint`<sup>Required</sup> <a name="iam_endpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.iamEndpoint"></a>

```python
iam_endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_lease_ttl_seconds`<sup>Required</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `sts_endpoint`<sup>Required</sup> <a name="sts_endpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.stsEndpoint"></a>

```python
sts_endpoint: str
```

- *Type:* str

---

##### `username_template`<sup>Required</sup> <a name="username_template" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsSecretBackendConfig <a name="AwsSecretBackendConfig" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_secret_backend

awsSecretBackend.AwsSecretBackendConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_key: str = None,
  default_lease_ttl_seconds: typing.Union[int, float] = None,
  description: str = None,
  disable_remount: typing.Union[bool, IResolvable] = None,
  iam_endpoint: str = None,
  id: str = None,
  max_lease_ttl_seconds: typing.Union[int, float] = None,
  namespace: str = None,
  path: str = None,
  region: str = None,
  secret_key: str = None,
  sts_endpoint: str = None,
  username_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.accessKey">access_key</a></code> | <code>str</code> | The AWS Access Key ID to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.defaultLeaseTtlSeconds">default_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.description">description</a></code> | <code>str</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.disableRemount">disable_remount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.iamEndpoint">iam_endpoint</a></code> | <code>str</code> | Specifies a custom HTTP IAM endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#id AwsSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.maxLeaseTtlSeconds">max_lease_ttl_seconds</a></code> | <code>typing.Union[int, float]</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.path">path</a></code> | <code>str</code> | Path to mount the backend at. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.region">region</a></code> | <code>str</code> | The AWS region to make API calls against. Defaults to us-east-1. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.secretKey">secret_key</a></code> | <code>str</code> | The AWS Secret Access Key to use when generating new credentials. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsEndpoint">sts_endpoint</a></code> | <code>str</code> | Specifies a custom HTTP STS endpoint to use. |
| <code><a href="#@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.usernameTemplate">username_template</a></code> | <code>str</code> | Template describing how dynamic usernames are generated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

The AWS Access Key ID to use when generating new credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#access_key AwsSecretBackend#access_key}

---

##### `default_lease_ttl_seconds`<sup>Optional</sup> <a name="default_lease_ttl_seconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```python
default_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#default_lease_ttl_seconds AwsSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#description AwsSecretBackend#description}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.disableRemount"></a>

```python
disable_remount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#disable_remount AwsSecretBackend#disable_remount}

---

##### `iam_endpoint`<sup>Optional</sup> <a name="iam_endpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.iamEndpoint"></a>

```python
iam_endpoint: str
```

- *Type:* str

Specifies a custom HTTP IAM endpoint to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#iam_endpoint AwsSecretBackend#iam_endpoint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#id AwsSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_lease_ttl_seconds`<sup>Optional</sup> <a name="max_lease_ttl_seconds" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```python
max_lease_ttl_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#max_lease_ttl_seconds AwsSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#namespace AwsSecretBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path to mount the backend at.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#path AwsSecretBackend#path}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The AWS region to make API calls against. Defaults to us-east-1.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#region AwsSecretBackend#region}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

The AWS Secret Access Key to use when generating new credentials.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#secret_key AwsSecretBackend#secret_key}

---

##### `sts_endpoint`<sup>Optional</sup> <a name="sts_endpoint" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.stsEndpoint"></a>

```python
sts_endpoint: str
```

- *Type:* str

Specifies a custom HTTP STS endpoint to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#sts_endpoint AwsSecretBackend#sts_endpoint}

---

##### `username_template`<sup>Optional</sup> <a name="username_template" id="@cdktf/provider-vault.awsSecretBackend.AwsSecretBackendConfig.property.usernameTemplate"></a>

```python
username_template: str
```

- *Type:* str

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/aws_secret_backend#username_template AwsSecretBackend#username_template}

---


