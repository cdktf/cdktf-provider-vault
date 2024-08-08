# `awsAuthBackendLogin` Submodule <a name="`awsAuthBackendLogin` Submodule" id="@cdktf/provider-vault.awsAuthBackendLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendLogin <a name="AwsAuthBackendLogin" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login vault_aws_auth_backend_login}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_login

awsAuthBackendLogin.AwsAuthBackendLogin(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str = None,
  iam_http_request_method: str = None,
  iam_request_body: str = None,
  iam_request_headers: str = None,
  iam_request_url: str = None,
  id: str = None,
  identity: str = None,
  namespace: str = None,
  nonce: str = None,
  pkcs7: str = None,
  role: str = None,
  signature: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.backend">backend</a></code> | <code>str</code> | AWS Auth Backend to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamHttpRequestMethod">iam_http_request_method</a></code> | <code>str</code> | The HTTP method used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestBody">iam_request_body</a></code> | <code>str</code> | The Base64-encoded body of the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestHeaders">iam_request_headers</a></code> | <code>str</code> | The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestUrl">iam_request_url</a></code> | <code>str</code> | The Base64-encoded HTTP URL used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.identity">identity</a></code> | <code>str</code> | Base64-encoded EC2 instance identity document to authenticate with. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.nonce">nonce</a></code> | <code>str</code> | The nonce to be used for subsequent login requests. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.pkcs7">pkcs7</a></code> | <code>str</code> | PKCS7 signature of the identity document to authenticate with, with all newline characters removed. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.role">role</a></code> | <code>str</code> | AWS Auth Role to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.signature">signature</a></code> | <code>str</code> | Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.backend"></a>

- *Type:* str

AWS Auth Backend to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#backend AwsAuthBackendLogin#backend}

---

##### `iam_http_request_method`<sup>Optional</sup> <a name="iam_http_request_method" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamHttpRequestMethod"></a>

- *Type:* str

The HTTP method used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#iam_http_request_method AwsAuthBackendLogin#iam_http_request_method}

---

##### `iam_request_body`<sup>Optional</sup> <a name="iam_request_body" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestBody"></a>

- *Type:* str

The Base64-encoded body of the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#iam_request_body AwsAuthBackendLogin#iam_request_body}

---

##### `iam_request_headers`<sup>Optional</sup> <a name="iam_request_headers" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestHeaders"></a>

- *Type:* str

The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#iam_request_headers AwsAuthBackendLogin#iam_request_headers}

---

##### `iam_request_url`<sup>Optional</sup> <a name="iam_request_url" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.iamRequestUrl"></a>

- *Type:* str

The Base64-encoded HTTP URL used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#iam_request_url AwsAuthBackendLogin#iam_request_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.identity"></a>

- *Type:* str

Base64-encoded EC2 instance identity document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#identity AwsAuthBackendLogin#identity}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#namespace AwsAuthBackendLogin#namespace}

---

##### `nonce`<sup>Optional</sup> <a name="nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.nonce"></a>

- *Type:* str

The nonce to be used for subsequent login requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#nonce AwsAuthBackendLogin#nonce}

---

##### `pkcs7`<sup>Optional</sup> <a name="pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.pkcs7"></a>

- *Type:* str

PKCS7 signature of the identity document to authenticate with, with all newline characters removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#pkcs7 AwsAuthBackendLogin#pkcs7}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.role"></a>

- *Type:* str

AWS Auth Role to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#role AwsAuthBackendLogin#role}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.Initializer.parameter.signature"></a>

- *Type:* str

Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#signature AwsAuthBackendLogin#signature}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamHttpRequestMethod">reset_iam_http_request_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestBody">reset_iam_request_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestHeaders">reset_iam_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestUrl">reset_iam_request_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNonce">reset_nonce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetPkcs7">reset_pkcs7</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetSignature">reset_signature</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_iam_http_request_method` <a name="reset_iam_http_request_method" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamHttpRequestMethod"></a>

```python
def reset_iam_http_request_method() -> None
```

##### `reset_iam_request_body` <a name="reset_iam_request_body" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestBody"></a>

```python
def reset_iam_request_body() -> None
```

##### `reset_iam_request_headers` <a name="reset_iam_request_headers" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestHeaders"></a>

```python
def reset_iam_request_headers() -> None
```

##### `reset_iam_request_url` <a name="reset_iam_request_url" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIamRequestUrl"></a>

```python
def reset_iam_request_url() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_nonce` <a name="reset_nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetNonce"></a>

```python
def reset_nonce() -> None
```

##### `reset_pkcs7` <a name="reset_pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetPkcs7"></a>

```python
def reset_pkcs7() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_signature` <a name="reset_signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.resetSignature"></a>

```python
def reset_signature() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AwsAuthBackendLogin resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_login

awsAuthBackendLogin.AwsAuthBackendLogin.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_login

awsAuthBackendLogin.AwsAuthBackendLogin.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_login

awsAuthBackendLogin.AwsAuthBackendLogin.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_login

awsAuthBackendLogin.AwsAuthBackendLogin.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AwsAuthBackendLogin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsAuthBackendLogin to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsAuthBackendLogin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendLogin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.accessor">accessor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseStartTime">lease_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.renewable">renewable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethodInput">iam_http_request_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBodyInput">iam_request_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeadersInput">iam_request_headers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrlInput">iam_request_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonceInput">nonce_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7Input">pkcs7_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signatureInput">signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethod">iam_http_request_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBody">iam_request_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeaders">iam_request_headers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrl">iam_request_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonce">nonce</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7">pkcs7</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signature">signature</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.accessor"></a>

```python
accessor: str
```

- *Type:* str

---

##### `auth_type`<sup>Required</sup> <a name="auth_type" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_start_time`<sup>Required</sup> <a name="lease_start_time" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.leaseStartTime"></a>

```python
lease_start_time: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.renewable"></a>

```python
renewable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `iam_http_request_method_input`<sup>Optional</sup> <a name="iam_http_request_method_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethodInput"></a>

```python
iam_http_request_method_input: str
```

- *Type:* str

---

##### `iam_request_body_input`<sup>Optional</sup> <a name="iam_request_body_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBodyInput"></a>

```python
iam_request_body_input: str
```

- *Type:* str

---

##### `iam_request_headers_input`<sup>Optional</sup> <a name="iam_request_headers_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeadersInput"></a>

```python
iam_request_headers_input: str
```

- *Type:* str

---

##### `iam_request_url_input`<sup>Optional</sup> <a name="iam_request_url_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrlInput"></a>

```python
iam_request_url_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `nonce_input`<sup>Optional</sup> <a name="nonce_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonceInput"></a>

```python
nonce_input: str
```

- *Type:* str

---

##### `pkcs7_input`<sup>Optional</sup> <a name="pkcs7_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7Input"></a>

```python
pkcs7_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signatureInput"></a>

```python
signature_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `iam_http_request_method`<sup>Required</sup> <a name="iam_http_request_method" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamHttpRequestMethod"></a>

```python
iam_http_request_method: str
```

- *Type:* str

---

##### `iam_request_body`<sup>Required</sup> <a name="iam_request_body" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestBody"></a>

```python
iam_request_body: str
```

- *Type:* str

---

##### `iam_request_headers`<sup>Required</sup> <a name="iam_request_headers" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestHeaders"></a>

```python
iam_request_headers: str
```

- *Type:* str

---

##### `iam_request_url`<sup>Required</sup> <a name="iam_request_url" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.iamRequestUrl"></a>

```python
iam_request_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `nonce`<sup>Required</sup> <a name="nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.nonce"></a>

```python
nonce: str
```

- *Type:* str

---

##### `pkcs7`<sup>Required</sup> <a name="pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.pkcs7"></a>

```python
pkcs7: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLogin.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendLoginConfig <a name="AwsAuthBackendLoginConfig" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_login

awsAuthBackendLogin.AwsAuthBackendLoginConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str = None,
  iam_http_request_method: str = None,
  iam_request_body: str = None,
  iam_request_headers: str = None,
  iam_request_url: str = None,
  id: str = None,
  identity: str = None,
  namespace: str = None,
  nonce: str = None,
  pkcs7: str = None,
  role: str = None,
  signature: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.backend">backend</a></code> | <code>str</code> | AWS Auth Backend to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamHttpRequestMethod">iam_http_request_method</a></code> | <code>str</code> | The HTTP method used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestBody">iam_request_body</a></code> | <code>str</code> | The Base64-encoded body of the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestHeaders">iam_request_headers</a></code> | <code>str</code> | The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestUrl">iam_request_url</a></code> | <code>str</code> | The Base64-encoded HTTP URL used in the signed request. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.identity">identity</a></code> | <code>str</code> | Base64-encoded EC2 instance identity document to authenticate with. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.nonce">nonce</a></code> | <code>str</code> | The nonce to be used for subsequent login requests. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.pkcs7">pkcs7</a></code> | <code>str</code> | PKCS7 signature of the identity document to authenticate with, with all newline characters removed. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.role">role</a></code> | <code>str</code> | AWS Auth Role to read the token from. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.signature">signature</a></code> | <code>str</code> | Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

AWS Auth Backend to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#backend AwsAuthBackendLogin#backend}

---

##### `iam_http_request_method`<sup>Optional</sup> <a name="iam_http_request_method" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamHttpRequestMethod"></a>

```python
iam_http_request_method: str
```

- *Type:* str

The HTTP method used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#iam_http_request_method AwsAuthBackendLogin#iam_http_request_method}

---

##### `iam_request_body`<sup>Optional</sup> <a name="iam_request_body" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestBody"></a>

```python
iam_request_body: str
```

- *Type:* str

The Base64-encoded body of the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#iam_request_body AwsAuthBackendLogin#iam_request_body}

---

##### `iam_request_headers`<sup>Optional</sup> <a name="iam_request_headers" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestHeaders"></a>

```python
iam_request_headers: str
```

- *Type:* str

The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#iam_request_headers AwsAuthBackendLogin#iam_request_headers}

---

##### `iam_request_url`<sup>Optional</sup> <a name="iam_request_url" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.iamRequestUrl"></a>

```python
iam_request_url: str
```

- *Type:* str

The Base64-encoded HTTP URL used in the signed request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#iam_request_url AwsAuthBackendLogin#iam_request_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.identity"></a>

```python
identity: str
```

- *Type:* str

Base64-encoded EC2 instance identity document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#identity AwsAuthBackendLogin#identity}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#namespace AwsAuthBackendLogin#namespace}

---

##### `nonce`<sup>Optional</sup> <a name="nonce" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.nonce"></a>

```python
nonce: str
```

- *Type:* str

The nonce to be used for subsequent login requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#nonce AwsAuthBackendLogin#nonce}

---

##### `pkcs7`<sup>Optional</sup> <a name="pkcs7" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.pkcs7"></a>

```python
pkcs7: str
```

- *Type:* str

PKCS7 signature of the identity document to authenticate with, with all newline characters removed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#pkcs7 AwsAuthBackendLogin#pkcs7}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.role"></a>

```python
role: str
```

- *Type:* str

AWS Auth Role to read the token from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#role AwsAuthBackendLogin#role}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-vault.awsAuthBackendLogin.AwsAuthBackendLoginConfig.property.signature"></a>

```python
signature: str
```

- *Type:* str

Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_login#signature AwsAuthBackendLogin#signature}

---



