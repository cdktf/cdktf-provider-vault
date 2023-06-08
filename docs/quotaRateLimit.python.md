# `vault_quota_rate_limit`

Refer to the Terraform Registory for docs: [`vault_quota_rate_limit`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit).

# `quotaRateLimit` Submodule <a name="`quotaRateLimit` Submodule" id="@cdktf/provider-vault.quotaRateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuotaRateLimit <a name="QuotaRateLimit" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit vault_quota_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import quota_rate_limit

quotaRateLimit.QuotaRateLimit(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rate: typing.Union[int, float],
  block_interval: typing.Union[int, float] = None,
  id: str = None,
  interval: typing.Union[int, float] = None,
  namespace: str = None,
  path: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the quota. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.rate">rate</a></code> | <code>typing.Union[int, float]</code> | The maximum number of requests at any given second to be allowed by the quota rule. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.blockInterval">block_interval</a></code> | <code>typing.Union[int, float]</code> | If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' in seconds has elapsed. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#id QuotaRateLimit#id}. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.interval">interval</a></code> | <code>typing.Union[int, float]</code> | The duration in seconds to enforce rate limiting for. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.path">path</a></code> | <code>str</code> | Path of the mount or namespace to apply the quota. A blank path configures a global rate limit quota. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.name"></a>

- *Type:* str

The name of the quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#name QuotaRateLimit#name}

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.rate"></a>

- *Type:* typing.Union[int, float]

The maximum number of requests at any given second to be allowed by the quota rule.

The rate must be positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#rate QuotaRateLimit#rate}

---

##### `block_interval`<sup>Optional</sup> <a name="block_interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.blockInterval"></a>

- *Type:* typing.Union[int, float]

If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' in seconds has elapsed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#block_interval QuotaRateLimit#block_interval}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#id QuotaRateLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.interval"></a>

- *Type:* typing.Union[int, float]

The duration in seconds to enforce rate limiting for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#interval QuotaRateLimit#interval}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#namespace QuotaRateLimit#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.Initializer.parameter.path"></a>

- *Type:* str

Path of the mount or namespace to apply the quota. A blank path configures a global rate limit quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#path QuotaRateLimit#path}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetBlockInterval">reset_block_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetPath">reset_path</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_block_interval` <a name="reset_block_interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetBlockInterval"></a>

```python
def reset_block_interval() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.resetPath"></a>

```python
def reset_path() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import quota_rate_limit

quotaRateLimit.QuotaRateLimit.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import quota_rate_limit

quotaRateLimit.QuotaRateLimit.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import quota_rate_limit

quotaRateLimit.QuotaRateLimit.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockIntervalInput">block_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rateInput">rate_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockInterval">block_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `block_interval_input`<sup>Optional</sup> <a name="block_interval_input" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockIntervalInput"></a>

```python
block_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `rate_input`<sup>Optional</sup> <a name="rate_input" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rateInput"></a>

```python
rate_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `block_interval`<sup>Required</sup> <a name="block_interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.blockInterval"></a>

```python
block_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimit.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuotaRateLimitConfig <a name="QuotaRateLimitConfig" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import quota_rate_limit

quotaRateLimit.QuotaRateLimitConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  rate: typing.Union[int, float],
  block_interval: typing.Union[int, float] = None,
  id: str = None,
  interval: typing.Union[int, float] = None,
  namespace: str = None,
  path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.name">name</a></code> | <code>str</code> | The name of the quota. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.rate">rate</a></code> | <code>typing.Union[int, float]</code> | The maximum number of requests at any given second to be allowed by the quota rule. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.blockInterval">block_interval</a></code> | <code>typing.Union[int, float]</code> | If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' in seconds has elapsed. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#id QuotaRateLimit#id}. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | The duration in seconds to enforce rate limiting for. |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.path">path</a></code> | <code>str</code> | Path of the mount or namespace to apply the quota. A blank path configures a global rate limit quota. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#name QuotaRateLimit#name}

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.rate"></a>

```python
rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of requests at any given second to be allowed by the quota rule.

The rate must be positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#rate QuotaRateLimit#rate}

---

##### `block_interval`<sup>Optional</sup> <a name="block_interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.blockInterval"></a>

```python
block_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, when a client reaches a rate limit threshold, the client will be prohibited from any further requests until after the 'block_interval' in seconds has elapsed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#block_interval QuotaRateLimit#block_interval}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#id QuotaRateLimit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The duration in seconds to enforce rate limiting for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#interval QuotaRateLimit#interval}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#namespace QuotaRateLimit#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.quotaRateLimit.QuotaRateLimitConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path of the mount or namespace to apply the quota. A blank path configures a global rate limit quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/quota_rate_limit#path QuotaRateLimit#path}

---



