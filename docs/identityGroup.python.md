# `vault_identity_group`

Refer to the Terraform Registory for docs: [`vault_identity_group`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group).

# `identityGroup` Submodule <a name="`identityGroup` Submodule" id="@cdktf/provider-vault.identityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroup <a name="IdentityGroup" id="@cdktf/provider-vault.identityGroup.IdentityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group vault_identity_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_group

identityGroup.IdentityGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_member_entity_ids: typing.Union[bool, IResolvable] = None,
  external_member_group_ids: typing.Union[bool, IResolvable] = None,
  external_policies: typing.Union[bool, IResolvable] = None,
  id: str = None,
  member_entity_ids: typing.List[str] = None,
  member_group_ids: typing.List[str] = None,
  metadata: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None,
  policies: typing.List[str] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalMemberEntityIds">external_member_entity_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Manage member entities externally through `vault_identity_group_member_entity_ids`. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalMemberGroupIds">external_member_group_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Manage member groups externally through `vault_identity_group_member_group_ids`. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalPolicies">external_policies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#id IdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.memberEntityIds">member_entity_ids</a></code> | <code>typing.List[str]</code> | Entity IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.memberGroupIds">member_group_ids</a></code> | <code>typing.List[str]</code> | Group IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata to be associated with the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | Policies to be tied to the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.type">type</a></code> | <code>str</code> | Type of the group, internal or external. Defaults to internal. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_member_entity_ids`<sup>Optional</sup> <a name="external_member_entity_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalMemberEntityIds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Manage member entities externally through `vault_identity_group_member_entity_ids`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#external_member_entity_ids IdentityGroup#external_member_entity_ids}

---

##### `external_member_group_ids`<sup>Optional</sup> <a name="external_member_group_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalMemberGroupIds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Manage member groups externally through `vault_identity_group_member_group_ids`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#external_member_group_ids IdentityGroup#external_member_group_ids}

---

##### `external_policies`<sup>Optional</sup> <a name="external_policies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.externalPolicies"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#external_policies IdentityGroup#external_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#id IdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `member_entity_ids`<sup>Optional</sup> <a name="member_entity_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.memberEntityIds"></a>

- *Type:* typing.List[str]

Entity IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#member_entity_ids IdentityGroup#member_entity_ids}

---

##### `member_group_ids`<sup>Optional</sup> <a name="member_group_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.memberGroupIds"></a>

- *Type:* typing.List[str]

Group IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#member_group_ids IdentityGroup#member_group_ids}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Metadata to be associated with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#metadata IdentityGroup#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.name"></a>

- *Type:* str

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#name IdentityGroup#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#namespace IdentityGroup#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

Policies to be tied to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#policies IdentityGroup#policies}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.identityGroup.IdentityGroup.Initializer.parameter.type"></a>

- *Type:* str

Type of the group, internal or external. Defaults to internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#type IdentityGroup#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberEntityIds">reset_external_member_entity_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberGroupIds">reset_external_member_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalPolicies">reset_external_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberEntityIds">reset_member_entity_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberGroupIds">reset_member_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.identityGroup.IdentityGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityGroup.IdentityGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.identityGroup.IdentityGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityGroup.IdentityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_external_member_entity_ids` <a name="reset_external_member_entity_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberEntityIds"></a>

```python
def reset_external_member_entity_ids() -> None
```

##### `reset_external_member_group_ids` <a name="reset_external_member_group_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalMemberGroupIds"></a>

```python
def reset_external_member_group_ids() -> None
```

##### `reset_external_policies` <a name="reset_external_policies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetExternalPolicies"></a>

```python
def reset_external_policies() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_member_entity_ids` <a name="reset_member_entity_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberEntityIds"></a>

```python
def reset_member_entity_ids() -> None
```

##### `reset_member_group_ids` <a name="reset_member_group_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetMemberGroupIds"></a>

```python
def reset_member_group_ids() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-vault.identityGroup.IdentityGroup.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import identity_group

identityGroup.IdentityGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import identity_group

identityGroup.IdentityGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import identity_group

identityGroup.IdentityGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroup.IdentityGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIdsInput">external_member_entity_ids_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIdsInput">external_member_group_ids_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPoliciesInput">external_policies_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIdsInput">member_entity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIdsInput">member_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIds">external_member_entity_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIds">external_member_group_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPolicies">external_policies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIds">member_entity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIds">member_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_member_entity_ids_input`<sup>Optional</sup> <a name="external_member_entity_ids_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIdsInput"></a>

