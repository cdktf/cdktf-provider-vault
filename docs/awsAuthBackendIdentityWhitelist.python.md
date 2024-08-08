# `awsAuthBackendIdentityWhitelist` Submodule <a name="`awsAuthBackendIdentityWhitelist` Submodule" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendIdentityWhitelist <a name="AwsAuthBackendIdentityWhitelist" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist vault_aws_auth_backend_identity_whitelist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_identity_whitelist

awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist(
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
  disable_periodic_tidy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  safety_buffer: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.disablePeriodicTidy">disable_periodic_tidy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, disables the periodic tidying of the identiy whitelist entries. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.safetyBuffer">safety_buffer</a></code> | <code>typing.Union[int, float]</code> | The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.backend"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#backend AwsAuthBackendIdentityWhitelist#backend}

---

##### `disable_periodic_tidy`<sup>Optional</sup> <a name="disable_periodic_tidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.disablePeriodicTidy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, disables the periodic tidying of the identiy whitelist entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#disable_periodic_tidy AwsAuthBackendIdentityWhitelist#disable_periodic_tidy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#namespace AwsAuthBackendIdentityWhitelist#namespace}

---

##### `safety_buffer`<sup>Optional</sup> <a name="safety_buffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.safetyBuffer"></a>

- *Type:* typing.Union[int, float]

The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#safety_buffer AwsAuthBackendIdentityWhitelist#safety_buffer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetBackend">reset_backend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetDisablePeriodicTidy">reset_disable_periodic_tidy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetSafetyBuffer">reset_safety_buffer</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_backend` <a name="reset_backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetBackend"></a>

```python
def reset_backend() -> None
```

##### `reset_disable_periodic_tidy` <a name="reset_disable_periodic_tidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetDisablePeriodicTidy"></a>

```python
def reset_disable_periodic_tidy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_safety_buffer` <a name="reset_safety_buffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetSafetyBuffer"></a>

```python
def reset_safety_buffer() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AwsAuthBackendIdentityWhitelist resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_identity_whitelist

awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_identity_whitelist

awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_identity_whitelist

awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_identity_whitelist

awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AwsAuthBackendIdentityWhitelist resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AwsAuthBackendIdentityWhitelist to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AwsAuthBackendIdentityWhitelist that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsAuthBackendIdentityWhitelist to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidyInput">disable_periodic_tidy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBufferInput">safety_buffer_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidy">disable_periodic_tidy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBuffer">safety_buffer</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `disable_periodic_tidy_input`<sup>Optional</sup> <a name="disable_periodic_tidy_input" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidyInput"></a>

```python
disable_periodic_tidy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `safety_buffer_input`<sup>Optional</sup> <a name="safety_buffer_input" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBufferInput"></a>

```python
safety_buffer_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `disable_periodic_tidy`<sup>Required</sup> <a name="disable_periodic_tidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidy"></a>

```python
disable_periodic_tidy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `safety_buffer`<sup>Required</sup> <a name="safety_buffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBuffer"></a>

```python
safety_buffer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendIdentityWhitelistConfig <a name="AwsAuthBackendIdentityWhitelistConfig" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import aws_auth_backend_identity_whitelist

awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str = None,
  disable_periodic_tidy: typing.Union[bool, IResolvable] = None,
  id: str = None,
  namespace: str = None,
  safety_buffer: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.backend">backend</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.disablePeriodicTidy">disable_periodic_tidy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, disables the periodic tidying of the identiy whitelist entries. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.safetyBuffer">safety_buffer</a></code> | <code>typing.Union[int, float]</code> | The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#backend AwsAuthBackendIdentityWhitelist#backend}

---

##### `disable_periodic_tidy`<sup>Optional</sup> <a name="disable_periodic_tidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.disablePeriodicTidy"></a>

```python
disable_periodic_tidy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, disables the periodic tidying of the identiy whitelist entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#disable_periodic_tidy AwsAuthBackendIdentityWhitelist#disable_periodic_tidy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#namespace AwsAuthBackendIdentityWhitelist#namespace}

---

##### `safety_buffer`<sup>Optional</sup> <a name="safety_buffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.safetyBuffer"></a>

```python
safety_buffer: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.4.0/docs/resources/aws_auth_backend_identity_whitelist#safety_buffer AwsAuthBackendIdentityWhitelist#safety_buffer}

---



