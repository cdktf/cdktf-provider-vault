# `adSecretLibrary` Submodule <a name="`adSecretLibrary` Submodule" id="@cdktf/provider-vault.adSecretLibrary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdSecretLibrary <a name="AdSecretLibrary" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library vault_ad_secret_library}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_library

adSecretLibrary.AdSecretLibrary(
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
  name: str,
  service_account_names: typing.List[str],
  disable_check_in_enforcement: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The mount path for the AD backend. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the set of service accounts. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.serviceAccountNames">service_account_names</a></code> | <code>typing.List[str]</code> | The names of all the service accounts that can be checked out from this set. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.disableCheckInEnforcement">disable_check_in_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable enforcing that service accounts must be checked in by the entity or client token that checked them out. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#id AdSecretLibrary#id}. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time, in seconds, a check-out last with renewal before Vault automatically checks it back in. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in seconds, a single check-out lasts before Vault automatically checks it back in. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.backend"></a>

- *Type:* str

The mount path for the AD backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#backend AdSecretLibrary#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.name"></a>

- *Type:* str

The name of the set of service accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#name AdSecretLibrary#name}

---

##### `service_account_names`<sup>Required</sup> <a name="service_account_names" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.serviceAccountNames"></a>

- *Type:* typing.List[str]

The names of all the service accounts that can be checked out from this set.

These service accounts must already exist in Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#service_account_names AdSecretLibrary#service_account_names}

---

##### `disable_check_in_enforcement`<sup>Optional</sup> <a name="disable_check_in_enforcement" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.disableCheckInEnforcement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable enforcing that service accounts must be checked in by the entity or client token that checked them out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#disable_check_in_enforcement AdSecretLibrary#disable_check_in_enforcement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#id AdSecretLibrary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

The maximum amount of time, in seconds, a check-out last with renewal before Vault automatically checks it back in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#max_ttl AdSecretLibrary#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#namespace AdSecretLibrary#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

The amount of time, in seconds, a single check-out lasts before Vault automatically checks it back in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#ttl AdSecretLibrary#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetDisableCheckInEnforcement">reset_disable_check_in_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_disable_check_in_enforcement` <a name="reset_disable_check_in_enforcement" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetDisableCheckInEnforcement"></a>

```python
def reset_disable_check_in_enforcement() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AdSecretLibrary resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_library

adSecretLibrary.AdSecretLibrary.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_library

adSecretLibrary.AdSecretLibrary.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_library

adSecretLibrary.AdSecretLibrary.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_library

adSecretLibrary.AdSecretLibrary.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AdSecretLibrary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AdSecretLibrary to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AdSecretLibrary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdSecretLibrary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.disableCheckInEnforcementInput">disable_check_in_enforcement_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.serviceAccountNamesInput">service_account_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.disableCheckInEnforcement">disable_check_in_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.serviceAccountNames">service_account_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `disable_check_in_enforcement_input`<sup>Optional</sup> <a name="disable_check_in_enforcement_input" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.disableCheckInEnforcementInput"></a>

```python
disable_check_in_enforcement_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `service_account_names_input`<sup>Optional</sup> <a name="service_account_names_input" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.serviceAccountNamesInput"></a>

```python
service_account_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `disable_check_in_enforcement`<sup>Required</sup> <a name="disable_check_in_enforcement" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.disableCheckInEnforcement"></a>

```python
disable_check_in_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `service_account_names`<sup>Required</sup> <a name="service_account_names" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.serviceAccountNames"></a>

```python
service_account_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibrary.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AdSecretLibraryConfig <a name="AdSecretLibraryConfig" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import ad_secret_library

adSecretLibrary.AdSecretLibraryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  name: str,
  service_account_names: typing.List[str],
  disable_check_in_enforcement: typing.Union[bool, IResolvable] = None,
  id: str = None,
  max_ttl: typing.Union[int, float] = None,
  namespace: str = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.backend">backend</a></code> | <code>str</code> | The mount path for the AD backend. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.name">name</a></code> | <code>str</code> | The name of the set of service accounts. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.serviceAccountNames">service_account_names</a></code> | <code>typing.List[str]</code> | The names of all the service accounts that can be checked out from this set. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.disableCheckInEnforcement">disable_check_in_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable enforcing that service accounts must be checked in by the entity or client token that checked them out. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#id AdSecretLibrary#id}. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | The maximum amount of time, in seconds, a check-out last with renewal before Vault automatically checks it back in. |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The amount of time, in seconds, a single check-out lasts before Vault automatically checks it back in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The mount path for the AD backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#backend AdSecretLibrary#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the set of service accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#name AdSecretLibrary#name}

---

##### `service_account_names`<sup>Required</sup> <a name="service_account_names" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.serviceAccountNames"></a>

```python
service_account_names: typing.List[str]
```

- *Type:* typing.List[str]

The names of all the service accounts that can be checked out from this set.

These service accounts must already exist in Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#service_account_names AdSecretLibrary#service_account_names}

---

##### `disable_check_in_enforcement`<sup>Optional</sup> <a name="disable_check_in_enforcement" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.disableCheckInEnforcement"></a>

```python
disable_check_in_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable enforcing that service accounts must be checked in by the entity or client token that checked them out.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#disable_check_in_enforcement AdSecretLibrary#disable_check_in_enforcement}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#id AdSecretLibrary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum amount of time, in seconds, a check-out last with renewal before Vault automatically checks it back in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#max_ttl AdSecretLibrary#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#namespace AdSecretLibrary#namespace}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretLibrary.AdSecretLibraryConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time, in seconds, a single check-out lasts before Vault automatically checks it back in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/ad_secret_library#ttl AdSecretLibrary#ttl}

---



