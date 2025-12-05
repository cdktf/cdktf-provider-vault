# `awsAuthBackendCert` Submodule <a name="`awsAuthBackendCert` Submodule" id="@cdktf/provider-vault.awsAuthBackendCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendCert <a name="AwsAuthBackendCert" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert vault_aws_auth_backend_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_cert

awsAuthBackendCert.AwsAuthBackendCert(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_public_cert: str,
  cert_name: str,
  backend: str = None,
  id: str = None,
  namespace: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.awsPublicCert">aws_public_cert</a></code> | <code>str</code> | Base64 encoded AWS Public key required to verify PKCS7 signature of the EC2 instance metadata. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.certName">cert_name</a></code> | <code>str</code> | Name of the certificate to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#id AwsAuthBackendCert#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of document that can be verified using the certificate. Must be either "pkcs7" or "identity". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aws_public_cert`<sup>Required</sup> <a name="aws_public_cert" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.awsPublicCert"></a>

- *Type:* str

Base64 encoded AWS Public key required to verify PKCS7 signature of the EC2 instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#aws_public_cert AwsAuthBackendCert#aws_public_cert}

---

##### `cert_name`<sup>Required</sup> <a name="cert_name" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.certName"></a>

- *Type:* str

Name of the certificate to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#cert_name AwsAuthBackendCert#cert_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#backend AwsAuthBackendCert#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#id AwsAuthBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#namespace AwsAuthBackendCert#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.Initializer.parameter.type"></a>

- *Type:* str

The type of document that can be verified using the certificate. Must be either "pkcs7" or "identity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#type AwsAuthBackendCert#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AwsAuthBackendCert resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_cert

awsAuthBackendCert.AwsAuthBackendCert.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_cert

awsAuthBackendCert.AwsAuthBackendCert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_cert

awsAuthBackendCert.AwsAuthBackendCert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_cert

awsAuthBackendCert.AwsAuthBackendCert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AwsAuthBackendCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsAuthBackendCert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsAuthBackendCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.awsPublicCertInput">aws_public_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.certNameInput">cert_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.awsPublicCert">aws_public_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.certName">cert_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aws_public_cert_input`<sup>Optional</sup> <a name="aws_public_cert_input" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.awsPublicCertInput"></a>

```python
aws_public_cert_input: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `cert_name_input`<sup>Optional</sup> <a name="cert_name_input" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.certNameInput"></a>

```python
cert_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `aws_public_cert`<sup>Required</sup> <a name="aws_public_cert" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.awsPublicCert"></a>

```python
aws_public_cert: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `cert_name`<sup>Required</sup> <a name="cert_name" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.certName"></a>

```python
cert_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendCertConfig <a name="AwsAuthBackendCertConfig" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_cert

awsAuthBackendCert.AwsAuthBackendCertConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  aws_public_cert: str,
  cert_name: str,
  backend: str = None,
  id: str = None,
  namespace: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.awsPublicCert">aws_public_cert</a></code> | <code>str</code> | Base64 encoded AWS Public key required to verify PKCS7 signature of the EC2 instance metadata. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.certName">cert_name</a></code> | <code>str</code> | Name of the certificate to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#id AwsAuthBackendCert#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.type">type</a></code> | <code>str</code> | The type of document that can be verified using the certificate. Must be either "pkcs7" or "identity". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aws_public_cert`<sup>Required</sup> <a name="aws_public_cert" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.awsPublicCert"></a>

```python
aws_public_cert: str
```

- *Type:* str

Base64 encoded AWS Public key required to verify PKCS7 signature of the EC2 instance metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#aws_public_cert AwsAuthBackendCert#aws_public_cert}

---

##### `cert_name`<sup>Required</sup> <a name="cert_name" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.certName"></a>

```python
cert_name: str
```

- *Type:* str

Name of the certificate to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#cert_name AwsAuthBackendCert#cert_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#backend AwsAuthBackendCert#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#id AwsAuthBackendCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#namespace AwsAuthBackendCert#namespace}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.awsAuthBackendCert.AwsAuthBackendCertConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of document that can be verified using the certificate. Must be either "pkcs7" or "identity".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/aws_auth_backend_cert#type AwsAuthBackendCert#type}

---