```python
external_member_entity_ids_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_member_group_ids_input`<sup>Optional</sup> <a name="external_member_group_ids_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIdsInput"></a>

```python
external_member_group_ids_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_policies_input`<sup>Optional</sup> <a name="external_policies_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPoliciesInput"></a>

```python
external_policies_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `member_entity_ids_input`<sup>Optional</sup> <a name="member_entity_ids_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIdsInput"></a>

```python
member_entity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `member_group_ids_input`<sup>Optional</sup> <a name="member_group_ids_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIdsInput"></a>

```python
member_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `external_member_entity_ids`<sup>Required</sup> <a name="external_member_entity_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberEntityIds"></a>

```python
external_member_entity_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_member_group_ids`<sup>Required</sup> <a name="external_member_group_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalMemberGroupIds"></a>

```python
external_member_group_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_policies`<sup>Required</sup> <a name="external_policies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.externalPolicies"></a>

```python
external_policies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `member_entity_ids`<sup>Required</sup> <a name="member_entity_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberEntityIds"></a>

```python
member_entity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `member_group_ids`<sup>Required</sup> <a name="member_group_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.memberGroupIds"></a>

```python
member_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityGroup.IdentityGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupConfig <a name="IdentityGroupConfig" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_group

identityGroup.IdentityGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_member_entity_ids: typing.Union[bool, IResolvable] = None,
  external_member_group_ids: typing.Union[bool, IResolvable] = None,
  external_policies: typing.Union[bool, IResolvable] = None,
  id: str = None,
  member_entity_ids: typing.List[str] = None,
  member_group_ids: typing.List[str] = None,
  metadata: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None,
  policies: typing.List[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberEntityIds">external_member_entity_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Manage member entities externally through `vault_identity_group_member_entity_ids`. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberGroupIds">external_member_group_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Manage member groups externally through `vault_identity_group_member_group_ids`. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalPolicies">external_policies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#id IdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberEntityIds">member_entity_ids</a></code> | <code>typing.List[str]</code> | Entity IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberGroupIds">member_group_ids</a></code> | <code>typing.List[str]</code> | Group IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Metadata to be associated with the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.name">name</a></code> | <code>str</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | Policies to be tied to the group. |
| <code><a href="#@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.type">type</a></code> | <code>str</code> | Type of the group, internal or external. Defaults to internal. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_member_entity_ids`<sup>Optional</sup> <a name="external_member_entity_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberEntityIds"></a>

```python
external_member_entity_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Manage member entities externally through `vault_identity_group_member_entity_ids`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#external_member_entity_ids IdentityGroup#external_member_entity_ids}

---

##### `external_member_group_ids`<sup>Optional</sup> <a name="external_member_group_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalMemberGroupIds"></a>

```python
external_member_group_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Manage member groups externally through `vault_identity_group_member_group_ids`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#external_member_group_ids IdentityGroup#external_member_group_ids}

---

##### `external_policies`<sup>Optional</sup> <a name="external_policies" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.externalPolicies"></a>

```python
external_policies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Manage policies externally through `vault_identity_group_policies`, allows using group ID in assigned policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#external_policies IdentityGroup#external_policies}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#id IdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `member_entity_ids`<sup>Optional</sup> <a name="member_entity_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberEntityIds"></a>

```python
member_entity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Entity IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#member_entity_ids IdentityGroup#member_entity_ids}

---

##### `member_group_ids`<sup>Optional</sup> <a name="member_group_ids" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.memberGroupIds"></a>

```python
member_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Group IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#member_group_ids IdentityGroup#member_group_ids}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Metadata to be associated with the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#metadata IdentityGroup#metadata}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#name IdentityGroup#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#namespace IdentityGroup#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

Policies to be tied to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#policies IdentityGroup#policies}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-vault.identityGroup.IdentityGroupConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the group, internal or external. Defaults to internal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/identity_group#type IdentityGroup#type}

---



