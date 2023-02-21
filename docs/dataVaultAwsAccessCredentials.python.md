# `dataVaultAwsAccessCredentials` Submodule <a name="`dataVaultAwsAccessCredentials` Submodule" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultAwsAccessCredentials <a name="DataVaultAwsAccessCredentials" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials vault_aws_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_aws_access_credentials

dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  role: str,
  id: str = None,
  namespace: str = None,
  region: str = None,
  role_arn: str = None,
  ttl: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.backend">backend</a></code> | <code>str</code> | AWS Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.role">role</a></code> | <code>str</code> | AWS Secret Role to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#id DataVaultAwsAccessCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.region">region</a></code> | <code>str</code> | Region the read credentials belong to. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | ARN to use if multiple are available in the role. Required if the role has multiple ARNs. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.backend"></a>

- *Type:* str

AWS Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#backend DataVaultAwsAccessCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.role"></a>

- *Type:* str

AWS Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#role DataVaultAwsAccessCredentials#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#id DataVaultAwsAccessCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#namespace DataVaultAwsAccessCredentials#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.region"></a>

- *Type:* str

Region the read credentials belong to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#region DataVaultAwsAccessCredentials#region}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.roleArn"></a>

- *Type:* str

ARN to use if multiple are available in the role. Required if the role has multiple ARNs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#role_arn DataVaultAwsAccessCredentials#role_arn}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.ttl"></a>

- *Type:* str

User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#ttl DataVaultAwsAccessCredentials#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.Initializer.parameter.type"></a>

- *Type:* str

Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#type DataVaultAwsAccessCredentials#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_aws_access_credentials

dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_aws_access_credentials

dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_aws_access_credentials

dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.leaseDuration">lease_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.leaseId">lease_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.leaseRenewable">lease_renewable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.leaseStartTime">lease_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.securityToken">security_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `lease_duration`<sup>Required</sup> <a name="lease_duration" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.leaseDuration"></a>

```python
lease_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lease_id`<sup>Required</sup> <a name="lease_id" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.leaseId"></a>

```python
lease_id: str
```

- *Type:* str

---

##### `lease_renewable`<sup>Required</sup> <a name="lease_renewable" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.leaseRenewable"></a>

```python
lease_renewable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lease_start_time`<sup>Required</sup> <a name="lease_start_time" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.leaseStartTime"></a>

```python
lease_start_time: str
```

- *Type:* str

---

##### `secret_key`<sup>Required</sup> <a name="secret_key" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `security_token`<sup>Required</sup> <a name="security_token" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.securityToken"></a>

```python
security_token: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultAwsAccessCredentialsConfig <a name="DataVaultAwsAccessCredentialsConfig" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import data_vault_aws_access_credentials

dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  role: str,
  id: str = None,
  namespace: str = None,
  region: str = None,
  role_arn: str = None,
  ttl: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.backend">backend</a></code> | <code>str</code> | AWS Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.role">role</a></code> | <code>str</code> | AWS Secret Role to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#id DataVaultAwsAccessCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.region">region</a></code> | <code>str</code> | Region the read credentials belong to. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.roleArn">role_arn</a></code> | <code>str</code> | ARN to use if multiple are available in the role. Required if the role has multiple ARNs. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.ttl">ttl</a></code> | <code>str</code> | User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified. |
| <code><a href="#@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.type">type</a></code> | <code>str</code> | Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

AWS Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#backend DataVaultAwsAccessCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.role"></a>

```python
role: str
```

- *Type:* str

AWS Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#role DataVaultAwsAccessCredentials#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#id DataVaultAwsAccessCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#namespace DataVaultAwsAccessCredentials#namespace}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region the read credentials belong to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#region DataVaultAwsAccessCredentials#region}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

ARN to use if multiple are available in the role. Required if the role has multiple ARNs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#role_arn DataVaultAwsAccessCredentials#role_arn}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

User specified Time-To-Live for the STS token. Uses the Role defined default_sts_ttl when not specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#ttl DataVaultAwsAccessCredentials#ttl}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.dataVaultAwsAccessCredentials.DataVaultAwsAccessCredentialsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of credentials to read. Must be either 'creds' for Access Key and Secret Key, or 'sts' for STS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/d/aws_access_credentials#type DataVaultAwsAccessCredentials#type}

---



